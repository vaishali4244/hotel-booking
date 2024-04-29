import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./checkout.css";

const Checkout = ({ price }) => {
  const data = useSelector((state) => state.userDetail);
  const { user } = data;

  const navigate = useNavigate();

  const [bookingConfirm, setBookingConfirm] = useState(false);

  const handleConfirmBooking = () => {
    setBookingConfirm(true);
  };

  const HomeFunc = () => {
    navigate("/");
  };

  return (
    <div className="cart-container">
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
          <h1 onClick={HomeFunc}>BookHotels</h1>

          <p>
            Location : <span>India</span>
          </p>
        </div>
      </div>
      <form className="form-content">
        <label>
          Name:
          <input type="text" name="name" value={user.name} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={user.email} />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" value={user.phone} />
        </label>

        <p className="final-price">
          Total Price: &#8377;<span>{price}</span>
        </p>
        <label>
          Payment Method:
          <select required>
            <option value="">Select Payment Option</option>
            <option value="payment1">UPI</option>
            <option value="payment2">Credit/ Debit / ATM Card</option>
            <option value="payment3">Net Banking</option>
          </select>
        </label>
        <button
          className="book-btn"
          type="button"
          onClick={handleConfirmBooking}
        >
          Confirm Booking
        </button>
      </form>
      {bookingConfirm && (
        <div className="booked">
          <p>Booking Confirmed</p>
        </div>
      )}
    </div>
  );
};

export default Checkout;
