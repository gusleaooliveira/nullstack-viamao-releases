# Agente Lucas — Usina Infestada (composição 1.55)

Lucas é um agente enviado à usina nuclear Aurora após a perda de contato. A campanha preserva os seis setores: perímetro, refrigeração, laboratório, resgate, desligamento e extração. A instalação agora tem operadores zumbificados, lobos contaminados e demônios que atacam o jogador. Os animais presos continuam sendo resgatáveis; os hostis são identificados por nome, vida e círculo de aviso.

## Controles e câmera

Mova com WASD, pule com Espaço, mire movendo o mouse e segure o botão esquerdo para disparar. A mira funciona antes de atirar e mostra um retículo ciano. O cursor nas faixas laterais ou no HUD não muda a direção do disparo. Analógico direito e RT/R2 continuam disponíveis. E/X/Quadrado interage; Ctrl/L3 ativa furtividade; Shift/LB corre; Esc/Start pausa.

A câmera fica acima e atrás do percurso, mais alta e distante que antes, com distância inicial de 18 unidades e altura de 17,1. A roda do mouse permite variar a distância de 16 a 23. Ela permanece estável ao mirar para os lados ou para trás. O movimento das passarelas e a mira compartilham a mesma projeção; barras da tela e resoluções diferentes são consideradas.

## Perigos e combate

Ácido verde tem dano por contato dos pés: 14 de vida, com intervalo de 0,8 segundo e a invulnerabilidade breve compartilhada dos demais danos. Pular acima ou alcançar uma plataforma evita o contato. Pílulas de radiação **não** protegem contra ácido. Há poças em todos os setores e um tanque sob as passarelas da refrigeração. Ao morrer, repetir a etapa restaura a vida e o objetivo daquele setor.

Zumbis perseguem e golpeiam perto; lobos são mais rápidos e mordem; demônios lançam projéteis. As ameaças anunciam o golpe com círculo vermelho, têm preparação e recuperação, podem ser abatidas com os disparos e não atravessam caixas ou vãos sem piso. Há até dez ameaças ativas e quarenta projéteis; a composição normal usa quatro ou cinco ameaças, além das defesas já existentes. O chefe da extração usa o modelo de demônio. Todos os relógios de ataque e ácido seguem a simulação pausável do fliperama. Sair preserva jogador, vida, câmera e controles da cidade.

## Pesquisa e procedência

- [Kenney — Animated Characters Retro](https://kenney.nl/assets/animated-characters-retro): corpos humanoides já integrados e skins originais zombieMaleA/zombieFemaleA do pacote local, CC0 conforme License.txt. As skins são usadas sobre os corpos compatíveis. Sem novo download ou asset de terceiros sem procedência.
- [Quaternius — Ultimate Monsters](https://quaternius.com/packs/ultimatemonsters.html): demônio e lobo já importados em Mysteries133, com as licenças CC0 e hashes da importação original. A licença geral atual do site mudou; esta atualização reutiliza os arquivos previamente adquiridos e seus termos, sem baixar um pacote sob termos diferentes.
- [Poly Haven — Concrete Floor Worn 001](https://polyhaven.com/a/concrete_floor_worn_001): textura de Dimitrios Savva e Rico Cilliers, CC0. Original 4K preservado em materiais-originais/lucas-156; cópia integrada reduzida a 512×512. Licença e catálogo com SHA-256 acompanham Resources/Lucas156.
- [Unity — ScreenPointToRay](https://docs.unity.com/en-us/engine/6000.7/script-reference/unityengine/camera/screenpointtoray): referência para projeção da posição do mouse num plano 3D.
- [Game Maker's Toolkit — Behind The Code](https://gmtk.itch.io/platformer-toolkit/devlog/395523/behind-the-code): referência de design para tolerância ao sair da borda e antecipação do salto. O projeto mantém o ArcadeJump153 existente, sem copiar o código do tutorial.
- [Kenney — Platformer Kit](https://kenney.nl/assets/platformer-kit): pesquisado como referência de legibilidade de plataformas; não adicionado nesta atualização.

## Validação e entrega

`ferramentas-historia/logica_lucas156.py` compila em player privado com os recursos da 1.54 e serve somente à iteração de C#. Não comprova importação dos novos recursos. `LucasBuild156.Windows`, em snapshot autorizado, gera o player real de teste, incluindo texturas. Rodar `--lucas156-test --output-dir <pasta>` produz lucas156.json e capturas da usina, passarelas e chefe. O teste cobre a mira em cinco resoluções, bloqueio de HUD, mira sem disparo, ácido, pílulas, saltos, checkpoint, perseguição, aviso/recuperação, tiros, cobertura, limite de ameaças, seis setores e restauração da cidade.

O coordenador do fechamento 1.55 centraliza VERSION, notícias, distribuição, Git e Drive. Não considerar esta nota um anúncio de publicação ou QA aprovado até o relatório final estar disponível. Sufixos internos 156 identificam somente esta implementação.

### Estado inicial desta entrega
Compilação final C# do snapshot isolado aprovada (COMPILE156 0). Sem build Unity, execução da nova suíte, inspeção visual ou teste web nesta frente: o computador ficou com ~558–938MB livres e ~43GB comprometidos. O coordenador recebeu o snapshot e os comandos e reservou o cache até liberar memória. Não houve commit, publicação, atualização de notícias ou envio ao Drive por esta frente; essas etapas ficam centralizadas na composição 1.55. O lobo do laboratório foi reaproveitado como ameaça abatível, preservando o modelo original. Os relatórios isolated-source.json e handoff-state.json documentam os limites e próximos passos.

### Diagnóstico e correções isoladas
O build Unity diagnóstico foi concluído. A suíte nova inicial passou 57/57; o legado apontou duas verificações de cor que incluíam o novo marcador de ataque junto ao corpo do lobo. A fixture foi ajustada para excluir somente os nomes exatos dos dois helpers, mantendo todos os renderers reais sob teste.

Na comparação com fixtures idênticas, a versão anterior reproduziu cinco falhas: acerto abaixo/acima do agente, apoio na lateral elevada, salto enquanto pressiona a lateral e concreto no renderer visível com UV adequadas. A versão corrigida passou 63/63 e o legado 58/58, com perfil restaurado em todas as rodadas. A mira usa o raio do mouse para selecionar corpos/coberturas e calcula a trajetória a partir da origem real do disparo; a colisão lateral mantém o apoio anterior e permite saltar; o concreto usa o renderer do floor-detail e o shader existente com projeção UV mundial. Nenhum asset compartilhado foi alterado.

As capturas corrigidas foram inspecionadas: skins, monstros, ácido, textura do piso e separação dos personagens estão corretos na iteração privada. Os resultados são de DLLs Mono privadas sobre os assets do player diagnóstico; os quatro C# já foram migrados com revisão e hashes conferidos; ainda exigem build Unity integrado para aceitação final. Não equivalem a publicação, teste web ou controle físico. Relatórios separados em documentacao/validacao/1.55.0/Lucas156-beforefix, Lucas156-fixed e Lucas156-fixed-legacy.
