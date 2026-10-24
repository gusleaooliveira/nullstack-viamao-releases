# 1.29 — Sua conta, sua cidade

## Entrar e continuar

Abra **Conta e nuvem** no menu, ou pressione **F10**. Crie um usuário (3–24 letras, números, ponto, hífen ou `_`) com senha de pelo menos 15 caracteres. Guarde o código de recuperação mostrado no cadastro: ele permite recuperar acesso sem e-mail e é substituído após cada recuperação.

Na primeira conta, escolha **Enviar progresso deste dispositivo** e confirme. Para continuar em outro Windows ou navegador, entre na mesma conta e escolha **Continuar com o progresso da nuvem**. O carregamento fica disponível fora de salas, missões e modos arcade. Antes de substituir o progresso local, o jogo preserva um backup em F8 → Recuperar backup anterior.

Personagem, nome, aparência, história/checkpoints, banco, dinheiro, mochila, carreira dos trabalhos, garagem, propriedades e descobertas acompanham o save. A posição externa é retomada quando segura; interiores retornam ao acesso da cidade. Missões retomam seus checkpoints pelos marcadores. O servidor guarda o progresso no PostgreSQL privado do Railway.

Após escolher o progresso, o jogo salva automaticamente a cada 60 segundos e agenda uma sincronização após checkpoints e mudanças de personagem. O envio funciona no modo solo e nas salas, usando o progresso local do jogador; os minigames arcade não entram nesse save. F10 também permite envio manual. Ao sair da conta, o jogo tenta salvar primeiro. Aguarde a confirmação antes de fechar; fechar abruptamente pode perder as alterações posteriores ao último envio.

Se outro dispositivo salvar primeiro, a sincronização pausa: atualize o progresso disponível e escolha continuar da nuvem ou confirmar o envio local. Não há sobrescrita silenciosa. Se a rede falhar, o progresso local permanece disponível. O modo convidado e os arquivos/códigos de F8 continuam funcionando.

A sessão fica somente na memória do jogo: entre novamente depois de fechar o programa. A senha nunca é gravada nos arquivos do jogo; no servidor usa scrypt com salt individual. Sessões e códigos de recuperação são armazenados como hashes. Recuperar acesso revoga as sessões anteriores. As últimas três revisões anteriores do save são conservadas no banco.

## HUD e fliperamas

HUD com painéis escuros arredondados, verde-água para vida/dinheiro, colete contextual, munição agrupada, minimapa e estado da nuvem. Avisos não aparecem sobre a tela de conta; os controles completos continuam em F1.

São **24 fliperamas, em oito locais**, indicados por pontos roxos no mapa M. Máquinas originais modeladas no Blender, com atlas compartilhado e 340 triângulos por máquina, colisão sólida e descarte visual por distância. Estão sinalizadas **EM BREVE**. Não possuem jogos ou cobrança; os jogos serão definidos posteriormente.

O arquivo `mapa-blender/NullStack-Viamao.blend` contém a coleção `FLIPERAMAS_129`. A geometria adicional é exportada separadamente para `Resources/Arcade129`; a malha base da cidade permanece preservada. O layout passou por verificação de espaço livre contra os colisores do mapa.

## Railway e reconstrução

Mesmo projeto, serviço `nullstack-viamao-salas` e banco `Postgres-dCYV`. Nenhuma nova variável é necessária: mantenha `DATABASE_URL` com referência ao banco, `NODE_ENV=production`, `CONTENT_ADMIN_KEY` privada e `PORT` da plataforma. As migrações criam as tabelas adicionais sem apagar salas ou conteúdo existentes.

APIs HTTPS: `/api/account` e `/api/save` em `https://nullstack-viamao-salas-production.up.railway.app`. Fonte do backend em `gusleaooliveira/nullstack-viamao-salas`; instruções em `RAILWAY.md`. API de conteúdo e protocolo `nullstack-room-v17` preservados. Use Windows e web 1.29 juntos.

Unity 6000.6.6f1: `python ferramentas-historia/compilar_129.py windows web`. Testes com perfil limpo e restauração exata do perfil original: `validar_129.py Nuvem --clean-profile` e regressões em `documentacao/validacao/1.29.0`. Credenciais de testes e saves particulares ficam fora do Git e dos backups. O backup do código no Drive não é um dump das contas de produção.


Novidades 1.29.0: leia NUVEM_1_29.md. Carreiras: CARREIRAS_1_26.md. Corridas e personalização: EXPANSAO_1_23.md. Assets e efeitos anteriores: leia ASSETS_1_18.md para modelos, efeitos, animais, HUD e GPS. Leia MODOS_1_16.md para Zumbi, Beat em up, armas, garagem e missões. Histórias: HISTORIAS_PERSONAGENS_1_15.md. Entre nos círculos dourados para iniciar histórias liberadas. Banco: BANCO_1_12.md. Cidade viva: CIDADE_VIVA_1_11.md. Poderes: PODERES_1_10.md.
