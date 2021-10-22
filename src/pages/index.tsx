import { SearchResults } from 'components/SearchResults';
import { FormEvent, useState } from 'react';

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

      <SearchResults results={results} />
    </div>
  );
}
