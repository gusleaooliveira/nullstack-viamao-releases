# Cidade em Construção — simulação de prefeitura 1.55

O guia de dez páginas fornecido pelo proprietário foi lido integralmente como referência de produto. A implementação é original, em escala de fliperama: tabuleiro 16 × 12, equações próprias e recursos já licenciados do projeto. Não reproduz código, interface, cenários, edifícios históricos ou gravações de SimCity.

## Como começar

Entre no modo solo, use o GPS do jogo de cidade e interaja com a máquina. A simulação começa pausada. Cidades novas recebem **25.000 créditos**; a migração preserva integralmente o saldo anterior, inclusive dívidas. O save continua separado por personagem e dispositivo, na mesma chave da 1.54.

1. Ligue as ruas à entrada oeste. Clique em **Redes** para cabos elétricos e tubos, que coexistem com ruas e prédios.
2. Construa uma usina com acesso rodoviário e cabos até os bairros. Uma bomba deve estar até dois lotes de água doce, ter acesso e energia; tubos distribuem água até dois lotes ao redor da rede. Torres oferecem menos água sem exigir um lago próximo.
3. Demarque zonas residenciais, comerciais e industriais. A densidade baixa/média/alta limita a ocupação; não garante riqueza nem edifícios instantâneos. O crescimento inicial exige pelo menos dois dias.
4. Ofereça empregos, serviços e qualidade ambiental. Consulte o indicador RCI e use **Inspecionar** antes de tentar corrigir um bairro parado.
5. Retome o tempo. Ajuste impostos e financiamento antes de assumir mais manutenção. Os objetivos de 40, 120 e 200 moradores permanecem, com bônus; depois a cidade continua livre.

### Um bairro inicial testado

A rua central pode ser estendida até a coluna 14. Uma lagoa no lote 50, usinas nos lotes 64 e 96, bombas 65/66 e redes sobre a rua abastecem as zonas adjacentes. O teste constrói nove lotes residenciais, quatro industriais, três comerciais e serviços, sem subsídio de teste. O relatório core registra população, felicidade, resultado diário e caixa ao fim da simulação; a validação no player usa os mesmos 25.000 iniciais e confirma a campanha completa.

## Painéis e controles

| Ação | Controle |
|---|---|
| Selecionar lote | WASD/setas ou analógico esquerdo |
| Construir/demarcar | E/Enter ou botão sul; clique no tabuleiro |
| Inspecionar sem construir | Botão **Inspecionar** ou I, depois selecione o lote |
| Navegar painéis com controle | Clique no analógico esquerdo (LS); direcional move foco, A confirma, B volta; orçamento possui botões −/+ além dos sliders |
| Selecionar ferramenta | Categorias Obras; LB/RB percorrem todas; 0–9 preservam as dez ferramentas iniciais |
| Densidade | Baixa/Média/Alta no grupo Zonas |
| Rotacionar | Q/R ou botão Rotacionar, em passos de 90° |
| Zoom | +/− ou botões abaixo do mapa |
| Mapa de diagnóstico | Botão Cidade/Energia/Água/Poluição/Crime/Valor/Tráfego/Danos/Metrô |
| Pausar | Esc/Start ou botão Pausar |
| Velocidade | Botão 1x/3x ou botão norte |
| Imposto residencial | D-pad cima/baixo; os três impostos também têm sliders |
| Sair | Salvar e sair; botão leste enquanto pausado |
| Nova cidade | Ajuda → Nova cidade, com confirmação, ou N/Select duas vezes na pausa |

**Obras:** zonas, redes, serviços, transportes e terreno. Serviços com mais opções têm botão Mais obras/voltar. **Orçamento:** impostos R/C/I, financiamento, receitas, despesas discriminadas e empréstimos. **Conselho:** leis, acordos, petições, emergências e estilo urbano. **Histórico:** três gráficos com até 120 dias. **Ajuda:** instruções, quatro desafios originais e reinício.

## Sistemas implementados

| Tema do guia | Comportamento nesta adaptação |
|---|---|
| Construção indireta e RCI | Demarcação de zonas, demanda independente R/C/I, três densidades, espera para ocupação e evolução gradual. Demanda neutra interrompe crescimento; infraestrutura ausente causa declínio e abandono. |
| Terreno e valor | Lagoas, elevação, nivelamento, pontes sobre água e túneis em elevações; valor local considera serviços, relevo, poluição, crime e circulação. |
| Energia | Carvão, eólica, solar, gás e nuclear com preços/capacidades/manutenção diferentes; redes reais separadas das ruas; usinas antigas perdem produção. Nuclear exige 120 dias ou educação 60. |
| Água | Bombas energizadas próximas de água doce, torres, tubulações independentes, capacidade distinta de cobertura; contaminação industrial reduz produção. Tratamento só beneficia uma bomba se houver conexão de tubos. |
| Lixo | Produção contínua, coleta dependente de acesso, aterros com capacidade finita, reciclagem, resíduos em energia e acordos externos. |
| Transportes | Ruas/rodovias, ônibus, ferrovias/estações, metrô/estações, pontes, túneis, portos e aeroportos. Estaçōes ferroviárias e de metrô precisam de rede ligada a uma borda; estações isoladas não reduzem trânsito. Veículos visuais são decorativos, não cidadãos individuais. |
| Serviços | Saúde, escolas, bibliotecas, universidade, museu, polícia, bombeiros e parques. Acesso, energia, distância e financiamento alteram atendimento. Educação muda lentamente e permite indústria mais limpa. |
| Orçamento | Impostos independentes R/C/I, manutenção, políticas, contratos, resultado diário, dívida e corte de gastos por demolição gratuita. Empréstimo de 6.000: 60 parcelas de 110; principal pode ser quitado. Apenas um contrato de crédito por vez. |
| Leis e vizinhos | Reciclagem doméstica, indústria limpa, incentivo ao transporte e alarmes de incêndio, todos com custos/efeitos. Compra/venda de água/energia e envio/recebimento de lixo exigem uma saída leste. Exportações reservam capacidade e podem gerar multas por falta de oferta. |
| Assessores e petições | Mensagens de finanças, redes, ambiente, planejamento e transporte; pedidos podem ser aceitos ou rejeitados e alteram políticas/impostos de verdade. |
| Diagnóstico | Mapas locais, RCI, consulta de causas em cada lote, custos discriminados e gráficos de população, caixa e felicidade. |
| Emergências | Incêndio, terremoto e enchente, disparo manual ou ocorrências periódicas opcionais. Danos interrompem atividade; bombeiros reduzem incêndios, reparos têm custo e demolição permite reconstrução. |
| Progressão e identidade | Campanha, monumento/prefeitura desbloqueados, três estilos urbanos originais e proteção histórica de edifícios ocupados. Proteção impede demolição/substituição, mas não impede abandono por falta de serviços. |
| Cenários e modo livre | Livre, cidade verde, equilíbrio financeiro e resiliência; prazos e condições próprios, com continuação livre após o resultado. |
| Atmosfera | Vista elevada rotacionável, miniaturas, pequenos veículos e acompanhamento lounge sintetizado originalmente no código, com volume musical do jogo. |

## Pesquisa posterior ao guia

Após a primeira implementação e seus 47 testes core, o [manual original da Maxis](https://excalet.com/technology/game_manuals/simcity_3000_unlimited.pdf) foi consultado. As seções de consulta/patrimônio (p. 39), água/tratamento (p. 118), agricultura (p. 124) e educação/poluição (p. 125) motivaram estes acréscimos: torres de água, tratamento conectado, resíduos em energia, zona agrícola, museu, proteção histórica e evolução para indústria limpa.

A [página oficial EA/Maxis na Steam](https://store.steampowered.com/app/2741560/Sim_City_3000_Unlimited/) foi usada para distinguir as adições da edição Unlimited. Os 13 cenários, os nove desastres, as arquiteturas e monumentos daquela edição e o editor Building Architect Plus são conteúdo/ferramentas do produto original; não foram copiados. Esta adaptação oferece quatro cenários, três emergências e três estilos próprios, e não inclui um editor de malhas. Não há simulação individual de viagens, água salgada, sincronização em nuvem do tabuleiro nem empréstimos com dinheiro real.

Original recebido e fontes/hash preservados em `materiais-originais/simcity155/fontes.json`. As fórmulas implementadas são escolhas desta adaptação, não fórmulas extraídas de SimCity.

## Validação e entrega

`validar_cidade_core155.py` compila a simulação C# real sem Unity: crescimento/estagnação/abandono, redes, custos, empréstimos, contratos, terreno, desastres, proteção, petições, tratamento conectado e migração. Inclui duas verificações de estabilidade para evitar alternância de crescimento/colapso em redes saturadas.

`CityBuilderValidation154` continua usando `--citybuilder154-test`, para compatibilidade com o instalador existente, mas valida as regras novas: controle, cidade principal suspensa, orçamento inicial, campanha, painéis/mapas, persistência completa, saves separados e migração JSON anterior. O runner `validar_155.py Construtor --development --clean-profile` usa um clone privado e restaura/verifica o perfil pelo lock compartilhado. Essa prova deve ficar separada da aceitação do pacote Unity final, centralizada pelo chat responsável pela versão 1.55.
