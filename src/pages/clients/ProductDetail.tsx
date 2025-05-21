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
    <div className="container font-semibold">
      <div className="flex gap-4 my-10">
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
        <span className="text-gray-500"> /</span>
        <a href="" className=" hover:text-red-500 transition-all duration-300">
          Havic HV G-92 Gamepad
        </a>
      </div>

      <div className="flex">
        <div>
          <img
            src="https://www.ultratech.com.bd/image/cache/catalog/gamepad/havit/hv-g92/havit-hv-g92-gamepad-500x500.jpg.webp"
            alt="havic 1"
            className="h-[5rem] w-[6rem] border border-white hover:border hover:border-black hover:border-opacity-100 cursor-pointer transition-all duration-100"
          />
          <img
            src="https://www.ultratech.com.bd/image/cache/catalog/gamepad/havit/hv-g92/havit-hv-g92-gamepad-2-500x500.jpg.webp"
            alt=""
            className="h-[5rem] w-[6rem] border border-white hover:border hover:border-black hover:border-opacity-100 cursor-pointer transition-all duration-100"
          />
        </div>
        <div>
          <img
            src="https://www.ultratech.com.bd/image/cache/catalog/gamepad/havit/hv-g92/havit-hv-g92-gamepad-2-500x500.jpg.webp"
            alt=""
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl">Havic HV G-92 Gamepad</h1>
          {/* reviews và trạng thái */}
          <div className="flex items-center gap-2">
            <div className="flex">
              <Star className="size-4 text-yellow-300 fill-yellow-300" />
              <Star className="size-4 text-yellow-300 fill-yellow-300" />
              <Star className="size-4 text-yellow-300 fill-yellow-300" />
              <Star className="size-4 text-gray-300 fill-gray-300" />
              <Star className="size-4 text-gray-300 fill-gray-300" />
            </div>
            <p className="text-gray-500">(150 reviews)</p> <span className="text-gray-500">|</span>
            <span className="text-green-400">in stock</span>
          </div>
          <span className="text-xl font-semibold">129,000 VNĐ</span>
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

          <div className="flex gap-5">
            <div className="flex gap-3 border-[3px] border-gray-300">
              <button className="border-r-[3px] size-7 h-full w-full">-</button>
              <span>2</span>
              <button>+</button>
            </div>

            <button className="bg-red-500 text-white border border-red-500 px-5 py-2 rounded hover:bg-white hover:text-red-500 transition-all duration-300">
              Mua ngay
            </button>

            <button className="border-[1px] border-black px-2 rounded hover:text-red-500 hover:border-red-500 group transition-all duration-200">
              <Heart className="size-6 m-auto group-hover:fill-red-500" />
            </button>
          </div>

          {/* chính sách */}

          <div className="border-[1px] border-gray-400 flex flex-col items-start max-w-[55%] font-medium rounded">
            {/* giao hang */}
            <div className="flex gap-4 px-10 py-3">
              <Truck className="size-10" />
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
        <div className="flex justify-between">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-4 h-7 bg-red-600 rounded"></div>
            <h2 className="font-semibold text-red-600">Sản phẩm cùng loại</h2>
          </div>
          {/* đếm ngược */}
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
          <span className="text-sm pl-2 text-gray-500 font-semibold">(88)</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
