import AdminDashboard from "./AdminDashboard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTransactions } from "../../redux/features/transaction/transactionGetSlice";

const AdminDashboardContainer = () => {
  const movements = useSelector((state) => state.transactions.transactionsList);
  const dispatch = useDispatch();

  console.log(movements);

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  return (
    <>
      <AdminDashboard />
    </>
  );
};

export default AdminDashboardContainer;
