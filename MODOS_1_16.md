# Modos Zumbi, Beat ’em up e garagem — 1.16.1

Escolha seu personagem no menu e clique em **Sobrevivência Zumbi** ou **Beat ’em up**. São partidas solo independentes: o personagem escolhido é mantido e o progresso da campanha não é alterado.

## Sobrevivência Zumbi

Sobreviva a ondas crescentes. Elimine todos os zumbis para liberar a próxima. Nas ondas pares, recolha a caixa azul com **E** para concluir a missão de suprimentos. O HUD mostra vida, onda, inimigos restantes, pontos e combo. Ao morrer, a partida termina; você pode recomeçar ou voltar ao menu. Esc/F2 pausa.

Os inimigos perseguem o jogador, contornam obstáculos próximos e anunciam o golpe inclinando o corpo antes de atacar. Afaste-se antes do impacto. Há no máximo 12 inimigos vivos simultaneamente; os corpos caídos são reaproveitados.

## Beat ’em up

Derrote seis ondas de lutadores, com chefes nas ondas 3 e 6. **F** aplica golpes rápidos; **J**, um golpe pesado com recuperação maior; **K**, uma esquiva para trás com breve invulnerabilidade e recarga. Abates seguidos aumentam o combo e a pontuação. Armas de fogo são bloqueadas neste modo. Eliminar uma onda recupera sua vida.

## Armas

No modo livre e no Zumbi, **Q** saca/guarda e **clique esquerdo** dispara. Troque parado entre ataques usando:

| Tecla | Arma | Dano | Alcance | Intervalo |
|---|---|---:|---:|---:|
| 1 | Pistola | 25 | 35 m | 0,32 s |
| 2 | Submetralhadora | 17 | 30 m | 0,12 s |
| 3 | Escopeta | 48 | 14 m | 0,80 s |
| 4 | Rifle | 65 | 100 m | 0,95 s |

Segure o clique com a submetralhadora para disparos automáticos. São armas de munição ilimitada nesta versão, com silhuetas e parâmetros diferentes. A escopeta usa um único disparo de curto alcance. Os disparos verificam paredes antes do dano e preservam as regras da Caçada ao Igor. O soco continua funcionando no modo livre.

## Garagem e missões

No **modo livre**, use **F3** para escolher picape, esportivo, moto urbana, moto de trilha avião leve ou biplano. Todos os personagens podem requisitar esses veículos. **G** chama o veículo para uma rua próxima; aproxime-se e use **E** para entrar. WASD dirige e Espaço freia; saia com E após parar.

No avião, **W** acelera e sobe após ganhar velocidade; **S** reduz e desce; **A/D** fazem curvas. **Espaço** reduz a velocidade e desce para pousar. Saia somente parado e junto ao chão. O voo tem teto de 100 m sobre o terreno e respeita os limites do mapa e obstáculos estáticos.

A garagem oferece três missões repetíveis: **Entrega de picape**, **Ronda de moto** e **Circuito aéreo**. Cada uma tem três pontos e exige o tipo de veículo indicado. O marcador mostra o destino e a distância; chegue ao ponto conduzindo o veículo correto. O circuito aéreo exige passar a aproximadamente 35 m acima do ponto. O tempo e as conclusões são registrados. F3 também permite cancelar a missão.

## Compatibilidade e otimização

Windows e web 1.16.1 usam os mesmos scripts e dados. Os campos adicionais de armas e veículos são enviados pelo anfitrião nas salas do modo livre. Use clientes da mesma versão; o hash de compatibilidade inclui a versão. Os modos Zumbi e Beat ’em up são solo.

A cidade estática continua no mapa Blender existente. Inimigos e novos veículos são dinâmicos, com malhas primitivas compartilhadas e materiais reaproveitados, sem novas texturas grandes nem dependências externas. As 78 fases e 387 falas da história permanecem disponíveis.

Os relatórios de validação são testes automatizados com preparação explícita de estado, não gravações de jogo humano. O projeto registra Unity 6000.6.7f1; os pacotes desta entrega usam o patch instalado 6000.6.6f1.

Correção 1.16.1: iniciar ou reiniciar qualquer desafio limpa a contagem pendente de inimigos antes da primeira onda.
