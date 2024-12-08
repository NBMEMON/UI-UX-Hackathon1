import Sidebar from "../components2/sidebar";
import ProductCard from "../components2/ProductCard";
import Footer from "../components/footer";
import Img1 from "../images/Rectangle (1).png";
import Img2 from "../images/Rectangle (2).png";
import Img3 from "../images/Rectangle (3).png";
import Img4 from "../images/Rectangle (4).png";
import Img5 from "../images/Rectangle (5).png";
import Img6 from "../images/Rectangle (6).png";
import Img7 from "../images/Rectangle (7).png";
import Header from "../components/header"

const products = [
  { id: 1, image: Img1, title: "Nike Air Force 1", price: "7,999" },
  { id: 2, image: Img2, title: "Nike React Infinity", price: "8,499" },
  { id: 3, image: Img3, title: "Nike Zoom Pegasus", price: "9,199" },
  { id: 4, image: Img4, title: "Men's Training Tee", price: "2,199" },
  { id: 5, image: Img5, title: "Men's Training Shorts", price: "1,999" },
  { id: 6, image: Img6, title: "Women's Sports Bra", price: "3,499" },
  { id: 7, image: Img7, title: "Women's Training Jacket", price: "4,999" },
];

export default function Home() {
  return (
  <div> 
    <Header/>
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex flex-grow">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="w-4/5 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            ))}
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
    </div>
  );
}
