import { ProductItem } from './ProductItem';

type Product = {
  id: number;
  price: number;
  priceFormatted: string;
  title: string;
};

interface SearchResultsProps {
  results: Product[];
  totalPrice: number;
  onAddToWhishList: (id: number) => void;
}

export function SearchResults({
  results,
  totalPrice,
  onAddToWhishList,
}: SearchResultsProps) {
  return (
    <div>
      <h2 style={{ marginBottom: 25 }}>Total price: ${totalPrice}</h2>

      {results.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToWhishList={onAddToWhishList}
        />
      ))}
    </div>
  );
}

/**
 * can use useMemo in:

  * 1. Cálculos pesados
  * 2. Igualdade referencial (quando se repassa aquela informação a um component filho)

 */
