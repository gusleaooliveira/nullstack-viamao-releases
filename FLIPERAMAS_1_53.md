# Fliperamas — evolução visual e jogabilidade 1.53

Três jogos continuam nas máquinas físicas: Raoni (primeira), Luta do Elenco (segunda) e Agente Lucas (terceira). Os personagens selecionados são preservados; não são substituídos por personagens genéricos dos pacotes.

## Aplicação

- Raoni: doze cenários estáticos autorados no Blender com árvores, palmeiras, pedras, plantas, barcos e construções Kenney; peixes, penas, armadilhas, jaulas e flechas com modelos próprios. Mantidos os personagens e as animações do jogo original. Arco acompanha a mão; disparo usa o tronco enquanto as pernas continuam andando. Solo/pedra/madeira reutilizam texturas ambientCG da 1.52; água tem ondulação visual leve, sem modificar a superfície de colisão. Efeitos reais de salto, arco e confirmação substituem o bipe sintético. Movimento diagonal limitado, pequena tolerância na borda do salto e memória curta do botão de pulo.
- Luta: portão, colunas, estandartes, estátua e troféus; animações Quaternius aplicadas ao esqueleto do próprio elenco, poses de defesa, reação ao golpe e chute. Entrada de golpe guardada por 160 ms e contador de golpes consecutivos. Nenhum bônus de dinheiro/progresso da cidade.
- Lucas: equipamentos industriais, computadores, coberturas, armas, projéteis e drones montados com peças Kenney. Animação de corrida continua nas pernas ao disparar. Drones respeitam a cobertura e antecipam o disparo com uma oscilação visível. Pulo com tolerância e memória curta; sons de tiro e coleta encontrados nos bancos já licenciados do projeto.

## Fontes e licenças

Nature Kit, Space Station Kit, Mini Arena, Pirate Kit e Blaster Kit: Kenney, CC0. Originais ZIP, hashes e licenças em `materiais-originais/arcade-153`. Animações: Quaternius Universal Animation Library, CC0, banco `Animations120/122` já existente, reaproveitado sem duplicar dados.

As novas fases estáticas têm entre 10.452 e 20.382 triângulos e no máximo nove materiais; os 61 FBX somam aproximadamente 9,6 MB.

Referência baixada: Kenney Starter Kit 3D Platformer, MIT. Código Godot e licença preservados; não é carregado como dependência Unity. Movimento/animação serviram de referência; tolerância e buffer foram implementados no controlador desta versão. Pesquisa complementar: Platformer Toolkit (GMTK) para ajuste do salto, guia de visão e cobertura do Code Monkey e Fighting Game Glossary para leitura de golpes. Nenhum executável ou plugin de terceiros foi instalado para implementar regras de jogabilidade.

- https://kenney.nl/assets/nature-kit
- https://kenney.nl/assets/space-station-kit
- https://kenney.nl/assets/mini-arena
- https://kenney.nl/assets/pirate-kit
- https://kenney.nl/assets/blaster-kit
- https://quaternius.com/packs/universalanimationlibrary.html
- https://github.com/KenneyNL/Starter-Kit-3D-Platformer
- https://gmtk.itch.io/platformer-toolkit
- https://unitycodemonkey.com/video.php?v=3-jPo2wzvdw

## Otimização e reprodução

Biblioteca compartilhada de 61 modelos/cenários, texturas com até 512 px, cenários estáticos mesclados por material e um cenário ativo por jogo. Impactos usam pool de 16 faíscas por jogo, sem luzes extras. Shader compacto sem depender da neblina da cidade. Modelos dos personagens e sua geometria não são alterados nesta atualização. A simulação e as poses dos pedestres da cidade ficam suspensas durante o fliperama solo e são restauradas ao fechar, sem mudar Time.timeScale.

Conversão: Blender 5.2, `assets_arcade153.py -- --source <pasta dos downloads>`; materiais/importação: `ArcadeAssets153.Prepare`; builds: `ArcadeBuild153.Windows` e `.Web`. Catálogo traz triângulos, materiais e procedência. Os ZIPs devem ser extraídos em subpastas homônimas antes da conversão.

## Validação

783 verificações de aceitação nativas aprovadas, incluindo 424 verificações novas, 61 modelos, doze fases, materiais, escala, animações e os três jogos completos; campanha e regressões de interface/atividades também aprovadas. Uma suíte legada da cidade repetiu três falhas já existentes na 1.52 (suposições antigas de índice de pedestre e quantidade de policiais); registrada separadamente, sem regressão nova. Windows/web compilados; menu e cidade 3D confirmados no navegador, sem erros de console. Percursos completos dos fliperamas validados no Windows; não houve reprodução completa das fases no navegador. Não foi validado controle físico ou sincronização multiplayer deste conteúdo; os fliperamas são solo e preservam o estado da cidade.
