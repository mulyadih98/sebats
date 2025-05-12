import { useState } from 'react';
import { ProductsEntitie } from '../entities/product-entitie';

type SerchingProps = {
  data: ProductsEntitie[];
};

const SearchingArea: React.FC<SerchingProps> = ({ data }) => {
  const [productList, setProductList] = useState<ProductsEntitie[]>([]);
  // handle search
  const handlerOnChange = (args: string) => {
    if (args != '') {
      const result = data.filter((item) => {
        const namaLower = item.nama?.toLowerCase() ?? '';
        const kode = item.kode?.toLowerCase() ?? '';
        return (
          namaLower.includes(args.toLowerCase()) ||
          kode.includes(args.toLowerCase())
        );
      });
      setProductList(result);
    } else {
      setProductList([]);
    }
  };

  // hanlde select item
  const handlerOnClick = (item: ProductsEntitie) => {
    console.log(item);
  };

  return (
    <div className="relative center-align w-2/4 z-10">
      <div className="search-input border-2 rounded-2xl text-gray-600 border-gray-300 flex h-12 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          className="h-full outline-none text-xl"
          type="text"
          placeholder="Type Here"
          autoFocus
          onChange={(e) => handlerOnChange(e.target.value)}
        />
      </div>
      <div className="max-h-40 overflow-auto bg-white absolute w-full">
        {productList.map((item: ProductsEntitie) => (
          <p
            className="hover:bg-gray-400 p-2"
            key={item.id}
            onClick={() => handlerOnClick(item)}
          >
            {item.nama}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SearchingArea;
