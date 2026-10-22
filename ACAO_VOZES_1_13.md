# Ação, campanha e vozes — 1.13.0

## Atirar dirigindo

Entre no carro, use Q para sacar/guardar a arma e clique esquerdo para disparar. A mira acompanha a câmera; mova o mouse para apontar. WASD continua dirigindo durante o disparo e Espaço freia. E sai quando o veículo está parado. A animação mantém uma mão no volante e outra com a arma. Também funciona no jegue. Ônibus não permite armas; a caçada continua impedindo Igor de usar arma, mesmo no veículo. O anfitrião valida a ação e a direção da mira. Todos os participantes devem usar o protocolo v13.

## Campanha mais difícil

O prólogo P01 mantém vida/dano e imunidade de treinamento. Depois dele, cada encontro comum tem mais um inimigo (até oito), vida aumenta 25% mais 1% por nível da missão (máximo 20%) e o dano cresce 40%, arredondado para cima. Chefes têm 45% mais vida, alcance de 23 m e intervalo de 1,5 s entre ataques. Robôs comuns atacam até 17 m, preparam disparos em 0,7 s e recarregam em 1,3 s. Eles antecipam parte do deslocamento do alvo, mas deixam o aviso visível e respeitam cobertura no impacto.

Defesas começam com dois robôs e recebem ondas a cada 4,5 s, com até seis vivos. O avanço para enquanto um robô contesta o terminal. A vida de Igor não se regenera sozinha na campanha; uma nova missão ou tentativa restaura sua vida. Objetivos, IDs, posições, pré-requisitos e progresso salvo foram preservados. A validação automatizada de objetivos não substitui uma medição de dificuldade com jogadores.

## Humor e vozes

Os 132 diálogos de abertura foram revisados com piadas próprias para as 33 missões. A conversa de entrega também mudou. As instruções dos objetivos continuam explícitas.

113 falas sintéticas em português brasileiro cobrem Igor, Lucas, Gustavo, Miqueias e Silvio, incluindo entregas. São vozes de personagens, sem clonagem dos integrantes do projeto. Os demais contatos continuam legendados. As vozes tocam automaticamente, param ao avançar a fala e podem ser desligadas pelo botão Vozes na conversa; a preferência fica salva. A música baixa durante os diálogos.

Geração local na CPU: Piper 1.4.2, modelos jeff, faber e cadu (medium), com ritmos diferentes por personagem. Origem, textos, duração e SHA-256 estão em documentacao/vozes-1.13.0.json. Preparação: `python ferramentas-historia/gerar_vozes_113.py` após instalar suas dependências indicadas. Modelos são baixados pelo script para ferramentas-locais, sem credenciais. Somente áudio exportado e créditos acompanham o jogo.

Referências: https://github.com/OHF-Voice/piper1-gpl e https://huggingface.co/rhasspy/piper-voices. Créditos e os MODEL_CARD dos três modelos acompanham o complemento de autoria 16.
