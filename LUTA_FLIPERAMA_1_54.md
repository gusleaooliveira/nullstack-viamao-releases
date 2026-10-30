# Luta do Elenco — combate 1.54

O combate passa a separar preparação, janela ativa e recuperação. O golpe acerta apenas na janela ativa, no lado para o qual foi iniciado e uma única vez. Um rival que entra no alcance durante essa janela pode ser atingido; golpes que erram precisam terminar a recuperação. A separação dos lutadores evita sobreposição no chão.

| Golpe | Preparação | Ativo | Recuperação | Alcance | Dano base |
|---|---:|---:|---:|---:|---:|
| Soco J / X | 90 ms | 100 ms | 190 ms | 1,45 m | 10 |
| Chute K / Y | 190 ms | 140 ms | 290 ms | 1,95 m | 16 |
| Especial L / RB | 280 ms | 200 ms | 360 ms | 2,60 m | 29 |

O buffer de 220 ms aceita um comando pouco antes da recuperação terminar. Um soco confirmado permite encadear chute; um chute confirmado permite encadear especial com energia cheia. Isso exige novo comando: segurar o botão não repete golpes. O segundo acerto causa 88% do dano base, e os seguintes têm redução adicional até o piso de 65%. Acertar alguém preparando um ataque causa três pontos adicionais de contra-ataque. Um pequeno congelamento local de impacto destaca o contato, sem alterar o relógio da cidade.

Shift / LB defende apenas de frente. A barra azul de resistência perde 16, 34 ou 70 pontos ao bloquear soco, chute ou especial. Socos defendidos não retiram vida; chute tira dois e especial cinco. Esgotar a resistência quebra a guarda por 850 ms e aplica o dano do golpe. Soltar a defesa regenera resistência. Não é possível atacar ou defender durante atordoamento.

Ctrl / B executa esquiva na direção pressionada, ou para trás se não houver direção. Dura 380 ms, tem intervalo de 850 ms e proteção apenas no trecho central; preparação e final continuam vulneráveis. Espaço / A pula. A/D / analógico movimentam. Esc / Start pausa.

A IA aproxima-se para a distância de ataque, recua se estiver perto demais, alterna socos/chutes, gasta especial com energia cheia e reage a ataques visíveis defendendo ou esquivando. As decisões têm intervalo de 230–370 ms, em vez de proteção instantânea constante. As poses de defesa, chute e esquiva são aplicadas após o banco de animações existente, evitando que ele sobrescreva a pose no mesmo quadro. O HUD mostra estado do lutador, resistência, acertos, defesa e quebra de guarda.

Permanecem seleção do elenco, rival selecionável, melhor de três rounds de 60 segundos, teclado, mouse nos menus e controle. O catálogo compartilhado distribui oito máquinas de luta pela cidade. A camada 28 e a textura 1024×576 continuam isoladas da cidade.

## Verificação

`FightingValidation152` / `--fight152-test` agora verifica também preparação sem dano, entrada tardia na janela ativa, resistência/quebra de guarda, escala do combo, recuperação de golpe errado, expiração e consumo do buffer, impossibilidade de atacar atordoado, proteção central da esquiva e separação dos corpos. A suíte mantém os testes de modelos, controle virtual, pausa, isolamento, nocaute, tempo e reabertura. Sua execução no player integrado cabe à validação da entrega conjunta.

O relatório `documentacao/validacao/1.54.0/Luta/core-tests.json` registra 18 verificações aprovadas do núcleo determinístico extraído dos métodos reais de combate, executado em .NET com adaptadores mínimos de matemática/pose. Esse teste antecipado não verifica renderização Unity, controle físico ou build web e não substitui a suíte no executável final.
