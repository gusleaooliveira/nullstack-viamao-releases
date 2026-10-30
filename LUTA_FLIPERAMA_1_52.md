# Luta do Elenco — integração 1.52

A segunda máquina de cada conjunto de fliperamas recebe **Luta do Elenco**. A primeira continua sendo **Raoni — Jogo do Índio**. A terceira permanece reservada. São oito máquinas de luta, sem adicionar pontos ou mudar o mapa.

No modo solo, aproxime-se da máquina identificada e pressione E / X. Selecione entre os 19 personagens do catálogo principal, escolha o rival e comece a luta contra a IA. Os modelos e texturas são os mesmos de CharacterCatalog; a animação usa o rig ExplorerPose existente, com pose própria de chute e defesa. Personagens iguais dos dois lados são permitidos.

Cada round dura 60 segundos, começa com 100 de vida e termina por nocaute ou tempo. Vence a partida quem ganhar dois rounds. Empates repetem o round sem dar vitória. Soco causa 10, chute 16 e especial 29 pontos antes da defesa. A defesa reduz o dano a 18%, arredondado para cima. O especial exige a barra completa, e a barra cresce com o tempo e os golpes. Saltos evitam golpes quando há distância vertical suficiente. Alcance, recuperação e recuo limitam os ataques; cada golpe só acerta uma vez.

## Controles

| Ação | Teclado | Controle |
|---|---|---|
| Mover | A/D ou setas | Analógico esquerdo |
| Pular | Espaço | A / botão sul |
| Soco | J | X / botão oeste |
| Chute | K | Y / botão norte |
| Defesa | Shift esquerdo | LB |
| Especial | L | RB |
| Pausar / continuar | Esc | Start |
| Selecionar lutador | Setas ou mouse | Direcional esquerdo/direito |
| Trocar rival na seleção | Mouse | RB |
| Começar / próximo round | Enter ou mouse | A |
| Sair na seleção ou pausa | Botão na tela | B |

A câmera própria renderiza a arena em uma textura 1024×576 na tela do fliperama, camada 28, separada do Raoni (29). A cidade mantém sua posição, vida e save. Os comandos da cidade, dano ao jogador, sincronização em nuvem e rádios ficam bloqueados durante a partida. Sair restaura câmera, estado de caça e captura de comandos. O modo online mostra uma indicação de disponibilidade apenas no solo.

## Validação

`FightingValidation152` instala o teste `--fight152-test` ao criar o componente da luta. O argumento `--output-dir` define o destino do relatório `fight152.json` e capturas da seleção e da vitória. O teste cobre acesso pela máquina, isolamento da cidade, todos os modelos do elenco, alcance, dano único, defesa, especial, salto, IA, nocaute, melhor de três, tempo e reabertura.

`python ferramentas-historia/validar_luta152.py` compila os scripts com Roslyn e referências do player Unity em uma cópia isolada do pacote Mono 1.50, compartilhando por hard link somente arquivos imutáveis. A DLL substituída é privada. O teste restaura e confere os PlayerPrefs. Esta verificação antecipada não substitui compilar e executar o teste no pacote Unity conjunto final da 1.52, incluindo Windows e compatibilidade web.

## Coordenação

Os chats do Raoni, da luta e do paisagismo compartilham o fonte canônico. Cada frente entrega os próprios arquivos e evidências; scripts compartilhados ficam para revisão e commit conjunto pela frente do paisagismo. O fechamento 1.52 reúne os três recursos, os pacotes Windows/web, Git, Drive e notícias. Nenhuma entrega conjunta deve ser declarada antes da validação final.


## Pacote conjunto
O pacote Unity Windows da 1.52 repetiu as 51 verificações com aprovação e perfil restaurado. A validação antecipada foi confirmada no executável conjunto. Não houve teste de controle físico.
