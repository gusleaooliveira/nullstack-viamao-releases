# Agente Lucas — Operação Aurora

Campanha original de seis setores dentro do fliperama. Lucas é um agente especial enviado a uma usina nuclear que mantém animais em experiências clandestinas. A engenheira Maia orienta o resgate e o desligamento; a Central acompanha a infiltração e a fuga.

1. Perímetro: dois cartões, drones, cobertura e elevador.
2. Refrigeração: três diagramas, saltos sobre passarelas e proteção temporária contra radiação.
3. Laboratório Zero: sentinela, prova bloqueada até derrotá-lo, amostra alienígena e animal alterado em movimento.
4. Biocontenção: liberar três gaiolas mantendo interação por 1,4 segundo. Capivaras e onça seguem até a saída segura. Os tiros não atingem os animais resgatáveis.
5. Reator: desligar refrigeração, contenção e núcleo nessa ordem. Um canal central avisa em amarelo antes da descarga laranja. A proteção antirradiação também bloqueia a descarga.
6. Extração: anomalia com 240 de resistência, prova final e fuga em dois minutos. Falha permite repetir o setor.

WASD/analógico movem; mouse/analógico direito miram; clique/J/RT disparam; Espaço/A pula; E/X mantido interage. Ctrl/L3 ativa deslocamento furtivo (sensores têm alcance reduzido), Shift/LB corre. Caixas interrompem a linha de tiro. Esc/Start pausa toda a simulação, incluindo cronômetro, objetivos e animais.

As etapas se encadeiam com briefing e conservam pontuação; repetir reverte apenas os pontos daquele setor. O recorde permanece independente do progresso da cidade. Não há salvamento de etapa intermediária nesta campanha curta.

Assets reutilizados: biblioteca Kenney CC0 Arcade153 para usina, armas e gaiolas; animais otimizados Indio151 com materiais e animações originais; criaturas Mysteries133 já importadas e creditadas no projeto. Não há novos downloads ou dependências externas nesta expansão. Limite de 40 projéteis, colisões analíticas, recursos compartilhados e apenas três animais resgatáveis simultâneos.

Validação: `--lucas152-test --output-dir <pasta>` percorre os seis setores, verifica controles simulados, pausa, documentos, radiação, saltos, sentinelas, impedimento de abandonar animais, sequência de desligamento e extração; produz JSON e capturas. Executar pelo fluxo de validação do projeto com perfil isolado. A execução e inspeção visual da versão distribuída ficam com a integração da atualização.
