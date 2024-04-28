import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./hotelCard.css";

const HotelCard = ({
  selectedItem,
  price,
  setPrice,
  productCount,
  setProductCount,
}) => {
  const navigate = useNavigate();

  const data = useSelector((state) => state.userDetail);
  const { user } = data;
  const handleAddToCart = (selectedItem) => {
    const totalAmount =
      parseFloat(price) + parseFloat(selectedItem?.metaData?.price);
    setPrice(totalAmount.toFixed(0));
    setProductCount((prevCount) => prevCount + 1);
  };

  const backBtn = () => {
    navigate("/hotels");
  };

  return (
    <div className="card-container">
      <div className="header card-head">
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
        <div className="hotel-name">
          <h1>BookHotels</h1>
          <p>
            Location : <span>India</span>
          </p>
        </div>

        <div className="cart-value">
          <div className="cart-img card-cart">
            <img
              src={require("../../images/shoppingCart.png")}
              alt=""
              className="cart-icon"
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
      </div>
      <div className="backBtn" onClick={() => backBtn()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="white"
          className="bi bi-arrow-left-square-fill"
          viewBox="0 0 16 16"
        > 
          <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1" />
        </svg>
      </div>

      <div className="hotel-card">
        <LazyLoadImage
          className="product-img hotel-img"
          src={selectedItem?.metaData?.image}
          alt="not available"
          effect="blur"
        />
        <div className="card-body">
          <p className="card-name">{selectedItem?.display}</p>
          <p className="card-city hotel-city">
            {selectedItem?.metaData?.city}
            <span className="card-state">
              , {selectedItem?.metaData?.state}
            </span>
          </p>
          <div className="card-rooms">
            <p>Rooms Available : {selectedItem?.metaData?.rooms}</p>
            <p>
              Amenities :{` ` + selectedItem?.metaData?.amenities[0]},
              {` ` + selectedItem?.metaData?.amenities[1]},
              {` ` + selectedItem?.metaData?.amenities[2]}
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              delectus reprehenderit dignissimos temporibus id vitae ullam
              tenetur architecto, perspiciatis quisquam saepe? Maxime debitis
              sed officiis animi, sit eligendi alias ducimus?
            </p>

            <p className="product-price">
              &#8377;{selectedItem?.metaData?.price}
            </p>
          </div>
          <button
            className="book-btn "
            onClick={() => {
              handleAddToCart(selectedItem);
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
