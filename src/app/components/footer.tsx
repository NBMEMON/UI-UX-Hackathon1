import Image from "next/image"
import loactionIcon from "../images/Location.png"
import socialIcons from "../images/Icons.png"
export default function footer (){
    return (
        <div className="h-[331px] bg-black flex flex-col">
            <div className="flex justify-between mr-[25px]">
    <div className="flex  w-[800px] h-[280px] justify-between ml-[100px]">
        <div className="Footer w-[250px]"> {/* Added width to control size */}
            <ul>
                <li className="text-[white]">FIND A STORE</li>
                <li className="text-[white]">BECOME A MEMBER</li>
                <li className="text-[white]">SIGN UP FOR EMAIL</li>
                <li className="text-[white]">Send us Feedback</li>
                <li className="text-[white]">STUDENT DISCOUNTS</li>
            </ul>
        </div>

        <div className="Footer w-[250px]"> {/* Added width to control size */}
            <ul>
                <li className="text-[white]">Get Help</li>
                <li>Order Status</li>
                <li>Delivery</li>
                <li>Returns</li>
                <li>Payment Options</li>
                <li>Contact Us On Nike.com Inquiries</li>
                <li>Contact Us On All Inquiries</li>
            </ul>
        </div>

        <div className="Footer w-[250px]"> {/* Added width to control size */}
            <ul>
                <li className="text-[white]">About Me</li>
                <li>News</li>
                <li>Careers</li>
                <li>Investors</li>
                <li>Sustainability</li>
            </ul>
        </div>
    </div>

    <div className="w-[550px] h-[223px] flex flex-col text-[#7E7E7E] ">
        <Image
        src={socialIcons}
        alt=""
        className="mt-[25px] justify-end"/>
        <div className="flex justify-end mt-[223px] justify-between text-sm">
 <p>Guides</p><p>Terms of Sale</p><p>Terms of Use</p><p>Nike Privacy Policy</p>
        </div>
       
    </div>
    </div>
    <div className="ml-[100px] w-[550px] flex ">
        <Image src={loactionIcon} alt="" className="w-[18px] h-[15px] " />
        <strong className="text-white ml-[18px]">India</strong>
        <p className="text-[#7E7E7E] ml-[23px] text-sm ">© 2023 Nike, Inc. All Rights Reserved</p>
    </div>
</div>

    )
        
    
}