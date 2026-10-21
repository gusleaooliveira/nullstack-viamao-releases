# NullStack Viamão 1.3.0 — versão web

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
