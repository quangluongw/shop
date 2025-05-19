const CheckOut = () => {
  return (
    <div className="mb-8">
      <div className="mb-10">
        Home <span className="font-semibold">{location.pathname}</span>
      </div>
      <div className="text-3xl font-medium">Billing Details</div>
      <div className="grid xl:grid-cols-12 lg:grid-cols-8 md:grid-cols-4 grid-cols-1 justify-between gap-28">
        <form className="mt-10 text-base xl:col-span-6 lg:col-span-4 col-span-2">
          <div className="flex flex-col">
            <label htmlFor="">
              Họ Và Tên <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Vui lòng nhập tên"
              className="mt-3 focus:outline-none focus:ring-0 focus:border-2 border-2 p-2 rounded-md"
            />
          </div>
          <br />
          <div className="flex flex-col">
            <label htmlFor="">
              Địa chỉ <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Vui lòng nhập địa chỉ"
              className="mt-3 focus:outline-none focus:ring-0 focus:border-2 border-2 p-2 rounded-md"
            />
          </div>
          <br />

          <div className="flex flex-col">
            <label htmlFor="">
              Thành phố <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Vui lòng nhập thành phố"
              className="mt-3 focus:outline-none focus:ring-0 focus:border-2 border-2 p-2 rounded-md"
            />
          </div>
          <br />

          <div className="flex flex-col">
            <label htmlFor="">
              Số điện thoại <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Vui lòng nhập số điện thoại"
              className="mt-3 focus:outline-none focus:ring-0 focus:border-2 border-2 p-2 rounded-md"
            />
          </div>
          <br />

          <div className="flex flex-col">
            <label htmlFor="">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Vui lòng nhập email"
              className="mt-3 focus:outline-none focus:ring-0 focus:border-2 border-2 p-2 rounded-md"
            />
          </div>
          <br />
          <div className="flex flex-col">
            <label htmlFor="">
              Ghi chú 
            </label>
            <input
              type="text"
              placeholder="Notel"
              className="mt-3 focus:outline-none focus:ring-0 focus:border-2 border-2 p-2 rounded-md"
            />
          </div>
        </form>
        <div className="xl:col-span-6 lg:col-span-4 col-span-2">
          <div className="flex justify-between items-center gap-4 border-b-[1px] border-gray-400 pb-5">
            <div className="flex items-center gap-4">
              <img
                src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lxryil4ffqaj06.webp"
                className="max-w-[70px]"
                alt=""
              />
              <span>LCD Monitor</span>
            </div>
            <div>$650</div>
          </div>
          <div className="flex justify-between mt-3 border-b-[1px] border-gray-400 pb-5">
            <span>Subtotal</span>
            <span>$1750</span>
          </div>
          <div className="flex justify-between mt-3 border-b-[1px] border-gray-400 pb-5">
            <span>Shipping:</span>
            <span>$1750</span>
          </div>
          <div className="flex justify-between mt-3 border-b-[1px] border-gray-400 pb-5">
            <span>Mã giảm giá:</span>
            <span>$1750</span>
          </div>
          <div className="flex justify-between mt-3 border-b-[1px] border-gray-400 pb-5">
            <span>Total:</span>
            <span>$1750</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="mt-3 flex gap-2 items-center">
              <input type="radio" name="dc" />
              <label htmlFor="">Bank</label>
            </div>
            <div className="mt-3 flex gap-2 items-center">
              <input type="radio" name="dc" checked />
              <label htmlFor="">Cod</label>
            </div>
          </div>
          <br />
          <div className="flex justify-end">

          <button
              className="bg-red-500 text-white p-3 !px-10 rounded-md hover:bg-white
             hover:text-red-500 hover:border-2 hover:border-red-500 "
            >
              Đặt hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
