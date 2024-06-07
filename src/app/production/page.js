import Image from "next/image";
import Modal from "../components/Modal";


export default function Production () {

    return (
        <Modal>

        <div className="flex text-5xl justify-center w-full tracking-wider  font-light text-primary text-center min-h-[700px]">
        <div className="flex flex-col font-semibold space-y-10 my-auto">
            <Image
                src="/logogrisprueba.png"
                width={400}
                height={400}
                alt="Logo usuriaga"
                className=" mx-auto mb-10"

            />

        <span>Nuestro e-commerce está en proceso de producción...</span>
        <span>Pronto estará disponible!!</span>
        </div>
    </div>
        </Modal>
    )
}