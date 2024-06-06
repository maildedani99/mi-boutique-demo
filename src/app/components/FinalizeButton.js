"use client"
import { useContext, useEffect, useState } from "react";
import { getRedsysData } from "../lib/data";
import { AppContext } from "../lib/AppContext";


export default function FinalizeButton() {

    const { redsysData, setRedsysData } = useContext(AppContext);

    const dataFetchRedsys = redsysData;
  

    const onGetRedsysData = async () => {
        const data = await getRedsysData(dataFetchRedsys);
        setRedsysData(data)
        return data;
    }
    
     

    useEffect(() => {
        if (redsysData) {
             onGetRedsysData();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
      
        <form  name="form" action="https://sis-t.redsys.es:25443/sis/realizarPago" method="POST">
            <input type="hidden" name="Ds_SignatureVersion" value="HMAC_SHA256_V1" />
            <input type="hidden" name="Ds_MerchantParameters" defaultValue="" value={redsysData.jsonData}/>
            <input type="hidden" name="Ds_Signature" defaultValue="" value={redsysData.signature}/>
            <button className="flex w-3/12 p-4 text-xl text-white text-center mb-8  cursor-pointer bg-primary justify-center mx-auto" type="submit">Realizar Pago</button>
        </form>
    );
}
