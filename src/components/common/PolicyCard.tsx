import { Box, Headphones } from "lucide-react";

const PolicyCard = () => {
  return (
    <div className="flex justify-around my-10">
      <div className="w-1/3">
        <div className="w-10 h-10 xl:w-20 xl:h-20 bg-gray-400 rounded-full flex items-center justify-center mx-auto">
          <div className="w-8 h-8 xl:w-16 xl:h-16 bg-black rounded-full flex items-center justify-center">
            <Box className="size:4 xl:size-12 text-white m-auto" />
          </div>
        </div>
        <div className="w-full text-center">
          <p className="font-bold text-sm xl:text-xl">
            Miễn phí và nhanh chóng
          </p>
          <span className="text-xs xl:text-sm">
            Miễn phí vận chuyển cho đơn trên 500 nghìn
          </span>
        </div>
      </div>
      <div className="w-1/3">
        <div className="w-10 h-10 xl:w-20 xl:h-20 bg-gray-400 rounded-full flex items-center justify-center mx-auto">
          <div className="w-8 h-8 xl:w-16 xl:h-16 bg-black rounded-full flex items-center justify-center">
            <Headphones className="size:4 xl:size-12 text-white m-auto" />
          </div>
        </div>

        <div className="w-full text-center">
          <p className="font-bold text-base xl:text-xl">Hỗ trợ 24/7</p>
          <span className="text-xs xl:text-sm">
            Luôn sẵn sàng hỗ trợ khách hàng
          </span>
        </div>
      </div>
      <div className="w-1/3">
        <div className="w-10 h-10 xl:w-20 xl:h-20 bg-gray-400 rounded-full flex items-center justify-center mx-auto">
          <div className="w-8 h-8 xl:w-16 xl:h-16 bg-black rounded-full flex items-center justify-center">
            <Box className="size:4 xl:size-12 text-white m-auto" />
          </div>
        </div>
        <div className="w-full text-center">
          <p className="font-bold text-base xl:text-xl">Hoàn trả nhanh chóng</p>
          <span className="text-xs xl:text-sm">
            Hoàn tiền chỉ trong 30 ngày
          </span>
        </div>
      </div>
    </div>
  );
};

export default PolicyCard;
