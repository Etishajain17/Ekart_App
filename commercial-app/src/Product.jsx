import {Link} from 'react-router-dom'
function Product({imgUrl, category, title, sku, price}){
    return (
        <div>
            {/* <img src="https://cdn.discordapp.com/attachments/998995040514883694/1009309434239008799/unknown.png" /> */}
            <img src={imgUrl} className="pb-3   "/>
            <p className="text-slate-500">{category}</p>
            <h2 className="font-bold text-slate-600">{title}</h2>
            <img src="https://cdn.discordapp.com/attachments/998995040514883694/1009283293155434496/Stars.png" className="h-4" />
            <p className="font-bold text-slate-600">$ {price}</p>
            <Link to={"/products/"+sku}  className='hover:text-red-400'>View Detail</Link> 
        </div>
    )
}

export default Product