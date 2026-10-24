# NullStack Viamão 1.30 — Login conectado

Abra Conta e nuvem (F10). Use Entrar com Google ou Entrar com GitHub quando o servidor disponibilizar o provedor. Confira o mesmo código no jogo e no navegador antes de continuar. No Windows abre o navegador padrão; na web clique no link Abrir login seguro. Ao concluir, volte ao jogo e escolha continuar o progresso da nuvem ou enviar o deste dispositivo.

Quem já tem conta e progresso deve entrar nela primeiro e usar Vincular Google/GitHub. Não há união automática por e-mail. Um provedor vinculado a outra conta será recusado, sem alterar saves. Os secrets ficam apenas no Railway. O login Google não solicita mensagens do Gmail; GitHub não solicita acesso a repositórios. A sessão do jogo dura até fechar o programa; continuar sem conta e os backups locais permanecem disponíveis.

As senhas locais usam Argon2id (32 MiB, 3 passagens, paralelismo 1); hashes antigos são migrados após login válido. OAuth usa PKCE, confirmação por código, estado de uso único, validade de dez minutos e sessão própria do jogo. Tokens dos provedores não são armazenados. O Google ainda pode restringir acesso aos usuários de teste conforme configuração do proprietário; botões indisponíveis indicam provedor não configurado.

Os modos Zumbi e Beat em up mantêm suas regras e usam painéis reorganizados. A mira reutiliza um buffer de impactos, preservando a precisão em cenas densas. Inimigos desativados deixam de atualizar; personagens reutilizam o prefab do rig e fliperamas usam renderizadores em cache. Nenhum mapa ou modelo Blender mudou nesta atualização.


Novidades 1.30.0: leia LOGIN_1_30.md. Carreiras: CARREIRAS_1_26.md. Corridas e personalização: EXPANSAO_1_23.md. Assets e efeitos anteriores: leia ASSETS_1_18.md para modelos, efeitos, animais, HUD e GPS. Leia MODOS_1_16.md para Zumbi, Beat em up, armas, garagem e missões. Histórias: HISTORIAS_PERSONAGENS_1_15.md. Entre nos círculos dourados para iniciar histórias liberadas. Banco: BANCO_1_12.md. Cidade viva: CIDADE_VIVA_1_11.md. Poderes: PODERES_1_10.md.
