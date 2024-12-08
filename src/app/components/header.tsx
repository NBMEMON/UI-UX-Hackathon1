import Image from "next/image"
import NikeLogo from "../images/lebron.png"
import NikeLogo1 from"../images/nike logo.png"
import searchIcon from "../images/search.png"
import Heart from "../images/heart.png"
import Cart from "../images/cart.png"
import Link from "next/link"

export default function header(){
    return (
    <div>
        <div className="w-1440px h-36px bg-[#F5F5F5] flex  justify-between  items-center">
         <Image 
         className="ml-[48px]"
         src={NikeLogo}
         alt=""/>
         
         <div className="text-[11px] whitespace-pre mr-[48px] font-[500px]">Find a Store   | <Link href="/Help">  Help   </Link>|<Link href="/JoinUs"> Join Us </Link>| <Link href="/SignUpPage"> Sign in </Link></div>
        </div>
        <div className="w-1440px h-60px bg-[#ffffff] flex justify-between items-center ">
            <Link href="/">
            <Image
            src={NikeLogo1}
            alt=""
            className="ml-[24px]"/>
            </Link>
            <ul className="list-none flex justify-center ">
                <li className="mr-4">
                     New & Featured 
                </li>
                <li className="mr-4">
                    Men 
                </li>
                <li className="mr-4">
                    Women
                </li>
                <li className="mr-4">
                    Kids 
                </li>
                <li className="mr-4">
                    Sale
                </li>
                <li className="mr-4">
                <strong>SNKRS</strong>
                </li>
            </ul>
            <div className="flex">
            <div className="flex items-center justify-center">
  <div className="relative w-80">
    <input 
      type="text"
      placeholder="Search" 
      className="w-[180px] h-[40px] py-2 pl-10 pr-4 border rounded-[25px] bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <Image 
      src={searchIcon} 
      alt="Search Icon" 
      width={20} 
      height={20} 
      className="absolute left-3 top-1/2 transform -translate-y-1/2"
    />
  </div>
</div>
<div className="flex  mr-[30px]">
<Image 
src ={Heart}
alt=""/>
<Link href="/Cart">
<Image 
src={Cart}
alt=""/>
</Link>
</div>
</div>
        </div>
        <div className="flex flex-col justify-center items-center">
            <h3 className="font-extrabold">Hello Nike App</h3>
            <p className="text-sm ">Download the app to access everything Nike. Get Your Great</p>
        </div>
        </div>
    )
}