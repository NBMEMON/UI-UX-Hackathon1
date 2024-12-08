import Image from "next/image";
import ShoesPic from "../images/shoespic.png"
const HeroSection: React.FC = () => {
    return (
      <section className="hero-section bg-white text-black">
        <Image
        src={ShoesPic}
        alt=""
        className="ml-[100px]"/>
        <div className="container mx-auto text-center py-12">
            <p>First Look</p>
          <h1 className="text-[70px] font-bold">Nike Air Max Pulse</h1>
          <p className="mt-4 text-[15px]">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse<br></br>
          —designed to push you past your limits and help you go to the max</p>
          <div className="mt-6">
            <button className="bg-black text-white px-4 py-2 rounded-full">Notify Me</button>
            <button className="ml-4 bg-black text-white px-4 py-2 rounded-full">Shop Air Max</button>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  