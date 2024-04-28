import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken, setUserData } from "../redux/reducer/userReducer";
import "./signup.css";

const Signup = () => {
  const emailRef = useRef("");
  const userNameRef = useRef("");
  const companyRef = useRef("");
  const passwordRef = useRef("");
  const phoneRef = useRef("");
  const agencyYesRef = useRef("");
  const agencyNoRef = useRef("");

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [submit, setSubmit] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (submit) {
      const form = {
        name: userNameRef?.current?.value,
        phone: phoneRef?.current?.value,
        email: emailRef?.current?.value,
        password: passwordRef?.current?.value,
        agency:
          agencyYesRef?.current?.checked === true
            ? agencyYesRef?.current?.value
            : agencyNoRef?.current?.value,
        companyName: companyRef?.current?.value,
      };
      if (
        emailRef?.current?.value?.length !== 0 &&
        userNameRef?.current?.value?.length !== 0 &&
        passwordRef?.current?.value?.length !== 0 &&
        phoneRef?.current?.value?.length !== 0 &&
        (agencyYesRef?.current?.checked === true ||
          agencyNoRef?.current?.checked === true)
      ) {
        dispatch(setUserData(form));
        dispatch(setToken("poiu!852@lkj#951%mn"));
        navigate("/login");
        setSubmit(false);
      } else {
        setSubmit(false);
      }
    }
  }, [submit, navigate, dispatch]);

  useEffect(() => {
    setSubmit(false);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setErrorEmail(!emailRegex.test(emailRef.current?.value));
  }, [emailRef.current?.value]);

  useEffect(() => {
    setSubmit(false);
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    setErrorPass(!passwordRegex.test(passwordRef.current?.value));
  }, [passwordRef.current?.value]);

  return (
    <div className="signup-container">
      <div className="signup-content">
        <h3>Create your Booking account</h3>

        <label className="lb-1">
          Full Name<span>*</span>{" "}
        </label>
        <input
          className="ip-1"
          type="text"
          placeholder="Enter name"
          ref={userNameRef}
        />
        {submit && errorEmail && (
          <div className="popover-email">
            Please enter a valid email address.
          </div>
        )}
        <br />
        <label className="lb-2" for="phone">
          Phone number<span>*</span>{" "}
        </label>
        <input
          className="ip-2"
          type="tel"
          placeholder="Enter phone number"
          ref={phoneRef}
          name="phone"
        />
        {submit && errorEmail && (
          <div className="popover-email">
            {/* Please enter a valid email address. */}
          </div>
        )}

        <br />
        <label className="lb-3">
          Email address<span>*</span>{" "}
        </label>
        <input
          className="ip-3"
          type="email"
          placeholder="Enter email address"
          ref={emailRef}
        />
        {submit && errorEmail && <div className="popover-email"></div>}

        <br />
        <label className="lb-4">
          Password <span>*</span>{" "}
        </label>
        <input
          className="ip-4"
          type="password"
          placeholder="Enter password"
          ref={passwordRef}
        />
        {submit && errorPass && (
          <div className="popover-pw">
            Password must be at least 8 characters including a-z, A-Z and 0-9.
          </div>
        )}
        <br />

        <label className="lb-5">Company name </label>
        <input
          className="ip-5"
          type="text"
          placeholder="Enter company name"
          ref={companyRef}
        />
        <br />
        <label className="lb-6" htmlFor="agency">
          {" "}
          Are you an Agency?<span>*</span>{" "}
        </label>
        <input
          className="ip-6"
          type="radio"
          placeholder="Yes"
          name="agency"
          value="yes"
          ref={agencyYesRef}
        />
        <p className="ip-yes">Yes</p>

        <input
          className="ip-7"
          type="radio"
          placeholder="No"
          name="agency"
          value="no"
          ref={agencyNoRef}
        />
        <p className="ip-no">No</p>
        <button
          className="signup-click"
          onClick={() => {
            setSubmit(true);
          }}
        >
          Create Account
        </button>
      </div>
      <div className="bg-img">
        <img
          className="signup-img"
          src={require("../images/travel6.png")}
          alt=""
        />
      </div>
    </div>
  );
};

export default Signup;
