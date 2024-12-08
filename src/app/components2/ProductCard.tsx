import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ProductCardProps {
  image: string | StaticImageData; // Allow both string (URL) and StaticImageData
  title: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col items-center w-[288px] h-[433px]">
      <Image
        src={image}
        alt={title}
        className="w-[288px] h-[288px] object-contain mb-4 rounded"
      /><div className="flex flex-col  mr-[120px] mb-[100px]">
      <h3 className="text-sm font-medium text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">₹{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;

