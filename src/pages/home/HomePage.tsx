import { Eye, Heart, MoveLeft, MoveRight, Star } from "lucide-react";
import "../../css/style.css";
// import PolicyCard from "../../components/common/PolicyCard";
const HomePage = () => {
  return (
    <div className="container p-5">
      <div className="flex flex-col tablet:flex-row xl:flex-row items-center gap-6 mb-10">
        <div className="vertical-menu-layout">
          <a className="vertical-menu">Thời trang nữ</a>
          <a className="vertical-menu">Thời trang nam</a>
          <a className="vertical-menu">Đồ điện tử</a>
          <a className="vertical-menu">Nhà & đời sống</a>
          <a className="vertical-menu">Y tế</a>
          <a className="vertical-menu">Trẻ em</a>
          <a className="vertical-menu">Bách hoá & thú cưng</a>
          <a className="vertical-menu">Sức khoẻ và sắc đẹp</a>
        </div>
        <div className="flex justify-center h-full  w-full">
          {/* // backgound image   */}
          <div className="relative shadow-lg w-full tablet:h-[20vh] laptop:h-[30vh] desktop:h-[30vh]">
            <img
              src="https://cdn.shopify.com/s/files/1/0808/0067/files/category_banner_ip14pro_promax_desktop_1.jpg?v=1662594151"
              alt="top banner"
              className="h-full w-full rounded-lg  object-fill"
            />
            <div className="absolute -inset-12  xl:inset-0 gap-2 xl:gap-4 flex flex-col justify-center px-20">
              <h2 className="text-[0.5rem] xl:text-xl font-semibold">
                Nothing series 2
              </h2>
              <p className="text-xs xl:text-3xl font-bold ">
                Khuyến mãi <br />
                lên đến 10%
              </p>
              <a
                href="#"
                className="text-[0.5rem] xl:text-base font-medium hover:text-red-600 transition-all duration-300"
              >
                Xem ngay →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-5">
          <div className="headingMark"></div>
          <h2 className="headingText">Hôm nay</h2>
        </div>
        <div className="flex desktop:justify-between">
          {/* đếm ngược */}
          <div className="flex gap-2 desktop:gap-4">
            <h3 className="headline">Flash sales</h3>
            <div className="text-center">
              <p className="saleTimer">23</p>
              <p className="saleTimerUnit">Tiếng</p>
            </div>
            <span className="timerDot">:</span>
            <div className="text-center">
              <p className="saleTimer">23</p>
              <p className="saleTimerUnit">Phút</p>
            </div>
            <span className="timerDot">:</span>
            <div className="text-center">
              <p className="saleTimer">23</p>
              <p className="saleTimerUnit">Giây</p>
            </div>
          </div>

          <div className="hidden xl:flex gap-2 pt-1">
            <div className="relative bg-gray-200 size-7 rounded-full hover:bg-gray-400 cursor-pointer transition-all duration-300">
              <MoveLeft className="size-5 absolute inset-1" />
            </div>
            <div className="relative bg-gray-200 size-7 rounded-full hover:bg-gray-400 cursor-pointer transition-all duration-300">
              <MoveRight className="size-5 absolute inset-1" />
            </div>
          </div>
        </div>
      </div>
      {/* sản phẩm */}
      <div className="mt-10 flex justify-start gap-4">
        <div className="flex flex-col w-1/5 transition-all duration-300 rounded relative group overflow-hidden">
          <div className="relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxkHrD6T3YE0CUHIJFuyDNM3YoeCnk988ZJw&s"
              alt="HAVIT HV-G92 Gamepad"
              className="w-full h-full rounded "
            />
            <div>
              <div className="flex flex-col absolute top-0 gap-1 xl:gap-2">
                <span className="bg-red-500 productBagde">-40%</span>
                <span className="bg-green-500 productBagde ">NEW</span>
              </div>
              <div className="hidden desktop:block absolute top-2 right-2">
                <div className="productSideBtn">
                  <Heart className="size-5 absolute inset-1" />
                </div>
                <div className="productSideBtn mt-1">
                  <Eye className="size-5 absolute inset-1" />
                </div>
              </div>
            </div>
            <div className="absolute w-full -bottom-1 opacity-0 group-hover:bottom-0  group-hover:opacity-100 transition-all duration-300 ">
              <button className="w-full bg-black text-[0.5rem] xl:text-base desktop:py-2 rounded-b-sm text-white">
                Thêm vào giỏ
              </button>
            </div>
          </div>

          <div className="my-3 text-black font-semibold">
            <a href="">
              <p className="text-[0.5rem] xl:text-base hover:text-red-500 transition-all duration-300">
                HAVIT HV-G92 Gamepad
              </p>
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <p className="text-red-500 font-semibold text-[0.6rem] xl:text-base">
                $123
              </p>
              <p className="text-gray-400 line-through font-semibold text-[0.6rem] xl:text-base">
                $223
              </p>
            </div>
            <div className="flex items-center">
              <Star className="ratingStar" />
              <Star className="ratingStar" />
              <Star className="ratingStar" />
              <Star className="ratingStar" />
              <Star className="ratingStar" />
              <span className="text-[0.6rem] xl:text-sm pl-2 text-gray-500 font-semibold">
                (88)
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full mt-10 ">
        <a href="">
          <button className="text-white border border-white bg-red-500 px-2 py-1 text-sm xl:text-base xl:px-4 xl:py-3 rounded hover:bg-white hover:text-red-500 hover:border-red-500 transition-all duration-300">
            Xem thêm sản phẩm
          </button>
        </a>
      </div>
      <hr className="width-full my-10" />
      {/* lọc theo danh mục */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <div className="headingMark"></div>
          <h2 className="headingText">Tìm theo danh mục</h2>
        </div>

        <div className="flex w-full justify-between gap-4 ">
          <div className="flex flex-col shadow-lg group cursor-pointer rounded-lg p-5 tablet:px-10 tablet:py-8 xl:px-12 xl:py-8 mb-10">
            <a href="">
              <img
                src="https://png.pngtree.com/png-clipart/20230206/ourmid/pngtree-cell-phone-mockup-png-image_6584021.png"
                alt="phone"
                className="size-10 xl:size-24 group-hover:scale-125 transition-all duration-300 mx-auto"
              />
              <p className="w-full text-center text-sm xl:text-lg font-semibold mt-5">
                Điện thoại
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* bán chạy */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <div className="headingMark"></div>
          <h2 className="headingText">Tháng này</h2>
        </div>

        <div className="flex justify-between">
          <h3 className="headline">Sản phẩm bán chạy</h3>
          <button className="text-white  border border-white bg-red-500 text-sm xl:text-base rounded px-3 py-1 xl:px-8 xl:py-3 hover:bg-white hover:text-red-500 hover:border-red-500  transition-all duration-300">
            Xem thêm
          </button>
        </div>
        {/* Danh sách sản phẩm bán chạy*/}
        <div>
          <div className="mt-10 flex justify-start gap-4">
            <div className="flex flex-col w-1/5 transition-all duration-300 rounded relative group overflow-hidden">
              <div className="relative">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxkHrD6T3YE0CUHIJFuyDNM3YoeCnk988ZJw&s"
                  alt="HAVIT HV-G92 Gamepad"
                  className="w-full h-full rounded "
                />
                <div>
                  <div className="flex flex-col absolute top-0 gap-1 xl:gap-2">
                    <span className="bg-red-500 productBagde">-40%</span>
                    <span className="bg-green-500 productBagde ">NEW</span>
                  </div>
                  <div className="hidden desktop:block absolute top-2 right-2">
                    <div className="productSideBtn">
                      <Heart className="size-5 absolute inset-1" />
                    </div>
                    <div className="productSideBtn mt-1">
                      <Eye className="size-5 absolute inset-1" />
                    </div>
                  </div>
                </div>
                <div className="absolute w-full -bottom-1 opacity-0 group-hover:bottom-0  group-hover:opacity-100 transition-all duration-300 ">
                  <button className="w-full bg-black text-[0.5rem] xl:text-base desktop:py-2 rounded-b-sm text-white">
                    Thêm vào giỏ
                  </button>
                </div>
              </div>

              <div className="my-3 text-black font-semibold">
                <a href="">
                  <p className="text-[0.5rem] xl:text-base hover:text-red-500 transition-all duration-300">
                    HAVIT HV-G92 Gamepad
                  </p>
                </a>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <p className="text-red-500 font-semibold text-[0.6rem] xl:text-base">
                    $123
                  </p>
                  <p className="text-gray-400 line-through font-semibold text-[0.6rem] xl:text-base">
                    $223
                  </p>
                </div>
                <div className="flex items-center">
                  <Star className="ratingStar" />
                  <Star className="ratingStar" />
                  <Star className="ratingStar" />
                  <Star className="ratingStar" />
                  <Star className="ratingStar" />
                  <span className="text-[0.6rem] xl:text-sm pl-2 text-gray-500 font-semibold">
                    (88)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner 2 */}
      <div className="relative my-20">
        <img
          src="https://www.jbl.com.ph/on/demandware.static/-/Sites-JB-APAC-NCOM-Library/default/dw6862bd07/home-hero-carousel/02%20Web_Banner_Car_6_Charge5_2800x970.jpg"
          alt="JBL speaker"
        />
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className="bannerLayout">
          <div className=" text-green-400 flex flex-col gap-1 tablet:gap-2 desktop:gap-6">
            <p className="font-semibold text-[0.5rem] tablet:text-xl desktop:text-2xl">
              Loa JBL
            </p>
            <p className=" text-white text-[0.6rem] tablet:text-2xl desktop:text-3xl font-bold">
              Nâng tầm trải nghiệm nghe nhạc của bạn
            </p>
          </div>
          <div className=" flex gap-1 tablet:gap-3 desktop:gap-4">
            <div className="countBackground">
              <span className="countTime">23</span>
              <span className="countUnit ">Ngày</span>
            </div>
            <div className="countBackground">
              <span className="countTime">23</span>
              <span className="countUnit ">Giờ</span>
            </div>
            <div className="countBackground">
              <span className="countTime">23</span>
              <span className="countUnit ">Phút</span>
            </div>
            <div className="countBackground">
              <span className="countTime">23</span>
              <span className="countUnit">Giây</span>
            </div>
          </div>
          <div>
            <a href="">
              <button className="bannerButton">Mua ngay</button>
            </a>
          </div>
        </div>
      </div>

      {/* khám phá thêm sản phẩm */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <div className="headingMark"></div>
          <h2 className="headingText">Sản phẩm của chúng tôi</h2>
        </div>
        <div className="flex justify-between">
          {/* đếm ngược */}
          <div className="flex gap-4">
            <h3 className="headline">Khám phá thêm sản phẩm</h3>
          </div>

          <div className="hidden desktop:flex gap-2 pt-1">
            <div className="relative bg-gray-200 size-7 rounded-full hover:bg-gray-400 cursor-pointer transition-all duration-300">
              <MoveLeft className="size-5 absolute inset-1" />
            </div>
            <div className="relative bg-gray-200 size-7 rounded-full hover:bg-gray-400 cursor-pointer transition-all duration-300">
              <MoveRight className="size-5 absolute inset-1" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="mt-10 flex justify-start gap-4">
          <div className="flex flex-col w-1/5 transition-all duration-300 rounded relative group overflow-hidden">
            <div className="relative">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxkHrD6T3YE0CUHIJFuyDNM3YoeCnk988ZJw&s"
                alt="HAVIT HV-G92 Gamepad"
                className="w-full h-full rounded "
              />
              <div>
                <div className="flex flex-col absolute top-0 gap-1 xl:gap-2">
                  <span className="bg-red-500 productBagde">-40%</span>
                  <span className="bg-green-500 productBagde ">NEW</span>
                </div>
                <div className="hidden desktop:block absolute top-2 right-2">
                  <div className="productSideBtn">
                    <Heart className="size-5 absolute inset-1" />
                  </div>
                  <div className="productSideBtn mt-1">
                    <Eye className="size-5 absolute inset-1" />
                  </div>
                </div>
              </div>
              <div className="absolute w-full -bottom-1 opacity-0 group-hover:bottom-0  group-hover:opacity-100 transition-all duration-300 ">
                <button className="w-full bg-black text-[0.5rem] xl:text-base desktop:py-2 rounded-b-sm text-white">
                  Thêm vào giỏ
                </button>
              </div>
            </div>

            <div className="my-3 text-black font-semibold">
              <a href="">
                <p className="text-[0.5rem] xl:text-base hover:text-red-500 transition-all duration-300">
                  HAVIT HV-G92 Gamepad
                </p>
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <p className="text-red-500 font-semibold text-[0.6rem] xl:text-base">
                  $123
                </p>
                <p className="text-gray-400 line-through font-semibold text-[0.6rem] xl:text-base">
                  $223
                </p>
              </div>
              <div className="flex items-center">
                <Star className="ratingStar" />
                <Star className="ratingStar" />
                <Star className="ratingStar" />
                <Star className="ratingStar" />
                <Star className="ratingStar" />
                <span className="text-[0.6rem] xl:text-sm pl-2 text-gray-500 font-semibold">
                  (88)
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-5">
          <a href="">
            <button className="text-white border border-white bg-red-500 px-2 py-1 text-sm xl:text-base xl:px-4 xl:py-3 rounded hover:bg-white hover:text-red-500 hover:border-red-500 transition-all duration-300">
              Xem thêm sản phẩm
            </button>
          </a>
        </div>
      </div>

      {/* Bài viết */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <div className="headingMark"></div>
          <h2 className="headingText">Bài viết</h2>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <h3 className="headline">Sản phẩm mới về</h3>
          </div>

          <div className="hidden desktop:flex gap-2 pt-1">
            <div className="relative bg-gray-200 size-7 rounded-full hover:bg-gray-400 cursor-pointer transition-all duration-300">
              <MoveLeft className="size-5 absolute inset-1" />
            </div>
            <div className="relative bg-gray-200 size-7 rounded-full hover:bg-gray-400 cursor-pointer transition-all duration-300">
              <MoveRight className="size-5 absolute inset-1" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-1 desktop:gap-4 my-10">
          <div className="bg-black text-white col-span-2 row-span-2">
            <img
              src="https://pioneeroutlook.org/wp-content/uploads/2021/02/PlayStation-5.jpg"
              alt="ps5"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="bg-black text-white col-span-2">
            <img
              src="https://www.instyle.com/thmb/mN9rNRNVJ3-lyxlpjfHtQt2gU2o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ins-product-dior-sauvage-elixir-jthompson-0154-90d9082ed876474b864b09e94c9e86f5.jpeg"
              alt="colone"
            />
          </div>
          <div className="bg-black text-white">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/155/704/990/acoustics-wood-light-dynamics-wallpaper-preview.jpg"
              alt="speaker"
            />
          </div>
          <div className="bg-black text-white">
            <img
              src="https://www.shutterstock.com/image-photo/amsterdam-netherlands-10-31-2023-600nw-2382190717.jpg"
              alt="pefume"
            />
          </div>
        </div>
      </div>

      {/* chính sách */}
      {/* <PolicyCard /> */}
    </div>
  );
};

export default HomePage;
