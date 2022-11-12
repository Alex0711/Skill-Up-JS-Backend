import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTransactions } from "../../redux/features/transaction/transactionGetSlice";
import { getAllUsers } from "../../redux/features/users/usersGetSlice";
import ChartWidget from "./components/ChartWidget";
import TableBackOffice from "./components/TableBackOffice";

const BackOfficeContainer = () => {
  const { transactions, transactionsByCategory } = useSelector(
    (state) => state.transactions.transactionsList
  );
  const users = useSelector((state) => state.users.usersList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactions());
  }, []);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const expensesItems = transactions?.filter(
    (transaction) => transaction.category === "Expense"
  );
  const incomesItems = transactions?.filter(
    (transaction) => transaction.category === "Income"
  );

  const initialValues = 0;
  const totalExpenses = expensesItems
    ?.reduce((prev, curr) => prev + curr.amount, initialValues)
    .toFixed(2);
  const totalIncomes = incomesItems
    ?.reduce((prev, curr) => prev + curr.amount, initialValues)
    .toFixed(2);

  return (
    <section className="flex flex-col gap-16">
      <div className="flex flex-col h-fit border rounded-lg p-6">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6">
          <p className="text-2xl font-bold opacity-80 pb-6">Register users</p>
          <p className="text-lg opacity-80 pb-6">
            Total users: {users?.length}
          </p>
        </div>
        <TableBackOffice data={users} />
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-2">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6">
          <p className="text-2xl font-bold opacity-80 pb-6">Expenses</p>
          <p className="text-lg opacity-80 pb-6">
            Total expense transactions: {transactionsByCategory?.Expense}
          </p>
        </div>
        <ChartWidget
          title={`Total expenses amount: ${totalExpenses}`}
          aspect={3 / 2}
          data={expensesItems}
          dataKeyX="createdAt"
          dataKeyY="amount"
          color="#FF0000"
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-2">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6">
          <p className="text-2xl font-bold opacity-80 pb-6">Incomes</p>
          <p className="text-lg opacity-80 pb-6">
            Total income transactions: {transactionsByCategory?.Income}
          </p>
        </div>
        <ChartWidget
          title={`Total incomes amount: ${totalExpenses}`}
          aspect={3 / 2}
          data={incomesItems}
          dataKeyX="createdAt"
          dataKeyY="amount"
          color="#00FF00"
        />
      </div>
    </section>
  );
};

export default BackOfficeContainer;
