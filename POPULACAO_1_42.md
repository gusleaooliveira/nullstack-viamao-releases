# Mais vida pela cidade — 1.42.0

A população urbana passou de 112 para 192 pedestres, de 72 para 120 veículos de trânsito e de 24 para 72 animais. Os veículos incluem os modelos e as motos já disponíveis; viaturas e tanques foram preservados.

A distribuição considera o tamanho das rotas e o espaço entre personagens e veículos. No mapa atual, pedestres usam 130 rotas de calçada e o trânsito ocupa 26 rotas de rua, em vez de concentrar os grupos nas primeiras rotas. A alocação é determinística entre os pacotes compatíveis.

Há 18 cães, 18 gatos, 18 pombos e 18 ratos, espalhados por 72 rotas. Ratos aparecem à noite. Os animais urbanos são decorativos, além dos bichos próprios dos personagens, e só são animados nas proximidades do jogador. A visibilidade continua sendo revista a cada 0,25 segundo.

O trânsito descarta pares de veículos distantes antes dos cálculos de cruzamento e espaçamento. A detecção de atropelamento também faz uma verificação de proximidade antes do teste completo do trajeto, mantendo o cálculo varrido nos deslocamentos longos. Os modelos, materiais e malhas de animação existentes são compartilhados.

Rádio ao vivo, destruição, personalização, dinheiro e demais recursos da 1.41.0 permanecem. Todos da sala devem usar 1.42.0 / protocolo v20. Salvamentos anteriores são preservados; a população da cidade é criada novamente ao abrir o jogo.

## Reconstrução

Abra NullStack-Unity com Unity 6000.6.7f1. O ZIP do fonte inclui modelos, texturas, áudio e dependências necessárias. Para reunir somente o fonte do backup em partes, baixe as quatro partes, restauracao-1.42.0.json e Restaurar-Partes-1.42.0.ps1 na mesma pasta e execute: powershell -File Restaurar-Partes-1.42.0.ps1 -Pasta . -Pacote Fonte. Para os pacotes jogáveis, use -Pacote Windows ou -Pacote Web. As licenças anteriores, incluindo NLayer e a restrição pessoal não comercial de RadioUnityStream, foram preservadas.
