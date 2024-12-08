import Banner from "../images/Banner2.png"
import Image from "next/image";

const FeatureSection: React.FC = () => {
    return (
      <section className="feature-section -100 py-12">
         <h4 className="ml-[100px] text-[20px] text-bold mb-[20px]">Featured</h4>
        <div className="flex justify-center">
        <Image
        src={Banner}
        alt=""/>
        </div>
       
        <div className="container mx-auto text-center">
          <h2 className="text-[60px] font-bold mt-[50px]">STEP INTO WHAT FEELS GOOD</h2>
          <p className="mt-4 text-lg">Cause everyone should know the feeling of running in that perfect pair.</p>
          <button className="mt-6 bg-black text-white px-6 py-2 rounded-full">Find Your Shop</button>
        </div>
      </section>
    );
  };
  
  export default FeatureSection;
  