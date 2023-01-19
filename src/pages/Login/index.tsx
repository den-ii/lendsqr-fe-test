import { useState, useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import { Link, useNavigate } from "react-router-dom";
import { MdError } from "react-icons/md";

export const Login = () => {
  const { loginData, handleLoginData, error, setError } =
    useContext(LoginContext);
  const [showpswd, setShowpswd] = useState(false);
  const navigate = useNavigate();

  const handleShowpswd = () => {
    setShowpswd(!showpswd);
  };
  const handleError = () => {
    if (loginData.email.length) {
      if (
        loginData.email === "adedeji@gmail.com" &&
        loginData.password.length > 5
      ) {
        setError(false);
        localStorage.setItem("user", "true");
        navigate("/dashboard/users");
      } else {
        setError(true);
        localStorage.clear();
      }
    } else {
      setError(true);
      localStorage.clear();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleError();
  };

  return (
    <div className="login">
      <div className="art-side">
        <div className="logo">
          <img src="/assets/logo.svg" alt="logo" />
        </div>
        <div className="art-img">
          <img src="/assets/login-art.svg" alt="writing art" />
        </div>
      </div>
      <div className="form-side">
        <div className="mobile-logo">
          <img src="/assets/logo.svg" alt="logo" />
        </div>
        <div className="greetings">
          <h2>Welcome!</h2>
          <p>Enter details to login.</p>
        </div>
        <div className="form">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={loginData.email}
                onChange={handleLoginData}
                required
              />
            </div>
            <div>
              <input
                type={showpswd ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={loginData.password}
                onChange={handleLoginData}
                required
              />
              <span className="show-pswd" onClick={handleShowpswd}>
                {showpswd ? "HIDE" : "SHOW"}
              </span>
            </div>

            {error && (
              <div className="error">
                <MdError />
                <span className="text">Email or Password is incorrect</span>
              </div>
            )}

            <div className="forgot-pswd">
              <Link to="/resetpwd">FORGOT PASSWORD?</Link>
            </div>
            <div className="login-btn">
              <button>LOG IN</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
