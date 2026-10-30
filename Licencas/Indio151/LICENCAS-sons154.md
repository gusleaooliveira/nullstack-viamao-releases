# Sons do jogo: origem e licença

| Arquivo / som | Onde toca | Origem | Autor | Licença |
|---|---|---|---|---|
| `floresta_amazonica_5min.ogg` | fundo de todas as fases (loop) | montado com `tools/cortar_floresta.py` a partir de `original/🍃 Som da Floresta Amazônica (Som da Natureza para Relaxar e Meditar).mp3` (20 trechos de 16 s com crossfade de 1 s) | arquivo colocado pelo Gus | **a confirmar** (fornecido pelo usuário) |
| `Sonido de Disparo de Mosquete - Efecto de sonido.mp3` | tiro do Capitão e dos soldados atiradores | arquivo colocado pelo Gus | — | **a confirmar** (fornecido pelo usuário) |
| `lanca_kenney_drawKnife3.ogg` | golpe da lança do Raoni | `drawKnife3.ogg` do pacote **RPG Audio**, https://kenney.nl/assets/rpg-audio | Kenney Vleugels (Kenney.nl) | **CC0 1.0** (domínio público) |
| `faca_kenney_drawKnife1.ogg` | golpe de espada dos soldados | `drawKnife1.ogg` do pacote **RPG Audio**, https://kenney.nl/assets/rpg-audio | Kenney Vleugels (Kenney.nl) | **CC0 1.0** |
| `fogo_crepitar_antumdeluge.ogg` | tochas e focos de incêndio (loop) | `fire-1_0.ogg` de "Fire Crackling", https://opengameart.org/content/fire-crackling | AntumDeluge | **CC0** |
| `fogo_lanca_antumdeluge.ogg` | chama da lança de fogo | primeiros 0,7 s de `fire-1_0.ogg` (acima), com fade, cortado com ffmpeg | AntumDeluge | **CC0** |

Fallback: se um desses arquivos faltar, `scripts/audio.gd` gera o som por código (`som_lanca`,
`som_faca`, `som_fogo_lanca`, `som_crepitar`); esses sons gerados são do próprio projeto.

## Trocar um som gerado por um arquivo
1. Ponha o arquivo (.ogg ou .wav, curto) em `sons/`.
2. Em `scripts/audio.gd`, escreva o caminho em `EFEITOS["nome"]` (ex.: `"faca": PASTA + "espada.ogg"`).
3. Registre aqui a origem, o autor e a licença. Use só fontes livres para jogos (CC0 ou equivalente):
   Kenney (kenney.nl, CC0), OpenGameArt.org (filtrar por CC0), Freesound.org (filtrar por CC0), Pixabay Sounds.

O original de 1 h fica em `sons/original/` com `.gdignore`: o Godot não importa (não pesa no jogo).

## Canto da Iara
| Arquivo | Onde toca | Origem | Autor | Licença |
|---|---|---|---|---|
| `canto_iara_auravoice.ogg` | canto da Iara na fase 2 (em loop, som 3D saindo dela) | `ghostly_humming.ogg` de "Ghostly Humming", https://opengameart.org/content/ghostly-humming | AuraVoice (publicado como Nocturnal_Vanguard) | **CC0** |

Fallback: sem o arquivo, `scripts/audio.gd` gera um cantarolar por código (`som_canto`).

## Vozes dos animais e água (por proximidade)
Não há arquivos de som de bicho nem de água em `sons/`: `scripts/sons_ambiente.gd` **gera** esses sons
por código (provisórios, do próprio projeto, sem licença de terceiros). Para trocar por gravações reais,
ponha o arquivo em `sons/` com o nome `animal_<tipo>.ogg` (ex.: `animal_onca.ogg`, `animal_arara.ogg`; os
tipos estão em `Fauna.TIPOS`) ou `agua.ogg` (loop): o jogo usa o arquivo no lugar do gerado.
Registre aqui a origem, o autor e a licença (só fontes livres: CC0 etc.).
