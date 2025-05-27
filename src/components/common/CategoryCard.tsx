import { Smartphone } from "lucide-react";
import type { Category } from "../../types/category";
interface CategoryCardProps {
  category: Category;
}
const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <div className="flex flex-col border-2 border-gray-300 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-200 cursor-pointer rounded gap-4 p-10 mb-10">
      <a href="">
        <Smartphone className="h-10 w-full" />
        <span className="w-full text-center text-lg font-semibold">
          {category.name}
        </span>
      </a>
    </div>
  );
};

export default CategoryCard;
