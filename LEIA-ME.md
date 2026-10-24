# NullStack 1.28 — Railway e PostgreSQL

Salas: https://nullstack-viamao-salas-production.up.railway.app/api/room

Notícias e anúncios: https://nullstack-viamao-salas-production.up.railway.app/api/content

Fonte da API: https://github.com/gusleaooliveira/nullstack-viamao-salas, branch main. Fonte Unity: https://github.com/gusleaooliveira/nullstack-viamao-jogo. Web permanece no GitHub Pages; Windows e web 1.28 usam a mesma API e protocolo nullstack-room-v17.

## Railway

Serviço nullstack-viamao-salas e banco Postgres-dCYV, no mesmo projeto. O Dockerfile na raiz instala apenas as dependências da API e inicia Node em 0.0.0.0:$PORT. Sem comando adicional do Wrangler. Variáveis da API:

```text
DATABASE_URL=${{Postgres-dCYV.DATABASE_URL}}
NODE_ENV=production
CONTENT_ADMIN_KEY=<segredo configurado diretamente no Railway>
```

PORT é fornecida pelo Railway. Nenhuma senha ou chave vai para o jogo, Git ou backup. Não é necessário implantar o fonte Unity no Railway.

## Dados e compatibilidade

As tabelas e índices PostgreSQL são criados automaticamente, de forma idempotente. Transações usam o mesmo cliente, com bloqueio por sala e por conteúdo. Preserva tokens, limites, mensagens sem duplicação, confirmação de recebimento, estado e CORS.

As salas antigas são temporárias e devem ser recriadas na nova API. O D1 antigo não é convertido automaticamente. O feed público de notícias já disponível no jogo é preservado no PostgreSQL, sem sobrescrever registros existentes; anúncios exclusivos do serviço antigo exigem exportação. O acesso público direto ao endpoint antigo retornou 403 nesta migração. Não alteramos sua autenticação.

Os saves continuam locais, transferíveis por arquivo/código; esta mudança não adiciona contas ou sincronização de saves em nuvem. Personagens, mapas, assets, licenças, missões e os oito mistérios anteriores são preservados.

## Reconstrução

Unity 6000.6.6f1. Fonte canônico NullStack-Unity. Compile com `python ferramentas-historia/compilar_128.py windows web`. Valide com `python ferramentas-historia/validar_128.py Salas Orientacao Otimizacao Armas`. O validador restaura o perfil Windows após os testes.

API: veja RAILWAY.md no repositório de salas. Os testes locais usam PostgreSQL real isolado; em produção não revelam nem modificam a chave administrativa. Resultados e limites efetivamente verificados ficam em documentacao/validacao/1.28.0.


Novidades 1.28.0: leia RAILWAY_1_28.md. Carreiras: CARREIRAS_1_26.md. Corridas e personalização: EXPANSAO_1_23.md. Assets e efeitos anteriores: leia ASSETS_1_18.md para modelos, efeitos, animais, HUD e GPS. Leia MODOS_1_16.md para Zumbi, Beat em up, armas, garagem e missões. Histórias: HISTORIAS_PERSONAGENS_1_15.md. Entre nos círculos dourados para iniciar histórias liberadas. Banco: BANCO_1_12.md. Cidade viva: CIDADE_VIVA_1_11.md. Poderes: PODERES_1_10.md.
