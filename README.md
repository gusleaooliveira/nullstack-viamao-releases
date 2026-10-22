# NullStack Viamão 1.5.2 — versão web com salas v7

[Jogar no navegador](https://gusleaooliveira.github.io/nullstack-viamao-releases/). Site publicado e carregamento conferido.

[Baixar o Windows compatível com esta web](https://github.com/gusleaooliveira/nullstack-viamao-releases/releases/tag/v1.5.2-crossplay-v7). Extraia a pasta inteira e abra `NullStack-Viamao.exe`. A cópia local completa fica em `jogavel/NullStack-Viamao-crossplay-v7`.

Pacote separado para navegador de computador. Inclui os 13 visuais, Talia, celular, gestos, mapa, ciclo de dia/noite e carro de Silvio. A versão web permite **multiplayer com Windows por código de sala**. Em F2, crie uma sala online ou digite o código compartilhado pelo anfitrião. Todos precisam usar a mesma versão.

Esta compilação acompanha o Windows completo de `NullStack-Viamao-crossplay-v7`: protocolo `nullstack-room-v7`, carro em terrenos livres fora das ruas, balas visíveis e dano sincronizado. Pacotes Windows antigos que ainda usam o protocolo v6 não entram nessas salas. Para a cópia Windows local atualizada, abra `NullStack-Viamao.exe`.

O cliente usa o serviço independente de salas e a configuração descrita em `SERVICO_DE_SALAS.md`. Os arquivos publicados recebem uma identificação por conteúdo para evitar reutilizar uma compilação anterior do navegador.

## Abrir no Windows ou Linux

1. Extraia `NullStack-Viamao-Web.zip` inteiro.
2. Tenha Python 3 instalado.
3. Na pasta extraída, execute `python servir.py` (Windows) ou `python3 servir.py` (Linux).
4. Abra `http://127.0.0.1:8080/` no navegador. Mantenha o terminal aberto enquanto joga.

Não abra `index.html` diretamente por `file://`: o navegador precisa carregar os arquivos do jogo por HTTP. Se a porta 8080 estiver ocupada, use `python3 servir.py --port 8081` e abra a porta correspondente.

Clique dentro do jogo antes de usar o teclado. **P** abre o celular; **Emojis** permite escolher **Fazer o L** e **6 / 7**. **F2** abre a seleção, incluindo Talia. **G/E** chamam e acessam o carro de Silvio; **WASD/setas** dirigem e **Espaço** freia.

## Hospedagem e limites

O conteúdo também pode ser servido por uma hospedagem estática. Preserve as pastas `Build` e `TemplateData`, sirva `.wasm` como `application/wasm` e publique todos os arquivos da mesma versão. Esta compilação não exige cabeçalhos especiais de compressão.

As salas online usam o serviço HTTPS público de NullStack. O anfitrião mantém o jogo aberto. A conexão direta por IP continua exclusiva do Windows. Veja EXPANSAO_1_5.md para as novas atividades e controles.

A versão web não utiliza o atualizador `.exe`; para atualizá-la, substitua o pacote completo ou publique novamente os arquivos no servidor. O primeiro carregamento baixa os dados do jogo e pode demorar. Use teclado e mouse; controles móveis não foram implementados.

## Recompilar

Depois de atualizar o catálogo e os assets, execute `./atualizador/Compilar-Web.ps1`. O pacote é salvo em `distribuicao/<VERSION>/NullStack-Viamao-Web.zip`. O site público serve os arquivos compilados da branch `web` do repositório de releases; publicar outra versão web exige atualizar essa branch. A branch `main` foi preservada.
