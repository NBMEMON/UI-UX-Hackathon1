import Image from "next/image";
import Banner2 from "../images/featuredBanner.png"
import Men from "../images/men.png"
import Women from "../images/women.png"
import Kids from "../images/kid.png"

const FlightEssentialsSection: React.FC = () => {
  return (
    <section className="flight-essentials bg-white py-12 "><p className="text-[20px] font-bold ml-[90px] mb-[15px]">
        Don`t Miss
    </p>
        <div className="flex justify-center">
        <Image 
        src={Banner2}
        alt=""/>
        </div>
        
      <div className="container mx-auto text-center">
        <h2 className="text-[60px] font-bold mt-[30px]">FLIGHT ESSENTIALS</h2>
        <p className="text-gray-600 mt-4">
          Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
        </p>
        <button className="mt-6 px-6 py-2 bg-black text-white rounded-full">Shop</button>
      </div>
    </section>
  );
};

const EssentialsSection: React.FC = () => {
  return (
    <section className="essentials-section bg-gray-50 py-12">
      <div className="container mx-auto text-left flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-8">The Essentials</h2>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <Image src={Men} alt="Men's Essentials" width={400} height={400} />
            <h3 className="mt-4 font-bold">Men</h3>
          </div>
          <div>
            <Image src={Women} alt="Women's Essentials" width={400} height={400} />
            <h3 className="mt-4 font-bold">Women</h3>
          </div>
          <div>
            <Image src={Kids} alt="Kids' Essentials" width={400} height={400} />
            <h3 className="mt-4 font-bold">Kids</h3>
          </div>
        </div>
      </div>
    </section>
    
  );
};

const Page: React.FC = () => {
  return (
    <div>
      <FlightEssentialsSection />
      <EssentialsSection /><div className="flex justify-center">
      <div className="flex justify-between w-[700px] mb-[50px]">
  <div>
    <h2 className="text-lg font-bold mb-4">Icons</h2>
    <ul className="space-y-2">
      <li className="flex items-center">
        <p className="product-name text-sm font-medium text-[#757575] mb-[5px]">Air Force 1</p>
      </li>
      <li className="flex items-center">
        <p className="product-name text-sm font-medium text-[#757575] mb-[5px]">Huarache</p>
      </li>
      <li className="flex items-center">
        <p className="product-name text-sm font-medium text-[#757575] mb-[5px]">Air Max 90</p>
      </li>
      <li className="flex items-center">
        <p className="product-name text-sm font-medium text-[#757575] mb-[5px]">Air Max 95</p>
      </li>
    </ul>
  </div>
  <div>
    <h2 className="text-lg font-bold mb-4">Shoes</h2>
    <ul className="space-y-2">
      <li className="flex items-center">
        <p className="product-name text-sm font-medium text-[#757575] mb-[5px]">All Shoes</p>
      </li>
      <li className="flex items-center">
        <p className="product-name text-sm font-medium text-[#757575] mb-[5px]">Custom Shoes</p>
      </li>
      <li className="flex items-center">
        <p className="product-name text-sm font-medium text-[#757575] mb-[5px]">Jordan Shoes</p>
      </li>
      <li className="flex items-center">
        <p className="product-name text-sm font-medium text-[#757575] mb-[5px]">Running Shoes</p>
      </li>
    </ul>
  </div>
  <div>
    <h2 className="text-lg font-bold mb-4">Clothing</h2>
    <ul className="space-y-2">
      <li className="flex items-center">
        <p className="product-name text-sm font-medium text-[#757575] mb-[5px]">All Clothing</p>
      </li>
      <li className="flex items-center">
        <p className="product-name text-sm font-medium text-[#757575] mb-[5px]">Modest Wear</p>
      </li>
      <li className="flex items-center">
        <p className="product-name text-sm font-medium text-[#757575] mb-[5px]">Hoodies & Pullovers</p>
      </li>
      <li className="flex items-center">
        <p className="product-name text-sm font-medium text-[#757575] mb-[5px]">Shirts & Tops</p>
      </li>
    </ul>
  </div>
  <div>
    <h2 className="text-lg font-bold mb-4">Kids</h2>
    <ul className="space-y-2">
      <li className="flex items-center">
        <p className="product-name text-sm font-medium text-[#757575] mb-[5px]">Infant & Toddler Shoes</p>
      </li>
      <li className="flex items-center">
        <p className="product-name text-sm font-medium text-[#757575] mb-[5px]">Kids' Shoes</p>
      </li>
      <li className="flex items-center">
        <p className="product-name text-sm font-medium text-[#757575] mb-[5px]">Kids' Jordan Shoes</p>
      </li>
      <li className="flex items-center">
        <p className="product-name text-sm font-medium text-[#757575] mb-[5px]">Kids' Basketball Shoes</p>
      </li>
    </ul>
  </div>
</div></div>
    </div>
  );
};

export default Page;

