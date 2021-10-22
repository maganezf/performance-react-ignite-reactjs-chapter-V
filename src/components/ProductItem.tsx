import dynamic from 'next/dynamic';
import { memo, useState } from 'react';
import { AddProductToWhishListProps } from './AddProductToWhishList';

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  };
  onAddToWhishList: (id: number) => void;
}

const AddProductToWhishList = dynamic<AddProductToWhishListProps>(
  () =>
    import('./AddProductToWhishList').then(
      module => module.AddProductToWhishList
    ),
  {
    loading: () => <span>Carregando...</span>,
  }
);

function ProductItemComponent({ product, onAddToWhishList }: ProductItemProps) {
  const [isAddingToWhishList, setIsAddingToWhishList] =
    useState<boolean>(false);

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button type='button' onClick={() => setIsAddingToWhishList(true)}>
        Adicionar aos favoritos
      </button>
      {isAddingToWhishList && (
        <AddProductToWhishList
          onAddToWhishList={() => onAddToWhishList(product.id)}
          onRequestClose={() => setIsAddingToWhishList(false)}
        />
      )}
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
