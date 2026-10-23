# NullStack 1.18.0 — modelos, efeitos, animais e HUD

Esta atualização troca representações primitivas por modelos externos selecionados e adaptados. Os arquivos integrados, fontes, autores, licenças, hashes e contagens de geometria estão em `NullStack-Unity/Assets/Resources/Imported118/catalog.json`. Os arquivos originais ficam preservados no backup privado.

## Conteúdo

- Veículos: picape, esportivo, scooter, moto, avião e biplano; táxi, viatura, ambulância e caminhão de bombeiros próprios para os serviços. O avião da faixa também usa modelo importado.
- Equipamentos: quatro modelos de armas, colete tático derivado do SWAT da Quaternius, mochila, celular, guarda-chuva, jornal, sacola, cigarro, faca, carteira, chave e alimentos.
- Personagens: policiais, clientes e passageiros, suspeitos, zumbis, lutadores e gelatina a partir de modelos externos. Os avatares pessoais fornecidos pelo proprietário conservam suas identidades.
- Cidade: fachadas, igreja, prefeitura, caixa-d'água, árvores, bancos, postes, quiosques, fonte, equipamentos da academia, piscina e objetos hospitalares. Escritório, lojas e café recebem mobiliário e objetos externos.
- Fauna: seis cachorros, seis gatos, oito pombos e quatro ratos. Usam as rotas de calçada, com limite de distância; ratos aparecem à noite e pombos levantam quando o jogador se aproxima. São fauna ambiente local, sem novo protocolo de combate ou adoção de animais.
- Efeitos: chuva, fogo, fumaça, explosão, clarão de disparo e impacto com texturas Kenney. Sirene CC0 de TitanKaempfer, luzes alternadas e áudio espacial nos veículos de emergência.
- HUD: o fechamento dos painéis descarta o deslocamento residual do mouse para evitar saltos de câmera. Arma equipada, proteção e vida, estrelas de procurado e aviso de dano. O símbolo de munição infinita corresponde à regra atual do jogo; esta atualização não inventa munição limitada. O colete também aparece no corpo.
- GPS dos serviços: caminho calculado sobre a rede de ruas, linha no mundo e traçado no minimapa. F4 conserva os destinos academia, piscina e refeição.

## Otimização e preservação

As malhas estáticas entram no mapa Blender por setores; personagens, animais, veículos, objetos coletáveis e efeitos permanecem dinâmicos. Os materiais de modelos são compartilhados e usam cores nos vértices. Texturas de efeitos ficam limitadas a 256 pixels. Disparos, explosões e impactos usam um conjunto reutilizado de até 24 efeitos; fogo e fumaça têm limites de partículas e distância.

A geometria de terreno, ruas, calçadas, rampas, colisões, letreiros de identidade e alguns detalhes arquitetônicos exclusivos continua própria: ela define o mapa e suas interações. Não se substitui o traçado de Viamão por um cenário genérico. Os modelos importados substituem os objetos visuais compatíveis; fontes e licenças registram adaptações, inclusive recorte de torso para colete e conversão de materiais.

Foram escolhidas alternativas gratuitas com licença identificada. Não houve compra de War FX, All In 1 VFX, UGUI MiniMap ou outros produtos citados como opções. Texturas importadas são combinadas com código e configurações de partículas do projeto.

## Medidas da geometria

O catálogo contém 102 modelos e adaptações: 119.918 → 97.682 triângulos (−18,5%). O mapa passou de 605.777 para 523.372 triângulos renderizados (−13,6%), conservando 328 setores e os 581 colisores de origem. São medidas de geometria, não uma promessa de FPS para qualquer computador. Os 17 avatares pessoais mantêm a redução conservadora da versão anterior: 226.693 vértices somados.

## Controles

- F1: controles completos; F3: garagem; F4: serviços e destinos.
- Q: sacar/guardar; 1–4: escolher arma; clique: disparar.
- E: interação e atendimento; G: chamar veículo quando disponível.
- M: mapa; P: celular; U: poder do personagem.

## Reconstrução

Unity 6000.6.6f1 e Blender 5.2 foram usados nos builds desta entrega. Os FBXs, materiais, configurações e cenas integrados permitem compilar sem baixar novamente os modelos. `Compilar-Fonte.ps1` aceita o caminho de outro editor compatível com `-Unity`.

Para refazer a conversão dos originais, execute Blender em segundo plano com `ferramentas-historia/preparar_assets_118.py`. Os arquivos originais devem estar nos caminhos registrados no catálogo. Para reconstruir o cenário desde a cena anterior à substituição, use `StoryBuilder.PrepareAssets118`, exporte `static-map.json` pelo gerador Blender e execute `StoryBuilder.Assemble`. Não reaplique a etapa de colocação sobre uma cena já modificada: restaure primeiro a cena-fonte de entrada revisada.

## Verificação e fotos

`ferramentas-historia/Validar-118.ps1` executa os testes dos assets, cidade, desafios, histórias pessoais, campanha e vozes, preservando o perfil nativo. `documentacao/validacao/1.18.0/Assets` contém imagens individuais dos modelos, seis efeitos, serviços, HUD, animais e locais da cidade. A galeria HTML e os relatórios dessa pasta registram o resultado final, sem apresentar capturas de desenvolvimento como validação aprovada.

Resultado nativo final: 323 verificações de assets, 38 da cidade, 45 dos desafios, 127 dos capítulos pessoais, 78 fases/353 objetivos e 406 verificações de voz/conversa. Corpos/câmera: 17 personagens e 1.152 casos. Combate, serviço de salas e três processos multiplayer aprovados. Há 124 fotos na galeria. O perfil nativo foi restaurado com conferência exata das entradas do Registro.
