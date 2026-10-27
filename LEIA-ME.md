# Pedestres por proximidade — 1.48.0

Na cidade, o jogo busca cerca de 140 pedestres em um raio de 140 metros ao redor de cada jogador. O limite local de exibição é 140, distribuídos ao redor; apenas os que estiverem no campo de visão serão desenhados pela câmera. Pode haver menos durante o preenchimento, em locais sem calçadas ou durante combate.

O conjunto inicial de 192 funciona como reserva. Quem se afasta mais de 180 metros de todos os jogadores pode ser desativado e reaproveitado em outro trecho de calçada, com prioridade à direção de deslocamento. Ninguém aparece a menos de 35 metros e aparições próximas no campo da câmera são evitadas. Teletransportes preenchem gradualmente a nova região. Corpos, dano, dinheiro e atividades não são removidos enquanto ainda estiverem perto de outro jogador; dinheiro já solto fica no local.

Nas salas o anfitrião mantém IDs, estados e gerações compartilhados. A reserva cresce gradualmente quando jogadores se separam, com limite de 192 + 140 por jogador adicional (2.292 para 16). Grupos próximos compartilham os mesmos pedestres. Clientes exibem até 140 e deixam os demais modelos inativos. O conjunto é reutilizado e não cresce por distância percorrida ou mortes.

Lista de vizinhos por células limita as consultas de colisão; rig, malhas e materiais são compartilhados. As animações distantes param. Nos modos arcade, a população ambiente não é redistribuída durante as ondas. Trânsito, animais, aparências e demais conteúdos preservados. Windows/web exigem 1.48.0 / protocolo v26.
