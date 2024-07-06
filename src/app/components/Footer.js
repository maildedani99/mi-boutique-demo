import Link from "next/link";
import { SiInstagram } from "react-icons/si";
import { BsTelephone, BsWhatsapp } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import Image from "next/image";
import SubscriptionForm from "./SubscriptionForm";

export default function Footer() {

  const iconSize = 12;

  return (
    <div className="flex flex-col w-full bg-primary text-white mt-10  text-sm">

      <div className="flex  w-full borde border-white mt-5 py-8">
        <div className="flex flex-col md:flex-row md:container mx-auto   md:justify-around">
          <div className="flex flex-col container  p-2  md:p-0 md:w-4/12  text-2xl  ">
            <SubscriptionForm />
          </div>
          <div className="flex flex-col container md:p-0 md:w-4/12 mt-8 md:mt-0  px-10">
            <h3 className="text-2xl font-medium mx-auto">Información legal</h3>
            <div className="flex flex-col mx-auto text-md">
            <Link className="mx-auto mt-3" href="/terms">
              Términos y Condiciones
            </Link>
            <Link className="mx-auto mt-2" href="/legals">
              Aviso Legal y Privacidad
            </Link>
            <Link className="mx-auto mt-2" href="/changes">
              Envíos, Cambios y Devoluciones
            </Link>
            </div>
          </div>

          <div className="flex flex-col container md:p-0 md:w-4/12 mt-8 md:mt-0 text-center  px-10">
            <h3 className="text-2xl font-medium">Contáctanos</h3>
          <div className="mx-auto  text-md">
            <div className="flex mt-3">
              <SiInstagram size={iconSize} className="my-auto " />
              <span className="my-auto ml-3 ">@usuriagacollection</span>
            </div>
            <div className="flex mt-2">
              <BsTelephone size={iconSize} className="my-auto " />
              <span className="my-auto ml-3 ">613 488 326</span>
            </div>
            <div className="flex mt-2">
              <FiMail size={iconSize} className="my-auto " />
              <span className="my-auto ml-3 ">info@usuriaga.com</span>
            </div>{" "}
            <div className="flex mt-2 ">
              <BsWhatsapp size={iconSize} className="my-auto " />
              <span className="my-auto ml-3 ">613 488 326</span>
            </div>
          </div>

          </div>
        </div>
      </div>
      <div className=" hidden lg:flex flex-col w-full mx-auto py-10 my-auto">
            
            <p className="mx-auto text-base">© 2024 USURIAGA COLLECTION. Todos los derechos reservados.

</p>
          </div>
    </div>
  );
}
