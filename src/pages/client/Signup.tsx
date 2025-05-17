import InputField from "../../components/common/InputField";
import "../../css/form.css";

const Signup = () => {
  return (
    <div className="flex md:flex-row flex-col min-h-[100vh] py-10 gap-2">
      {/* ảnh */}
      <div className="laptop:block hidden f-ull md:w-1/2 ">
        <img
          className="authForm-img h-full "
          src="https://houseofcambridge.co.uk/img/SideImage.png"
        />
      </div>
      <InputField   />

      {/* form đăng ký */}
      <div className="w-full laptop:w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md px-8 flex flex-col gap-5 md:gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl md:text-left text-center font-semibold tracking-wider text-black">
              Create an account
            </h2>
            <p className="text-center text-lg text-gray-600">
              Enter your details below
            </p>
          </div>

          <form className="flex flex-col gap-6">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Name"
              className="authForm-input"
            />

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
            <button type="submit" className="authForm-btn">
              Create Account
            </button>
            <button className="authForm-google">
              <img
                src="https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s48-fcrop64=1,00000000ffffffff-rw"
                alt="Google logo"
                className="size-6 mr-3"
              />
              <span className="text-lg font-medium text-gray-700">
                Sign up with Google
              </span>
            </button>
            <p className="text-lg font-medium text-gray-700 text-center">
              Already have account?
              <a className="authForm-link2" href="/login">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
