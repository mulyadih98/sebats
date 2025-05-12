export default function TableContent() {
  return (
    <div className="relative h-96 overflow-x-auto ">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              Nama Produk
            </th>
            <th scope="col" className="px-6 py-3">
              Kode
            </th>
            <th scope="col" className="px-6 py-3">
              Harga
            </th>
            <th scope="col" className="px-6 py-3">
              Qty
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
            <td className="px-6 py-4">1</td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Indo Mie
            </th>
            <td className="px-6 py-4">KOD123</td>
            <td className="px-6 py-4">3500</td>
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4 flex justify-evenly max-w-3xs">
              <button className="p-4 bg-red-600 text-white rounded-lg">
                Delete
              </button>
              <button className="p-4 bg-green-600 text-white rounded-lg">
                Edit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
