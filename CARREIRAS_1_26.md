# NullStack 1.26 — Carreiras, patrimônio e equipe

## Como jogar

- **I**, ou celular → Mochila: inventário, carreira, garagem, imóveis e porta-malas.
- **F9**, ou celular → Recarregar arma: transfere munição da mochila para o carregador; recarga leva 1,4 s. O HUD mostra carregador / reserva. Modos arcade preservam a munição ilimitada.
- **X**, ou celular → Cobertura: encoste numa parede. O personagem agacha e se move ao longo dela; X novamente solta a cobertura. Ctrl continua agachando livremente.
- **F4**: trabalhos. O GPS leva primeiro ao veículo de serviço quando ele é necessário e depois à parada. Estacione e use E conforme a instrução; atendimento e portas exigem segurar E.
- **F8**, ou celular → Salvar / transferir: três slots locais, backup automático, código e arquivo portátil.

Teclado, mouse, Xbox e PlayStation continuam disponíveis. As novas telas usam a navegação de menus por controle e também aparecem no celular. A abertura de um seletor de arquivo e a transferência entre computadores/navegadores usam os recursos do sistema ou o código copiável.

## Inventário e economia

A mochila comporta 24 kg: seis tipos de munição, kit médico, lanche, colete, kit de reparo, kit de refrigeração, sementes, materiais e documento. A compra exige estar numa loja, restaurante ou ponto comercial do Centro. Consumíveis têm verificação de quantidade, proximidade e estado; peças de reparo não recuperam veículos explodidos. Sementes, materiais e documentos podem ser carregados, soltos e armazenados; os contratos atuais fornecem os insumos necessários e não os consomem da mochila.

Objetos soltos podem ser recolhidos perto do personagem. Há no máximo 24 objetos temporários por sala, com duração de cinco minutos. O porta-malas de um veículo próprio parado aceita 60 kg; veículos roubados e emprestados não são armazenamento próprio.

Cada um dos 11 trabalhos tem XP separado: 40 XP por conclusão, nível a cada 100 XP e limite de nível 5. Cada nível acrescenta 20% ao pagamento base. O pagamento ocorre ao concluir o contrato, sem duplicação por repetir a interação final. Metas de primeiro trabalho, especialização, primeiro veículo comprado e primeiro imóvel dão bônus únicos. O banco preserva a conta por personagem já existente no jogo; numa sala, essa conta pertence ao livro do anfitrião, inclusive quando dois participantes escolhem o mesmo personagem.

## Veículos e imóveis

A garagem do Centro, do terminal e de um imóvel permite comprar, retirar, guardar e recuperar veículos próprios. A caminhonete inicial pertence ao personagem. Cada tipo pode ser comprado uma vez por personagem; os serviços emprestam o veículo adequado e roubos continuam provocando perseguição.

Vida, posição, pintura, preparação, aerofólio e porta-malas são salvos. O veículo próprio ativo reaparece após carregar o perfil; se a posição estiver ocupada, a retirada procura um ponto livre próximo na rua. Veículos guardados na garagem aguardam retirada. Um veículo destruído exige seguro, custando 10% do preço, com mínimo de R$ 100. Compras e retiradas são validadas pelo anfitrião; não é possível retirar outro veículo dirigindo ou durante perseguição.

Há três objetivos de patrimônio: quarto e garagem no Centro (R$ 1.800), casa em São Lucas (R$ 4.500) e oficina com garagem (R$ 9.000). São propriedades econômicas e pontos de garagem persistentes; esta atualização não cria interiores residenciais novos.

## Polícia, navegação e piscina

A polícia registra a última posição conhecida, verifica visão e obstáculos e busca nessa região quando perde contato. Agachar e usar cobertura diminuem a distância de detecção. Trocar roupa ou veículo fora de vista ajuda a despistar; a mudança não torna o jogador invisível diante de um policial. Guardar a arma e render-se a um policial próximo encerra a busca com multa.

Pedestres, policiais e inimigos usam desvio local e buscas de caminho limitadas por quadro. O tráfego verifica obstáculos à frente e tenta retornar quando bloqueado; colisões de veículos jogáveis usam passos menores e intervalo entre danos repetidos. O GPS distingue percursos a pé e de veículo. Os pontos de transporte procuram área livre suficiente para veículos maiores.

A piscina tem abertura física, fundo, rampa contínua de entrada e saída e câmera limitada acima da água. A animação de natação tem prioridade sobre a pose de arma; disparos ficam bloqueados na água.

## História cooperativa, escolhas e cutscenes

Entre no círculo dourado da missão. Num grupo, **o anfitrião inicia a história sem desmontar a sala**; os demais participantes são reunidos no início. Um participante que entrar depois também aparece perto da equipe. Interações, coleta, transporte, resgate, combate e defesa são processados pelo anfitrião; objetivos e inimigos são replicados. Tiros entre membros da equipe não causam dano durante a história. A derrota acontece quando toda a equipe é derrubada.

O anfitrião controla conversas, respostas e escolhas. Nas missões com confronto comum depois do tutorial, escolha aproximação discreta ou direta. A discreta substitui confrontos comuns por neutralização de terminais e concede mais reputação e kit médico; a direta mantém combate e concede mais dinheiro e munição. Chefes mantêm suas mecânicas. A decisão fica salva por missão; recompensas de conclusão são concedidas uma vez por personagem.

As missões têm apresentação com câmera no cenário, contato, contexto e objetivo, além de encerramento. A apresentação vista fica registrada; a equipe recebe o tempo da cutscene pelo anfitrião. Enter / A pula a apresentação. São sequências no mundo do jogo usando os cenários e personagens existentes, sem vídeos externos.

## Salvamento Windows ↔ navegador

Exporte o arquivo JSON ou copie o código em F8, leve para a outra plataforma e importe fora de salas, missões e modos arcade. No navegador há um seletor de arquivo; no Windows o arquivo exportado fica no diretório persistente do jogo, indicado na tela, e a importação também aceita o código. A substituição tem confirmação e preserva um backup anterior.

O pacote contém campanha, escolhas, dinheiro, perfis dos personagens, inventário, carreira e veículos. O importador verifica formato, limites e checksum antes de modificar o progresso. O checksum detecta corrupção, não constitui autenticação nem proteção contra edição voluntária. Slots e backups são locais: **não há conta, sincronização automática em nuvem nem recuperação em outro navegador sem transferir o arquivo/código**. Dados temporários como perseguição, contrato em andamento e objetos largados não fazem parte do save portátil. O perfil próprio recebido da sala é preservado ao sair; o anfitrião continua sendo a autoridade durante a sessão.

Windows e web devem usar 1.26 e protocolo `nullstack-room-v16`. Não misture executáveis de versões anteriores na mesma sala.

## Assets e desempenho

Reutiliza modelos, texturas, sons e as 84 animações já integradas, preservando suas licenças e as malhas otimizadas da versão anterior. Não houve necessidade de novos downloads. Busca de caminhos tem orçamento compartilhado; itens temporários têm limite e materiais/modelos são reutilizados. A abertura da piscina é processada uma vez, com deduplicação dos vértices resultantes; não há reconstrução de malha por quadro. No multiplayer são enviados os oito lançamentos bancários mais recentes por conta; o livro local mantém até 40.

Os resultados e capturas da validação ficam em `documentacao/validacao/1.26.0`. Consulte os relatórios finais para distinguir testes de regras com preparação de cenário, movimentação física e verificações no navegador.
