import {
  Box,
  Eye,
  HandCoins,
  Headphones,
  Heart,
  MoveLeft,
  MoveRight,
  Smartphone,
  Star,
} from "lucide-react";
import "../../css/style.css";
const Home = () => {
  return (
    <div className="container">
      <div className="flex justify-center items-center py-10 ">
        <div className="w-1/4 mr-10">
          <ul className="space-y-3 text-gray-600 font-semibold text-lg border-r-2 h-full">
            <li className="vertical-menu">Thời trang nữ</li>
            <li className="vertical-menu">Thời trang nam</li>
            <li className="vertical-menu">Đồ điện tử</li>
            <li className="vertical-menu">Nhà & đời sống</li>
            <li className="vertical-menu">Y tế</li>
            <li className="vertical-menu">Trẻ em</li>
            <li className="vertical-menu">Bách hoá & thú cưng</li>
            <li className="vertical-menu">Sức khoẻ và sắc đẹp</li>
          </ul>
        </div>
        <div className="flex justify-center w-full">
          <div className="relative  min-w-[900px] shadow-lg">
            <img
              src="https://cdn.shopify.com/s/files/1/0808/0067/files/category_banner_ip14pro_promax_desktop_1.jpg?v=1662594151"
              alt="top banner"
              className="w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-start px-20">
              <h2 className="text-xl font-semibold mb-10">Nothing series 2</h2>
              <p className="text-3xl font-bold mb-4">
                Khuyến mãi <br />
                lên đến 10%
              </p>
              <a
                href="#"
                className="inline-block font-medium hover:text-red-600 transition-all duration-300"
              >
                Xem ngay →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-5">
          <div className="w-4 h-7 bg-red-600 rounded"></div>
          <h2 className="font-semibold text-red-600">Hôm nay</h2>
        </div>
        <div className="flex justify-between">
          {/* đếm ngược */}
          <div className="flex gap-4">
            <h3 className="text-3xl font-semibold pr-10">Flash sales</h3>
            <div className="text-center">
              <p className="text-3xl font-bold">23</p>
              <p className="text-sm">Tiếng</p>
            </div>
            <span className="text-3xl font-semibold text-red-500">:</span>
            <div className="text-center">
              <p className="text-3xl font-bold">23</p>
              <p className="text-sm">Phút</p>
            </div>
            <span className="text-3xl font-semibold text-red-500">:</span>
            <div className="text-center">
              <p className="text-3xl font-bold">23</p>
              <p className="text-sm">Giây</p>
            </div>
          </div>

          <div className="flex gap-2 pt-1">
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
        <div className="flex flex-col w-1/5  transition-all duration-300 rounded relative group overflow-hidden">
          <div className="relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxkHrD6T3YE0CUHIJFuyDNM3YoeCnk988ZJw&s"
              alt="HAVIT HV-G92 Gamepad"
              className="w-full h-auto rounded "
            />
            <div>
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-2 rounded">
                -40%
              </span>
              <span className="absolute top-12 left-2 bg-green-500 text-white text-xs px-2 py-2 rounded ">
                NEW
              </span>
              <div className="absolute top-2 right-2">
                <div className="relative bg-white size-7 rounded-full hover:bg-red-500 cursor-pointer hover:text-white transition-all duration-300">
                  <Heart className="size-5 absolute inset-1" />
                </div>
                <div className="relative bg-white size-7 rounded-full hover:bg-red-500 hover:text-white cursor-pointer transition-all duration-300 mt-1">
                  <Eye className="size-5 absolute inset-1" />
                </div>
              </div>
            </div>
            <div className="absolute w-full -bottom-1 opacity-0 group-hover:bottom-0  group-hover:opacity-100 transition-all duration-300 ">
              <button className="w-full bg-black py-2 rounded-b-sm text-white">
                Thêm vào giỏ
              </button>
            </div>
          </div>

          <div className="my-3 text-black font-semibold">
            <p>HAVIT HV-G92 Gamepad</p>
          </div>

          <div className="flex gap-3">
            <p className="text-red-500 font-semibold text-base">$123</p>
            <p className="text-gray-400 line-through font-semibold text-base">
              $123
            </p>
          </div>
          <div className="flex mt-3">
            <Star className="size-4 stroke-yellow-300 fill-yellow-300" />
            <Star className="size-4 stroke-yellow-300 fill-yellow-300" />
            <Star className="size-4 stroke-yellow-300 fill-yellow-300" />
            <Star className="size-4 stroke-yellow-300 fill-yellow-300" />
            <Star className="size-4 stroke-yellow-300 fill-yellow-300" />
            <span className="text-sm pl-2 text-gray-500 font-semibold">
              (88)
            </span>
          </div>
        </div>
        <div className="flex flex-col w-1/5 shadow-sm hover:shadow-lg transition-all duration-300 rounded relative group overflow-hidden">
          <div className="relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxkHrD6T3YE0CUHIJFuyDNM3YoeCnk988ZJw&s"
              alt="HAVIT HV-G92 Gamepad"
              className="w-full h-auto rounded "
            />
            <div>
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-2 rounded ">
                -40%
              </span>
              <span className="absolute top-12 left-2 bg-green-500 text-white text-xs px-2 py-2 rounded ">
                NEW
              </span>
              <div className="absolute top-2 right-2">
                <div className="relative bg-white size-7 rounded-full hover:bg-red-500 cursor-pointer hover:text-white transition-all duration-300">
                  <Heart className="size-5 absolute inset-1" />
                </div>
                <div className="relative bg-white size-7 rounded-full hover:bg-red-500 hover:text-white cursor-pointer transition-all duration-300 mt-1">
                  <Eye className="size-5 absolute inset-1" />
                </div>
              </div>
            </div>
            <div className="absolute w-full -bottom-1 opacity-0 group-hover:bottom-0  group-hover:opacity-100 transition-all duration-300 ">
              <button className="w-full bg-black rounded-b-sm py-2 text-white">
                Thêm vào giỏ
              </button>
            </div>
          </div>

          <div className="my-3 text-black font-semibold">
            <p>HAVIT HV-G92 Gamepad</p>
          </div>

          <div className="flex gap-3">
            <p className="text-red-500 font-semibold text-base">$123</p>
            <p className="text-gray-400 line-through font-semibold text-base">
              $123
            </p>
          </div>
          <div className="flex mt-3">
            <Star className="size-4 stroke-yellow-300 fill-yellow-300" />
            <Star className="size-4 stroke-yellow-300 fill-yellow-300" />
            <Star className="size-4 stroke-yellow-300 fill-yellow-300" />
            <Star className="size-4 stroke-yellow-300 fill-yellow-300" />
            <Star className="size-4 stroke-yellow-300 fill-yellow-300" />
            <span className="text-sm pl-2 text-gray-500 font-semibold">
              (88)
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full mt-10 ">
        <a href="">
          <button className="text-white border border-white bg-red-500 px-4 py-3 rounded hover:bg-white hover:text-red-500 hover:border-red-500 transition-all duration-300">
            Xem thêm sản phẩm
          </button>
        </a>
      </div>
      <hr className="width-full my-10" />
      {/* lọc theo danh mục */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <div className="w-4 h-7 bg-red-600 rounded"></div>
          <h2 className="font-semibold text-red-600">Tìm theo danh mục</h2>
        </div>

        <div className="flex w-full justify-between gap-4 ">
          <div className="flex flex-col border-2 border-gray-300 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-200 cursor-pointer rounded gap-4 p-10 mb-10">
            <a href="">
              <Smartphone className="h-10 w-full" />
              <span className="w-full text-center text-lg font-semibold">
                Điện thoại
              </span>
            </a>
          </div>

          <div className="flex flex-col border-2 border-gray-300 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-200 cursor-pointer rounded gap-4 p-10 mb-10">
            <a href="">
              <Smartphone className="h-10 w-full" />
              <span className="w-full text-center text-lg font-semibold">
                Điện thoại
              </span>
            </a>
          </div>

          <div className="flex flex-col border-2 border-gray-300 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-200 cursor-pointer rounded gap-4 p-10 mb-10">
            <a href="">
              <Smartphone className="h-10 w-full" />
              <span className="w-full text-center text-lg font-semibold">
                Điện thoại
              </span>
            </a>
          </div>

          <div className="flex flex-col border-2 border-gray-300 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-200 cursor-pointer rounded gap-4 p-10 mb-10">
            <a href="">
              <Smartphone className="h-10 w-full" />
              <span className="w-full text-center text-lg font-semibold">
                Điện thoại
              </span>
            </a>
          </div>

          <div className="flex flex-col border-2 border-gray-300 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-200 cursor-pointer rounded gap-4 p-10 mb-10">
            <a href="">
              <Smartphone className="h-10 w-full" />
              <span className="w-full text-center text-lg font-semibold">
                Điện thoại
              </span>
            </a>
          </div>

          <div className="flex flex-col border-2 border-gray-300 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-200 cursor-pointer rounded gap-4 p-10 mb-10">
            <a href="">
              <Smartphone className="h-10 w-full" />
              <span className="w-full text-center text-lg font-semibold">
                Điện thoại
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* bán chạy */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <div className="w-4 h-7 bg-red-600 rounded"></div>
          <h2 className="font-semibold text-red-600">Tháng này</h2>
        </div>

        <div className="flex justify-between">
          <h3 className="text-3xl font-semibold pr-10">Sản phẩm bán chạy</h3>
          <button className="text-white  border border-white bg-red-500 rounded px-8 py-3 hover:bg-white hover:text-red-500 hover:border-red-500  transition-all duration-300">
            Xem thêm
          </button>
        </div>
        {/* Danh sách sản phẩm bán chạy*/}
        <div className="mt-10">
          <div className="flex flex-col w-1/5 transition-all duration-300 rounded relative group overflow-hidden">
            <div className="relative">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxkHrD6T3YE0CUHIJFuyDNM3YoeCnk988ZJw&s"
                alt="HAVIT HV-G92 Gamepad"
                className="w-full h-auto rounded "
              />
              <div>
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-2 rounded">
                  -40%
                </span>
                <span className="absolute top-12 left-2 bg-green-500 text-white text-xs px-2 py-2 rounded ">
                  NEW
                </span>
                <div className="absolute top-2 right-2">
                  <div className="relative bg-white size-7 rounded-full hover:bg-red-500 cursor-pointer hover:text-white transition-all duration-300">
                    <Heart className="size-5 absolute inset-1" />
                  </div>
                  <div className="relative bg-white size-7 rounded-full hover:bg-red-500 hover:text-white cursor-pointer transition-all duration-300 mt-1">
                    <Eye className="size-5 absolute inset-1" />
                  </div>
                </div>
              </div>
              <div className="absolute w-full -bottom-1 opacity-0 group-hover:bottom-0  group-hover:opacity-100 transition-all duration-300 ">
                <button className="w-full bg-black py-2 rounded-b-sm text-white">
                  Thêm vào giỏ
                </button>
              </div>
            </div>

            <div className="my-3 text-black font-semibold">
              <p>HAVIT HV-G92 Gamepad</p>
            </div>

            <div className="flex gap-3">
              <p className="text-red-500 font-semibold text-base">$123</p>
              <p className="text-gray-400 line-through font-semibold text-base">
                $123
              </p>
            </div>
            <div className="flex mt-3">
              <Star className="size-4 stroke-yellow-300 fill-yellow-300" />
              <Star className="size-4 stroke-yellow-300 fill-yellow-300" />
              <Star className="size-4 stroke-yellow-300 fill-yellow-300" />
              <Star className="size-4 stroke-yellow-300 fill-yellow-300" />
              <Star className="size-4 stroke-yellow-300 fill-yellow-300" />
              <span className="text-sm pl-2 text-gray-500 font-semibold">
                (88)
              </span>
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
        <div className="absolute text-green-400 top-10 left-20">
          <p className="font-bold">Loa nghe nhạc</p>
          <p className=" text-white mt-10 text-3xl font-bold">
            Nâng tầm trải nghiệm
            <br /> nghe nhạc của bạn
          </p>
        </div>
        <div className="absolute flex gap-4 left-20 top-[220px]">
          <div className="bg-white size-12  flex flex-col text-center rounded-full">
            <div className="font-bold">23</div>
            <div className="text-xs ">Ngày</div>
          </div>
          <div className="bg-white size-12  flex flex-col text-center rounded-full">
            <div className="font-bold">23</div>
            <div className="text-xs ">Giờ</div>
          </div>
          <div className="bg-white size-12  flex flex-col text-center rounded-full">
            <div className="font-bold">23</div>
            <div className="text-xs ">Phút</div>
          </div>
          <div className="bg-white size-12  flex flex-col text-center rounded-full">
            <div className="font-bold">23</div>
            <div className="text-xs ">Giây</div>
          </div>
        </div>

        <div className="absolute left-20 top-[300px]">
          <a href="">
            <button className="bg-green-400 px-5 py-3 rounded text-white hover:bg-green-500 transition-all duration-300">
              Mua ngay
            </button>
          </a>
        </div>
      </div>

      {/* khám phá thêm sản phẩm */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <div className="w-4 h-7 bg-red-600 rounded"></div>
          <h2 className="font-semibold text-red-600">Sản phẩm của chúng tôi</h2>
        </div>
        <div className="flex justify-between">
          {/* đếm ngược */}
          <div className="flex gap-4">
            <h3 className="text-3xl font-semibold pr-10">
              Khám phá thêm sản phẩm
            </h3>
          </div>

          <div className="flex gap-2 pt-1">
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
          <div className="flex flex-col w-1/5  transition-all duration-300 rounded relative group overflow-hidden">
            <div className="relative">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxkHrD6T3YE0CUHIJFuyDNM3YoeCnk988ZJw&s"
                alt="HAVIT HV-G92 Gamepad"
                className="w-full h-auto rounded "
              />
              <div>
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-2 rounded">
                  -40%
                </span>
                <span className="absolute top-12 left-2 bg-green-500 text-white text-xs px-2 py-2 rounded ">
                  NEW
                </span>
                <div className="absolute top-2 right-2">
                  <div className="relative bg-white size-7 rounded-full hover:bg-red-500 cursor-pointer hover:text-white transition-all duration-300">
                    <Heart className="size-5 absolute inset-1" />
                  </div>
                  <div className="relative bg-white size-7 rounded-full hover:bg-red-500 hover:text-white cursor-pointer transition-all duration-300 mt-1">
                    <Eye className="size-5 absolute inset-1" />
                  </div>
                </div>
              </div>
              <div className="absolute w-full -bottom-1 opacity-0 group-hover:bottom-0  group-hover:opacity-100 transition-all duration-300 ">
                <button className="w-full bg-black py-2 rounded-b-sm text-white">
                  Thêm vào giỏ
                </button>
              </div>
            </div>

            <div className="my-3 text-black font-semibold">
              <p>HAVIT HV-G92 Gamepad</p>
            </div>

            <div className="flex gap-3">
              <p className="text-red-500 font-semibold text-base">$123</p>
              <div className="flex items-center">
                <Star className="size-4 stroke-yellow-300 fill-yellow-300" />
                <Star className="size-4 stroke-yellow-300 fill-yellow-300" />
                <Star className="size-4 stroke-yellow-300 fill-yellow-300" />
                <Star className="size-4 stroke-yellow-300 fill-yellow-300" />
                <Star className="size-4 stroke-yellow-300 fill-yellow-300" />
                <span className="text-sm pl-2 text-gray-500 font-semibold">
                  (88)
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <div
                tabIndex={0}
                className="bg-red-600 size-4 rounded-full mt-3 hover:border-[1px] hover:border-black cursor-pointer focus:border-[1px] focus:border-black"
              ></div>
              <div
                tabIndex={0}
                className="bg-yellow-400 size-4 rounded-full mt-3 hover:border-[1px] hover:border-black cursor-pointer focus:border-[1px] focus:border-black"
              ></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-5">
          <a href="">
            <button className="text-white border border-white bg-red-500 px-4 py-3 rounded hover:bg-white hover:text-red-500 hover:border-red-500 transition-all duration-300">
              Xem thêm sản phẩm
            </button>
          </a>
        </div>
      </div>

      {/* Bài viết */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <div className="w-4 h-7 bg-red-600 rounded"></div>
          <h2 className="font-semibold text-red-600">Bài viết</h2>
        </div>
        <div className="flex justify-between">
          {/* đếm ngược */}
          <div className="flex gap-4">
            <h3 className="text-3xl font-semibold pr-10">Sản phẩm mới về</h3>
          </div>

          <div className="flex gap-2 pt-1">
            <div className="relative bg-gray-200 size-7 rounded-full hover:bg-gray-400 cursor-pointer transition-all duration-300">
              <MoveLeft className="size-5 absolute inset-1" />
            </div>
            <div className="relative bg-gray-200 size-7 rounded-full hover:bg-gray-400 cursor-pointer transition-all duration-300">
              <MoveRight className="size-5 absolute inset-1" />
            </div>
          </div>
        </div>
      </div>

      <div></div>

      {/* chính sách */}
      <div className="flex justify-around my-10">
        <div>
          <div className="bg-black border-[2px] border-gray-400 text-white rounded-full w-14 mx-auto my-4">
            <Box className="size-[3.3rem]" />
          </div>
          <div className="w-full text-center">
            <p className="font-bold text-xl">Miễn phí và nhanh chóng</p>
            <span className="text-sm">
              Miễn phí vận chuyển cho mọi đơn trên 500 nghìn
            </span>
          </div>
        </div>
        <div>
          <div className="bg-black border-[2px] border-gray-400 text-white rounded-full w-14 mx-auto my-4">
            <Headphones className="size-[3.3rem]" />
          </div>
          <div className="w-full text-center">
            <p className="font-bold text-xl">Hỗ trợ 24/7</p>
            <span className="text-sm">Luôn sẵn sàng hỗ trợ khách hàng</span>
          </div>
        </div>
        <div>
          <div className="bg-black border-[2px] border-gray-400 text-white rounded-full w-14 mx-auto my-4">
            <HandCoins className="size-[3.3rem]"/>
          </div>
          <div className="w-full text-center">
            <p className="font-bold text-xl">Hoàn trả nhanh chóng</p>
            <span className="text-sm">Hoàn tiền chỉ trong 30 ngày</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
