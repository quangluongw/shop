import { Eye, Heart, Star } from "lucide-react";
import type { Product } from "../../types/product";
interface ProductCardProps {
  product: Product;
}
const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="mt-10 flex justify-start gap-4">
      <div className="flex flex-col w-1/5  transition-all duration-300 rounded relative group overflow-hidden">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded "
          />
          <div>
            <div className="flex flex-col absolute top-0 gap-2">
              {product.discount > 0 && (
                <span className="block bg-red-500 text-white text-xs px-2 py-2 rounded">
                  -{product.discount}%
                </span>
              )}
              <span className="block bg-green-500 text-white text-xs px-2 py-2 rounded ">
                NEW
              </span>
            </div>
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
          <p>{product.name}</p>
        </div>

        <div className="flex gap-3">
          {product.discount > 0 ? (
            <>
              <p className="text-red-500 font-semibold text-base">
                {(product.price / 100) * product.price}₫
              </p>
              <p className="text-gray-400 line-through font-semibold text-base">
                {product.price}₫
              </p>
            </>
          ) : (
            <p className="text-red-500 font-semibold text-base">
              {product.price}₫
            </p>
          )}
        </div>
        <div className="flex mt-3">
          <Star className="size-4 stroke-yellow-300 fill-yellow-300" />
          <Star className="size-4 stroke-yellow-300 fill-yellow-300" />
          <Star className="size-4 stroke-yellow-300 fill-yellow-300" />
          <Star className="size-4 stroke-yellow-300 fill-yellow-300" />
          <Star className="size-4 stroke-yellow-300 fill-yellow-300" />
          <span className="text-sm pl-2 text-gray-500 font-semibold">
            ({product.reviews})
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
