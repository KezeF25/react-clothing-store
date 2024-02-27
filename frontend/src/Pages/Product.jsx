import React from "react";
import Breadcrum from "../Components/Breadcrum/Breadcrum.jsx";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay.jsx";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox.jsx";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts.jsx";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../Components/Loading/Loading.jsx";

export const Product = () => {

  const allProduct = useSelector((state) => state.dataSlices.allProduct);
  const { productId } = useParams();
  const product = allProduct.find((item) => item.id === Number(productId));
  const loading = useSelector((state) => state.dataLoading.loading);

  if (loading){
    return (<Loading />)
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
