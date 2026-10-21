# NullStack Viamão 1.4.0 — versão web

[Jogar no navegador](https://gusleaooliveira.github.io/nullstack-viamao-releases/). Site publicado e carregamento conferido.

Pacote separado para navegador de computador. Inclui os 13 visuais, Talia, celular, gestos, mapa, ciclo de dia/noite e carro de Silvio. A versão web é **solo**; use o pacote Windows para criar/entrar em salas por IP.

## Abrir no Windows ou Linux

1. Extraia `NullStack-Viamao-Web.zip` inteiro.
2. Tenha Python 3 instalado.
3. Na pasta extraída, execute `python servir.py` (Windows) ou `python3 servir.py` (Linux).
4. Abra `http://127.0.0.1:8080/` no navegador. Mantenha o terminal aberto enquanto joga.

Não abra `index.html` diretamente por `file://`: o navegador precisa carregar os arquivos do jogo por HTTP. Se a porta 8080 estiver ocupada, use `python3 servir.py --port 8081` e abra a porta correspondente.

Clique dentro do jogo antes de usar o teclado. **P** abre o celular; **Emojis** permite escolher **Fazer o L** e **6 / 7**. **F2** abre a seleção, incluindo Talia. **G/E** chamam e acessam o carro de Silvio; **WASD/setas** dirigem e **Espaço** freia.

## Hospedagem e limites

O conteúdo também pode ser servido por uma hospedagem estática. Preserve as pastas `Build` e `TemplateData`, sirva `.wasm` como `application/wasm` e publique todos os arquivos da mesma versão. Esta compilação não exige cabeçalhos especiais de compressão.

O multiplayer atual usa TCP diretamente, indisponível nos navegadores. A versão web deixa a criação/entrada por IP indisponível. [Documentação de rede da Unity](https://docs.unity3d.com/Manual/webgl-networking.html).

A versão web não utiliza o atualizador `.exe`; para atualizá-la, substitua o pacote completo ou publique novamente os arquivos no servidor. O primeiro carregamento baixa os dados do jogo e pode demorar. Use teclado e mouse; controles móveis não foram implementados.

## Recompilar

Depois de atualizar o catálogo e os assets, execute `./atualizador/Compilar-Web.ps1`. O pacote é salvo em `distribuicao/<VERSION>/NullStack-Viamao-Web.zip`. O site público serve os arquivos compilados da branch `web` do repositório de releases; publicar outra versão web exige atualizar essa branch. A branch `main` foi preservada.
