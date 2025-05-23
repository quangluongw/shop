import InputField from "../../components/common/InputField";
import "../../css/form.css";

const Signup = () => {
  return (
    <div className="flex h-full max-w-[1440px] mx-auto my-10">
      {/* ảnh */}
      <div className="authForm-img">
        <img src="https://houseofcambridge.co.uk/img/SideImage.png" />
      </div>

      {/* form đăng ký */}
      <div className="w-full flex items-center justify-center">
        <div className="w-full max-w-md px-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-lg md:text-3xl xl:text-4xl font-semibold tracking-wider text-black">
              Create an account
            </h2>
            <p className="mb-10 text-sm md:text-base xl:text-lg text-gray-600">
              Enter your details below
            </p>
          </div>

          <form className="flex flex-col gap-6">
            <InputField
              type="text"
              id="username"
              name="username"
              placeholder="Name"
            />

            <InputField
              type="text"
              id="email"
              name="email"
              placeholder="Email or Phone Number"
            />

            <InputField
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <button type="submit" className="authForm-btn">
              Create Account
            </button>
            <button className="authForm-google">
              <img
                src="https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s48-fcrop64=1,00000000ffffffff-rw"
                alt="Google logo"
                className="size-5 md:size-5 xl:size-6 mr-3"
              />
              <span className="text-sm md:text-base xl:text-lg font-medium text-gray-700">
                Sign up with Google
              </span>
            </button>
            <p className="text-sm md:text-base xl:text-lg font-medium text-gray-700 text-center">
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
