import axios from "axios";
const API_URL = "/products"

const getAllProducts = async () => {
  const response = await axios.get("/Service/products.json");
  return response.data;
};

const getProductById = async (id) => {
  const response = await axios.get("/Service/products.json"); 
  return response.data.find((product) => product._id === id || product._id === String(id)) || null;
};

// Create By Kays for TEST!



const addProduct = async (product) => {
  try {
    const response = await axios.post(`${API_URL}`, product, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;  // ส่งคืนผลลัพธ์จาก API
  } catch (error) {
    console.error("Error posting product:", error);
    throw error;  // โยนข้อผิดพลาดถ้ามี
  }
};

const ProductService = {
  getAllProducts,
  getProductById,
  addProduct
};

export default ProductService;
