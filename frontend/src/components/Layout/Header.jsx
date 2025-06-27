import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import { useState } from "react";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
  };
  return (
    <div className={`${styles.section}`}>
      <div className="min-[800px]:h-[50px] min-[800px]:my-[20px] min-[800px]:flex items-center justify-between">
        <div>
          <Link to="/">
            <img
              src="https://shopo.quomodothemes.website/assets/images/logo.svg"
              alt=""
            />
          </Link>
        </div>
        {/* search box */}
        <div className="w-[50%] relative">
          <input
            type="text"
            placeholder="Search Product..."
            value={handleSearchChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
