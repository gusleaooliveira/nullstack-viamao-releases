# Cidade e serviços — 1.17.0

Entre em **Jogar solo** ou numa sala do modo livre. As novas atividades não interferem nos desafios Zumbi/Beat nem nos objetivos da história.

- **F4** abre os cinco serviços: passageiro Uber, pedido iFood, abordagem policial, incêndio e ambulância. O GPS indica direção e distância; cada chamado dura quatro minutos e paga no banco. Pare para embarcar/entregar com **E**. Bombeiro e ambulância exigem sair do veículo e segurar **E** perto da ocorrência. Transporte passageiro, detido e paciente no veículo até o destino; a ambulância entrega no novo posto de saúde.
- **E** próximo de um carro ou moto do trânsito permite roubá-lo. O antigo veículo sai do trânsito compartilhado e vira seu veículo dirigível; isso aumenta a procura policial. Aproxime-se da lateral, sem ficar na frente do tráfego. **E** sai quando o veículo está parado.
- Colisões e tiros reduzem a integridade dos veículos. Abaixo de 25/100 eles pegam fogo e explodem após oito segundos. Saia e se afaste: a explosão causa dano em área. Os carros do trânsito também recebem dano.
- Atropelamentos usam o trajeto percorrido entre frames: em velocidade alta podem matar. Pedestres mortos ficam caídos até encerrar/trocar a sessão, sem a antiga recuperação de cinco segundos.
- Civis alternam caminhada, conversa, telefone, jornal, sacolas, cigarro, banco, porta-malas e reparo de motor. Chuva faz abrir guarda-chuvas ou procurar abrigo. Ameaças provocam fuga, agachamento, gravação e denúncia; alguns revidam com faca ou arma. Tentativas autônomas de assalto/roubo ocorrem periodicamente, quando há participantes disponíveis.
- A polícia faz perseguição a pé e pode atirar. As estrelas desaparecem depois de permanecer fora de sua visão. Isso é uma simulação inicial de cidade, com rotinas curtas e população limitada, e não uma IA social sem limites.
- Há **30 paredes** para pichar com **E**, **8 coletes** e **8 armas escondidas**. Os objetos são compartilhados na sessão; reiniciar/trocar a sala repõe os itens. O colete absorve parte do dano. As quatro armas anteriores continuam disponíveis nas teclas 1–4.
- **F4 → GPS academia/piscina/refeição** ajuda a encontrar os novos locais. Na academia, **E** inicia um treino de agachamentos de 20 segundos. Refeições aumentam peso e restauram vida; correr reduz peso. Condicionamento e peso alteram a velocidade e são salvos por personagem. A largura do corpo acompanha a mudança de peso.
- A piscina estática tem fundo, bordas, rampa e água exportados pelo Blender. Dentro dela, **WASD** nada; **Espaço** sobe para alcançar a borda. Natação ocorre nessa área de água, sem alterar o limite externo do mapa.

## Desempenho e autoria

Mapa estático em 328 setores do Blender, decisões de civis/polícia a 5 Hz, chuva em um emissor local limitado a 550 partículas, materiais compartilhados e acessórios ocultos à distância. Modelos de personagens: redução conservadora no corpo, proteção de rosto/mãos e rejeição de alterações excessivas da superfície. Relatório geométrico e atlas frente/costas em `documentacao/validacao/1.17.0/`. Efeito de explosão sintetizado pelo projeto; nenhuma nova dependência de áudio externa.

Windows e navegador devem usar **1.17.0 / protocolo v15**. O anfitrião controla dano, veículos, pedestres, polícia, coletáveis e chamados; clientes enviam comandos validados por distância e estado.
