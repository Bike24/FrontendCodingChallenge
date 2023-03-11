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
  data: Product[]
}
export default function TableComp(prop: Props) {
  const { columns, data } = prop;
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
                <td>{price}</td>
                <td>{amount}</td>
                <td>{price * amount}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
