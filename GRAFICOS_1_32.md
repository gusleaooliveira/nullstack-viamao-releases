# Gráficos e pedestres — 1.32

Correção do eixo vertical do jogger e das cores ausentes em modelos NPC. Cores de pele, roupas e cabelo são mantidas na malha; partes compatíveis compartilham um único renderer por corpo. A geometria e as texturas dos personagens são preservadas.

F7 alterna Econômico, Equilibrado (padrão) e Detalhado. O acabamento usa uma única passagem de suavização de bordas e cor; o modo econômico a desliga. Sombras têm alcance limitado e luzes locais não geram sombras. Animações fora do campo da câmera são avaliadas com intervalo maior, preservando a simulação e a visibilidade ao voltar.

O céu fica vinculado à câmera principal; a neblina termina perto do alcance real do mapa. Mantém os modelos de veículos e as seis armas da 1.31, personagem oculto ao embarcar, tiro combinado com deslocamento, 40 carros, 64 pedestres e sete prédios de missão. Créditos em CREDITOS_1_31.md; nenhuma licença foi alterada.

GitHub no Railway: GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET e PUBLIC_BASE_URL=https://nullstack-viamao-salas-production.up.railway.app. Callback: https://nullstack-viamao-salas-production.up.railway.app/api/oauth/github/callback. NODE_ENV=production; DATABASE_URL permanece no PostgreSQL existente. Secrets somente nas variáveis do serviço.

Compilar: python ferramentas-historia/compilar_132.py windows web. Testar: python ferramentas-historia/validar_132.py Pedestres Melhorias Armas Sistemas Otimizacao Campanha Salas --clean-profile. Resultados e limites são registrados em documentacao/validacao/1.32.0.
