import Image from "next/image";
import product1 from "../images/shoe1.png"; 
import product2 from "../images/shoe2.png"
import arrowIcons from "../images/Auto Layout Horizontal.png"
const ProductCarousel: React.FC = () => {
  return (
    <section className="product-carousel py-12 bg-white">
        <div className="flex justify-between mr-[100px] mb-[10px]"><h2 className="ml-[200px] font-bold text-lg">Best of Air Max</h2> 
        <Image
        src={arrowIcons}
        alt=""/>
        </div>
      
      <div className="flex justify-between p-[200px] pt-[12px] pb-[12px]">

        {/* Product 1 */}
        <div className="text-center">
          <Image src={product1} alt="Nike Air Max Pulse" width={300} height={300} />
          <div className="flex  justify-between mt-[20px]">
          <h3 className=" font-bold text-[15px]">Nike Air Max Pulse</h3>
          
          <p className="text-gray-600">₹13,995</p>
          </div>
          <div className="flex text-sm text-gray-500"><p>Women`s Shoes</p></div>
          
        </div>

        {/* Product 2 */}
        <div className="text-center">
          <Image src={product2} alt="Nike Air Max 97 SE" width={300} height={300} />
           <div className="flex  justify-between mt-[20px]">
          <h3 className=" font-bold text-[15px]">Nike Air Max Pulse</h3>
          
          <p className="text-gray-600">₹13,995</p>
          </div>
          <div className=" flex text-sm text-gray-500"><p>Men`s Shoes</p></div>
        </div>

        <div className="text-center">
          <Image src={product2} alt="Nike Air Max 97 SE" width={300} height={300} />
          <div className="flex  justify-between mt-[20px]">
          <h3 className=" font-bold text-[15px]">Nike Air Max Pulse</h3>
          
          <p className="text-gray-600">₹13,995</p>
          </div>
          <div className=" flex text-sm text-gray-500"><p>Men`s Shoes</p></div>
          
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;

