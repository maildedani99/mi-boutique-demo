import Modal from '../../../components/Modal'
import ProductViewCard from '../../../components/ProductViewCard'
import { getProductById } from '../../../lib/data'


export default async function Product({ params }) {

    const product = await getProductById(params.id)



    return (
        <Modal>
                <ProductViewCard product={product[0]} />
        </Modal>
    )

}