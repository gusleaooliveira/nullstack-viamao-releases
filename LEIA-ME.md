# Rádio ao vivo e destruição — 1.41.0

A rádio inicia automaticamente com o jogo, inclusive no menu inicial. Usa o núcleo MP3/Icecast do RadioUnityStream no Windows, com NLayer 1.16.0, buffer de áudio limitado e reconexão. As estações HTTPS são SomaFM Groove Salad, Drone Zone, DEFCON e Indie Pop Rocks! Não há cópia ou redistribuição das músicas das emissoras.

Na web, um adaptador HTMLAudio faz a reprodução dentro da página. Quando o navegador bloqueia o início automático, o primeiro clique ou tecla libera a rádio. Falhas de rede têm nova tentativa com intervalo crescente, limitado a 30 segundos; desligar cancela reprodução, tentativas e eventos pendentes.

P → Rádio da cidade permite ligar/desligar e trocar emissora. As trilhas Suno anteriores continuam selecionáveis; escolher uma faixa encerra a rádio ao vivo. O volume acompanha Música e Volume geral, reduz durante falas e silencia durante as fases da campanha. A preferência de desligar é respeitada na próxima abertura. Áudio é local para cada jogador.

No mundo livre, 228 objetos recebem dano: 138 lixeiras de esquina, 64 bancos/caixas/cercas/postes e 26 partes de fachadas (vidraças, marquises e painéis). As peças de fachada são anexadas a paredes reais em posições fixas e compartilhadas por todos os clientes. A estrutura e os acessos das missões são preservados; não há demolição de prédios inteiros.

Socos, tiros, armas especiais, explosões e impactos de veículos podem quebrar essas peças. Ao quebrar, a parte visível e sua colisão são desativadas; até 64 destroços visuais ficam ativos, por quatro segundos. O anfitrião controla dano, estado e reposição após 90 segundos. Jogadores que entram depois recebem o estado atual. Lixeiras quebradas não servem ao teletransporte até serem reparadas.

Todos da sala devem usar 1.41.0 / protocolo v19. Salvamentos e conteúdo anteriores permanecem disponíveis.

## Créditos e reconstrução

RadioUnityStream: https://github.com/sjbmcg/RadioUnityStream — commit 4b940b043508c12be4ca0cb4d07f6821f0f94862. O README original limita o uso a pessoal e não comercial e está preservado junto do fonte e dos pacotes. Foram integrados IcecastStream, IRadioStream, PositionTrackingStream e SampleRingBuffer, com cancelamento e telemetria adaptados. O player web é uma implementação própria; não usa threads ou o decodificador nativo no navegador.

NLayer 1.16.0: licença MIT preservada; DLL netstandard2.0 incluída no fonte, sem precisar restaurar NuGet para recompilar o jogo. Abra NullStack-Unity com Unity 6000.6.7f1. Modelos existentes e suas licenças preservados. O pacote original RadioUnityStream e a procedência são mantidos no backup privado.
