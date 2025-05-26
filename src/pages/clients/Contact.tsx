import { Mail, Phone } from "lucide-react";
import InputField from "../../components/common/InputField";
import '../../css/form.css'
const Contact = () => {
  return (
    <div>
      <div className="flex gap-4">
        <a
          href="/home"
          className="text-sm xl:text-base text-gray-400 hover:text-red-500 font-medium"
        >
          Home
        </a>
        <span className="text-gray-400 text-sm xl:text-base">/</span>
        <p className="font-medium text-sm xl:text-base">Contact</p>
      </div>

      <div className="flex flex-col xl:flex-row my-10 gap-6 ">
        <div className="w-full xl:w-1/3 shadow-lg p-8">
          <div className="text-sm">
            <div className="flex gap-4 items-center my-4">
              <span className="bg-red-500 text-white rounded-full p-1 xl:p-2">
                <Phone />
              </span>
              <h2 className="font-semibold text-base xl:text-2xl">Call To Us</h2>
            </div>
            <div className="space-y-4">
              <p className="text-sm xl:text-base">We are available 24/7, 7 days a week.</p>
              <p className="text-sm xl:text-base">Phone: +8801611112222</p>
            </div>
          </div>
          <hr className="my-8 mx-auto border-gray-500 w-[17rem]" />
          <div>
            <div className="flex items-center gap-4 my-4">
              <span className="bg-red-500 text-white rounded-full p-1 xl:p-2">
                <Mail />
              </span>
              <h2 className="font-semibold text-base xl:text-xl">Write To Us</h2>
            </div>
            <div className="flex flex-col gap-4 ">
              <p className="text-sm xl:text-base">Fill out our form and we will contact you within 24 hours</p>
              <span className="text-sm xl:text-base">Emails: customer@exclusive.com</span>
              <span className="text-sm xl:text-base">Emails: support@exclusive.com</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between w-full xl:w-2/3 shadow-lg p-8  rounded">
          <form className="w-full flex flex-col gap-4 xl:pt-10">
            <div className="flex gap-4 flex-col xl:flex-row">
              <InputField
                type="text"
                name="contactName"
                id="contactName"
                placeholder="Your Name"
                required
                className="contactForm-input"
              />
              <InputField
                type="email"
                name="contactEmail"
                id="contactEmail"
                placeholder="Your Email"
                required
                className="contactForm-input"
              />
              <InputField
                type="text"
                name="contactPhone"
                id="contactPhone"
                placeholder="Your Phone"
                required
                className="contactForm-input"
              />
            </div>

            <textarea
              name="contactMessage"
              id="contactMessage"
              placeholder="Your message"
              className="w-full bg-gray-100 rounded p-3 transition-all duration-300 xl:h-1/2"
            />

            <button className="xl:w-1/3 self-end text-white font-sm xl:font-medium  px-4 py-3 xl:py-3 xl:px-9 bg-red-500 border border-red-500 rounded hover:bg-white hover:text-red-500 transition-all duration-300">
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
