# NullStack 1.27 — Diário do inexplicável

Oito mistérios opcionais foram espalhados pela cidade. Não bloqueiam a campanha nem os trabalhos. Abra **P → Segredos · diário de rumores** para consultar dicas e marcar a região de um rumor no GPS. O GPS aponta para a região, não para a pista exata.

Procure vestígios pequenos com brilho turquesa no chão. A poucos passos, pressione **E** (Xbox X / PlayStation Quadrado) para investigar. A pista indica uma aparição próxima. Aproxime-se dela, guarde a arma e **segure a mesma tecla por três segundos** para registrar a evidência. Interromper a observação reinicia a contagem. Faça isso a pé, fora de missões, corridas e modos arcade.

Alguns encontros acontecem apenas entre **20h e 5h**. É possível investigar suas pistas durante o dia; o diário avisa quando voltar. O ciclo de dia/noite continua funcionando. O anfitrião também mantém os controles existentes de horário.

## Rumores, sem coordenadas exatas

| Mistério | Região | Quando |
| --- | --- | --- |
| A última passageira | Terminal urbano | Noite |
| Pegadas impossíveis | Sítio São José | Qualquer horário |
| Sinal no reservatório | Largo / caixa-d'água | Noite |
| Olhos na praça | Praça Cônego Bernardo Machado | Noite |
| O boneco sem sombra | Florescente | Qualquer horário |
| Fragmento que pulsa | Passo do Vigário | Qualquer horário |
| O vigia do morro | Montanha Grande | Qualquer horário |
| Contato zero | Mirante sul | Noite, após registrar seis dos outros sete |

Os monstros e visitantes são encontros de observação e ambientação. Não são novos inimigos de combate. Movem-se suavemente em torno dos seus pontos de aparição, sem perseguir pedestres ou causar dano. O disco voador e seus tripulantes são cenários de descoberta, não veículos pilotáveis.

## Progresso e recompensas

Pistas e evidências são registradas separadamente por personagem. Cada descoberta rende reputação e um pagamento único no banco: de R$ 150 a R$ 300 nos primeiros sete casos e R$ 1.000 no encontro final. Registrar todos os oito concede mais R$ 1.500. Rever uma aparição não repete o pagamento.

O progresso acompanha os slots e o save portátil de **F8**, junto da carreira. Saves anteriores continuam válidos e iniciam com zero descobertas. A transferência Windows ↔ navegador continua por arquivo/código, sem nuvem automática. Na sala, comandos de proximidade, horário, tempo de observação e pagamento são validados pelo anfitrião; o perfil e o banco usam as mesmas regras de personagem da versão anterior. As aparições são exibidas conforme o progresso do próprio personagem: participantes podem estar em etapas diferentes.

Windows e web desta atualização usam **1.27.0 / nullstack-room-v17**. Não misture versões numa sala.

## Modelagem e desempenho

Os novos vestígios, monstros, aparições, cristais, discos e ETs são geometria original gerada pelo jogo, com cores por vértice. Reutilizam os sons de interface já licenciados; não houve download de novos assets. Não alteram os personagens existentes nem o mapa estático do Blender.

Cada local utiliza duas malhas combinadas, um material compartilhado e um shader simples. Sem luzes adicionais, colisores, IA ou script de atualização por criatura. A seleção por distância ocorre cinco vezes por segundo; o cache tem no máximo oito locais, apenas os dois mais próximos em um raio de 100 m ficam ativos e os encontros distantes ficam desativados. Somente as aparições próximas são animadas. As âncoras são verificadas contra a colisão final do mapa durante a compilação, não recalculadas por quadro.

As capturas e os testes em `documentacao/validacao/1.27.0` usam preparação de cenário para conferir cada descoberta, as regras de horário, o encontro final, pagamentos únicos e o save portátil. Não equivalem a uma campanha inteira jogada manualmente.
