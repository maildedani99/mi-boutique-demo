import ProductViewCard from '../../components/ProductViewCard'
import { getProductById } from '../../lib/data' 


export default async function ProductView ( {params} ) {

  
  const product = await getProductById(params.id)
  


    return (
      <div className='min-h-screen'>
        <ProductViewCard  product={product[0]}  />
      </div>

    )
}