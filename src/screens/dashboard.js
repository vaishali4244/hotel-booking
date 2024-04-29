import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { hotelData } from "../components/hotelList/data.js";
import HotelList from "../components/hotelList/hotelList.js";
import SearchBar from "../components/searchBar/searchBar.js";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

const Dashboard = ({
  hotelDetails,
  setHotelDetails,
  setSelectedItem,
  price,
  setPrice,
  productCount,
  setProductCount,
  setAddToCart,
  addToCart,
}) => {
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [resetData, setResetData] = useState([]);
  const [isFilterApplied, setIsFilterApplied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const data = useSelector((state) => state.userDetail);
  const { user } = data;
  const navigate = useNavigate();

  useEffect(() => {
    if (search.length === 0) {
      // If search is empty, use the entire hotelData array
      setHotelDetails(hotelData);
      setResetData(hotelData);
    } else {
      const filteredData = hotelData.filter((item) => {
        return item?.metaData?.city
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setHotelDetails(filteredData);
    }
  }, [search, setResetData, setHotelDetails]);

  const handleFilterByPrice = () => {
    // Filter initial data based on price range
    const filteredData = hotelDetails.filter((item) => {
      const itemPrice = parseFloat(item?.metaData?.price);
      const min =
        minPrice !== "" ? parseFloat(minPrice) : Number.MIN_SAFE_INTEGER;
      const max =
        maxPrice !== "" ? parseFloat(maxPrice) : Number.MAX_SAFE_INTEGER;

      return itemPrice >= min && itemPrice <= max;
    });

    setHotelDetails(filteredData);
    setIsFilterApplied(true);
  };

  // Reset filter
  const resetFilter = () => {
    setHotelDetails(resetData);
    setIsFilterApplied(false);
    setMinPrice("");
    setMaxPrice("");
  };

  const cartFunc = () => {
    navigate("/cart");
  };

  return (
    <main className="dashboard-container">
      <header className="header">
        <div className="user-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={30}
            height={30}
            color={"#000000"}
            fill={"none"}
          >
            <path
              d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M14.75 9.5C14.75 11.0188 13.5188 12.25 12 12.25C10.4812 12.25 9.25 11.0188 9.25 9.5C9.25 7.98122 10.4812 6.75 12 6.75C13.5188 6.75 14.75 7.98122 14.75 9.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M5.49994 19.0001L6.06034 18.0194C6.95055 16.4616 8.60727 15.5001 10.4016 15.5001H13.5983C15.3926 15.5001 17.0493 16.4616 17.9395 18.0194L18.4999 19.0001"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="user-detail">
            <p className="p-name">{user.name}</p>
            <p className="p-email">{user.email}</p>
          </div>
        </div>
        <nav className="hotel-name">
          <h1>BookHotels</h1>
          <p>
            Location :<span> {hotelDetails[0]?.metaData?.country}</span>
          </p>
        </nav>

        <div className="cart-value">
          <div
            className="cart-img"
            onClick={() => {
              cartFunc();
            }}
          >
            <img
              src={require("../images/shoppingCart.png")}
              alt=""
              className="cart-icon "
            />
          </div>
          <p className="cart-count">{productCount}</p>
          <div className="cart-box">
            <p className="cart-amount">
              = <span>&#8377;</span>
              {price}
            </p>
          </div>
        </div>
      </header>

      <div className="hotel-location">
        <p>List of Hotels</p>
      </div>
      <div className="search-bar">
        <SearchBar search={search} setSearch={setSearch} />
      </div>

      <div className="price-section">
        <label>Price range:</label>
        <input
          type="number"
          value={minPrice}
          step={50}
          min={1000}
          onChange={(e) => setMinPrice(e?.target?.value)}
          placeholder={1000}
        />
        <label>to</label>
        <input
          type="number"
          value={maxPrice}
          min={parseInt(minPrice) + parseInt(1000)}
          step={100}
          onChange={(e) => setMaxPrice(e?.target?.value)}
          placeholder={7000}
        />
        <button onClick={handleFilterByPrice} disabled={isFilterApplied}>
          Apply
        </button>
        <button onClick={resetFilter}>Reset value</button>
      </div>
      <HotelList
        setIsLoading={setIsLoading}
        hotelDetails={hotelDetails}
        setSelectedItem={setSelectedItem}
        price={price}
        setPrice={setPrice}
        setProductCount={setProductCount}
        addToCart={addToCart}
        setAddToCart={setAddToCart}
        isLoading={isLoading}
      />
    </main>
  );
};

export default Dashboard;
