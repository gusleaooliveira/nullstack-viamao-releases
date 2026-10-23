# Igor em Produção 1.7.1 — GPS, objetivos concretos e mapa otimizado

A versão 1.7.1 mantém objetivo e vida em destaque. O minimapa aparece durante o deslocamento; dicas e barras surgem nas interações. Ao dirigir, o HUD mostra velocidade, freio e saída. Placas grandes próximas da câmera deixam de cobrir a visão.

As 13 malhas animadas passaram de 188.533 para 178.418 vértices: 10.115 vértices sem uso removidos (5,4%). Os triângulos visíveis e seus atributos foram preservados, com verificação das posições, normais, UVs e pesos de animação. Os modelos de origem continuam intactos.

O GPS evita paredes e o contorno jogável, mantém rotas estáveis e calcula desvios locais quando as ruas não se conectam. A rampa da Cria agora alcança o terreno; os objetivos externos também são conferidos contra a colisão final do Blender.

Abra `Jogar-Historia.cmd` na pasta do projeto ou extraia o pacote Windows inteiro e execute `NullStack-Historia.exe`. No navegador, acesse https://gusleaooliveira.github.io/nullstack-viamao-releases/.

Escolha **Jogar modo história** ou **Continuar história**. As 21 fases principais e os 12 chamados opcionais mantêm 128 objetivos. Todos receberam nomes e instruções concretos: buscar equipamentos, reparar circuitos, transportar peças, abrir acessos e escoltar moradores. A campanha continua automaticamente, com o GPS indicando o próximo local. Entre fases, Igor permanece na cidade; retomar o save e tentar novamente um checkpoint reposicionam o jogador perto do objetivo.

## Controles e orientação

- WASD anda; Shift corre; Espaço pula; Ctrl agacha.
- E coleta, chama moradores, conversa e entra/sai do carro. Segure E para operar equipamentos e acompanhe a barra de progresso.
- Q equipa a arma; clique esquerdo dispara; F dá socos; botão direito mira e examina equipamentos.
- Esc/F2 abre a campanha e os chamados; M abre o mapa completo; F3 mostra o desempenho.
- O GPS desenha uma rota azul nas ruas e no minimapa. O marcador laranja indica o destino. Dentro de prédios, a indicação leva até a porta apropriada. Em missões de direção, primeiro indica o carro e depois o destino.

Nos diálogos, o retrato, o nome e a indicação “fala com” mostram **quem fala e para quem**. Igor aparece à direita, identificado como **você**. A fala anterior permanece visível para dar contexto à resposta; o botão informa quem falará em seguida. As conversas são legendadas. Quando a câmera encosta em uma parede, o próprio personagem é ocultado temporariamente para manter a visão livre.

Robôs vermelhos são ameaças. Equipamentos de manutenção têm telas azuis. Após operar um equipamento, ele fica verde e permanece no local durante a missão. Nas defesas, robôs próximos do terminal interrompem o progresso: elimine a ameaça e permaneça na área. Chefes só recebem dano após desligar os dois quadros de proteção.

## Desempenho e cores

O exportador agora incorpora as cores das texturas ao mapa do Blender. As fachadas neutras recebem uma paleta mais viva, preservando os detalhes das janelas e dos telhados.

O mapa visual passou de 1.438.907 para aproximadamente 606 mil triângulos. A versão distante usa aproximadamente 133 mil. As copas das árvores passaram de 852.480 para 88.800 triângulos. Esses números medem geometria, não aumento de FPS.

Os setores visuais usam versões próximas/distantes e deixam de ser desenhados fora do alcance configurado. Colisões distantes são desativadas por setor e retornam quando o jogador se aproxima. A colisão do terreno mantém a geometria original. A cena evita duplicar as malhas em lotes estáticos, limita sombras e luzes e reduz pedestres/trânsito simultâneos; personagens fora da área próxima deixam de ser renderizados. No navegador, a densidade de pixels é limitada para evitar renderizar desnecessariamente em resoluções muito altas.

O cenário estático continua em `mapa-blender/NullStack-Viamao.blend`. Personagens, veículos e objetos de missão são criados em execução. Os novos objetos de missão compartilham malhas e material; retratos são armazenados em cache após a primeira renderização.

## Reconstrução

Execute `ferramentas-historia/Construir-Historia.ps1 -Validate -Web` e depois `python ferramentas-historia/empacotar_historia.py`. Use `-RebuildMap` para recriar o mapa a partir da cena de origem, ou `-ExportEditedBlend` para exportar edições do Blender. A exportação de texturas necessita da Unity com dispositivo gráfico; o script abre o editor em segundo plano.

O gerador `campanha_concreta.py` contém a revisão das 33 fases. A validação percorre os 128 objetivos com save isolado. O roteiro original continua preservado em `historia/NullStack_Campanha_Missoes_e_Conversas.md`.

Saves existentes continuam válidos. Windows e navegador mantêm saves separados e o modo história permanece solo. O modo livre online precisa de participantes usando a mesma versão 1.7.1.


Novidades 1.19.0: leia TEXTURAS_1_19.md. Assets e efeitos anteriores: leia ASSETS_1_18.md para modelos, efeitos, animais, HUD e GPS. Leia MODOS_1_16.md para Zumbi, Beat em up, armas, garagem e missões. Histórias: HISTORIAS_PERSONAGENS_1_15.md. Conclua P01 e pause para escolher Histórias dos personagens. Banco: BANCO_1_12.md. Cidade viva: CIDADE_VIVA_1_11.md. Poderes: PODERES_1_10.md.
