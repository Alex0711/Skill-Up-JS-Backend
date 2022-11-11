import HeaderContainer from "../../Components/Header/HeaderContainer";
import FooterContainer from "../../Components/Footer/FooterContainer";
import AdminDashboardContainer from "../../Components/AdminDashboard/AdminDashboardContainer";

const AdminPage = () => {
  return (
    <>
      <HeaderContainer />
      <main className="flex flex-col px-6 lg:px-16 py-8 gap-6">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>
        <AdminDashboardContainer />
      </main>
      <FooterContainer />
    </>
  );
};

export default AdminPage;
