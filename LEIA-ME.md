# NullStack 1.27.1 — Orientação de Claude e Carl Johnson

Claude e CJ estavam virados de costas em relação ao eixo de movimento, ao esqueleto e à mira. A geometria dos dois modelos agora recebe rotação de 180° no eixo vertical antes da montagem do rig. O eixo do jogador e das armas continua o mesmo; não há inversão de controles nem de câmera.

A criação do modelo foi centralizada para aplicar a mesma correção ao personagem local, aos jogadores remotos, à prévia de seleção e aos retratos das conversas. Os demais personagens mantêm a orientação anterior. Não houve substituição de texturas ou modelos, espelhamento, aumento de vértices ou alteração das licenças.

Os oito mistérios e todo o progresso da 1.27 continuam disponíveis. Windows e navegador devem usar os pacotes 1.27.1 na mesma sala, protocolo nullstack-room-v17. Consulte SEGREDOS_1_27.md e CARREIRAS_1_26.md para os demais sistemas.

Os testes registram frente, costas, caminhada, arma e retrato de cada personagem e conferem deslocamento, orientação do corpo em relação ao movimento e à mira e vínculo das mãos aos pulsos. Os testes anteriores de malhas e armas verificam regressões. O executor preserva e restaura o perfil Windows original. Não equivale a uma campanha completa jogada novamente.

As vistas isoladas de frente e costas usam os modelos normalizados no editor, sem animação, para evitar obstruções por veículos e outros objetos. Caminhada, mira e vínculos das mãos são verificados no executável; os retratos usam o renderizador de conversa do jogo.


Novidades 1.27.1: leia ORIENTACAO_1_27_1.md. Carreiras: CARREIRAS_1_26.md. Corridas e personalização: EXPANSAO_1_23.md. Assets e efeitos anteriores: leia ASSETS_1_18.md para modelos, efeitos, animais, HUD e GPS. Leia MODOS_1_16.md para Zumbi, Beat em up, armas, garagem e missões. Histórias: HISTORIAS_PERSONAGENS_1_15.md. Entre nos círculos dourados para iniciar histórias liberadas. Banco: BANCO_1_12.md. Cidade viva: CIDADE_VIVA_1_11.md. Poderes: PODERES_1_10.md.
