import AdminHeader from "../components/Layout/AdminHeader";
import AdminSideBar from "../components/Admin/Layout/AdminSideBar";
import AllOrders from "../components/Admin/AllOrders";

const AdminDashboardOrdersPage = () => {
  return (
    <div>
      <AdminHeader />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full">
          <div className="w-[80px] min-[800px]:w-[330px]">
            <AdminSideBar active={2} />
          </div>
          <AllOrders />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardOrdersPage;
