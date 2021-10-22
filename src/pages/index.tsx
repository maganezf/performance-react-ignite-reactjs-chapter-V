import { SearchResults } from 'components/SearchResults';
import { FormEvent, useCallback, useState } from 'react';

type Product = {
  id: number;
  price: number;
  title: string;
};

export default function Home() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<Product[]>([]);

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();

    setResults(data);
  }

  const addToWhishList = useCallback(async (id: number) => {
    console.log('addToWhishList product with this id: ', id);
  }, []);

  return (
    <div className='container'>
      <h1>Search</h1>

      <form className='form' onSubmit={handleSearch}>
        <input
          type='text'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </form>

      <SearchResults results={results} onAddToWhishList={addToWhishList} />
    </div>
  );
}

/**
 * useCallback

  --> permite que uma função não ocupe um novo espaço na memória/seja recriada,
  toda vez em que o componente dela for renderizado

  array de dependências: dependência que esteja dentro do componente, para recriar a função na memória

 */
