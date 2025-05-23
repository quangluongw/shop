import InputField from "../../components/common/InputField";
import "../../css/form.css";

const ForgotPassword = () => {
  return (
    <div className="flex h-full max-w-[1440px] mx-auto my-10">
      {/* form lấy lại mật khẩu */}
      <div className="w-full flex items-center justify-center">
        <div className="w-full max-w-md px-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-lg w-full md:text-3xl xl:text-3xl font-semibold tracking-wider text-black">
              Fogort your password ?
            </h2>
            <p className="mb-10 text-sm md:text-base xl:text-lg text-gray-600">
              Enter your email bellow
            </p>
          </div>

          <form className="flex flex-col gap-6">
            <InputField
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="authForm-input"
            />
            <button type="submit" className="authForm-btn">
              Confirm
            </button>
            <p className="text-sm md:text-base xl:text-lg font-medium text-gray-700 text-center">
              Return to
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

export default ForgotPassword;
