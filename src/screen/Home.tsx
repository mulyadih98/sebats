import { useEffect, useState } from 'react';
import SearchingArea from '../components/Serching';
import TableContent from '../components/TableContent';
import { ProductsEntitie } from '../entities/product-entitie';

function Home() {
  const [products, setProducts] = useState<ProductsEntitie[]>([]);
  async function get() {
    const result: ProductsEntitie[] = await window.api.getProducts();
    setProducts(result);
  }
  useEffect(() => {
    get();
  }, []);

  return (
    <>
      <h1 className="mb-20 text-5xl">Home</h1>
      <SearchingArea data={products} />
      <div className="mt-10">
        <TableContent />
      </div>
    </>
  );
}

export default Home;
