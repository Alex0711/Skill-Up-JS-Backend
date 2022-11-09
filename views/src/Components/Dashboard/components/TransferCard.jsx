import { Link } from "react-router-dom";
import { MdAttachMoney } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import { GiPayMoney } from "react-icons/gi";

const TransferCard = () => {
  const links = [
    {
      text: "Balance charge",
      url: "",
      info: "Charge balance to your wallet.",
      icon: <MdAttachMoney />,
    },
    { text: "Expense", url: "", info: "Make a payment.", icon: <GiPayMoney /> },
    {
      text: "Transfer",
      url: "",
      info: "Transfer balance to another user.",
      icon: <BiTransfer />,
    },
  ];

  return (
    <div className="flex items-center border p-6 lg:p-10 gap-12 rounded-lg bg-gradient-to-b from-teal-50 to-white">
      <div className="flex flex-col w-full">
        <p className="text-2xl font-bold opacity-80 pb-6">New transaction</p>
        <p className="opacity-80 pb-4">Select an option</p>
        <div className="flex flex-col gap-6">
          {links.map(({ text, url, info, icon }) => (
            <div key={text} className="flex flex-col-reverse lg:flex-row gap-6 lg:items-center">
              <Link
                className="lg:w-1/3 border rounded-lg hover:border-black bg-white px-4 py-2 duration-200"
                to={url}
              >
                {text}
              </Link>
              <div className="flex gap-1 items-center opacity-90">
                <i>{icon}</i>
                <p>{info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransferCard;
