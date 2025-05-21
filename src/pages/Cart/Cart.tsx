import { Link, useLocation } from "react-router-dom";

const Cart = () => {
  const location = useLocation();
  return (
    <div className="mb-8">
      <div className="mb-10">
        Home <span className="font-semibold">{location.pathname}</span>
      </div>
      <div className="flex lg:flex-row flex-col justify-between gap-10">
        <div>
          <div className="grid grid-cols-10 gap-4 text-left">
            <div className="col-span-1 lg:text-[1rem] text-sm">#</div>
            <div className="col-span-3 lg:text-[1rem] text-sm">Product</div>
            <div className="col-span-2 lg:text-[1rem] text-sm">Price</div>
            <div className="col-span-3 lg:text-[1rem] text-sm">Quantity</div>
            <div className="col-span-1 lg:text-[1rem] text-sm">Subtotal</div>
          </div>
          <br />
          <div className="grid grid-cols-10 gap-4 text-left items-center border-b-2 pb-5 pt-4">
            <div className="col-span-1 cursor-pointer">X</div>
            <div className="col-span-3">
              <div className="flex flex-nowrap items-center gap-3">
                <img
                  src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lxryil4ffqaj06.webp"
                  alt=""
                  className="lg:max-w-[70px] w-2/4"
                />
                <span className="lg:text-[1rem] text-sm">LCD Monitor</span>
              </div>
            </div>
            <div className="col-span-2 lg:text-[1rem] text-sm">$650</div>
            <div className="col-span-3">
              <button
                className="text-black border-l-2  border-2 border-[#dededf] lg:pt-[2px]
                lg:pb-[3.5px] lg:px-[14px] rounded-s-md pt-[2.5px] pb-1 px-2"
              >
                +
              </button>
              <div className="stepper">
                <input
                  type="text"
                  id="numberInput"
                  value="1"
                  min="0"
                  max="100"
                  className="lg:w-[50px] w-[30px]"
                />
              </div>
              <button
                className="text-black border-l-2  border-2 border-[#dededf] lg:pt-[2px]
               lg:pb-[3.5px] lg:px-[14px] rounded-e-md pt-[2.5px] pb-1 px-2"
              >
                -
              </button>
            </div>
            <div className="col-span-1">$650</div>
          </div>
          <div className="flex justify-between items-center mt-5">
            <button
              className="bg-red-500 text-white p-2 rounded-md hover:bg-white
             hover:text-red-500 hover:border-2 hover:border-red-500 "
            >
              Return To Shop{" "}
            </button>
            <button
              className="border-red-500 border-2 text-red-500 p-2 rounded-md
             hover:bg-red-500 hover:text-white"
            >
              Mã giảm giá{" "}
            </button>
          </div>
        </div>

        {/* Right: Cart Total */}
        <div className="border-[1px] border-black rounded-md  lg:w-[350px] h-fit">
          <h2 className="mt-3 text-xl text-center font-bold">Cart Total</h2>
          <div className="flex justify-between px-4 pt-9 pb-4">
            <div>Subtotal:</div>
            <div>$1750</div>
          </div>
          <hr />
          <div className="flex justify-between px-4 pt-9 pb-4">
            <div>Shipping:</div>
            <div>$0</div>
          </div>
          <hr />
          <div className="flex justify-between px-4 pt-9 pb-4 font-semibold">
            <div>Total:</div>
            <div>$1750</div>
          </div>
          <hr />
          <br />
          <div className="text-center px-3">
            <Link to="/checkout">

            <button className="bg-red-500 mb-5 text-white p-3 rounded-md w-full">

              Proceed to Checkout
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
