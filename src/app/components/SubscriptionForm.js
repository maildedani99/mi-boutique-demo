"use client"

import { useState } from "react"
import { createEmail } from "../lib/data"

export default function SubscriptionForm () {

    const hadleClickSubcribe  = async () => {
        const resCreateEamil = await createEmail(data);
    }

    const [data, setData] = useState({})

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
          });
    }

    return (
        <>
        <h3 className="my-auto text-center">¡Suscríbete y consigue acceso a descuentos y promociones!</h3>
            <div className="mx-auto">

              <div className="text-lg mt-8 ">
                <input  onChange={(e)=>handleInputChange(e)} type="email" name="email" className="p-2 rounded-md text-text" placeholder="Introduce tu email...  " />
                <button onClick={hadleClickSubcribe} className="border  rounded-md ml-2 p-2 ">Suscribirme</button>
              </div>
              <div className=" flex text-sm mt-2">
                <input className="h-4 w-4 my-auto" type="checkbox" />
                <span className="my-auto ml-2"> He leído y acepto la política de privacidad.</span>
              </div>
            </div>
        </>
    )
}