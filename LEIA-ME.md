# Cidade 1.38 — animais, motos e colisões

Pedestres vivos têm cápsulas físicas: bloqueiam o jogador e evitam avançar contra paredes ou outros pedestres. Corpos mortos e personagens ocultos deixam de bloquear a passagem. Atropelamentos usam a largura e o comprimento do veículo, com verificação de parede e intervalo entre impactos.

As motos urbana e de trilha ganharam rodas animadas, direção e inclinação nas curvas, inclusive as motos do trânsito. A colisão ficou mais estreita.

Cães e pombos usam suas animações importadas; gatos e ratos receberam articulações leves com malhas compartilhadas. Caminhada, pausas, alimentação e giros acompanham o movimento. Os animais pessoais também tiveram a passada ajustada à velocidade.

O mapa Blender foi revisado: 166 prédios, clínica retirada da rua e volumes fechados de colisão. Os sete prédios das missões têm colisão alinhada ao modelo; dois foram reposicionados para liberar a via. Nenhum modelo novo foi baixado nesta atualização; licenças existentes preservadas.

Windows e web continuam usando o protocolo nullstack-room-v17. Os personagens e seus progressos foram preservados. Os testes automatizados registram seus resultados em documentacao/validacao/1.38.0. Teste de controle físico e nova sessão entre duas plataformas não fazem parte desta validação.

## Reconstruir o mapa

Use ferramentas-historia/ruas_predios138.py no Python do Blender, depois ferramentas-historia/mapa_blender.py e ferramentas-historia/restaurar_extras_blender138.py. Preserve a coleção FLIPERAMAS_129; o arquivo extras-pre138.blend do backup 02 permite restaurá-la. Aplique NullStack.WorldRepair138.Install na cena final, preservando os demais objetos, e copie a cena e os dois JSON de locais para o fonte canônico antes de sincronizar o cache de build. Não regenere a cena inteira pelo montador antigo. Os dois pontos de interação da padaria acompanharam a fachada. As paradas de carro continuam na rua, para não direcionar veículos para dentro dos lotes.

O backup 02 da versão 1.38 contém o Blender atualizado e os dados para reconstrução. O fonte canônico permanece em NullStack-Unity.


Novidades 1.38.0: leia CIDADE_1_38.md. Carreiras: CARREIRAS_1_26.md. Corridas e personalização: EXPANSAO_1_23.md. Assets e efeitos anteriores: leia ASSETS_1_18.md para modelos, efeitos, animais, HUD e GPS. Leia MODOS_1_16.md para Zumbi, Beat em up, armas, garagem e missões. Histórias: HISTORIAS_PERSONAGENS_1_15.md. Entre nos círculos dourados para iniciar histórias liberadas. Banco: BANCO_1_12.md. Cidade viva: CIDADE_VIVA_1_11.md. Poderes: PODERES_1_10.md.
