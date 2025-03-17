import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ModalReport from "../../components/ReportPost/ModalReport";
import Breadcrumbs from "../../components/Breadcrumb";
import ProductCard from "../../components/ProductCard";

//import React Icons
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(""); // เก็บรูปที่เลือก
  const [liked, setLiked] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const navigate = useNavigate();
  
  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     console.log("Fetching product with ID:", id);
  //     const selectedProduct = await ProductService.getProductById(id);
  //     console.log("Selected Product:", selectedProduct);

  //     if (selectedProduct) {
  //       setProduct(selectedProduct);
  //       setSelectedImage(selectedProduct.images?.[0] || "/default.jpg"); // ตั้งค่ารูปแรกเป็นค่าเริ่มต้น

  //       const AllProducts = await ProductService.getAllProducts();
  //       const related = AllProducts.filter(
  //         (product) => product.category === selectedProduct.category && product._id !== selectedProduct._id
  //       );

  //       console.log("Related Products:", related);
  //       setRelatedProducts(related);
  //     }
  //   };

  //   fetchProduct();
  // }, [id]);

  const breadcrumbMenu = [
    { name: "หน้าแรก", link: "/" },
    { name: "อุปกรณ์อิเล็กทรอนิกส์", link: "/shoppost" },
    { name: "คอมพิวเตอร์", link: "#" },
  ];

  if (!product) {
    return <div className="text-center mt-10">กำลังโหลดข้อมูล...</div>;
  }

  // ตรวจสอบให้แน่ใจว่า product.images มีค่าก่อนจะใช้ filter
  const filteredImages = product.images?.filter((img) => img !== selectedImage) || [];

  
  return (
    <div className="section-container sm:mt-7 mt-6 px-6 py-12">
      {/* Breadcrumb */}
      <Breadcrumbs breadcrumbMenu={breadcrumbMenu} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* ภาพสินค้า */}
        <div className="flex flex-col">
        <img src={selectedImage} alt={product.productName} className="w-130 h-130 rounded-lg shadow-md" />
          
        <div className="flex mt-2 space-x-2">
            {filteredImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Gallery ${index}`}
                className="w-20 h-20 rounded-md border shadow-sm cursor-pointer"
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* รายละเอียดสินค้า */}
        <div>
          <h1 className="text-2xl font-bold">{product.productName}</h1>

          <div className="flex items-center justify-between my-2">
            <p className="text-3xl font-bold text-black">
              ฿ {product.price.toLocaleString()}
            </p>
            <button
              onClick={() => setLiked(!liked)}
              className="text-gray-500 hover:text-red-500"
            >
              {liked ? <FaHeart size={24} /> : <FaRegHeart size={24} />}
            </button>
          </div>

          <div className="flex items-center justify-between mt-4 border-b pb-1">
            <p className="text-xl font-semibold mt-3">
              สภาพสินค้า -{" "}
              <span className="text-lg text-gray-700">{product.condition}</span>
            </p>
          </div>
          <div className="flex items-center justify-between pb-2 mt-4 ">
            <h2 className="text-xl font-semibold ">รายละเอียด</h2>
            <ModalReport name="report_modal" />
          </div>
          <p className="text-gray-800 text-sm leading-relaxed mt-4 ">
            {product.description}
          </p>
        </div>

        {/* รายละเอียดผู้ขาย */}
        <div className="shadow-lg p-6 w-full sm:w-[400px] rounded-2xl mt-6">
          <h2 className="text-xl mb-4">รายละเอียดผู้ขาย</h2>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src={product.seller?.image || "https://picsum.photos/200/200"}
                alt={product.seller?.name}
                className="w-14 h-14 rounded-full border"
              />
              <p className="font-medium truncate w-32 sm:w-auto">
                {product.seller?.owner || "ผู้ใช้ไม่ระบุ"}
              </p>
            </div>

            <a
              href={`/profile/${product.seller?.id}`}
              className="text-blue-600 font-medium hover:underline"
            >
              ดูโปรไฟล์
            </a>
          </div>

          {/* ปุ่มแชท */}
          <button className="mt-4 flex items-center justify-center bg-gray-200 text-black px-4 py-2 rounded-2xl w-full border border-gray-300 hover:bg-gray-300">
            <AiOutlineMessage size={20} className="mr-2" />
            แชท
          </button>
        </div>
      </div>

      {/* สินค้าที่คล้ายกัน */}
      {/* <div className="mt-22">
        <h2 className="text-xl font-semibold mb-4">สินค้าที่คล้ายกัน</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {relatedProducts.slice(0, 5).map((product) => (
            <div
              key={product._id}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate(`/shoppost/${product._id}`);
              }}
              className="cursor-pointer"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default ProductDetail;
