import React from "react";
import { useLoaderData } from "react-router-dom";
import GradeIcon from "@mui/icons-material/Grade";
import ApiIcon from "@mui/icons-material/Api";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Products = () => {
  const data = useLoaderData();
  const ProductsData = data.data;
  console.log(ProductsData);

  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-10 px-4">
      {ProductsData.map((item) => (
        <div
          key={item.id}
          className="bg-white h-auto border-[1px] border-gray-200 py-8 z-30 hover:border-transparent shadow-none hover:shadow-textShadow duration-200 flex flex-col gap-4 relative"
        >
          <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">
            {item.category}
          </span>

          <div className="w-full h-auto flex items-center justify-center relative group">
            <img
              className="w-52 h-64 object-contain"
              src={item.image}
              alt="ProductImg"
            />

            <ul className="absolute w-full h-36 bg-gray-100 bottom-[-170px] group-hover:bottom-0 duration-700 flex flex-col justify-center items-end gap-2 font-titleFont px-2 border-1 border-r ">
              <li className="productLi">
                Compare
                <span>
                  <ApiIcon />
                </span>
              </li>

              <li className="productLi">
                Add to Cart
                <span>
                  <ShoppingCartIcon />
                </span>
              </li>

              <li className="productLi">
                View Details
                <span>
                  <ArrowCircleRightIcon />
                </span>
              </li>

              <li className="productLi">
                Add to Wish List
                <span>
                  <FavoriteIcon />
                </span>
              </li>
            </ul>
          </div>

          <div className="px-4 z-10 bg-white">
            <div className="flex items-center justify-between">
              <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">
                {item.title.substring(0, 20)}
              </h2>

              <p className="text-sm text-gray-600 font-semibold">
                ${item.price}
              </p>
            </div>

            <div>
              <p className="text-sm">{item.description.substring(0, 100)}...</p>
              <div className="text-yellow-500">
                <GradeIcon />
                <GradeIcon />
                <GradeIcon />
                <GradeIcon />
                <GradeIcon />
              </div>
            </div>

            <button className="w-full py-1.5 rounded-md mt-3 font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border border-yellow-500 hover:border-yellow-700 hover:from-yellow-300 to hover:to-yellow-400 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
