# NullStack Viamão 1.9.0

## Sons e modelos fornecidos

Miqueias agora monta `donkey_3d.glb`, com animação leve das pernas. A música fornecida `musica miqueias.mp3` toca em loop enquanto ele está montado e a montaria está em movimento; parar ou desmontar encerra a música. Jogadores próximos também podem ouvi-la.

O beijo do Igor no celular P → Início → Beijar o Lula aciona `vota em mim.mp3` uma vez por beijo. O áudio termina naturalmente; guardar o celular não repete a reprodução.

O gato da Talia foi substituído pela conversão do `33eqw.skp` extraído de `34-cat3d.rar`; a montaria usa o GLB fornecido. Ambos preservam o visual fornecido, recebem animação de caminhada e acompanham as posições sincronizadas. Os originais estão preservados em `materiais-originais/animais/`.

Gabriel possui dois visuais: o original e **Gabriel - visual 2**, convertido de `gabriel v2.glb`. O catálogo tem 16 visuais. F2 abre a seleção.

## Poder do Dudu

Escolha Dudu. Aproxime-se até 6 metros de qualquer jogador ou NPC caído, sem parede entre vocês, e aperte **U**, ou use P → Início → Reviver personagem. O alvo caído mais próximo recupera 100 de vida. O poder recarrega em 5 segundos. Dudu precisa estar vivo e fora de um veículo para usar a habilidade.

## Caçada ao Igor

Ativa por padrão em salas com duas ou mais pessoas. O anfitrião controla o modo em **F2 → Caçada ao Igor: ligada/desligada**. A campanha solo segue suas próprias regras; jogar sozinho permite usar a arma do Igor normalmente.

Na caçada, todos os jogadores que escolherem Igor ficam sem arma: a arma desaparece e o servidor rejeita os comandos de sacar e disparar. Os demais personagens usam Q para sacar e clique para disparar, podendo eliminar o Igor. A vida zerada permanece até Dudu reviver ou o anfitrião usar **F2 → Reiniciar caçada / reviver todos**. Personagens eliminados não podem trocar de avatar para escapar da regra. Desligar a caçada restaura o modo livre.

Todas essas decisões são validadas pelo anfitrião e replicadas para os clientes. O protocolo de sala é v9: todos devem usar o pacote 1.9.0.

## Otimização

As malhas preparadas pelo rig são compartilhadas entre cópias do mesmo personagem, evitando repetir preparação e alocação ao trocar de personagem ou receber outro jogador com o mesmo visual. As duas mãos usam 2 malhas visíveis em vez de 34 renderizadores separados, com gestos e pontos de contato preservados. O gato usa uma única textura compartilhada em vez de 12 cópias idênticas; a malha foi reduzida de 59.919 para 11.105 faces. Não foi medido ganho de FPS nesta entrega.

## Reconstrução e direitos

Use Unity 6000.6.7f1 com Windows Build Support e WebGL Build Support. `ferramentas-historia/Compilar-Fonte.ps1 -Plataforma Ambos` gera `jogavel/1.9.0/`. Depois execute `python ferramentas-historia/empacotar_historia.py` para criar `distribuicao/1.9.0/`.

Os FBX, texturas, MP3 e arquivos .meta integrados bastam para compilar. Os originais novos ficam no pacote complementar 13 do Drive. Para repetir a conversão SketchUp, use Sketchup_Importer 0.27 em `ferramentas-locais/sketchup-sdk/sketchup_importer/` e Blender 5.2 com `ferramentas-historia/preparar_19.py`; o SDK/add-on não é redistribuído no fonte do jogo. Referência da ferramenta: https://github.com/RedHaloStudio/Sketchup_Importer/releases/tag/0.27.0.

Modelos e sons foram fornecidos pelo proprietário. Os direitos e licenças originais permanecem aplicáveis; esta integração não concede licença para distribuir os assets separadamente.
