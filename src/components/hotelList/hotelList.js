import React from "react";
import "./hotelList.css";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HotelList = ({
  hotelDetails,
  setSelectedItem,
  price,
  setPrice,
  setProductCount,
  setIsLoading,
  setAddToCart,
  addToCart,
}) => {
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    // Calculate the total amount by adding the price of the selected item
    const totalAmount = parseFloat(price) + parseFloat(item?.metaData?.price);
    setPrice(totalAmount.toFixed(0));
    let newBooking = item;
    setAddToCart((previousData) => [...previousData, newBooking]);
    // Increment the product count every time the "Add to cart" button is clicked
    setProductCount((prevCount) => prevCount + 1);
  };

  const productDetailsFunc = async (item) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSelectedItem(item);
    navigate("/hotels/details");
    setIsLoading(false);
  };
  return (
    <>
      {hotelDetails?.map((item, idx) => {
        return (
          <div key={idx} className="hotel-list">
            <LazyLoadImage
              className="product-img"
              src={item?.metaData?.image}
              alt="not available"
              effect="blur"
              onClick={() => productDetailsFunc(item)}
            />

            <div className="card-body ">
              <p className="card-name">{item?.display}</p>
              <p className="card-city">
                {item?.metaData?.city}
                <span className="card-state">, {item?.metaData?.state}</span>
              </p>
              <div className="card-rooms">
                <p>Rooms Available : {item?.metaData?.rooms}</p>
                <p>
                  Amenities :{` ` + item?.metaData?.amenities[0]},
                  {` ` + item?.metaData?.amenities[1]},
                  {` ` + item?.metaData?.amenities[2]}
                </p>

                <p className="product-price">&#8377;{item?.metaData?.price}</p>
              </div>
              <button
                className="book-btn"
                onClick={() => {
                  handleAddToCart(item);
                }}
              >
                Book Now
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default HotelList;
