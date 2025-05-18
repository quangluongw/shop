import qr from "../components/common/img/qr.jpg";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="bg-black">
        <footer >
          <div className="div1">
            <ul className="flex flex-col gap-4 py-5 x py-5 xl:py-20 pl-5 ">
              <li className=" loloFooter logo text-2xl font-bold">Exclusive</li>
              <li className=" subFooter  logo text-1xl font-bold">Subcribe</li>
              <li className=" logo ">Get 10% first oder</li>
              <li className="logo">
                <div className="flex items-center border-[1.5px] border-white text-white rounded px-1 py-3 w-fit bg-black">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-black text-white placeholder:text-[rgb(79, 78, 78)] pl-5 focus:outline-none flex-1 pr-2"
                  />
                  <button className="submit pr-5" type="submit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6-6m6 6l-6 6"
                      />
                    </svg>
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div className="div2">
            <ul className="flex flex-col gap-4 py-5 xl:py-20 pl-5">
              <li className=" subFooter  logo text-lg font-bold">Suport</li>
              <li className="logo">
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </li>
              <li className="logo">exclusive@gmail.com</li>
              <li className="logo">+88015-88888-9999</li>
            </ul>
          </div>
          <div className="div3">
            <ul className="flex flex-col gap-4 py-5 xl:py-20 pl-5">
              <li className=" subFooter  logo text-lg font-bold">Account</li>
              <li className="logo">
                <a href="#">My accound</a>
              </li>
              <li className="logo">
                <a href="#">Login/Register</a>
              </li>
              <li className="logo">
                <a href="#"> Cart</a>
              </li>
              <li className="logo">
                f<a href="#"> Wishlist</a>
              </li>
              <li className="logo">
                <a href="#">Shop</a>
              </li>
            </ul>
          </div>
          <div className="div4">
            <ul className="flex flex-col gap-4 py-5 xl:py-20 pl-5">
              <li className=" subFooter  logo text-lg font-bold">
                <a href="#">Quick Link</a>
              </li>
              <li className="logo">
                <a href="#">Privacy poly</a>
              </li>
              <li className="logo">
                <a href="#">Terms & Use</a>
              </li>
              <li className="logo">
                <a href="#">FAQ</a>
              </li>
              <li className="logo">
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>
          <div className=" bg-black text-white">
            <ul className="py-5 xl:py-20">
              <li className="text-lg font-bold mb-1">Download App</li>
              <li className="pt-5 text-sm text-gray-400 mb-4">
                Save 3$ with new user!
              </li>

              <li>
                <div className="flex items-start gap-4">
                  <div className="w-[100px] h-[100px]">
                    <img
                      src={qr}
                      alt="qr"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <a
                      href="https://play.google.com/store/apps/details?id=tenApp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                        alt="Get it on Google Play"
                        className="w-36"
                      />
                    </a>

                    <a
                      href="https://apps.apple.com/app/idtenApp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                        alt="Download on the App Store"
                        className="w-36"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <br />
              <li className="flex gap-6 text-lg font-bold mb-1">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
