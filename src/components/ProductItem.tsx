import { memo } from 'react';

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
}

function ProductItemComponent({ product }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  );
}

// memo --> shallow compare --> comparação rasa
// js --> {} === {} // false | reference compare --> comparação referencial/igualdade referencial

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);

/**
 * can use memo in:

  * 1. Pure Functional Components
    --> funções que dada os mesmos parâmetros, trazem o mesmo resultado
    ex. caso de uso: sempre passo a, b, c e me traz a soma deles
    ex. não caso de uso: uma função que me receberia props mas me traria algo que necessita passar por algum fluxo,
    como algum cálculo que precisa mostra algo em tela tendo como base a hora atual

  * 2. Renders too often (muitas renderizações)
    --> se baseie no react dev tools, ele mostrará uma borda ficando cada vez mais escura
    neste componente que ocorre muitas renderizações.

  * 3. Re-renders with same props

  * 4. Medium to big size components

 */
