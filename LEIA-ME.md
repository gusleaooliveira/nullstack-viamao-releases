# Rádio, missões na cidade e trabalhos — 1.22.0

Entre em **Jogar sozinho** e procure os círculos dourados da história. Caminhe até um círculo para iniciar a missão liberada. O celular tem **GPS da próxima história**. Ao concluir uma fase, você retorna à cidade; o próximo contato fica disponível, com checkpoints e progresso preservados. As histórias continuam individuais; os trabalhos também podem ser usados nas salas desta versão.

No celular (**P**), abra **Rádio**: 33 faixas editadas das 17 trilhas Suno existentes, seleção de faixa, ligar/desligar e volume em **Áudio e controles → Música**. A trilha da história tem prioridade. Groove Salad e Drone Zone abrem o player oficial da SomaFM no navegador; a transmissão ao vivo é reproduzida por esse player. Feche ou pause o player ao voltar à música local. Não foram geradas músicas novas nesta atualização.

**F4** abre os trabalhos. Escolha uma atividade, siga o GPS e cumpra as etapas. **E** atende; quando indicado, mantenha E pressionado. Pare completamente os veículos antes de atender. O pagamento ocorre somente na conclusão, e cancelar não paga.

| Trabalho | Etapas |
|---|---|
| Caminhoneiro | Carregar, transportar e descarregar a carga |
| Ônibus | Embarcar, atender duas paradas e desembarcar no terminal |
| Fazendinha | Preparar canteiros, plantar, regar e colher |
| Mercado | Buscar caixas, repor, atender o caixa e entregar a compra |
| Mecânico | Inspecionar, buscar ferramentas, reparar motor, trocar roda e testar |
| Construção | Buscar materiais, descarregar, construir paredes, instalar cobertura e entregar |

Continuam os serviços de Uber, iFood, polícia, bombeiros e ambulância. A casa aparece pronta ao concluir a entrega. As tarefas são ciclos curtos de trabalho, com cenários e ferramentas próprios.

Claude e Carl Johnson (CJ) são **recriações estilizadas originais**, modeladas no Blender para este projeto, sem extrair arquivos dos jogos da Rockstar. Não são os modelos oficiais. Ambos têm esqueleto corporal de 23 ossos e mãos com dedos articulados. O catálogo passa a 19 personagens. As malhas originais têm cerca de 1,3 mil vértices cada, antes das separações de UV na importação.

Integra 42 animações adicionais do **Quaternius Universal Animation Library 2 Standard**, sob CC0, totalizando 84 clipes compartilhados e compactados. Plantio, rega, colheita, transporte de objetos, reparos e um novo gesto usam esse sistema. Os cenários, ferramentas, caminhão e etapas da casa foram produzidos no Blender, com atlas compartilhado e atualizações visuais limitadas a 10 Hz. As músicas usam referências compartilhadas e liberam o áudio sem uso.

Cada build gera uma notícia da versão. A publicação distribui `updates.json` e executa `ferramentas-historia/Publicar-Noticias.ps1`, que publica e verifica a notícia na API existente, alcançando também jogadores de versões anteriores que consultam essa API. Publicar novamente o mesmo texto não altera sua data nem gera um novo aviso. A leitura fica salva localmente. Quem está offline recebe as novidades disponíveis ao voltar a se conectar.

Windows e web usam o protocolo `nullstack-room-v15` e o mesmo catálogo desta versão. Versões com catálogos diferentes devem ser atualizadas para jogar juntas. Teclado, mouse e controles Xbox/PlayStation continuam disponíveis; os testes automatizados de controles usam dispositivos virtuais.

Fontes: [animações Quaternius](https://quaternius.com/packs/universalanimationlibrary2.html), [termos SomaFM](https://somafm.com/contact/tos.html), [Groove Salad](https://somafm.com/groovesalad/), [Drone Zone](https://somafm.com/dronezone/). A procedência das músicas permanece no catálogo `Audio/StoryMusic/catalog.json`.


Novidades 1.22.0: leia EXPANSAO_1_22.md. Áudio: AUDIO_CONTROLES_1_21.md. Animações: RIGS_1_20.md. Texturas: TEXTURAS_1_19.md. Assets e efeitos anteriores: leia ASSETS_1_18.md para modelos, efeitos, animais, HUD e GPS. Leia MODOS_1_16.md para Zumbi, Beat em up, armas, garagem e missões. Histórias: HISTORIAS_PERSONAGENS_1_15.md. Procure os círculos dourados para iniciar histórias liberadas, ou marque um contato pelo celular. Banco: BANCO_1_12.md. Cidade viva: CIDADE_VIVA_1_11.md. Poderes: PODERES_1_10.md.
