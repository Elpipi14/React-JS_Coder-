import { useParams } from "react-router-dom";
import { useProductsId } from "../../Hooks/useProducts";

import Spinner from "../Spinner/Spinner";
import Item from "./Item";

const ItemDetail = () => {
  const { id } = useParams();
  const { products, spinners } = useProductsId(id); 

  return (
    <div>
      {spinners === true ? <Spinner /> : <Item product={products} />}
    </div>
  );
};

export default ItemDetail;
