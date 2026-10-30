# Raoni — Jogo do Índio no fliperama · 1.52

Adaptação arcade em Unity do projeto Godot do proprietário, `jogo-indio`. Não é o executável Godot nem uma reprodução integral de seus sistemas: a jornada foi recriada em provas compactas para jogar na tela do fliperama dentro de Viamão.

## Como jogar

No modo solo, abra **P → Fliperama Raoni · GPS**, vá até a máquina identificada e pressione **E / Quadrado / X do Xbox**. Uma das três máquinas de cada conjunto contém Raoni: oito máquinas jogáveis. Raoni ocupa a primeira máquina de cada trio; as outras recebem os demais jogos da atualização conjunta. Disponível fora das missões, sem veículo ou perseguição.

A tela mostra uma câmera 3D própria, vida, fase, objetivos e pontos. **Sair do fliperama** devolve o controle à cidade. **Esc / Start** pausa a partida. A fase alcançada e os pontos ficam salvos localmente por personagem; o recorde é separado da economia da cidade. Este progresso de fliperama ainda não faz parte do salvamento em nuvem.

| Teclado e mouse | Controle Xbox / PlayStation |
|---|---|
| WASD mover | Analógico esquerdo |
| Espaço pular | A / X |
| E interagir, resistir, abrir jaulas | X / Quadrado |
| Ctrl agachar ou mergulhar | LT / L2 |
| Shift correr | LB / L1 |
| Clique ou J disparar flecha | RT / R2 |
| I lançar fogo | RB / R1 |
| Q invisibilidade | Y / Triângulo |
| F raio | Direcional para cima |
| Esc pausa | Start / Options |

## Jornada adaptada

Prólogo com pesca; Mata Atlântica com doze armadilhas e animais protegidos; cachoeira e três penas; canto de Iara; fuga do Mapinguari pelo pântano; incêndios e Boitatá; três jaulas e vigias; Anhangá/Jaci na serra; amarras dos botes; libertação dos cativos antes de enfrentar o capitão; sementes da árvore sagrada; reconstrução das ocas. Cada etapa tem fala identificada, objetivo, falha/repetição e passagem para a seguinte.

## Verificação

O pacote Unity conjunto 1.52 passou 68 verificações estritas, com as doze etapas, as 14 animações reimportadas, seleção da máquina, comandos simulados de controle, pausa/retomada, derrota, pontuação única e restauração da cidade/perfil. O relatório não tem erros nem assets pendentes; capturas nativas mostram os modelos texturados e as telas. Não foi testado um controle físico.

## Assets e desempenho

Modelos e animações importados do original: Raoni, Curupira, Iara, Boitatá, Jaci, Tupã, Jaciara, soldado, Mapinguari, Anhangá, onça e capivara. Os originais e hashes estão em `materiais-originais/indio-151` e no catálogo `Resources/Indio151/catalog.json`. Conversão reproduzível: `ferramentas-historia/indio_blender151.py`, seguida de `cenarios_indio151.py`; materiais/importação: `IndioAssets151.Prepare`.

Texturas com até 512 pixels, malhas reduzidas, animações de uso selecionadas, cenários estáticos de baixo custo autorados no Blender. Uma fase ativa, câmera na camada 29 e RenderTexture 1024 × 576; até doze projéteis. Sem processo externo e sem alterar o relógio global. Ao fechar, libera cenário, câmera, render texture, áudio e materiais próprios. O jogador da cidade permanece no local e fica protegido durante a partida solo.

O canto de Iara é o áudio já presente no projeto fornecido. Modelos, narrativa e áudio mantêm a procedência do projeto original; esta adaptação não concede novas licenças sobre eles.
