import renderer from "react-test-renderer";
import Link from "../Link";

it("renderização correta", () => {
  const arvore = renderer
    .create(<Link page='http://www.facebook.com'>Facebook</Link>)
    .toJSON();
  expect(arvore).toMatchSnapshot();
});

// Testes de Snapshot com Jest

// Uma abordagem semelhante pode ser tomada quando se trata de testar seus componentes React.
// Em vez de renderizar a interface gráfica do usuário, ou UI, que iria precisar construir
// o aplicativo inteiro, você pode usar um renderizador de teste para gerar rapidamente
// um valor serializável para sua árvore React.

// Na primeira vez que esse teste é executado, o Jest cria um arquivo de instantâneo
// semelhante a este:

/* exports[`renders correctly 1`] = `
<a
  className="normal"
  href="http://www.facebook.com"
  onMouseEnter={[Function]}
  onMouseLeave={[Function]}
>
  Facebook
</a>
`; */

// O artefato do snapshot deve ser comitado (committed, em inglês) junto com as alterações
// de código, e revisado como parte de seu processo de revisão de código. Jest usa o pacote
// pretty-format para fazer com que os snapshots fiquem humanamente legíveis, o que facilita
// a revisão de código. Nas próximas vezes em que o teste for executado, o Jest irá comparar
// a saída renderizada com o snapshot gerado anteriormente. Se coincidirem, o teste passará.
// Se não coincidirem, isso pode significar que o test runner achou um bug no seu código
// (neste caso, no componente <Link>) que deve ser resolvido ou pode significar que a
// implementação mudou e o snapshot precisa ser atualizado.

// O snapshot tem como escopo direto os dados que você renderiza – em nosso exemplo,
// o componente Link com prop de página passado para ele. Isso implica que, mesmo que
// qualquer outro arquivo tenha propriedades ausentes (digamos, App.js) no componente Link,
// ele ainda passará no teste, pois o teste não conhece o uso do componente Link e
// tem como escopo apenas o Link.js. Da mesma maneira, renderizar o mesmo componente
// com propriedades diferentes em outros testes de snapshots não afetará o primeiro teste,
// já que os testes não o conhecem.
