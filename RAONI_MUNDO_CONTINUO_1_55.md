# Raoni — A mata em um único mapa

A aventura ocupa um território contínuo de **1.440 × 1.440 metros**, com morros, serra, quatro lagos interiores, rios, mangue e litoral. Os doze capítulos mantêm o roteiro e os desafios, mas seus lugares ficam espalhados pela mata. Ao terminar um capítulo, escolha **Seguir pela mata**: Raoni continua no mesmo ponto e percorre a trilha até o próximo lugar. O terreno e o personagem permanecem os mesmos.

Há caminhos de terra entre os locais e dezesseis memórias opcionais longe das clareiras principais. Recolha uma memória com **E** para receber 50 pontos e recuperar uma unidade de vida. As descobertas ficam salvas por personagem neste dispositivo.

**M** abre o mapa completo; o mapa menor mostra Raoni e os locais da história. O lugar atual aparece em amarelo e Raoni, em branco. As memórias ainda não encontradas aparecem como pontos verdes no mapa completo. O botão direito do mouse gira a câmera; a roda aproxima e afasta. No controle, o analógico direito gira a câmera. WASD/analógico esquerdo movem Raoni, Espaço/botão de salto pula e Shift/comando de corrida corre. As armas e habilidades anteriores continuam disponíveis conforme a história.

Antes de receber o fôlego de Iara, siga margens e pedras seguras: entrar em água funda custa vida e devolve Raoni à margem. Depois, nade pelos lagos e mergulhe com Ctrl/comando de mergulho. Troncos e pedras sólidos permitem deslizar pelos lados; folhas e arbustos são decorativos.

A floresta usa os modelos e texturas já integrados de Kenney e ambientCG, com licenças CC0 preservadas em `Licencas/Arcade153` e `Licencas/Landscape152`. Vegetação próxima usa os modelos detalhados; copas distantes usam uma representação simplificada. O terreno é dividido em blocos e sua altura de movimento corresponde às mesmas faces visíveis. Céu, névoa, água animada e vento são locais ao fliperama; a serra recebe uma atmosfera mais escura para a prova de Anhangá e as lanternas.

Capítulos concluídos e descobertas são salvos. Ao continuar durante uma travessia, a posição válida na trilha pode ser retomada; uma missão parcialmente concluída recomeça no ponto seguro do capítulo. Reiniciar um capítulo não recria a mata. Sair do fliperama devolve o personagem da cidade ao lugar e estado em que estava.

## Verificação da integração

O código e os testes específicos estão em `RaoniWorld156`, `RaoniOpenWorld156` e `RaoniWorldValidation156`. A validação cobre travessia real, manutenção da mesma instância de terreno e personagem, correspondência entre terreno e movimento, natação, limites, recuperação de posição inválida, colisões, orçamento de desenho, armas sem duplicação, descobertas e retorno à cidade. A suíte da campanha preserva os objetivos dos doze capítulos. Resultados executados e capturas acompanham a entrega conjunta; um teste Mono com shaders antigos é apenas protótipo, sem comprovação visual final.
