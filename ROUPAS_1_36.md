# Versões dos personagens, camisetas e bonés — 1.36.0

Abra **F6** ou Celular → Personalizar personagem/carro. Role até **Estampa da camiseta**: Lula stencil, Lulou, Eu sou a Lenda, Estrela e óculos, Metallurgica preto e Metallurgica vermelho. Sem estampa mantém a personalização anterior. **Camiseta** muda a cor do tecido; Original usa a cor de referência da estampa.

Em **Modelo do boné**, escolha Original, LULA branco ou LULA vermelho com emblema e arte na aba. A cor do boné é independente da camiseta. Sem chapéu tira o acessório e preserva a escolha para a próxima vez. Use **Ver roupa de frente** para fechar o menu e girar a câmera. Teclado/mouse e a navegação de controle existentes continuam disponíveis.

Escolhas salvas por personagem no perfil local e no mesmo payload do save portátil e de nuvem. Para levar ao outro dispositivo, use a mesma conta e as opções existentes de enviar/carregar progresso; não substitui automaticamente um save em conflito. Novos campos têm zero como padrão, preservando saves antigos. Windows e web precisam estar na 1.36 para mostrar as novas peças em salas. O protocolo das salas permanece nullstack-room-v17.

O boné usa uma malha original compartilhada de 311 vértices/480 triângulos. Camisetas reaproveitam os pesos do esqueleto existente e são recortadas nas costuras, com geometria compartilhada por modelo. Materiais de estampas e texturas são compartilhados; importação com mipmaps e limite de 512 pixels. Nenhum esqueleto, mão ou corpo original é substituído.

As oito referências foram enviadas pelo proprietário. Seis artes finais derivadas com a ferramenta integrada image_gen; duas referências brancas preservam o desenho original com máscara do fundo vermelho no shader. Originais, hashes e método em ASSETS_1_36.json; prompts e referências no pacote 40-originais-roupas-1.36.0.zip. Não são reclassificados como CC0. Preparação no Unity: ApparelBuild136.Prepare; não precisa de Blender para compilar. O mapa estático não mudou.

Teste de roupas: 19 personagens, camiseta/boné, corrida/tiro/natação, persistência por personagem, snapshot de rede, round trip de save portátil, rejeição de opções inválidas e cache de materiais. Fotos reais em documentacao/validacao/1.36.0/Roupas. Regressões e limites efetivamente verificados constam no resultado.json da versão. Controle físico, login de produção e crossplay ao vivo não são declarados revalidados por esses testes.

## Versões adicionais dos personagens

Os 19 personagens originais e suas identidades permanecem no catálogo. Os novos modelos são aparências do mesmo personagem, não novos slots de progresso: Igor → Original/Igor v2; Gustavo → Original/Gustavo v3; Matheus (primeira entrada) → Original/Matheus alternativo; Silvio → Original/Silvio Kratos; Miqueias → Original/Dinossauro/Sapo. Em F6, role até **Versão do mesmo personagem**. Troque fora de veículos e corridas. A prévia do menu usa a última versão salva.

A escolha compartilha dinheiro, missões, trabalhos e história do personagem existente; o valor zero mantém o original em saves antigos. É incluída no snapshot de rede e no salvamento portátil/nuvem existente. Os seis GLBs enviados são preservados nos complementos de backup 41; cópias de trabalho foram reduzidas de aproximadamente 1,9 milhão para até 18 mil triângulos, com texturas de 1024 pixels e malhas/esqueletos em cache por versão. Scripts Blender reproduzem a preparação. Nenhum modelo original do catálogo foi sobrescrito.

As duas imagens enviadas foram aplicadas à frente e ao verso dos dois primeiros outdoors. A proporção é preservada. Textos, links e QR codes são somente parte da imagem; o jogo não os abre. Os outros outdoors mantêm o sistema de anúncios.

A troca de versão recria somente o visual: não recria/remove o veículo atual. Validação de versões: 95 verificações, incluindo veículo preservado, pesos dos dedos do sapo, animações, retorno aos originais, snapshot e salvamento. Roupas: 193 verificações nos 19 personagens originais.

A personagem do encontro opcional “me vê dois reais?” passa a se chamar **Louca** no HUD, mensagens e novos registros de doação. Identificadores internos, perseguição, pagamentos e progresso permanecem compatíveis.

As proporções das imagens são preservadas na importação. No Windows, roupas e bonés usam até 512 pixels e outdoors até 2048; na web, até 256 e 512, respectivamente. Os seis modelos adicionais mantêm texturas de 1024 nas duas plataformas. Arquivos originais preservados nos backups.
