import CloseModalIcon from "../components/CloseModalIcon";
import Modal from "../components/Modal";

export default function Changes() {
  return (
    <Modal>
      <div className="relative">
        <CloseModalIcon />

        <div className="flex flex-col container mx-auto w-full justify-center tracking-wider font-light text-[#515151]">
          <h2 className="text-5xl mx-auto mt-20">Envíos, Cambios y Devoluciones</h2>
          
          <section className="mt-14">
            <h3 className="text-3xl">1. Envíos</h3>
            <p className="text-justify mt-5">
              Usuriaga Collection realiza envíos a España península, islas Baleares y Portugal mediante la compañía de mensajería Seur.
            </p>
            <p className="text-justify mt-5">
              Los plazos de entrega habituales son de 24/72h laborables, pudiendo sufrir retrasos en épocas de alta demanda como podrían ser: época de rebajas, Black Friday o campaña de Navidad.
            </p>
            <p className="text-justify mt-5">
              El coste de envío es de 3,90 euros para toda la península (España y Portugal) y de 5,90 euros para islas Baleares, siendo GRATUITO en compras superiores a 60 euros.
            </p>
            <p className="text-justify mt-5">
              Usuriaga Collection no será responsable de los errores causados en la entrega cuando la dirección de entrega introducida por el cliente en el formulario de pedido no se ajuste a la realidad o hayan sido omitidos. En caso de querer cambiar la dirección de entrega una vez haya sido realizado el envío, el cliente deberá abonar el coste derivado de esta nueva gestión (3,90 o 5,90 euros en cada caso).
            </p>
            <p className="text-justify mt-5">
              Si en el momento de recibir el pedido por parte de la empresa de mensajería, detectas que el paquete está abierto, deteriorado o muestra signos de haber sido manipulado, no firmes la entrega del mismo y contacta con nosotros enviándonos un correo electrónico, o bien hazlo constar por escrito en el albarán de entrega que firmas al repartidor.
            </p>
          </section>

          <section className="mt-14">
            <h3 className="text-3xl">2. Cambios y devoluciones</h3>
            <p className="text-justify mt-5">
              Usuriaga Collection acepta cambios durante los 14 días naturales posteriores a la fecha de recepción del pedido, siempre que las prendas a devolver se encuentren en perfecto estado, sin usar, sin lavar y mantengan la etiqueta original.
            </p>
            <p className="text-justify mt-5">
              El cambio se debe solicitar enviando un correo electrónico a contacto@usuriaga.com
            </p>
            <p className="text-justify mt-5">
              Cuando el cliente decida hacer un cambio, el coste directo del envío de la devolución del pedido será asumido por el cliente según se recoge en la LGCU. El envío puede hacerse a través de cualquier agencia de mensajería y el precio dependerá de la tarifa, el peso y el recorrido del paquete.
            </p>
            <p className="text-justify mt-5">
              Las prendas a cambiar deben ser devueltas en las mismas condiciones en que fueron recibidas y el envío de las mismas deberá realizarse en un embalaje herméticamente cerrado. No se aceptarán cambios que incumplan todas las condiciones mencionadas en este apartado.
            </p>
            <p className="text-justify mt-5">
              Una vez recibido el paquete y hayamos verificado que el producto se encuentra en perfecto estado, procederemos a contactar con el cliente para acordar el o los productos por los que quiere realizar el cambio.
            </p>
            <p className="text-justify mt-5">
              Usuriaga Collection no acepta devoluciones de sus productos, así como tampoco cambios en productos que se encuentren en la categoría Outlet o accesorios.
            </p>
            <p className="text-justify mt-5">
              El cliente dispone de un plazo de 2 días naturales para notificar si la prenda ha llegado defectuosa y debe hacerlo mediante correo electrónico a contacto@usuriaga.com, adjuntando evidencia fotográfica. El coste del nuevo envío irá a cargo de Usuriaga Collection.
            </p>
            <p className="text-justify mt-5">
              Una vez el transportista haga la entrega del paquete con la nueva prenda, el cliente deberá entregar la prenda defectuosa al transportista dentro de un embalaje hermético para que nos la devuelva.
            </p>
            <p className="text-justify mt-5">
              En caso de que la prenda esté fuera de stock, se podrá hacer el cambio por cualquier otra prenda. El cambio deberá ser por otro producto de igual o superior valor. Si la nueva prenda elegida es de mayor valor que la defectuosa, se deberá abonar la diferencia.
            </p>
          </section>
        </div>
      </div>
    </Modal>
  );
}
