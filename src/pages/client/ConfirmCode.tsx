import { Mails } from "lucide-react";
import InputField from "../../components/common/InputField";
import "../../css/form.css";

const ConfirmCode = () => {
  return (
    <div className="flex flex-col  h-screen max-w-[1440px] m-auto">
      <div className="flex justify-center my-3 xl:my-5">
        <Mails className="xl:size-20 md:size-[4rem] size-10 trans" />
      </div>
      {/* form lấy lại mật khẩu */}
      <div className="w-full flex items-center justify-center">
        <div className="w-full max-w-md px-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-lg w-full md:text-3xl xl:text-3xl font-bold tracking-wider text-black text-center">
              Check your email !
            </h2>
            <p className="mb-10 text-xs md:text-base xl:text-lg text-gray-600 text-center font-semibold">
              We sent a reset code to example@gmail.com <br />
              enter 5 digit code that mentioned in the email
            </p>
          </div>

          <form className="flex flex-col gap-6">
            <div className="flex gap-6 justify-center">
              <InputField
                type="text"
                maxLength={1}
                className="authForm-codeInput"
              />
              <InputField
                type="text"
                maxLength={1}
                className="authForm-codeInput"
              />
              <InputField
                type="text"
                maxLength={1}
                className="authForm-codeInput"
              />
              <InputField
                type="text"
                maxLength={1}
                className="authForm-codeInput"
              />
              <InputField
                type="text"
                maxLength={1}
                className="authForm-codeInput"
              />
            </div>
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

export default ConfirmCode;
