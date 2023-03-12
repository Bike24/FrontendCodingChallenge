export interface Product {
  id: string,
  productName: string,
  maxAmount: number,
  taxRate: number,
  price: number,
  amount: number
}
interface Props {
  columns: string[];
  data: Product[];
  onRemoveItem: (id: string) => void;
}
export default function TableComp(prop: Props) {
  const { columns, data, onRemoveItem } = prop;
  return (
    <div className="w-full">
      <table width={"100%"} >
        <thead>
          {
            columns.map((column) => <th align="left">{column}</th>)
          }
        </thead>
        <tbody>
          {
            data.map(({ productName, id, price, amount }) => (
              <tr>
                <td>{productName}</td>
                <td>${price}</td>
                <td>{amount}</td>
                <td>${(price * amount).toFixed(2)}</td>
                <td><p className="pointer-cursor" onClick={() => onRemoveItem(id)}>Remove</p></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
