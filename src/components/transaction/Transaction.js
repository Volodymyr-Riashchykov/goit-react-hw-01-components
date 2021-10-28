import PropTypes from "prop-types";
import style from "./Transaction.module.css";


export default function Transaction({ items }) {
  return (
    <table className={style.transaction} rules="cols">
      <thead>
        <tr>
          <th className={style.title}>Type</th>
          <th className={style.title}>Amount</th>
          <th className={style.title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={style.item}>
            <td className={style.text}>{type}</td>
            <td className={style.text}>{amount}</td>
            <td className={style.text}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Transaction.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};