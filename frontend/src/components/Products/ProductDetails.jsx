import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import styles from "../../styles/styles";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const ProductDetails = ({ data }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();

  const handleMessageSubmit = () => {
    navigate("/inbox?conversation=50dhbgw495802hbjkbr");
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="bg-white">
      {data ? (
        <div className={`${styles.section} w-[90%] min-[800px]:w-[80%]`}>
          <div className="w-full py-5">
            <div className="block w-full min-[800px]:flex">
              <div className="w-full min-[800px]:w-[50%]">
                <img
                  src={data.image_Url[select].url}
                  alt=""
                  className="w-[80%]"
                />
                <div className="w-full flex">
                  <div
                    className={`${
                      select === 0 ? "border" : "null"
                    } cursor-pointer`}
                  >
                    <img
                      src={data?.image_Url[0].url}
                      alt=""
                      className="h-[200px]"
                      onClick={() => setSelect(0)}
                    />
                  </div>
                  <div
                    className={`${
                      select === 1 ? "border" : "null"
                    } cursor-pointer`}
                  >
                    <img
                      src={data?.image_Url[1].url}
                      alt=""
                      className="h-[200px]"
                      onClick={() => setSelect(1)}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full min-[800px]:w-[50%] pt-5">
                <h1 className={`${styles.productTitle}`}>{data.name}</h1>
                <p>{data.description}</p>
                <div className="flex pt-3">
                  <h4 className={`${styles.productDiscountPrice}`}>
                    {data.discount_price}$
                  </h4>
                  <h3 className={`${styles.price}`}>
                    {data.price ? data.price + "$" : null}
                  </h3>
                </div>

                <div className="flex items-center mt-12 justify-between pr-3">
                  <div>
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={decrementCount}
                    >
                      -
                    </button>
                    <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[8px]">
                      {count}
                    </span>
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={incrementCount}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    {click ? (
                      <AiFillHeart
                        size={30}
                        className="cursor-pointer "
                        onClick={() => setClick(!click)}
                        color={click ? "red" : "#333"}
                        title="Remove from Wishlist"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => setClick(!click)}
                        color={click ? "red" : "#333"}
                        title="Add to  Wishlist"
                      />
                    )}
                  </div>
                </div>
                <div
                  className={`${styles.button} mt-6 rounded h-11 flex items-center`}
                >
                  <span className="text-white flex items-center">
                    Add to cart
                    <AiOutlineShoppingCart className="ml-1" />
                  </span>
                </div>
                <div className="flex items-center pt-8">
                  <img
                    src={data.shop.shop_avatar.url}
                    alt=""
                    className="w-[50px] h-[50px] rounded-full mr-2"
                  />
                  <div className="pr-8">
                    <h3 className={`${styles.shop_name} pb-1 pt-1`}>
                      {data.shop.name}
                    </h3>
                    <h5 className="pb-3 text-[15px]">
                      ({data.shop.ratings}) Ratings
                    </h5>
                  </div>
                  <div
                    className={`${styles.button1}  bg-[#6443d1] mt-4 rounded h-11`}
                    onClick={handleMessageSubmit}
                  >
                    <span className=" text-white flex items-center">
                      Send Message
                      <AiOutlineMessage className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ProductDetailsInfo data={data} />
            <br />
            <br />
          </div>
        </div>
      ) : null}
    </div>
  );
};

const ProductDetailsInfo = ({ data }) => {
  const [active, setActive] = useState(1);

  return (
    <div className="bg-[#f5f6fb] px-3 min-[800px]:px-10 py-2 rounded">
      <div className="w-full flex justify-between border-b pt-10 pb-2">
        <div className="relative">
          <h5
            className="text-[#000] text-[18px] px-1 loading-5 font-[600] cursor-pointer min-[800px]:text-[20px]"
            onClick={() => setActive(1)}
          >
            Product Details
          </h5>
          {active === 1 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className="text-[#000] text-[18px] px-1 loading-5 font-[600] cursor-pointer min-[800px]:text-[20px]"
            onClick={() => setActive(2)}
          >
            Product Reviews
          </h5>
          {active === 2 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className="text-[#000] text-[18px] px-1 loading-5 font-[600] cursor-pointer min-[800px]:text-[20px]"
            onClick={() => setActive(3)}
          >
            Seller Information
          </h5>
          {active === 3 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
      </div>
      {active === 1 ? (
        <>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            tempore libero perspiciatis facilis fugit possimus temporibus
            reprehenderit exercitationem. Delectus voluptates mollitia ducimus
            molestias illum sint. Animi itaque at atque. Ea ex accusamus
            necessitatibus nam commodi blanditiis nostrum voluptatem animi. At
            facilis explicabo cupiditate sequi commodi unde hic laborum ex,
            minima doloribus alias rem itaque sint id reprehenderit eius,
            dolores error dicta obcaecati similique nesciunt, voluptatibus
            perspiciatis tenetur? Odio illum at saepe, culpa modi tempore
            reiciendis officia distinctio? Itaque ex ab expedita nulla aperiam
            voluptatem modi atque, quae alias officiis laudantium.
          </p>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            eligendi voluptatibus similique dolores, iure deleniti recusandae
            nisi nemo adipisci eveniet blanditiis provident fuga a dolor ipsum
            deserunt temporibus natus porro veniam consequuntur eius dignissimos
            ab soluta quos? Quos quas beatae, perferendis iusto pariatur facere,
            doloribus explicabo est assumenda amet maiores odio voluptatem modi
            temporibus dolorum sit porro, error labore. Itaque iste adipisci
            asperiores esse id quibusdam voluptate ad expedita, temporibus odio
            quis! In, neque qui esse adipisci vero eaque libero omnis sequi,
            nostrum necessitatibus voluptates optio soluta deleniti mollitia
            consequatur.
          </p>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            eligendi voluptatibus similique dolores, iure deleniti recusandae
            nisi nemo adipisci eveniet blanditiis provident fuga a dolor ipsum
            deserunt temporibus natus porro veniam consequuntur eius dignissimos
            ab soluta quos? Quos quas beatae, perferendis iusto pariatur facere,
            doloribus explicabo est assumenda amet maiores odio voluptatem modi
            temporibus dolorum sit porro, error labore. Itaque iste adipisci
            asperiores esse id quibusdam voluptate ad expedita, temporibus odio
            quis! In, neque qui esse adipisci vero eaque libero omnis sequi,
            nostrum necessitatibus voluptates optio soluta deleniti mollitia
            consequatur.
          </p>
        </>
      ) : null}

      {active === 2 ? (
        <div className="w-full justify-center min-h-[40vh] flex items-center">
          <p>No Reviews yet!</p>
        </div>
      ) : null}

      {active === 3 && (
        <div className="w-full block min-[800px]:flex p-5">
          <div className="w-full min-[800px]:w-[50%]">
            <div className="flex items-center">
              <img
                src={data.shop.shop_avatar.url}
                className="w-[50px] h-[50px] rounded-full"
                alt=""
              />
              <div className="pl-3">
                <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                <h5 className="pb-2 text-[15px]">
                  ({data.shop.ratings}) Ratings
                </h5>
              </div>
            </div>
            <p className="pt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
              excepturi consequatur molestias veniam vero distinctio perferendis
              voluptatem qui delectus natus ipsum iusto, quisquam id. Soluta
              mollitia fuga itaque quos, ipsam eaque, voluptatem voluptas ad
              temporibus quaerat ab, nihil autem. Id rem et eum eius. Vitae
              corporis ipsa deserunt molestias quo?
            </p>
          </div>
          <div className="w-full min-[800px]:w-[50%] mt-5 min-[800px]:flex flex-col items-end">
            <div className="text-left">
              <h5 className="font-[600]">
                Joined on: <span className="font-[500]">08 july,2025</span>
              </h5>
              <h5 className="font-[600] pt-3">
                Total Products: <span className="font-[500]">1,223</span>
              </h5>
              <h5 className="font-[600] pt-3">
                Total Reviews: <span className="font-[500]">325</span>
              </h5>
              <Link to="/">
                <div
                  className={`${styles.button} !rounded-[4px] !h-[39.5px] mt-3`}
                >
                  <h4 className="text-white">Visit Shop</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
