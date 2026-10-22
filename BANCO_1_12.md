# Banco da Cria — 1.12.0

Abra o celular com P e escolha Banco. Cada personagem tem conta e extrato próprios, começando com R$ 500. Trocar de personagem abre a conta correspondente; as duas versões do Gabriel e do Matheus têm contas separadas.

- Um cochilo completo de 12 segundos do Igor, em pé ou no sofá, transfere até R$ 50 da conta do Lucas para a do Igor. Interromper o cochilo não paga. Se Lucas tiver menos de R$ 50, transfere apenas o saldo disponível; nenhuma conta fica negativa.
- Um soco ou tiro que realmente machuque Igor rende R$ 10 pelo acerto + R$ 2 por ponto de vida retirado. Derrubá-lo acrescenta R$ 100. Um soco normal de 10 de dano rende R$ 30; um tiro de 25 rende R$ 60.
- O poder do Gabriel também paga pelo dano real e pela eliminação. Escudo que impeça todo o dano, tiros errados, alvo já derrubado, dano ambiental e dano em outros personagens não pagam. Sobre-dano não multiplica a recompensa: conta apenas a vida efetivamente retirada.
- Recompensas de combate são dinheiro novo do jogo. Somente o sono desconta Lucas. Igor não recebe recompensa por ferir a si mesmo ou outro Igor.

Os saldos e as últimas 40 movimentações de cada conta ficam salvos no dispositivo do jogador solo ou do anfitrião. No multiplayer, o anfitrião valida dano, sono e pagamentos e envia os saldos aos participantes. Todos que usam o mesmo personagem na mesma sala compartilham a conta desse personagem. Ao trocar de anfitrião, valem os saldos salvos no dispositivo do novo anfitrião. Não há conta bancária online vinculada a login.

Windows usa PlayerPrefs no perfil local; navegador usa o armazenamento persistente do Unity no site. Limpar os dados do aplicativo/site pode apagar os saldos. Nenhuma chave administrativa da API de notícias é necessária para o banco.

Protocolo de salas v12: todos os participantes devem atualizar juntos. As notícias, outdoors, músicas, veículos e poderes da versão anterior foram mantidos.
