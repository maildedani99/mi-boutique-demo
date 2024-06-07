import CloseModalIcon from "../components/CloseModalIcon";
import Modal from "../components/Modal";

export default function Terms() {
  return (
    <Modal>
      <div className="relative">
        <CloseModalIcon />
        
        <div className="flex flex-col container mx-auto w-full justify-center tracking-wider font-light text-[#515151]">
          <h2 className="text-5xl mx-auto mt-20">Términos y Condiciones</h2>
          
          <section className="mt-14">
            <h3 className="text-3xl">1. Ámbito de aplicación</h3>
            <p className="text-justify mt-5">
              Los contratos de compraventa concluidos a través del comercio electrónico entre Usuriaga Collection y el consumidor se regirán por las siguientes Condiciones Generales de Contratación.
            </p>
          </section>

          <section className="mt-14">
            <h3 className="text-3xl">2. Partes del contrato</h3>
            <p className="text-justify mt-5">
              El contrato de compraventa se concluye con Usuriaga Collection. Puede contactarnos a través del teléfono (+34) 613 488 326 o por correo electrónico en la dirección info@usuriaga.com
            </p>
          </section>

          <section className="mt-14">
            <h3 className="text-3xl">3. Conclusión del contrato</h3>
            <p className="text-justify mt-5">
              Al hacer clic en el botón COMPRAR emite una declaración de voluntad vinculante por la que acepta la conclusión del pedido obligándose al pago del mismo. En el momento en que se realiza el pago del pedido, se confirma la conclusión del contrato.
            </p>
          </section>

          <section className="mt-14">
            <h3 className="text-3xl">4. Lengua</h3>
            <p className="text-justify mt-5">
              El contrato se formalizará en castellano.
            </p>
          </section>

          <section className="mt-14">
            <h3 className="text-3xl">5. Archivo del contrato</h3>
            <p className="text-justify mt-5">
              Los contratos concluidos en la tienda online quedan archivados. Puede acceder a los pedidos realizados enviando un correo electrónico a info@usuriaga.com
            </p>
          </section>

          <section className="mt-14">
            <h3 className="text-3xl">6. Precio</h3>
            <p className="text-justify mt-5">
              Los precios mostrados incluyen el Impuesto sobre el Valor Añadido (IVA) legalmente aplicable y se indican en euros. Salvo que se indique expresamente lo contrario, los precios indicados no incluyen los gastos de envío.
            </p>
          </section>

          <section className="mt-14">
            <h3 className="text-3xl">7. Envíos</h3>
            <p className="text-justify mt-5">
              Salvo que se indique lo contrario, los productos serán entregados en un plazo de entre 24 y 72 horas laborables. El producto sólo será enviado una vez se haya recibido el abono del mismo. Para más información, ver el apartado Envíos y Devoluciones.
            </p>
          </section>

          <section className="mt-14">
            <h3 className="text-3xl">8. Métodos de pago</h3>
            <p className="text-justify mt-5">
              Los pagos que se realicen a través de la página web podrán realizarse únicamente a mediante tarjeta de Débito/Crédito.
            </p>
          </section>

          <section className="mt-14">
            <h3 className="text-3xl">9. Transmisión del riesgo</h3>
            <p className="text-justify mt-5">
              El riesgo de pérdida o deterioro de la mercancía se transmitirá al consumidor cuando él o un tercero por él indicado, distinto del transportista, haya adquirido su posesión material. Es importante que inspeccione el paquete en el momento de la entrega. Si detecta que el paquete se encuentra en mal estado, reclame el problema ante la agencia de transporte y póngase en contacto con nosotros en: contacto@usuriaga.com
            </p>
          </section>

          <section className="mt-14">
            <h3 className="text-3xl">10. Garantías</h3>
            <p className="text-justify mt-5">
              Todos los productos ofertados en el sitio web cuentan con la garantía legal de conformidad de 2 años conforme a las condiciones establecidas en el Real Decreto Legislativo 1/2007, de 16 de noviembre, por el que se aprueba el texto refundido de la Ley General para la Defensa de los Consumidores y Usuarios y otras leyes complementarias.
            </p>
          </section>

          <section className="mt-14">
            <h3 className="text-3xl">11. Bases legales de sorteos en Instagram, Facebook y TikTok</h3>
            <p className="text-justify mt-5">
              Las fechas de inicio y finalización de cada sorteo siempre quedarán fijadas en los posts de Instagram/Facebook/TikTok correspondientes, así como los requisitos de participación y la mecánica de los mismos.
            </p>
            <p className="text-justify mt-5">
              La participación en los sorteos implica que el participante cumple con los requisitos establecidos y que respeta y cumple las condiciones de Instagram/Facebook/TikTok. Instagram/Facebook/TikTok no patrocina, avala ni administra, en modo alguno los sorteos, ni está asociado a los mismos.
            </p>
            <p className="text-justify mt-5">
              Los ganadores se elegirán entre los participantes siempre de manera totalmente aleatoria. Los premios son intransferibles y no se podrán canjear por dinero. El/la ganador/a se deberá poner en contacto a través de mensaje privado en el perfil oficial de Instagram/Facebook/Tiktok de Usuriaga Collection en un periodo máximo de 7 días desde la finalización de cada sorteo. En caso de no contactar en el plazo establecido, se considerará que el ganador renuncia al premio.
            </p>
          </section>

          <section className="mt-14">
            <h3 className="text-3xl">12. Servicio posventa y atención al cliente</h3>
            <p className="text-justify mt-5">
              Nuestro servicio de atención al cliente está a su disposición para atender cualquier posible reclamación. Puede contactarnos a través del teléfono (+34) 613 488 326 o por correo electrónico en la dirección contacto@usuriaga.com
            </p>
          </section>
        </div>
      </div>
    </Modal>
  );
}
