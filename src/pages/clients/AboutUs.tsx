import "../../css/style.css";
import { Button } from "../../components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import PolicyCard from "@/components/common/PolicyCard";

const AboutUs = () => {
  return (
    <div className="my-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/">About us</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex gap-20 my-10">
        <div className="w-1/2 flex flex-col gap-5 my-auto">
          <h1 className="text-5xl font-semibold">Our story</h1>
          <p className="text-lg">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p className="text-lg">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
        </div>
        <div className="shadow-lg rounded w-1/2 overflow-hidden">
          <img
            src="https://img.freepik.com/free-photo/two-happy-girls-sweaters-having-fun-with-shopping-trolley-megaphone-white-wall_171337-2714.jpg?ga=GA1.1.578840283.1748379272&semt=ais_items_boosted&w=740"
            alt="About us"
          />
        </div>
      </div>
      <PolicyCard />
    </div>
  );
};

export default AboutUs;
