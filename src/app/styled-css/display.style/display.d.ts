import { Property } from 'csstype';

/**
 * Valores para display CSS
 * inline -	Exibe um elemento como um elemento em linha (como <span>). Quaisquer propriedades de altura e largura não terão efeito
 * block - Exibe um elemento como um elemento de bloco (como <p>). Começa em uma nova linha e ocupa toda a largura
 * contents -	Faz o container desaparecer, tornando os elementos filhos filhos do elemento do próximo nível no DOM
 * flex -	Exibe um elemento como um contêiner flexível de nível de bloco
 * grid -	Exibe um elemento como um contêiner de grid
 * inline-block -	Exibe um elemento como um contêiner de bloco de em linha. O próprio elemento é formatado como um elemento em linha, mas você pode aplicar valores de altura e largura
 * inline-flex -	Exibe um elemento como um contêiner flex em linha
 * inline-grid - Exibe um elemento como um contêiner de grade em linha
 * inline-table	- O elemento é exibido como uma tabela em linha
 * list-item - Exibe o elemento se comportar como um elemento <li>
 * run-in	- Exibe um elemento como bloco ou em linha, dependendo do contexto
 * table - Faz com que o elemento se comporte como um <table>
 * table-caption - Faz com que o elemento se comporte como um <caption>
 * table-column-group	- Faz com que o elemento se comporte como um <colgroup>
 * table-header-group	- Faz com que o elemento se comporte como um <thead>
 * table-footer-group	- Faz com que o elemento se comporte como um <tfoot>
 * table-row-group - Faz com que o elemento se comporte como um <tbody>
 * table-cell	- Faz com que o elemento se comporte como um <td>
 * table-column	- Faz com que o elemento se comporte como um <col>
 * table-row - Faz com que o elemento se comporte como um <tr>
 * none	- O elemento é completamente removido
 * initial - Configura esta propriedade para seu valor padrão
 * inherit - Herda esta propriedade de seu elemento pai
 */
export type DisplayTypes = Property.Display;

export interface DisplayStyleProps {
  display?: DisplayTypes;
  displayXs?: DisplayTypes;
  displaySm?: DisplayTypes;
  displayMd?: DisplayTypes;
  displayLg?: DisplayTypes;
  displayXl?: DisplayTypes;
  displayXxl?: DisplayTypes;
}
