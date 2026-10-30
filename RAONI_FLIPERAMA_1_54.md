# Raoni no fliperama · campanha 1.54

A campanha usa a história e os assets do projeto original `jogo-indio/jogo-indio`, sem abrir outro programa. O original foi lido em `historia.md`, `README.md`, no roteiro de abertura e nos scripts das doze etapas, combate, Anhangá, capitão e descobertas. As cópias de referência e seus SHA-256 ficam em `materiais-originais/raoni-154/roteiro-original` e `fontes-historia.json`.

## Jornada jogável

1. Praia: pescar três peixes com lança/flecha; encerramento mostra a aldeia queimada e o desaparecimento de Potira, Jaciara e Abaré.
2. Mata Atlântica: dezoito armadilhas com janela de desarme; ferir um animal reprova a prova do Curupira. Depois, chegar ao guardião.
3. Cachoeira: corrida veloz, salto entre patamares e três penas; chegar ao topo.
4. Iara: saltar por sete ilhas, resistir ao canto, ganhar fôlego, mergulhar para recuperar a concha e devolvê-la. Cair antes do poder devolve à última ilha segura.
5. Pântano: o Mapinguari persegue; mergulhar protege e permite atravessar sem matá-lo.
6. Campo queimado: atravessar o rio e defender doze árvores por setenta segundos. Ondas trazem incendiários, corredores e arcabuzeiros; cada foco tira três pontos de vida da mata por segundo. A lança abafa focos e derruba soldados. Se a mata resistir, receber fogo, queimar três pilhas de pau-brasil e abrir a paliçada. As pilhas também liberam o tacape e a tinta de guerra (+3 de vida máxima).
7. Posto dos cativos: três jaulas, vigias atordoáveis por flecha/lança, caixas que bloqueiam detecção e Moema conta o caminho do forte.
8. Serra: atrair as investidas do Anhangá para as pedras, desviar das esferas de fumaça ou queimá-las com fogo e acertar três vezes durante o atordoamento. Purificado, ele guia Raoni por três pontos seguros, parando quando a lanterna de um vigia ilumina o caminho. A barreira de espinhos só abre depois da purificação; é preciso chegar a Jaci após a travessia furtiva.
9. Porto: três píeres e amarras, lanternas com cones visíveis, caixas que escondem, invisibilidade de três segundos e alternativa de nadar sob o cais. Cada amarra queimada solta um bote de verdade, que segue com a maré.
10. Forte: atravessar o fosso com a ponte erguida, escapar das lanternas e queimar o portão. No pátio, libertar a família antes do capitão; atacar por vingança faz Tupã pedir outra escolha. Quatro raios nas janelas de recarga entre tiros fazem o capitão se render; a caravela vazia afunda no encerramento.
11. Árvore: plantar três sementes e voltar para a cerimônia com os encantados.
12. Aldeia: duas cargas de madeira por oca, três ocas; reencontro e novas velas no horizonte.

Há **24 descobertas opcionais**, duas por etapa, importadas do arquivo original `tarefas_opcionais.gd`. Coletar, observar e escutar possuem condições diferentes. Elas dão pontos sem alterar o objetivo principal e ficam registradas por personagem. O salvamento da campanha continua por etapa concluída, separado do progresso da cidade.

## Arte original e otimização

Raoni, Curupira, Iara, Boitatá, Jaci, Tupã, soldado, Jaciara, Mapinguari, onça, capivara e Anhangá corrompido já vinham do original. Esta versão acrescenta **Potira, Abaré, Moema, Anhangá purificado, lança, tacape, concha, caravela e oca** dos GLB originais. O conversor limita malhas acima do orçamento a aproximadamente 5.500 triângulos por objeto, preserva rigs/animações, remove proxies de controle e reduz texturas para 512 px. Catálogo com hashes e contagem de triângulos: `Assets/Resources/Raoni154/catalog.json`.

Blender empacotado e GLB de origem ficam em `materiais-originais/raoni-154`. Os sons novos de lança/fogo são os CC0 já usados no original (Kenney/AntumDeluge); a tabela de licença foi preservada. Personagens fornecidos pelo proprietário preservam sua procedência; não são rotulados como CC0.

Os cenários continuam compactos. Cinco mapas estáticos foram revisados no Blender para baixar o leito dos rios, criar ilhas e píeres, acrescentar as doze árvores e corrigir o fosso e as muralhas. Suas regiões de água, margens e plataformas usam as mesmas coordenadas das colisões lógicas. A água transparente permite ver o personagem e a concha debaixo da superfície, sem o chão invisível da versão anterior.

A campanha recria os doze capítulos dentro da máquina; **não executa o Godot original nem reproduz os mapas extensos em escala 1:1**. Quantidades e disposição de fauna e decoração permanecem adaptadas ao fliperama. Foram preservadas as provas principais, escolhas, recompensas, tarefas posteriores aos poderes e o encerramento. Os diálogos e planos de câmera também são adaptações do roteiro para a tela da máquina.

## Controles e validação

WASD move, Espaço pula, E interage/resiste, Ctrl mergulha/agacha, Shift corre. J/clique lança, K flecha, L tacape, I fogo, Q invisibilidade, F raio. No controle: LS move, botão sul pula, oeste interage, LT mergulha, LB corre, RT flecha, RB fogo, direcional esquerda lança/direita tacape/cima raio; botão norte invisibilidade. Esc/Start pausa. Os poderes surgem na etapa correspondente; não são liberados todos desde o começo.

`IndioValidation151` mantém a opção `--indio151-test`. O roteiro usa movimento, saltos, ataques, mergulho e interação para percorrer os doze capítulos, incluindo a defesa completa de setenta segundos, as plataformas da Iara, os pontos seguros da serra, o fosso/portão e a saída dos três botes. O integrador deve executar o teste e revisar as doze capturas antes de publicar; uma compilação C# isolada não substitui esse teste.

Em 30/10/2026, o protótipo privado passou **93 verificações e os doze capítulos**, sem erros de lógica. A opção `--indio151-logic-only` foi usada nesse ensaio exclusivamente para adiar a verificação dos cinco mapas revisados, do shader e da importação Texture2D até a reconstrução completa. Não libera poderes, não teleporta Raoni e não evita nenhuma etapa da campanha. A entrada no píer a partir da água, a defesa de setenta segundos e os quatro raios no capitão foram executados com os controles da aventura. Esse resultado não substitui a revisão visual e o teste do pacote final sem a opção.

A correção do porto separa a plataforma elevada da passagem submersa: caixas sobre o cais não bloqueiam quem está nadando abaixo e é possível saltar da água para a borda. No forte, a etapa de combate começa depois do resgate; os guardas passam a disparar projéteis desviáveis, em vez de recapturar e devolver Raoni ao checkpoint durante a luta final.

`RaoniAssets154.Prepare` configura FBX animados como Legacy, cenários como estáticos e força todas as PNG para Texture2D antes de reimportar os modelos. As ferramentas `raoni154_assets.py`, `raoni154_story.py` e `raoni154_maps.py` reproduzem a conversão, a importação da história e os cinco mapas revisados. O shader de água fica em Resources e não depende de um shader removido pelo stripping do build.

A revisão visual do primeiro pacote detectou dois erros de importação/carregamento: os novos FBX estavam com `useFileScale=0`, reduzindo os mapas cem vezes, e o carregador tentava abrir os PNG por caminhos com extensão, que `Resources.Load` não aceita. O importador agora força a unidade do arquivo e escala global 1, trata os cinco props como estáticos e usa compressão baixa. O carregador remove a extensão antes de associar cada textura. Os modelos mantiveram seu orçamento de triângulos; os GLB originais usam materiais opacos e os nove PNG são RGB, portanto não era um problema de recorte alfa.

O teste final registra todos os objetos retornados por `Resources.LoadAll` para diagnóstico, mas verifica individualmente **cada um dos nove PNG do catálogo**, seu tipo Texture2D e resolução 512. Também confere a escala bruta de cada FBX, as dimensões dos cinco mapas em metros e a textura efetivamente associada aos renderizadores de Potira, Abaré, Moema, Anhangá e dos props durante a campanha. Esses testes evitam aprovar apenas a presença do arquivo enquanto o personagem ou mapa continua branco ou pequeno demais.
