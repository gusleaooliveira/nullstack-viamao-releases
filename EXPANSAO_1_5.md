# Viamão 1.5 — salas online e atividades

## Entrar na mesma sala no Windows e no navegador

Todos precisam estar na versão 1.5.0. Abra **F2**, escolha seu personagem e clique em **Criar sala online**. Compartilhe o código de oito caracteres. Os amigos digitam esse código em **Entrar na sala online**, tanto no Windows quanto na versão web.

O anfitrião mantém o jogo aberto e transmite o mundo. Não é necessário encaminhar portas no roteador. As salas são temporárias; uma interrupção prolongada encerra a conexão. A qualidade depende da internet do anfitrião e dos jogadores. A conexão por IP continua disponível no Windows.

Serviço: https://nullstack-viamao-salas.classyray67.chatgpt.site

## Controles

| Ação | Controle |
| --- | --- |
| Andar / correr / pular | WASD ou setas / Shift / Espaço |
| Girar a câmera | Mover o mouse; clique no jogo para capturar o cursor |
| Distância da câmera | C alterna perto, médio e longe; roda ajusta |
| Olhar para trás | Segurar o botão do meio do mouse |
| Liberar o cursor | Esc; V também alterna a captura |
| Celular | P |
| Portas e provador | E |
| Beber, comer ou fumar | B, conforme o personagem |
| Diogo / Diego: foto | K ou botão no celular |
| Diogo / Diego: iniciar/parar vídeo | J ou botão no celular |
| Arma / disparo / soco | Q / clique esquerdo / F |
| Ônibus | H, junto à parada com o ônibus parado |

## Passeata e interiores

O celular tem o botão **Iniciar passeata**. Vinte e quatro participantes chegam a uma rota de pedestres próxima. O mesmo botão encerra a passeata. O estado é compartilhado com a sala.

O mapa M inclui entradas para o escritório Cria, duas lojas de roupas (Centro e São Lucas) e um café. Aproxime-se da porta e pressione E. Dentro da loja, E abre o provador; também há um botão no celular. Escolha entre roupa original e quatro combinações. Os jogadores veem a roupa selecionada. A troca vale para a sessão e volta ao original ao trocar de personagem. E próximo à saída retorna à cidade.

## Personagens e avião

- Igor: cochila após 25 segundos sem atividade, com intervalo mínimo de 90 segundos entre cochilos. Acorda com movimento ou outra tecla; o cochilo dura no máximo 12 segundos. Menus, celular, ônibus e direção impedem o cochilo.
- Luiz: pacote de batatas e animação de comer.
- Gustavo: come o xis que já carrega.
- Matheus (as duas versões): ação de fumar, com cigarro e fumaça.
- Diogo / Diego: único personagem, com foto e gravação da cena do jogo.
- Avião: sobrevoo recorrente, hélice animada e faixa baseada na imagem fornecida, preservada no projeto.

As fotos são PNG. No Windows, os vídeos são AVI MJPEG (640 × 360, até 30 segundos, sem áudio), na pasta de dados do jogo, subpasta **Diogo/Galeria**. No navegador, fotos e vídeos WebM são baixados pelo navegador; os vídeos também têm limite de 30 segundos e não gravam microfone. Use Chrome ou Edge atualizado.

## Implementação e limites

O serviço HTTPS de salas transmite comandos e o último estado do mundo; o anfitrião valida a identidade do jogador e as ações. Cada conexão recebe um token aleatório temporário. Comandos têm confirmação e controle de repetição. Nenhuma chave de publicação está no jogo.

As fachadas, interiores, roupas adicionais e avião são modelos simples criados para este mapa artístico. Os interiores não representam plantas reais dos estabelecimentos. O relevo e o perímetro existentes foram preservados.
