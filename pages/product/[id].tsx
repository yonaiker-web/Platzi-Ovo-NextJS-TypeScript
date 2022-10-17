import { useRouter } from "next/router";
import React from "react";

const ProductItem = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>Producto: {id}</div>;
};

export default ProductItem;
