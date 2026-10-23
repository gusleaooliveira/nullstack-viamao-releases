# Áudio, vozes e controles — 1.21.0

Esta versão acrescenta 44 falas sintéticas ficcionais em português: duas reações para cada um dos 17 personagens, centrais dos cinco serviços, conclusão de atendimento, polícia e pedestres. Os subtítulos identificam quem fala. As 387 falas da campanha permanecem disponíveis; as falas de ambiente cedem prioridade às conversas da história.

Onze efeitos e loops novos cobrem navegação/confirmação, portas, colisões, itens, equipamento, motor, chuva e água. Sons CC0 do Kenney foram reutilizados dos pacotes já preservados; chuva e água foram geradas offline. As novas vozes usam o mesmo Kokoro Apache-2.0 da campanha, sem imitar as vozes das pessoas representadas. Os 44 arquivos somam aproximadamente 660 KB. Licenças e proveniência: `Assets/Resources/Audio121`.

## Controles Xbox e PlayStation

O Input System oficial da Unity 1.20.1 reconhece os controles; teclado e mouse continuam funcionando e podem ser alternados durante o jogo. A zona morta, velocidade/inversão da câmera e identificação dos botões podem ser ajustadas em **Áudio e controles**, no menu.

| Ação | Xbox | PlayStation |
|---|---|---|
| Andar / câmera | Analógicos esquerdo / direito | Analógicos esquerdo / direito |
| Correr | Segurar clique do analógico esquerdo | Segurar L3 |
| Pular / confirmar menu | A | X |
| Interagir / entrar ou sair de veículo | X | Quadrado |
| Agachar / voltar em menus | B | Círculo |
| Sacar ou guardar arma | Y | Triângulo |
| Atirar a pé / mirar | RT / LT | R2 / L2 |
| Soco | RB | R1 |
| Acelerar / ré no veículo | RT / LT | R2 / L2 |
| Freio de mão / atirar no veículo | B / RB | Círculo / R1 |
| Mapa | View | Share / Create |
| Pausa / sala | Menu / Start | Options |
| Celular / poder | Direcional cima / baixo | Direcional cima / baixo |
| Serviços / garagem | Direcional esquerda / direita | Direcional esquerda / direita |
| Trocar arma | LB + direcional esquerda/direita | L1 + direcional esquerda/direita |
| Consumir / chamar veículo / ônibus | LB + X / Y / A | L1 + Quadrado / Triângulo / X |
| Distância da câmera / ajuda | LB + clique RS / Start | L1 + R3 / Options |
| Golpe forte / esquiva no Beat ’em up | LB + RB / B | L1 + R1 / Círculo |

Nos menus, use direcional ou analógico esquerdo, confirme e volte com os botões indicados. O analógico direito rola listas. Há teclado na tela para nome, código de sala e chat; teclado físico e mouse continuam disponíveis. Na defesa contra roubo de veículo, use direcional esquerda/direita.

No Windows, o controle precisa estar reconhecido pelo sistema, por USB ou Bluetooth compatível. No navegador, pressione um botão para que o controle seja detectado e clique na página para liberar o áudio conforme as regras do navegador. Chrome e Edge com mapeamento padrão são a referência. Não é uma versão para consoles Xbox/PlayStation: são controles conectados ao Windows ou navegador.

## Áudio e reconstrução

**Áudio e controles** permite ajustar separadamente volume geral, efeitos, vozes e música. As preferências são salvas localmente. A mixagem usa clipes compartilhados, áudio espacial para objetos, loops reutilizados e limitação de falas simultâneas.

Para compilar, use Unity 6000.6.6f1 com o pacote Input System fixado no manifesto e `Active Input Handling: Both`. Os `.meta` contêm os ajustes de áudio mono/Vorbis/22.050 Hz. `StoryBuilder.PrepareAudioControls121` pode regenerar esses ajustes. As versões Windows e web mantêm protocolo `nullstack-room-v15`.

`ferramentas-historia/audio_121.py` gera as mídias usando o ambiente de voz já documentado (Python 3.12, kokoro-onnx 0.6.1, soundfile e ffmpeg). O modelo é ferramenta de autoria; apenas os áudios exportados são necessários para compilar. `validar_121.py ControlesAudio` exercita dispositivos virtuais normalizados Xbox e PlayStation, menus, teclado na tela, analógicos, ações, direção, desconexão e reprodução de áudio. Isso não substitui o teste com um controle físico.

Fontes: [Input System — instalação e coexistência dos backends](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.20/manual/Installation.html), [dispositivos suportados](https://github.com/Unity-Technologies/InputSystem/blob/develop/Packages/com.unity.inputsystem/Documentation~/supported-devices-reference.md), [Kenney UI Audio](https://kenney.nl/assets/ui-audio), [Kokoro ONNX](https://github.com/thewh1teagle/kokoro-onnx).
