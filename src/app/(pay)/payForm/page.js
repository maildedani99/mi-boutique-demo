"use client"
import { useContext, useEffect, useState } from "react";
import InputForm from "../../components/InputText";
import ShoppingList from "../../components/ShoppingList";
import Link from "next/link";
import { AppContext } from "../../lib/AppContext";
import { completeOrderProcess } from "../../lib/data";
import { useRouter } from "next/navigation";
import InputSelect from "../../components/InputSelect";
import { provinces } from "../../lib/postalCodes";

export default function PayForm() { 

  const router = useRouter()

  const { formData, setFormData, orderItems, order, cartItems, setRedsysData, setOrderItems } = useContext(AppContext);

  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [requestedInvoice, setRequestedInvoice] = useState(false);
  const [validated, setValidated] = useState(false);

  const countries = [{id:1, value:"España"}, {id:2, value:"Portugal"}]

  const itemsOrderCreate = () => {
    let items = [];
    cartItems.forEach(item => {
        let newItem = {
            "product_id": item.id,
            "size_id": item.size.id,
            "color_id": item.color.id,
            "quantity": item.quantity,
            "price": item.price
        };
        items.push(newItem);
    });
    setOrderItems(items);
}

  const handleInputChange = (event) => {
    const { name, value, id, key } = event.target;
    console.log(event, event.target)
    if (name=="province") {
    }
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData)
  };

  const handleCheckboxRequestedInvoice = () => {
    setRequestedInvoice(!requestedInvoice)
  }

  const handleCheckboxAceptedTerms = () => {
    setAcceptedTerms(!acceptedTerms)
  }

  const excludedPostalCodes = [
    // Códigos postales de las Islas Canarias
    '35', '38',
    // Códigos postales de las Islas Baleares
    '07', '17', '07',
    // Códigos postales de Ceuta
    '51',
    // Códigos postales de Melilla
    '52'
  ];

  const isPeninsulaPostalCode = (postalCode) => {
    // Verificar si el código postal tiene exactamente 5 dígitos
    if (postalCode.length !== 5 || isNaN(postalCode)) {
      return false;
    }

    // Verificar si el código postal no está en la lista de excluidos
    for (let excludedCode of excludedPostalCodes) {
      if (postalCode.startsWith(excludedCode)) {
        return false;
      }
    }
    // Si el código postal cumple con los criterios anteriores, se considera de la península
    return true;
  };

  const allRequiredFieldsCompleted = () => {
    const alwaysRequired = ['first_name', 'last_name', 'address', 'province', 'city', 'postal_code', 'phone', 'email'];
    for (let field of alwaysRequired) {
      if (!formData[field]) {
        return false;
      }
    }
    if (requestedInvoice && !formData['dni']) {
      return false;
    }
    if (!acceptedTerms) {
      return false;
    }
    return true;
  };

  const handleLinkClick = (e) => {
    setValidated(true);
    if (!allRequiredFieldsCompleted()) {
      e.preventDefault();
    } else {
      handleConfirm();
    }
  };

  const handleConfirm = async () => {
    console.log(orderItems)
    console.log(order)
    const resPayment = await completeOrderProcess(formData, orderItems, order);
    console.log(resPayment)
    resPayment && setRedsysData(resPayment.order)
    router.push('paySummary')
  }

  useEffect(() => {
    if (!cartItems || cartItems.length === 0) {
      router.push('/')
    } else {
      itemsOrderCreate()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="  flex flex-col container mx-auto mt-20 lg:mt-32 py-10 px-4 lg:px-0 justify-center w-full tracking-wider  font-light	 text-center">
      <h2 className="mx-auto  text-4xl lg:text-5xl">Formulario de compra</h2>
      <div className="flex flex-col lg:flex-row w-full grid-col-2 mx-auto">
        <div className="flex w-full lg:w-3/6 flex-col flex-1 mt-28 lg:mb-10">
          <div className="flex flex-col md:flex-row  ">
            <InputForm inputPlaceholder="Nombre *" inputType="text" handleInputChange={handleInputChange} name="first_name" validated={validated} formData={formData} required={true} />
            <div className="w-8 h-4"></div>
            <InputForm inputPlaceholder="Apellidos *" inputType="text" handleInputChange={handleInputChange} name="last_name" validated={validated} formData={formData} required={true} />

          </div>

          <div className="flex flex-col md:flex-row  mt-6">
            <InputSelect options={countries} inputPlaceholder="Pais *" inputType="text" handleInputChange={handleInputChange} name="province" validated={validated} formData={formData} required={true} />
            <div className="w-8 h-4"></div>
            <InputForm inputPlaceholder="Código postal *" inputType="text" handleInputChange={handleInputChange} name="postal_code" validated={validated} formData={formData} required={true} />
          </div>
          <div className="flex flex-col md:flex-row  mt-6">
          <InputSelect options={provinces} inputPlaceholder="Provincia *" inputType="text" handleInputChange={handleInputChange} name="province" validated={validated} formData={formData} required={true} />
            <div className="w-8 h-4"></div>
            <InputForm inputPlaceholder="Población *" inputType="text" handleInputChange={handleInputChange} name="city" validated={validated} formData={formData} required={true} />
          </div>
          <div className="flex  mt-6">
            <InputForm inputPlaceholder="Dirección *" inputType="text" handleInputChange={handleInputChange} name="address" validated={validated} formData={formData} required={true} />
          </div>
          <div className="flex mt-6">
            <InputForm
              inputPlaceholder="Correo electrónico *" inputType="email" handleInputChange={handleInputChange} name="email" validated={validated} formData={formData} required={true} />
          </div>
          <div className="flex flex-col md:flex-row  mt-6">
            <InputForm
              inputPlaceholder={requestedInvoice ? 'DNI *' : 'DNI'} handleInputChange={handleInputChange} name="dni" inputType="text" validated={validated} formData={formData} required={requestedInvoice} />
            <div className="w-8 h-4"></div>
            <InputForm inputPlaceholder="Teléfono *" inputType="tel" handleInputChange={handleInputChange} name="phone" validated={validated} formData={formData} required={true} />
          </div>
          <div className="flex mt-6">
            <input type="checkbox" name="terms" onChange={handleCheckboxAceptedTerms} id="" className="my-auto h-5 w-5 text-secondary focus:ring-primary  focus:outline-primary accent-primary rounded  " />
            <label className="my-auto ml-4"> He leído y estoy de acuerdo con los <Link href="/terms" className="text-primary underline font-medium" > términos y condiciones</Link> de la web. *{validated && !acceptedTerms && <span className='ml-4 text-md	 text-red-600 '><br></br>  Debes aceptar los términos y condiciones.</span>}</label>
          </div>
          <div className="flex mt-6">
            <input type="checkbox" name="terms" onChange={handleCheckboxRequestedInvoice} id="" className="my-auto h-5 w-5 text-secondary focus:ring-primary  focus:outline-primary accent-primary rounded  " />
            <label className="my-auto ml-4">Quiero recibir factura por correo electrónico.</label>
          </div>
        </div>
        <div className="flex flex-1 w-full lg:mt-28 mt-16">
          <ShoppingList />
        </div>

      </div>
      <div /* href={"/paySummary"} */ >
        <a
          onClick={handleLinkClick}
          className="flex w-1/3 mx-auto p-4 text-xl text-white text-center mb-8 cursor-pointer bg-primary"
        >
          <span className="mx-auto font-semibold">
            Finalizar compra
          </span>
        </a>
      </div>
      {/* <RedsysPaymentForm /> */}
    </div>
  );
}
