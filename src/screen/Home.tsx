import { useEffect, useState } from 'react';
import SearchingArea from '../components/SerchingArea';
import TableContent from '../components/TableContent';
import { ProductsEntitie } from '../entities/product-entitie';
import Modal from '../components/Modal';
import { SelectedItem } from '../entities/selected-item';

function Home() {
  const [products, setProducts] = useState<ProductsEntitie[]>([]);
  const [show, setShow] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<ProductsEntitie>();
  const [data, setData] = useState<SelectedItem[]>([]);

  // get all data product
  async function get() {
    const result: ProductsEntitie[] = await window.api.getProducts();
    setProducts(result);
  }

  useEffect(() => {
    get();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  // hanlde list data selected
  const handleSelectItem = (item: ProductsEntitie) => {
    setSelectedItem(item);
    setShow(true);
  };

  // handle Save
  const handleSave = (args: SelectedItem) => {
    setData((prev) => [...prev, args]);
    setShow(false);
  };

  return (
    <>
      <h1 className="mb-20 text-5xl">Home</h1>
      <SearchingArea data={products} onSelectItem={handleSelectItem} />
      <div className="mt-10">
        <TableContent />
      </div>
      {show && (
        <Modal
          title="Product"
          onClose={() => setShow(false)}
          produk={selectedItem!}
          onSave={handleSave}
        />
      )}
    </>
  );
}

export default Home;
