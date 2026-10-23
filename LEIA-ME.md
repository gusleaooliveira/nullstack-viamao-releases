# Personagens e esqueletos — 1.25

As malhas continuam com a mesma forma, texturas e detalhes próximos. A compactação agora também reúne vértices totalmente idênticos: posição, normal, tangente, cores, todos os canais UV e pesos ósseos precisam coincidir. Costuras de textura e articulações diferentes são preservadas. Não há redução aproximada da silhueta.

As cópias de um personagem compartilham a malha preparada. O corpo mantém os 23 ossos e as 84 animações existentes; cada mão mantém palma, cinco dedos e três articulações por dedo. As mãos agora são filhas dos respectivos pulsos, acompanhando o esqueleto mesmo entre atualizações de animação.

Os dedos só recalculam os alvos quando a pegada muda e param de escrever rotações quando estabilizam. Cada vértice da mão usa um único osso, correspondente aos pesos já existentes. Próximo ao jogador, as animações continuam a cada quadro; NPCs a mais de 25 m são amostrados a até 20 Hz e, a mais de 55 m, a até 10 Hz. A simulação, colisões e respostas dos NPCs continuam independentes dessa frequência visual. NPCs ocultos pela distância deixam de animar e renderizar o corpo e as mãos. A lista de renderizadores é completada após a criação do esqueleto, corrigindo a ordem de inicialização que deixava essas malhas fora do controle de visibilidade.

Sem novos assets externos. Modelos, licenças e originais anteriores são preservados. A comparação de vértices e os testes de deformação, corpo, mãos, armas e jogabilidade constam em documentacao/validacao/1.25.0. Ganho de FPS depende da cena e do equipamento; contagens de trabalho evitado não equivalem a um percentual de FPS garantido.

Referência de skinning e atualização fora da tela: https://docs.unity.com/en-us/engine/6000.0/script-reference/unityengine/skinnedmeshrenderer .


Novidades 1.25.0: leia PERSONAGENS_1_25.md. Corridas e personalização: EXPANSAO_1_23.md. Assets e efeitos anteriores: leia ASSETS_1_18.md para modelos, efeitos, animais, HUD e GPS. Leia MODOS_1_16.md para Zumbi, Beat em up, armas, garagem e missões. Histórias: HISTORIAS_PERSONAGENS_1_15.md. Entre nos círculos dourados para iniciar histórias liberadas. Banco: BANCO_1_12.md. Cidade viva: CIDADE_VIVA_1_11.md. Poderes: PODERES_1_10.md.
