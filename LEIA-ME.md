# Mistérios 1.33.0

Novos modelos CC0 de Quaternius para as oito aparições. ET e ET com capacete: Animated Alien; criatura com chifres, espectros, fragmento vivo e guardião: Ultimate Monsters; cão sombrio: Wolf do Animal Pack Vol.2. O guardião recebeu uma paleta de pedra; o lobo, uma paleta escura. Os discos e vestígios permanecem formas leves produzidas pelo jogo.

- https://quaternius.com/packs/animatedalien.html
- https://quaternius.com/packs/ultimatemonsters.html
- https://opengameart.org/content/animated-animales-low-poly
- Licença: https://creativecommons.org/publicdomain/zero/1.0/

Os modelos próximos preservam a geometria. A distância usa malhas com cerca de 55% menos triângulos. Seis poses amostradas da animação de espera original são interpoladas por blend shapes no runtime, sem manter os esqueletos completos dos monstros. Os originais animados e seus esqueletos ficam preservados no fonte e no Drive. Um material compartilhado e cores por vértice dispensam texturas adicionais no runtime. FBX selecionados: 18,588,848 → 3,754,736 bytes, incluindo LODs (redução de 79.8%). Não representa benchmark de FPS. O sistema mantém no máximo dois locais ativos; o nível distante não atualiza poses.

As pistas, horários, oito IDs, recompensas e descobertas salvas permanecem compatíveis. Não há mudança de protocolo (nullstack-room-v17). Windows e web devem usar a mesma versão 1.33.0. F7 mantém os perfis gráficos da 1.32.

Reconstrução: python ferramentas-historia/baixar_misterios_133.py; Blender --background --python ferramentas-historia/modelos_misterios_133.py; python ferramentas-historia/compilar_133.py. PrepareMysteries133 cria materiais/prefabs e configura poses/LOD. Originais e licenças: assets-baixados/15-misterios-133; catálogo: ASSETS_1_33.json. Testes e fotos: documentacao/validacao/1.33.0.

A versão web usa Gzip e descompressão nativa do loader Unity (fallback no navegador), compatível com hospedagem estática sem cabeçalhos Content-Encoding. Os três arquivos comprimidos terminam em .unityweb.


Novidades 1.33.0: leia MISTERIOS_1_33.md. Carreiras: CARREIRAS_1_26.md. Corridas e personalização: EXPANSAO_1_23.md. Assets e efeitos anteriores: leia ASSETS_1_18.md para modelos, efeitos, animais, HUD e GPS. Leia MODOS_1_16.md para Zumbi, Beat em up, armas, garagem e missões. Histórias: HISTORIAS_PERSONAGENS_1_15.md. Entre nos círculos dourados para iniciar histórias liberadas. Banco: BANCO_1_12.md. Cidade viva: CIDADE_VIVA_1_11.md. Poderes: PODERES_1_10.md.
