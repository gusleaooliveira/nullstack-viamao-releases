import {readFile,writeFile,mkdir,cp,stat} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=path.dirname(fileURLToPath(import.meta.url));
const release=JSON.parse(await readFile(path.join(root,'release.json'),'utf8'));
if(!/^\d+\.\d+\.\d+$/.test(release.version)||!/^v[\w.-]+$/.test(release.tag)||!/^[a-f0-9]{64}$/.test(release.webArchiveSha256))throw Error('Invalid release manifest');
const base=`https://github.com/gusleaooliveira/nullstack-viamao-releases/releases/download/${release.tag}`;
const cache=path.join(root,'.downloads');await mkdir(cache,{recursive:true});
const archive=path.join(cache,`${release.tag}.zip`);
async function verifiedArchive(){try{const bytes=await readFile(archive);return bytes.length===release.webArchiveBytes&&createHash('sha256').update(bytes).digest('hex')===release.webArchiveSha256;}catch{return false;}}
if(!await verifiedArchive()){
 console.log('Downloading published WebGL release',release.version);
 const response=await fetch(`${base}/NullStack-Viamao-Historia-Web.zip`,{signal:AbortSignal.timeout(180000)});if(!response.ok)throw Error(`Release download ${response.status}`);
 await writeFile(archive,Buffer.from(await response.arrayBuffer()));
}
if(!await verifiedArchive())throw Error('Release checksum mismatch');
// Extract only the packaged public runtime. Never upload the Unity source or local credentials.
const output=path.join(root,'dist');await mkdir(output,{recursive:true});
const extract=`import zipfile,pathlib,sys,shutil
src,dest=sys.argv[1:]; dest=pathlib.Path(dest).resolve(); prefix='NullStack-Viamao-Historia-Web/'
with zipfile.ZipFile(src) as z:
 for item in z.infolist():
  if item.is_dir() or not item.filename.startswith(prefix): continue
  target=(dest/'jogar'/item.filename[len(prefix):]).resolve()
  if not target.is_relative_to(dest/'jogar'): raise ValueError('Invalid archive path')
  target.parent.mkdir(parents=True,exist_ok=True)
  with z.open(item) as source,target.open('wb') as output: shutil.copyfileobj(source,output)
`;
execFileSync(process.platform==='win32'?'python':'python3',['-c',extract,archive,output],{stdio:'inherit'});
const gameVersion=JSON.parse(await readFile(path.join(output,'jogar/version.json'),'utf8'));
if(gameVersion.version!==release.version)throw Error('Runtime version mismatch');
let html=await readFile(path.join(root,'index.html'),'utf8');
html=html.replaceAll('__VERSION__',release.version).replaceAll('__WINDOWS__',`${base}/NullStack-Viamao-Historia.zip`).replaceAll('__RELEASE__',`https://github.com/gusleaooliveira/nullstack-viamao-releases/releases/tag/${release.tag}`);
await writeFile(path.join(output,'index.html'),html);
for(const name of ['version.json','updates.json'])await cp(path.join(output,'jogar',name),path.join(output,name));
await writeFile(path.join(output,'deployment.json'),JSON.stringify({...release,hosting:'vercel',backend:'https://nullstack-viamao-salas-production.up.railway.app'},null,2));
console.log(`Verified and prepared ${release.version} (${(await stat(archive)).size} bytes) at /jogar/`);
