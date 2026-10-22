# Igor em Produção — modo história 1.6.0

No menu inicial, escolha **Jogar modo história**. A campanha começa no prólogo, apresenta o diálogo e libera o primeiro objetivo. As fases seguintes começam automaticamente após a conclusão da anterior. Ao retornar, o botão vira **Continuar história**.

São 21 fases principais e 12 chamados urbanos opcionais, com 128 objetivos no total. O jogo adapta o roteiro de `historia/NullStack_Campanha_Missoes_e_Conversas.md` para exploração, coleta, investigação, escolhas de comando, combate, resgate, entregas, direção, defesa de terminais e chefes com painéis de proteção. Cada fase aumenta a dificuldade e concede XP. Os diálogos são legendados.

Esta é a primeira versão jogável da campanha. As ferramentas e situações do roteiro são representadas pelas mecânicas disponíveis; ainda não há uma implementação individual de todas as ferramentas conceituais, vozes ou cenas cinematográficas do documento.

## Como jogar

- WASD: andar; Shift: correr; Espaço: pular; Ctrl: agachar.
- E: coletar, conversar, operar painéis, iniciar escolta ou entrar/sair do carro. Segure E quando o objetivo pedir uma operação.
- F: soco; Q: equipar/guardar a arma; clique esquerdo: disparar; botão direito: mirar/investigar.
- M: mapa; C: câmera; Esc/F2: pausa da campanha, chamados urbanos e retorno ao menu.
- Espaço/Enter ou botão Continuar: avançar as falas.

Siga o marcador. Para sair do escritório, vá à porta indicada e pressione E. Chefes exigem desligar dois painéis antes de receber dano. Moradores precisam ser chamados com E e conduzidos até a área segura. Nas missões de direção, Igor recebe um carro emprestado. Os ataques inimigos mostram um aviso no chão antes de atingir.

O progresso é salvo a cada objetivo, coleta e checkpoint. Ao ser derrubado, use **Retomar o checkpoint**. Chamados opcionais ficam no menu da campanha e são liberados conforme as fases principais. A campanha é solo; as salas Windows/navegador continuam no modo livre.

O save usa PlayerPrefs (`nullstack.story.v1`, com cópia anterior de segurança). No Windows, pertence ao produto NullStack / NullStack · Igor em Produção. No navegador, fica no armazenamento local do site. Saves das duas plataformas são independentes.

## Cenário e desempenho

O terreno, os prédios, interiores e objetos estáticos foram exportados para `mapa-blender/NullStack-Viamao.blend`. O Blender agrupa a geometria por setores de 128 metros e exporta o FBX usado pela cena `Viamao-Historia.unity`.

O bake reduziu os 5.443 renderizadores estáticos de origem para 328 setores visuais e 328 malhas de colisão. São aproximadamente 94% menos renderizadores estáticos; isso não é uma medição de FPS. A geometria visual contém cerca de 1,44 milhão de triângulos. Materiais opacos usam cores de vértice compartilhadas; janelas noturnas ficam separadas. Textos e iluminação permanecem na Unity.

Personagens, pedestres, trânsito, carros e atores das missões são instanciados em execução. Somente o objetivo atual mantém seus atores ativos; inimigos são reutilizados e as fontes de áudio utilizam um pool limitado.

## Reconstrução automática

Feche o editor desse projeto e execute, na pasta do jogo:

```powershell
.\ferramentas-historia\Construir-Historia.ps1 -Validate -Web
python .\ferramentas-historia\empacotar_historia.py
```

O script usa Unity 6000.6.6f1, Blender 5.2 e Python. Reutiliza `NullStack-WebBuild` como projeto de compilação, sincroniza os Assets e devolve cenas e metadados gerados para `NullStack-Unity`.

- Sem opções de mapa: preserva o bake atual e suas edições.
- `-ExportEditedBlend`: reexporta o arquivo .blend editado e remonta a cena.
- `-RebuildMap`: recria o mapa a partir da cena original Unity, refaz âncoras e substitui a geometria do .blend. Use apenas quando desejar reconstruir a origem.
- `-Validate`: executa a campanha inteira com save de teste isolado e grava o relatório em `jogavel/NullStack-Viamao-Historia/validacao`.
- `-Web`: gera também WebGL. `-Unity` e `-Blender` permitem outros caminhos de instalação.

No Blender, mantenha nomes `MAP_` para visual e `COL_` para colisões. Ao alterar paredes ou terreno, atualize também a colisão correspondente. A reexportação preserva essas malhas; alterações grandes podem exigir reposicionar objetivos e portas na Unity.

## Assets

Foram reutilizados os modelos e sons já baixados no projeto. Robôs e painéis: Low Poly Robot Factory Pack, reodesuxz; uso em jogos permitido, redistribuição como pacote independente proibida. Sons de interface: Kenney Digital Audio, CC0. Os créditos anteriores permanecem válidos. As licenças integrais acompanham os pacotes jogáveis.
