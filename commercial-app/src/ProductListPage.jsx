import { useState } from 'react'
import Card from './Product'
import alldata from './DummyData'
import ProductDetail from './ProductDetail';
import Product from './Product';
import NoMatching from './NoMatching';

function ProductListPage() {

    
    const [input,setinput] = useState("");
    const [sort,updatesort] =useState("default");

    let data=[...alldata];

    data=data.filter(function(i){
        return i.head.toLowerCase().indexOf(input.toLowerCase())!=-1;
    })

    if(sort=="title"){
        data=data.sort(function(x,y){
            return x.head < y.head ? -1:1;
        })
    }
    else if(sort=="pricelh"){
        data=data.sort(function(x,y){
            return x.price-y.price;
        })
    }
    else if(sort=="pricehl"){
        data=data.sort(function(x,y){
            return y.price-x.price;
        })
    }

    function setsort(event){
        updatesort(event.target.value);
    }
    function setsearch(event){

        setinput(event.target.value);
    }
     
    return (
        <>
            <div className="flex flex-col md:p-12 bg-white   md:mx-24 md:my-12 xl:mx-48 xl:my-24">
                <div className='self-end mb-8 gap-x-2 md:flex'>
                    <input placeholder='Search' className='border-2 p-1 text-slate-400' value={input} onChange={setsearch}/>
                    <select className='border-2 text-slate-400' value={sort} onChange={setsort}>
                        <option value="default">Default Sort</option>
                        <option value="title">Sort by title</option>
                        <option value="pricelh">Sort by price : low to high</option>
                        <option value="pricehl">Sort by price : high to low</option>
                    </select>
                    
                </div>
                <div className="flex flex-wrap gap-x-10 gap-y-6  justify-center px-16">
                    {data.map(function(x){
                        
                        return <Product imgUrl={x.image} category={x.category} title={x.head} sku={x.sku} price={x.price}/>
                    })}
                </div>
                <div className='font-serif text-4xl self-center'>{
                        data.length==0 && <NoMatching />
                    }
                    </div>
            </div>

        </>
    )
}

export default ProductListPage