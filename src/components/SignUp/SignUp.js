import "./signup.css";
import { useState } from "react";
import logo from "../../assets/logoIcon.png";
import eye from "../../assets/eye.svg";
import social from "../../assets/social.svg";
import clipboard from "../../assets/clipboard.svg";
import media from "../../assets/media.svg";
// import wave from "../../assets/wave.svg";

const SignUp = () => {
  // Toggle Passwords
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);

  //   Target Values In Form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  //   Functions to Toggle Passwords
  const handleShowPassword = () => {
    return setShowPassword(!showPassword);
  };

  const handleShowRetypePassword = () => {
    return setShowRetypePassword(!showRetypePassword);
  };

  //   Form Action Function
  const handleSubmit = (e) => {
    e.preventDefault();

    const userDetails = {
      name,
      email,
      password,
      retypePassword,
    };

    console.log(userDetails);
  };

  return (
    <>
      <div className="signup">
        <div className="signupContainer">
          <div className="signupTop">
            <div className="logoTop">
              <img
                className="signupLogo"
                src={logo}
                alt="an svg file wishful logo"
              />
            </div>
          </div>
          <div className="signupBody">
            <h2 className="signupBodyHeading">Sign up</h2>
            <form className="signupForm" onSubmit={handleSubmit}>
              <div className="formGroupController">
                {/* Name */}
                <div className="formGroup">
                  <input
                    type="text"
                    placeholder="Name"
                    className="formGroupItem"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                {/* Email */}
                <div className="formGroup">
                  <input
                    type="text"
                    placeholder="Email"
                    className="formGroupItem"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {/* Password */}
                <div className="formGroup">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="formGroupItem"
                    onChange={(e) => setPassword(e.target.value)}
                  />{" "}
                  <img
                    src={eye}
                    alt=""
                    className="passwordEye"
                    onClick={handleShowPassword}
                  />
                </div>
                {/* RETYPE PASSWORD */}
                <div className="formGroup">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Retype Password"
                    className="formGroupItem"
                    onChange={(e) => setRetypePassword(e.target.value)}
                  />{" "}
                  <img
                    src={eye}
                    alt=""
                    className="passwordEye"
                    onClick={handleShowRetypePassword}
                  />
                </div>
                <button type="submit" className="signupButton">
                  Sign up
                </button>
              </div>
            </form>

            {/* Social Media Auth */}

            <div className="socialSignUp">
              <span className="socialSignUpText">Sign up with</span>
              <img
                src={social}
                alt="Social Media Signup"
                className="socialIcon"
              />
              <p className="signupLogin">Already have an account? Login</p>
            </div>
          </div>
        </div>
        <div className="clipboard">
          <img className="clipboardImage" src={clipboard} alt="" />
        </div>
        <div className="media">
          <img className="mediaImage" src={media} alt="" />
        </div>
      </div>
    </>
  );
};

export default SignUp;
