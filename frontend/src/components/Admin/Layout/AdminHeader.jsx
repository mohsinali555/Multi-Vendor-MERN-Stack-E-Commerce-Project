import { AiOutlineGift } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";

const AdminHeader = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
      <div>
        <Link to="/">
          <img
            src="https://shopo.quomodothemes.website/assets/images/logo.svg"
            alt=""
          />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <Link to="/dashboard/cupouns" className="min-[800px]:block hidden">
            <AiOutlineGift
              size={30}
              color="#555"
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-events" className="min-[800px]:block hidden">
            <MdOutlineLocalOffer
              size={30}
              color="#555"
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-products" className="min-[800px]:block hidden">
            <FiShoppingBag
              size={30}
              color="#555"
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-orders" className="min-[800px]:block hidden">
            <FiPackage size={30} color="#555" className="mx-5 cursor-pointer" />
          </Link>
          <Link to="/dashboard-messages" className="min-[800px]:block hidden">
            <BiMessageSquareDetail
              size={30}
              color="#555"
              className="mx-5 cursor-pointer"
            />
          </Link>
          <img
            src={`${user?.avatar?.url}`}
            alt=""
            className="w-[50px] h-[50px] rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
