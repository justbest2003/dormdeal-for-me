import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ProductCard from "./ProductCard";
import ProductService from "../services/product.service";

const ShoppingCart = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await ProductService.getAllProducts();
      if (data) {
        setProducts(data);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="section-container pt-14">
      {/* Filter */}
      <div className="flex flex-wrap items-center mb-6">
        <div className="flex flex-wrap space-x-4 w-full sm:w-auto ">
          {/* หมวดหมู่ */}

          <select className="select select-bordered rounded-lg w-full sm:w-36 outline-1 bg-white">
            <option>หมวดหมู่</option>
            <option>หมวดหมู่ 1</option>
            <option>หมวดหมู่ 2</option>
            <option>หมวดหมู่ 3</option>
          </select>

          {/* จัดเรียงตาม */}
          <select className="select select-bordered rounded-lg w-full sm:w-36 outline-1 bg-white">
            <option>จัดเรียงตาม</option>
            <option>ใหม่ล่าสุด</option>
            <option>ราคามากไปน้อย</option>
            <option>ราคาน้อยไปมาก</option>
            <option>ก-ฮ</option>
            <option>ฮ-ก</option>
          </select>

          {/* สภาพสินค้า */}
          <select className="select select-bordered rounded-lg w-full sm:w-36 outline-1 bg-white">
            <option>สภาพสินค้า</option>
            <option>ของมือสองสภาพดี</option>
            <option>ของมือสองสภาพพอใช้</option>
          </select>

          {/* ปุ่ม ล้างค่า */}
          <a className="btn btn-outline rounded-lg ml-4 mt-4 sm:mt-0 sm:ml-4 outline-1 bg-white">
            ล้างค่า
          </a>

          {/* ช่องค้นหา */}
          <div className="ml-4 mt-4 sm:mt-0 sm:ml-4 rounded-lg outline-1">
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered w-full sm:w-100 bg-white"
            />
          </div>
        </div>
      </div>

      {/* รายการสินค้า */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div key={product.id} onClick={() => navigate(`/shoppost/${product._id}`)} className="cursor-pointer">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
