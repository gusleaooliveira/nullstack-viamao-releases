# Cidade viva — versão 1.11.0

O relógio é o **do jogo**. Ao cruzar 12:00, o anfitrião leva cada Igor vivo ao sofá da Cria para uma soneca obrigatória de 12 segundos. Acontece uma vez por dia do jogo; sair de veículo/ônibus é automático. A campanha suspende seus objetivos durante a soneca. Igor acorda ao lado do sofá, dentro da Cria. Não se trata de uma tarefa agendada no Windows.

Dentro da Cria, aproxime Igor do PC da primeira estação à esquerda e pressione **E**. O computador exibe: **“Atenção você é alérgico ao trabalho.”** Há uma dica de interação perto do PC. Lula está disponível na seleção F2, usando o modelo fornecido; U ativa sua cura em área de jogadores vivos.

## Notícias e outdoors pela API

Endpoint: `https://nullstack-viamao-salas.classyray67.chatgpt.site/api/content`

- GET: leitura pública, sem chave. Retorna `schema`, `news`, `billboards`, `polledAt`.
- POST: cadastrar ou atualizar; exige `Authorization: Bearer SUA_CHAVE`. JSON com `kind` (`news` / `billboard`), `title`, `body` e `id` opcional. Use o mesmo ID para editar.
- DELETE `?id=ID`: remover; exige a chave.
- OPTIONS: CORS para o jogo no navegador. A chave fica apenas na administração, nunca no jogo.

Até 100 notícias e 18 anúncios. Título até 100 caracteres; notícia até 4000; anúncio até 160. Texto simples. Os dados persistem no D1, mesmo após reiniciar a sala ou publicar outra versão. O servidor atribui `updatedAt` a cada edição.

**P → Notícias** abre o aplicativo. Novas matérias geram contador no HUD; abrir uma matéria a marca como lida. Uma edição também gera novo aviso. O estado de leitura é local ao aparelho/perfil, preservado entre sessões. O jogo consulta a API a cada 20 segundos e mantém o último conteúdo em caso de falha. Na sala, o anfitrião aplica e replica os anúncios para manter todos vendo o mesmo conteúdo. Se a API não tiver anúncios, entram os padrões locais. Editar outdoors no celular continua sendo uma substituição temporária da sala; publicar pela API é a forma persistente.

A chave deste computador foi salva com proteção do Windows (DPAPI) em `%LOCALAPPDATA%/NullStackViamao/api-admin.xml`. Esse arquivo não entra em Git ou backup. O helper abaixo a lê sem imprimi-la:

```powershell
./ferramentas-historia/Publicar-Conteudo.ps1 -Tipo news -Titulo 'Novidades da cidade' -Texto 'Escreva a notícia aqui.' -Id noticia-001
./ferramentas-historia/Publicar-Conteudo.ps1 -Tipo billboard -Titulo 'Campanha' -Texto 'Seu anúncio aqui' -Id outdoor-001
./ferramentas-historia/Publicar-Conteudo.ps1 -Listar
./ferramentas-historia/Publicar-Conteudo.ps1 -Excluir -Id outdoor-001
```

Em outro computador, forneça `-Chave (Read-Host 'Chave da API' -AsSecureString)` ao helper. O segredo hospedado chama-se `CONTENT_ADMIN_KEY` no projeto Sites existente. Não coloque a chave em URLs ou arquivos públicos.

## Gelatinas

12 criaturas arredondadas com olhos e malha deformável. Detectam somente o Igor vivo e ao ar livre, até **22 metros**, com visão desobstruída ao iniciar a perseguição. Continuam perseguindo até 38 m para evitar alternância brusca. Correm a 5,8 m/s; ao perder o Igor voltam a circular perto do ponto de origem. Usam colisão do cenário e desvios por caminho local quando necessário. Não removem vida ao encostar.

A malha recebe forças por inércia, passada e choque; cada massa retorna à posição de repouso por mola e amortecimento, com integração semi-implícita a passos de até 25 ms, velocidade e deslocamento limitados. A colisão de circulação é uma cápsula; a deformação é simulada na malha, sem um solver volumétrico completo. O anfitrião simula a perseguição e transmite posições; cada cliente simula a deformação visual.

Referências de pesquisa aplicadas, com implementação própria: [Mesh Deformation — Catlike Coding](https://catlikecoding.com/unity/tutorials/mesh-deformation/) e [Real-Time Deformable Soft-Body Simulation — Kenwright, Davison e Morgan](https://research.ncl.ac.uk/game/research/publications/Real-Time%20Deformable%20Soft-Body%20Simulation.pdf). O teste aplica impulso, verifica deformação limitada e retorno ao repouso por amortecimento.

## Música por fase

Foram criados **17 temas instrumentais no Suno v6**, na conta conectada pelo proprietário, e usados seus 17 desbloqueios disponíveis. Não foi contratado plano adicional. Os MP3s oficiais de exportação ficam no complemento privado de autoria; as versões alternativas continuam na biblioteca Suno.

A campanha tem **33 fases**: 21 principais e 12 chamados opcionais. Cada uma recebeu um trecho próprio de cerca de 30 segundos, montado a partir das duas seções dos temas quando aplicável. `documentacao/trilhas-suno-1.11.0.json` registra cada tema, URL de origem, recorte, fase e SHA-256. São 17 gerações selecionadas e 33 recortes, não 33 composições independentes.

A troca de fase muda a trilha, com transição de volume; diálogos reduzem a música. Pausar a história pausa a reprodução. Ao sair da campanha, a trilha para. Os áudios são locais e funcionam sem conexão após carregar o jogo. Para refazer os recortes, restaure os MP3s de autoria e execute `python ferramentas-historia/preparar_trilhas_111.py` (Python, mutagen e imageio-ffmpeg).
