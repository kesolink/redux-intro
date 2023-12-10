import { useDispatch, useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const dispatch = useDispatch();
const {balance} = useSelector(state => state.account)
  return <div className="balance">{formatCurrency(balance)}</div>;
}
// {formatCurrency(123456)}

export default BalanceDisplay;
