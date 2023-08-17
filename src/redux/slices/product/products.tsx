import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ProductId = number;

interface Product {
  sku: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  category: string;
  price: number;
  brand: string;
  partNumber: number;
  family: string;
  motor: string;
  supplier: string;
  status: string;
}

interface ProductWithId extends Product {
  id: ProductId;
}

type stateProduct = {
  singleProduct: ProductWithId[];
  products: ProductWithId[];
};

//const initialState: ProductWithId[] = {
const initialState: stateProduct = {
  singleProduct: [],
  products: [
    {
      id: 1,
      sku: "efo-1141",
      name: "Foco",
      shortDescription: "Foco Incandescente",
      description: "Foco Incandescente 1141 12V 1 Polo",
      image:
        "https://ancona.s3.us-east-2.amazonaws.com/products/EFO-1141-BWEB.png",
      category: "lamparas",
      price: 4.41,
      brand: "Hella",
      partNumber: 7501748615752,
      family: "merida",
      motor: "refaccion",
      supplier: "Hella",
      status: "active",
    },
  ],
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const id = Math.floor(Math.random() * 999999);
      state.products = [...state.products, { id, ...action.payload }];
    },

    updateProduct: (state, action: PayloadAction<Product>) => {
      const id = state.singleProduct[0].id;
      const result = state.products.map((product) =>
        product.id === id ? { id, ...action.payload } : product
      );
      state.products = result;
    },

    deleteProduct: (state, action: PayloadAction<ProductId>) => {
      const id = action.payload;
      state.products = state.products.filter((product) => product.id !== id);
    },

    getByIdProduct: (state, action: PayloadAction<ProductId>) => {
      const id = action.payload;

      state.singleProduct = state.products.filter(
        (product) => product.id === id
      );
    },
  },
});

export default productSlice.reducer;

export const { addProduct, deleteProduct, updateProduct, getByIdProduct } =
  productSlice.actions;
