import React, { useEffect, useState } from 'react';
import { ProductsEntitie } from '../entities/product-entitie';
import { SelectedItem } from '../entities/selected-item';

type ModalProps = {
  onClose: () => void;
  onSave: (args: SelectedItem) => void;
  title?: string;
  produk: ProductsEntitie;
};

const Modal: React.FC<ModalProps> = ({
  onClose,
  title = 'Modal',
  produk,
  onSave,
}) => {
  const [total, setTotal] = useState<number>(0);
  const [harga, setHarga] = useState<number>(produk.harga_jual1);
  const [qty, setQty] = useState<number>(1);

  const handleChangeHarga = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setHarga(Number(e.target.value));

    console.log(total);
  };

  useEffect(() => {
    setTotal(harga * qty);
  }, [harga, qty]);

  const handleOnChangeQty = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) != 0) {
      setQty(Number(e.target.value));
    }
  };
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        <div>
          <table className="">
            <tbody>
              <tr>
                <th className="p-4">Nama</th>
                <td>{produk.nama}</td>
              </tr>
              <tr>
                <th className="p-4">Kode</th>
                <td>{produk.kode}</td>
              </tr>
              <tr className="p-4">
                <th>Harga</th>
                <td className="w-full h-full">
                  <select
                    name="harga"
                    className="w-full h-full"
                    value={harga}
                    onChange={handleChangeHarga}
                  >
                    <option value={produk.harga_jual1}>
                      harga 1 - {produk.harga_jual1}
                    </option>
                    <option value={produk.harga_jual2}>
                      harga 2 - {produk.harga_jual2}
                    </option>
                    <option value={produk.harga_jual3}>
                      harga 3 - {produk.harga_jual3}
                    </option>
                  </select>
                </td>
              </tr>
              <tr>
                <th className="p-4">Qty</th>
                <td>
                  <input
                    type="number"
                    value={qty}
                    onChange={handleOnChangeQty}
                  />
                </td>
              </tr>
              <tr>
                <th className="p-4">Total</th>
                <td>{total}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          className="bg-green-600 text-gray-200 p-1.5 rounded-sm"
          onClick={() =>
            onSave({
              harga: harga,
              nama: produk.nama,
              kode: produk.kode,
              qty: qty,
              total: total,
            })
          }
        >
          Save
        </button>
        <button
          className="bg-red-600 text-gray-200 p-1.5 rounded-sm"
          onClick={onClose}
        >
          Tutup
        </button>
      </div>
    </div>
  );
};

export default Modal;
