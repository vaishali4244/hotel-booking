import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken } from "../redux/reducer/userReducer";
import "./login.css";

const Login = () => {
  const { user } = useSelector((state) => state.userDetail);

  const [submit, setSubmit] = useState(false);

  const logEmailRef = useRef("");
  const logPwRef = useRef("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (submit) {
      if (
        user.email === logEmailRef?.current?.value &&
        user.password === logPwRef?.current?.value
      ) {
        dispatch(setToken("ertyujhfd852@hgdhgtj"));
        navigate("/hotels");
        setSubmit(false);
      } else {
        setSubmit(false);
      }
    }
  }, [submit, user.email, user.password, dispatch, navigate]);

  return (
    <section className="login-container">
      <div className="login-content">
        <h3>Signin to your Booking Account</h3>
        <p>Lorem ipsum dolor sit amet, </p> <p>consectetur adipiscing elit.</p>
        <label className="login-label">Email Address </label>
        <input
          className="login-email"
          type="text"
          placeholder="Enter email address"
          ref={logEmailRef}
        />
        <br />
        <label className="pw-label">Password </label>
        <input
          className="login-pw"
          type="password"
          placeholder="Enter password"
          ref={logPwRef}
        />
        {submit && <div className="popover-email"></div>}
        <br />
        <button
          className="login-click "
          onClick={() => {
            setSubmit(true);
          }}
        >
          Login
        </button>
      </div>
      <div className="bg-img">
        <img
          className="login-img"
          src={require("../images/travel2.png")}
          alt=""
        />
      </div>
    </section>
  );
};

export default Login;
