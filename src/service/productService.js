import api from "./api";

export const getProducts = async () => {
    try {
        const response = await api.get("/products");
        let products = response.data.products;
        return products;
    } catch (error) {
        console.log("Fail to fetch products",error);
        throw error;
    }
};

