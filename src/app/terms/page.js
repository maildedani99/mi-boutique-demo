import CloseModalIcon from "../components/CloseModalIcon";
import Modal from "../components/Modal";

export default function Terms() {
  return (
    <Modal>
      <div className="relative">
        <CloseModalIcon />

        <div className="flex flex-col container mx-auto w-full justify-center tracking-wider  font-light		text-[#515151]">
          <h2 className="text-5xl mx-auto mt-20">Términos y Condiciones</h2>
          <h3 className="text-3xl mt-14">Privacidad</h3>
          <p className="text-justify mt-5">
            En cumplimiento de la LOPD 15/1999 y de la LSSI-CE 34/2002, se
            informa al interesado que los datos de carácter personal que
            voluntariamente facilita, incluido su correo electrónico, se
            incorporarán a un fichero automatizado propiedad y responsabilidad
            de Usuriaga Collection. Al remitir el interesado sus datos,
            expresamente autoriza la utilización de los mismos para realizar
            comunicaciones periódicas, incluyendo las que se realicen vía correo
            electrónico, que Usuriaga Collection llevará a cabo. Usuriaga
            Collection le informa de su derecho de acceso, rectificación,
            oposición y cancelación de estos datos mediante carta dirigida a
            Usuriaga Collection: C/ Pare Manyanet 33, 3º 4ª, 08030 Barcelona.{" "}
          </p>
          <h3 className="text-3xl mt-14">Nota Legal</h3>
          <p className="text-justify mt-5">
            En cumplimiento con el deber de información recogido en artículo 10
            de la Ley 34/2002, del 11 de julio, de Servicios de la Sociedad de
            la Información y de Comercio Electrónico (LSSI-CE), a través de este
            Aviso Legal se informa a los usuarios que el titular de este sitio
            Web es Lidia Medina Valiente con DNI/NIF 47908158D
            (contacto@usuriaga.com) con domicilio social en C/ Pare Manyanet 33,
            3º 4ª, 08030 Barcelona.
          </p>
          <h3 className="text-3xl mt-14">
            Compromiso de confidencialidad y protección de datos
          </h3>
          <p className="text-justify mt-5">
            A los efectos de la Ley orgánica 15/1999, de protección de datos de
            carácter personal, le informamos de que los datos recabados en
            nuestros formularios serán incluidos en un fichero automatizado de
            datos cuya única finalidad es poder servir a sus peticiones. No se
            destinarán en ningún otro caso a ninguna otra finalidad, ni se
            entregarán en ningún caso a terceras partes, de acuerdo con los
            principios de protección de datos de carácter personal de la LORTAD
            (Ley orgánica 15/1999, de 13 de diciembre).
          </p>
          <h3 className="text-3xl mt-14">
            Derecho de oposición, corrección y actualización de datos
          </h3>
          <p className="text-justify mt-5">
            “Según el art. 5 de la Ley Orgánica 15/99 de Protección de Datos de
            Carácter Personal, a la persona física titular de los datos
            requeridos en este documento se le informa de la existencia de una
            base de datos propiedad de Usuriaga Collection, de la cual formará
            parte. Por medio del envío de nuestros formularios, vd. consiente
            expresamente la comunicación de sus datos a Usuriaga Collection.
          </p>
        </div>
      </div>
    </Modal>
  );
}
