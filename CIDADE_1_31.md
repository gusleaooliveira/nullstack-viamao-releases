# NullStack 1.31 — Cidade viva e nova frota

Novos modelos baixados de fontes identificadas: carro, esportivo, SUV, picape, moto, caminhão, ônibus, avião regional, helicóptero e seis armas distintas. Originais/licenças em CREDITOS_1_31.md e ASSETS_1_31.json; conversão reproduzível em ferramentas-historia/baixar_131.py e modelos_131.py. Os demais tipos de carro e o biplano continuam distintos.

Personagens e acessórios ficam ocultos enquanto embarcados, inclusive passageiros de ônibus e trabalhos. Saída restaura a visibilidade respeitando a câmera próxima. Tiro usa uma camada do tronco e braços, mantendo as pernas em caminhada/corrida. Teclado/mouse e mapeamento Xbox/PlayStation preservados.

Trânsito limitado a 40 agentes e pedestres a 64, com animação e visibilidade por distância. Conversas, telefone, jornal, compras, descanso, manutenção e chuva usam os objetos e as animações já integrados; telefone e sacolas acompanham as mãos. A densidade usa a mesma lista de agentes no anfitrião e clientes.

Sete novos locais de missão receberam fachadas feitas no Blender, com paredes, portas abertas, vitrines, toldos e cobertura. O planejamento evita vias, colisões existentes e terrenos muito inclinados. Os edifícios existentes e interiores foram preservados. Edição em mapa-blender/NullStack-Viamao.blend, coleção PREDIOS_MISSOES_131; modelos e posições em Resources/City131/Buildings e buildings.json. Não há novos mapas carregados por rede.

Céu contínuo entre horizonte e zênite; neblina linear distante substitui a densidade exponencial do jogador. Visão geral e interiores desativam a neblina. Texturas preservam mais a cor das paredes e coberturas. Nova pintura dos carros mantém vidro e pneus diferenciados.

## Controles

WASD / analógico esquerdo move. Shift corre. Mouse / analógico direito controla a câmera. Direito / LT mira, esquerdo / RT atira. E entra/sai de veículos parados. G chama o veículo; F3 abre a garagem. Aeronaves: W acelera e sobe ao ganhar velocidade; S desce; A/D curva; Espaço freia e desce para pousar. O helicóptero pode pairar sem aceleração. Saída somente no solo. A garagem possui progressão e custo de aquisição.

F10 abre Conta e nuvem. Google e GitHub estão configurados no Railway; faça login na conta existente e use Vincular se quiser os dois provedores no mesmo progresso. O teste real de GitHub na web foi concluído em 25/10/2026, sem gravar ou substituir saves. A atualização não migra nem une contas automaticamente.

## Restauração

Use os arquivos correntes 01 (fonte), 02 (Blender), 05 (Windows), 06 (web) e 14 (validação) do Drive, seguindo BACKUP_DRIVE.md. Os complementos históricos de música e vozes 15, 17 e 18 continuam necessários para reconstruir todo o áudio. Não inclua caches Unity nem credenciais. Backend PostgreSQL permanece no repositório próprio.
