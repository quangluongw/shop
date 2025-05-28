import {
  Eye,
  Heart,
  MoveLeft,
  MoveRight,
  RefreshCcw,
  Star,
  Truck,
} from "lucide-react";
import "../../css/style.css";
const ProductDetail = () => {
  return (
    <div className="container p-5">
      <div className="flex text-[0.5rem] laptop:text-xs gap-1 desktop:gap-4 my-10">
        <a
          href="/"
          className="text-gray-500 hover:text-red-500 transition-all duration-300"
        >
          Home
        </a>{" "}
        <span className="text-gray-500"> /</span>
        <a
          href=""
          className="text-gray-500 hover:text-red-500 transition-all duration-300"
        >
          Gaming
        </a> 
        <span className="text-gray-500 "> /</span>
        <a href="" className=" hover:text-red-500 transition-all duration-300">
          Havic HV G-92 shirt
        </a>
      </div>

      <div className="flex flex-col desktop:flex-row gap-4">
        <div className="flex flex-col desktop:flex-row w-2/3 gap-2 mx-auto">
          <div className="flex flex-row desktop:flex-col gap-1">
            <img
              src="https://product.hstatic.net/200000305259/product/tee_pnk_2_6049e04597a84b42acd3e32687045410_master.jpg"
              alt="havic 1"
              className="h-[5rem] w-[6rem] border border-white hover:border hover:border-black hover:border-opacity-100 cursor-pointer transition-all duration-100"
            />
            <img
              src="https://product.hstatic.net/200000305259/product/tee_pnk_1_61930d8deef94b2087c0a11f3b3aa02a_master.jpg"
              alt=""
              className="h-[5rem] w-[6rem] border border-white hover:border hover:border-black hover:border-opacity-100 cursor-pointer transition-all duration-100"
            />
          </div>
          <div>
            <img
              src="https://product.hstatic.net/200000305259/product/tee_pnk_2_6049e04597a84b42acd3e32687045410_master.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="laptop:text-2xl">Havic HV G-92 shirt</h1>
          {/* reviews và trạng thái */}
          <div className="flex items-center gap-2">
            <div className="flex">
              <Star className="size-4 text-yellow-300 fill-yellow-300" />
              <Star className="size-4 text-yellow-300 fill-yellow-300" />
              <Star className="size-4 text-yellow-300 fill-yellow-300" />
              <Star className="size-4 text-gray-300 fill-gray-300" />
              <Star className="size-4 text-gray-300 fill-gray-300" />
            </div>
            <p className="text-gray-500">(150 reviews)</p>{" "}
            <span className="text-gray-500">|</span>
            <span className="text-green-400 font-semibold">Còn hàng</span>
          </div>
          <span className="text-xl font-semibold">129,000 ₫</span>
          <p>
            LayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>
          <hr />
          {/* Biến thể màu */}
          <div className="flex gap-2 items-center">
            <h3>Colors:</h3>
            <div className="flex gap-2">
              <div
                tabIndex={0}
                className="bg-gray-400 rounded-full border-[2px] hover:border-black cursor-pointer size-5 focus:border-black"
              ></div>
              <div
                tabIndex={0}
                className="bg-red-500 rounded-full border-[2px]  hover:border-black cursor-pointer size-5 focus:border-black"
              ></div>
            </div>
          </div>

          {/* Size */}

          <div className="flex gap-4">
            <h3>Size:</h3>
            <div className="flex gap-3">
              <button className="size-8 border-[1px]  border-gray-500 text-sm rounded hover:border-red-500 hover:bg-red-500 hover:text-white focus:border-red-500 focus:bg-red-500 focus:text-white">
                XS
              </button>
              <button className="size-8 border-[1px] border-gray-500 text-sm rounded hover:border-red-500 hover:bg-red-500 hover:text-white focus:border-red-500 focus:bg-red-500 focus:text-white">
                S
              </button>
              <button className="size-8 border-[1px] border-gray-500 text-sm rounded hover:border-red-500 hover:bg-red-500 hover:text-white focus:border-red-500 focus:bg-red-500 focus:text-white">
                L
              </button>
              <button className="size-8 border-[1px] border-gray-500  text-sm rounded hover:border-red-500 hover:bg-red-500 hover:text-white focus:border-red-500 focus:bg-red-500 focus:text-white">
                XL
              </button>
            </div>
          </div>

          {/* Thao tác */}

          <div className="flex gap-2 desktop:gap-5 items-center">
            <div className="flex ">
              <input type="button" value="-" className="quantityBtn rounded-l" />
              <input type="text" className="quantityInput" defaultValue={0}/>
              <input type="button" value="+" className="quantityBtn rounded-r" />
            </div>

            <button className="bg-red-500 text-white border border-red-500 text-xs px-3 py-2 desktop:px-5 desktop:py-2 rounded hover:bg-white hover:text-red-500 transition-all duration-300">
              Mua ngay
            </button>

            <button className="border-[1px] border-black p-2 rounded hover:text-red-500 hover:border-red-500 group transition-all duration-200">
              <Heart className="size-3 desktop:size-6 group-hover:fill-red-500" />
            </button>
          </div>

          {/* chính sách */}

          <div className="border-[1px] border-gray-400 flex flex-col items-start max-w-[25rem] font-medium rounded">
            {/* giao hang */}
            <div className="flex gap-4 px-10 py-3">
              <Truck className="desktop:size-10" />
              <div>
                <p>Giao hàng miễn phí</p>
                <a
                  className="underline text-sm hover:text-red-500 transition-all duration-300"
                  href=""
                >
                  Nhập mã bưu điện để kiểm tra
                </a>
              </div>
            </div>

            {/* đổi trả */}
            <div className="flex gap-5 border-t-[1px] border-gray-500 px-10 py-3 w-full">
              <RefreshCcw className="size-10" />
              <div>
                <p>Chính sách đổi trả</p>
                <span className="text-sm">
                  Đổi trả miễn phí trong 30 ngày.{" "}
                  <a
                    href=""
                    className="underline hover:text-red-500 transition-all duration-300"
                  >
                    Chi tiết
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 mb-5">
            <div className="headingMark"></div>
            <h2 className="headingText">Sản phẩm liên quan</h2>
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
  );
};

export default ProductDetail;
