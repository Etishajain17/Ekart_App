import { useParams } from "react-router-dom";
import alldata from "./DummyData";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import {Link} from 'react-router-dom';
function ProductDetail() {
    const { sku } = useParams();

    let product;
    for (let i = 0; i < alldata.length; i++) {
        const p = alldata[i];
        if (sku == p.sku) {
            product = p;
            break;
        }
        // console.log(product);
    }
    return (
        <div className="bg-gray-200">
            <Link to="/">
                <BsFillArrowLeftSquareFill className="text-4xl m-5" />
            </Link>
            <div className="my-28 bg-white flex  max-h-96 px-10 py-5 mx-48 ">
                <img src={product.image} className="mr-10  max-h-96 h-72" />
                <div>
                    <h1 className="text-4xl mb-6">{product.head}</h1>
                    <h3 className="font-bold text-2xl mb-4">{product.price}</h3>
                    <p className="mb-4 text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, fugit sunt quasi, esse similique culpa voluptates nemo ipsa deserunt soluta exercitationem perspiciatis ut deleniti maxime quo perferendis sapiente minima voluptatem.</p>
                    <input type="number" placeholder="1" className="w-12 border-2 pl-2 py-1 mx-2" />
                    <a href="" className="bg-red-500 text-white rounded-md px-10 py-2">ADD TO CART</a>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;