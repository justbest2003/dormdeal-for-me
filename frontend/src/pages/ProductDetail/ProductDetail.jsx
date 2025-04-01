import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import PostService from "../../services/postproduct.service";
import Swal from "sweetalert2";
import { format } from "date-fns";

//import React Icons
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";

const ProductDetail = () => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("th-TH", {
      style: "currency",
      currency: "THB",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0, 
    }).format(price);
  };
  

  const [postProductDetail, setPostProductDetail] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await PostService.getPostById(id);
        if (response.status === 200) {
          setPostProductDetail(response.data);
        }
      } catch (error) {
        Swal.fire({
          title: "Post Detail",
          text: error?.response?.data?.message || error.message,
          icon: "error",
        });
      }
    };
    fetchPost();
  }, [id]);

  return (
    <div className="section-container sm:mt-7 mt-6 px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* ภาพสินค้า */}
        <div className="flex flex-col">
          {/* แสดงรูปแรกเป็น Main Image */}
          <img
            src={postProductDetail?.images?.[0]} // ใช้ optional chaining เพื่อป้องกัน undefined หรือ null
            alt="Main Product"
            className="w-130 h-130 rounded-lg shadow-md object-cover"
          />

          {/* Thumbnail ไม่รวมรูปแรก */}
          <div className="flex mt-2 space-x-2">
            {postProductDetail?.images?.slice(1).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-20 h-20 rounded-md shadow-sm cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* รายละเอียดสินค้า */}
        <div>
          <h1 className="text-2xl font-bold">
            {postProductDetail.productName}
          </h1>

          <div className="flex items-center justify-between my-2">
            <p className="text-3xl font-bold text-black">
              {formatPrice(postProductDetail.price)}
            </p>
            {/* <button
              onClick={() => setLiked(!liked)}
              className="text-gray-500 hover:text-red-500"
            >
              {liked ? <FaHeart size={24} /> : <FaRegHeart size={24} />}
            </button> */}
          </div>

          <div className="flex items-center justify-between mt-4 border-b pb-1">
            <p className="text-xl font-semibold mt-3">
              สภาพสินค้า -{" "}
              <span className="text-lg text-gray-700">
                {postProductDetail.condition}
              </span>
            </p>
          </div>
          <div className="flex items-center justify-between pb-2 mt-4 ">
            <h2 className="text-xl font-semibold ">รายละเอียด</h2>
            {/* <ModalReport name="report_modal" /> */}
          </div>
          <p className="text-gray-800 text-sm leading-relaxed mt-1">
            {postProductDetail.description}
          </p>
        </div>

        {/* รายละเอียดผู้ขาย */}
        <div className="shadow-lg p-6 w-full sm:w-[400px] rounded-2xl mt-6">
          <h2 className="text-xl mb-4">รายละเอียดผู้ขาย</h2>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                // src={postProductDetail.owner?.image || "https://picsum.photos/200/200"}
                alt={postProductDetail.owner?.displayName}
                className="w-14 h-14 rounded-full border"
              />
              <p className="font-medium truncate w-32 sm:w-auto">
                {postProductDetail.owner?.displayName || "ผู้ใช้ไม่ระบุ"}
              </p>
            </div>

            <a
              // href={`/profile/${product.seller?.id}`}
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
