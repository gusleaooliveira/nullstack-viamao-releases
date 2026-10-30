# Agente Lucas — Operação Usina · fliperama 1.52

A terceira máquina de cada trio recebe uma aventura 3D com o modelo original do Lucas. Inspirada em https://gustavoleao2018.github.io/Agente-Kowalskye/: espionagem numa usina, cartões, plantas, pílulas antirradiação, saltos, disparos e confronto final. Cenários, drones, sentinela e regras desta adaptação foram criados no Unity; nenhum sprite, música ou código do jogo de referência foi copiado.

No solo, use P → Fliperama Lucas · GPS, caminhe até a máquina amarela e pressione E / X do Xbox / Quadrado. São oito máquinas, sem alterar o mapa ou os outros jogos. Complete três etapas: dois cartões de acesso, três plantas nas passarelas radioativas e o sentinela que protege a planta final. Recolha os documentos e use E no elevador ou na extração.

WASD / analógico esquerdo move e aponta; Espaço / A / X do PlayStation pula; J, clique ou RT/R2 dispara; analógico direito mira; E / X / Quadrado usa elevador; Esc / Start pausa. Enter / A inicia, continua ou repete uma etapa. Botões na tela permitem sair; B/Círculo sai nos menus. Pílulas recuperam 20 de vida e dão 20 segundos de resistência. Sem proteção, o setor radioativo tira vida. Quedas e vida zero permitem repetir a etapa. A planta final exige derrotar o sentinela.

Recorde local separado da cidade, em NullStack.Lucas152.Record; sem transferência à nuvem. Partidas não são retomadas entre sessões. A cidade fica com comandos e controlador suspensos e jogador protegido; sair restaura câmera e controlador anteriores. Câmera em camada 27, RenderTexture 1024×576, até 40 projéteis e uma etapa ativa, sem mudar Time.timeScale. Materiais próprios são descartados ao fechar. Não há áudio novo: efeitos reutilizam recursos existentes, quando disponíveis.

Validação: `python ferramentas-historia/validar_lucas152.py` compila todos os scripts e executa 39 verificações num player Mono isolado da 1.50. O script usa trava de perfil e restaura os PlayerPrefs. Cobre acesso pela máquina correta, Lucas, bloqueios da cidade, gamepad virtual, salto, queda, projéteis, radiação, coleta, elevadores, sentinela, vitória, recorde, saída e reabertura. Capturas e relatório em documentacao/validacao/1.52.0/Lucas. Não equivale a controle físico, teste no navegador ou build Unity conjunto.

Integração aditiva: ferramentas-historia/integrar_lucas152.py. As alterações das outras frentes permanecem no checkout. O commit do Lucas registra apenas seus próprios acréscimos nos arquivos compartilhados. O fechamento da versão 1.52, com Windows/web, notícias e backup completo, segue a coordenação em COORDENACAO_151_152.md; não foi publicado por esta frente.

Backup incremental privado (17.084.470 bytes): https://drive.google.com/file/d/1SRf6eG6qqUddX1T7RhGzWtGcBzjlDIR3/view?usp=drivesdk . Base obrigatória: 911193b4f2cc0db667ddde17e5fa90114f35baa5. Fonte Lucas: 3b2403abde44ec340888c21156c6f5fc573232e2. SHA-256 local: 833a72dd86c603a0ee81433af127050d5f7e0f7a79464aa68b2cb7bf1cb803b0. Recebimento conferido por tamanho, pasta e permissão owner; hash remoto não fornecido pelo conector. Inclui bundle Git e overlay compartilhado de desenvolvimento, não substitui o ZIP completo do fechamento 1.52.


## Pacote conjunto
O pacote Unity Windows da 1.52 repetiu as 39 verificações com aprovação e perfil restaurado.
