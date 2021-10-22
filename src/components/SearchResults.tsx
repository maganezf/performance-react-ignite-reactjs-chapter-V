import { useMemo } from 'react';
import { ProductItem } from './ProductItem';

type Product = {
  id: number;
  price: number;
  title: string;
};

interface SearchResultsProps {
  results: Product[];
}

export function SearchResults({ results }: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((totalAcc, product) => {
      return totalAcc + product.price;
    }, 0);
  }, [results]);

  return (
    <div>
      <h2 style={{ marginBottom: 25 }}>Total price: ${totalPrice}</h2>

      {results.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

/**
 * can use useMemo in:

  * 1. Cálculos pesados
  * 2. Igualdade referencial (quando se repassa aquela informação a um component filho)

 */
