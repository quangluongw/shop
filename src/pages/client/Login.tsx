import "../../css/form.css";

const Login = () => {
  return (
    <div className="flex h-full">
      {/* ảnh */}
      <div className="w-1/2 sm:w">
        <img
          className="authForm-img h-full w-full object-cover"
          src="https://houseofcambridge.co.uk/img/SideImage.png"
          alt="Login Visual"
        />
      </div>

      {/* form đăng nhập */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md px-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-semibold tracking-wider text-black">
              Log in to Exclusive
            </h2>
            <p className="mb-10 text-lg text-gray-600">
              Enter your details below
            </p>
          </div>

          <form className="flex flex-col gap-6">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email or Phone Number"
              className="authForm-input"
            />

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="authForm-input"
            />

            <div className="flex justify-between items-center">
              <button type="submit" className="authForm-btn">
                Log In
              </button>
              <a href="#" className="authForm-link">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
