import { Eye, Heart, MoveLeft, MoveRight, Star } from "lucide-react";
import "../../css/style.css";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const Products = () => {
  return (
    <div className="container p-5">
      <div>
        <div className="flex items-center gap-2 mb-5">
          <div className="headingMark"></div>
          <h2 className="headingText">Danh sách sản phẩm</h2>
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
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default Products;
