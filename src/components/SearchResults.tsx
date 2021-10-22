import { List, ListRowRenderer } from 'react-virtualized';
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
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          onAddToWhishList={onAddToWhishList}
        />
      </div>
    );
  };

  return (
    <div>
      <h2 style={{ marginBottom: 25 }}>Total price: ${totalPrice}</h2>

      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
    </div>
  );
}

/**
 * can use useMemo in:

  * 1. Cálculos pesados
  * 2. Igualdade referencial (quando se repassa aquela informação a um component filho)

 */
