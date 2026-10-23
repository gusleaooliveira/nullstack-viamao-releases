# NullStack 1.19.0 — materiais com texturas

Pedido: pesquisar e aplicar texturas nos cenários e objetos, preservando os personagens.

## Materiais aplicados

Foram baixados 16 conjuntos de materiais do ambientCG, de Lennart Demes, sob CC0 1.0: reboco, tijolo, concreto, asfalto, calçamento, madeira, metal, telha, grama, terra, pedra, tecido, borracha, plástico, cerâmica e papel. As fontes individuais e SHA-256 dos arquivos originais constam em `Assets/Resources/Textures119/catalog.json`. [Licença oficial](https://docs.ambientcg.com/license/).

O cenário estático recebe um material conforme a superfície antes da divisão em setores no Blender. Paredes, telhados, calçadas, terreno, mobiliário e objetos internos usam texturas de superfície. Vidros conservam as propriedades de iluminação e recebem textura discreta. Carros, motos, aviões, ônibus, armas, objetos coletáveis e acessórios recebem os mesmos materiais compartilhados, com tinta e cores de identificação preservadas. Alimentos usam somente uma microtextura neutra combinada com as cores originais.

Os 17 personagens pessoais, pedestres, policiais, zumbis, lutadores, gelatinas e animais mantêm seus modelos e materiais anteriores. HUD, fontes, imagens de sinalização e efeitos que já tinham texturas continuam usando seus próprios arquivos. Esta atualização não modifica a modelagem nem torna os modelos low poly fotorrealistas.

## Desempenho e autoria

As imagens de cor e rugosidade foram reunidas em um atlas RGBA de 2048 × 2048, com 16 regiões de 480 pixels e bordas de segurança. Há mipmaps, filtragem trilinear, compressão e reutilização dos materiais; não é carregado um conjunto 4K ou 8K por objeto. A projeção em três planos evita depender dos UVs de paleta dos modelos. As derivadas são calculadas antes da repetição para evitar vazamento entre regiões do atlas.

O mapa continua em `mapa-blender/NullStack-Viamao.blend`, com a imagem do atlas incorporada e materiais de pré-visualização. Conserva 328 setores visuais, 328 setores de colisão e os 581 colisores de origem. O mapa tem 524.178 triângulos visuais, contra 523.372 na versão anterior: a diferença de 806 triângulos (+0,15%) preserva fronteiras entre materiais. Os modelos dinâmicos não ganharam vértices nesta atualização. As colisões continuam com 166.008 triângulos.

## Reconstrução e validação

1. `python ferramentas-historia/texturas_119.py` baixa os originais, confere os ZIPs e gera o atlas.
2. Execute Blender com `ferramentas-historia/mapa_blender.py` para gerar o mapa e o FBX. A classificação está em `superficies_119.py`.
3. No Unity 6000.6.6f1, execute `NullStack.StoryBuilder.AssembleTextures119`, depois `BuildWindows` e `BuildWeb`.
4. `python ferramentas-historia/validar_119.py` testa os materiais, assets, cidade, desafios, histórias e campanha, restaurando as preferências nativas.

As fotografias e relatórios finais ficam em `documentacao/validacao/1.19.0`. [Jogo web](https://gusleaooliveira.github.io/nullstack-viamao-releases/) · [Galeria](https://gusleaooliveira.github.io/nullstack-viamao-releases/galeria-1.19/).

Validação nativa final: 124 verificações de texturas, 323 de assets, 38 da cidade, 45 dos modos de luta/sobrevivência e 127 das histórias pessoais; 78 fases e 353 objetivos concluídos. As 144 fotos incluem 16 amostras de material e quatro vistas adicionais da cidade. Os 91 arquivos dos personagens foram comparados por SHA-256 e permaneceram idênticos; as preferências nativas foram restauradas com comparação exata.

Nos níveis de distância, os identificadores de superfície são transportados como índices de material durante a simplificação e depois gravados por face. Eles não sofrem interpolação durante a redução de polígonos.
