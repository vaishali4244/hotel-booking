import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./screens/login";
import Screen from "./screens/screen";
import Signup from "./screens/signup";
import Dashboard from "./screens/dashboard";
import HotelCard from "./components/hotelCard/hotelCard";
import Checkout from "./components/checkout/checkout";
import BookingCart from "./components/BookingCart/bookingCart";
import "./App.css";

function App() {
  const [hotelDetails, setHotelDetails] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [price, setPrice] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [addToCart, setAddToCart] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<Screen />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/checkout" element={<Checkout price={price} />} />
      <Route
        path="/cart"
        element={
          <BookingCart
            price={price}
            setPrice={setPrice}
            addToCart={addToCart}
            setAddToCart={setAddToCart}
          />
        }
      />

      <Route
        path="/hotels"
        element={
          <Dashboard
            hotelDetails={hotelDetails}
            setHotelDetails={setHotelDetails}
            setSelectedItem={setSelectedItem}
            price={price}
            setPrice={setPrice}
            productCount={productCount}
            setProductCount={setProductCount}
            addToCart={addToCart}
            setAddToCart={setAddToCart}
          />
        }
      />

      <Route
        path="/hotels/details"
        element={
          <HotelCard
            hotelDetails={hotelDetails}
            setHotelDetails={setHotelDetails}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            price={price}
            setPrice={setPrice}
            productCount={productCount}
            setProductCount={setProductCount}
          />
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
