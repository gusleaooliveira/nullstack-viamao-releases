# Corpos, mãos e animações — 1.20.0

Os 17 personagens do catálogo e sete modelos humanoides (pedestres masculino/feminino, civil, policial, trabalhador, lutador e zumbi) usam o esqueleto reconstruído. Rostos, roupas e texturas dos personagens jogáveis permanecem nos modelos originais.

O corpo passa de dez para 23 ossos, com quadril, três segmentos de coluna, pescoço, clavículas, braços, pernas, pés, dedos dos pés e punhos. Cada mão possui palma e quinze articulações dos dedos, com transições contínuas entre mão aberta, relaxada, punho fechado e pegadas de arma, copo, telefone e volante. São 416 vértices por mão, em uma malha compartilhada por lado.

Foi utilizado o pacote gratuito **Universal Animation Library — Standard**, de **Quaternius**, sob **CC0-1.0**: https://quaternius.itch.io/universal-animation-library. A licença e o catálogo estão em `Assets/Resources/Animations120`. A edição gratuita efetivamente baixada contém 42 movimentos; os números maiores anunciados pelo autor incluem as edições adicionais.

O arquivo original é preservado no backup privado. `ferramentas-historia/animacoes_120.py` baixa o pacote oficial; `exportar_animacoes_120.py`, executado pelo Blender 5.2, converte as animações para deltas de rotação retargeteáveis. `preparar_npcs_120.py` preserva a geometria e as cores dos NPCs e prepara suas poses de referência. Não se aplicam esqueletos humanos aos animais ou ao slime.

A biblioteca de 385.015 bytes é compartilhada entre os personagens: caminhada, corrida, agachamento, direção, natação, conversa, dança, tiros, socos, salto e outras poses. A locomoção usa movimentos sem deslocamento horizontal da raiz, mantendo colisões e autoridade da sala no controlador existente. Ações contextuais usam correção de alcance dos braços para segurar objetos. Mochila e itens guardados acompanham coluna e quadril. Personagens fora da área visível suspendem a animação; os pedestres compartilham malhas mesmo quando têm alturas diferentes.

## Reconstrução e validação

Abra `NullStack-Unity` no Unity 6000.6.6f1. Execute `NullStack.StoryBuilder.PrepareRigs120` para configurar os importadores das poses de referência; `BuildRigs120Windows` prepara os rigs e compila Windows. `BuildWeb` gera a mesma versão para navegador. O protocolo de salas permanece `nullstack-room-v15`.

`python ferramentas-historia/validar_120.py` executa as regressões com restauração do perfil local. A opção `Rigs` confere os 24 modelos, as 42 animações em três instantes por modelo, hierarquia, deformações e movimentos reais dos dedos. As capturas e relatórios ficam em `documentacao/validacao/1.20.0`.
