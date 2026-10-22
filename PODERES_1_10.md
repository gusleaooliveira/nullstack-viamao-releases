# Poderes, lixeiras e outdoors — 1.10.0

Use **U** ou **P → poder do personagem**. O celular mostra a recarga; a barra inferior mostra o poder e o tempo restante. Os poderes respeitam vida, condução e ações em andamento. O anfitrião valida comandos e transmite os estados para Windows e navegador.

| Personagem | Poder |
|---|---|
| Igor | Escudo: bloqueia dano durante 6 s. Na caçada continua sem arma. |
| Lucas | Soco de impacto: socos causam 40 de dano durante 6 s. |
| Matheus v1 | Regenera 50 de vida, sem ultrapassar 100. |
| Matheus v2 | Salto elevado durante 6 s. |
| Gustavo | Teletransporte entre lixeiras; aproxime-se até 5 m, U, escolha outra saída. Recarga de 8 s. |
| Mateus / Fredinho | Cura 50 de vida dos jogadores vivos em até 10 m, sem atravessar paredes. |
| Henrique | Pele de aço: recebe um quarto do dano durante 6 s. |
| Lohan | Arrancada: velocidade dobrada por 4 s. |
| Luiz | Velocidade máxima: aumenta sua velocidade em 50% por 6 s; continua o mais rápido. |
| Miqueias | Chama seu jegue à rua próxima; E monta e a música toca em movimento. |
| Silvio | Chama seu carro à rua próxima; E entra. |
| Diogo / Diego | Flash: atordoa jogadores e pedestres próximos por 3 s. |
| Talia | Proteção do gato: recebe metade do dano durante 6 s. |
| Gabriel | Onda de impacto: 30 de dano e atordoamento em raio de 8 m. |
| Gabriel v2 | Escudo dos aliados em até 10 m, sem paredes: um quarto do dano por 6 s. |
| Dudu | Revive personagens caídos em até 6 m; recarga de 5 s. |

Demais poderes têm recarga de 18 s; chamar veículos tem recarga de 8 s. A regeneração não revive: isso continua sendo o poder do Dudu. Trocar de personagem não burla a recarga.

## Esquinas e lixeiras

O jogo deriva os pontos das curvas, extremidades e cruzamentos do traçado viário real usado na simulação. A versão validada possui 138 lixeiras e 18 outdoors. Cada ponto válido recebe uma lixeira na calçada próxima, com número único. Há cobertura adicional nos pontos de curva. A procura evita ruas, construções e bordas do mapa. As lixeiras existem para todos; somente Gustavo usa a rede. A saída é verificada antes de cada viagem, e destinos ocupados são recusados.

## Outdoors fixos, anúncios dinâmicos

Até 18 estruturas, distribuídas por pontos afastados da cidade, com dois lados. Estruturas e posições permanecem fixas ao mudar o conteúdo. **P → Editar outdoors** permite ao anfitrião ou jogador solo aplicar até 8 anúncios de 160 caracteres, um por linha. O conteúdo é enviado aos clientes e também a quem entra depois; a rotação segue o relógio compartilhado da cidade. Pausar o relógio pausa a rotação.

Os anúncios iniciais e o intervalo configurável ficam em `NullStack-Unity/Assets/Resources/outdoors.json`; recompilar incorpora essas alterações. Edições feitas durante uma partida valem para aquela sessão. Não há download de imagens ou dependência de serviço externo. Neste lançamento o conteúdo é textual; as placas físicas já estão prontas para futuras fontes de conteúdo.

## Validação

Consulte `documentacao/validacao/1.10.0` para os resultados de execução e capturas. Os pacotes Windows e Web compartilham a versão e o protocolo de salas v10; versões antigas não podem entrar na mesma sala.
