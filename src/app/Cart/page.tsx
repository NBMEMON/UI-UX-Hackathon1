import React from 'react';
import Image from 'next/image';
import MenShirt from "../images/men1.png"
import WomenShirt from "../images/women.png"
import Icon from "../images/fav&del icon.png"
import Header from "../components/header"
import Footer from "../components/footer"
import Link from 'next/link';

export default function Home() {
  return (
    <div>
        <Header/>
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Bag Section */}
        <div className="flex-1 bg-white p-6 rounded-md shadow-md">
          <h1 className="text-xl font-bold mb-4">Bag</h1>
          <div className="space-y-6">
            {/* First Item */}
            <div className="flex items-center gap-4">
              <Image
                src={MenShirt}
                alt="Nike Dri-FIT ADV TechKnit Ultra"
                className="w-[150px] h-[150px] object-cover rounded-md"
              />
              <div className="flex-1">
                <h2 className="font-semibold mt-[5px]">Nike Dri-FIT ADV TechKnit Ultra</h2>
                <p className="text-sm text-gray-600 mt-[5px]">Men's Short-Sleeve Running Top</p>
                <p className="text-sm text-gray-600 mt-[5px]">Ashen Slate/Cobalt Bliss</p>
                <p className="text-sm text-gray-600 mt-[5px]">Size: L</p>
                <Image
                src={Icon}
                alt=""
                className="mt-[15px]"/>
              </div>
              <div className="text-right">
                <p className="font-bold">MRP:₹ 3,895.00</p>
                <button className="text-red-500 hover:underline text-sm mt-2">Remove</button>
              </div>
            </div>

            {/* Second Item */}
            <div className="flex items-center gap-4">
              <Image
                src={WomenShirt}
                alt="Nike Air Max 97 SE"
                className="w-[150px] h-[150px] object-cover rounded-md"
              />
              <div className="flex-1">
                <h2 className="font-semibold mt-[5px]">Nike Air Max 97 SE</h2>
                <p className="text-sm text-gray-600 mt-[5px]">Men's Shoes</p>
                <p className="text-sm text-gray-600 mt-[5px]">Flat Pewter/Light Bone/Black/White</p>
                <p className="text-sm text-gray-600 mt-[5px]">Size: 8</p>
                <Image
                src={Icon}
                alt=""
                className="mt-[15px]"/>
              </div>
              <div className="text-right">
                <p className="font-bold">MRP:₹ 16,995.00</p>
                <button className="text-red-500 hover:underline text-sm mt-2">Remove</button>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="w-full h-[295px] md:w-1/3 bg-white p-6 rounded-md shadow-md">
          <h1 className="text-xl font-bold mb-4">Summary</h1>
          <div className="space-y-4">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p className="font-bold">₹ 20,890.00</p>
            </div>
            <div className="flex justify-between">
              <p>Estimated Delivery & Handling</p>
              <p className="font-bold">Free</p>
            </div>
            <div className="border-t pt-4 flex justify-between">
              <p className="font-bold">Total</p>
              <p className="font-bold">₹ 20,890.00</p>
            </div><div className="flex justify-center">
                <Link href="/Checkout">
            <button className="w-[334px] h-[60px] bg-black text-white py-2 rounded-[25px] hover:bg-gray-800">
              Member Checkout
            </button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
