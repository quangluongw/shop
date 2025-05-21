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
            className="h-[7rem]"
          />
          <img
            src="https://www.ultratech.com.bd/image/cache/catalog/gamepad/havit/hv-g92/havit-hv-g92-gamepad-2-500x500.jpg.webp"
            alt=""
            className="h-[7rem]"
          />
        </div>
        <div>
          <img
            src="https://www.ultratech.com.bd/image/cache/catalog/gamepad/havit/hv-g92/havit-hv-g92-gamepad-2-500x500.jpg.webp"
            alt=""
          />
        </div>
        <div>
          <h1>Havic HV G-92 Gamepad</h1>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
