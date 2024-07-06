"use client";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../lib/AppContext";
import { getRedsysData } from "../lib/data";

export default function FinalizeButton() {
    const { redsysData, setRedsysData } = useContext(AppContext);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    const fetchRedsysData = async (dataFetchRedsys) => {
        try {
            const result = await getRedsysData(dataFetchRedsys);
            return result;
        } catch (error) {
            console.error('Error al obtener datos de Redsys:', error);
            throw error;
        }
    };

    useEffect(() => {
        if (redsysData) {
            fetchRedsysData(redsysData)
                .then((data) => {
                    setData(data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error(error);
                    setLoading(false);
                });
        }
    }, [redsysData]);

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        data && (
            <form name="form" action={process.env.NEXT_PUBLIC_REDSYS_URL} method="POST">
                <input type="hidden" name="Ds_SignatureVersion" value="HMAC_SHA256_V1" />
                <input type="hidden" name="Ds_MerchantParameters" value={data.jsonData} />
                <input type="hidden" name="Ds_Signature" value={data.signature} />
                <button
                    className="flex w-3/12 p-4 text-xl text-white text-center mb-8 cursor-pointer bg-primary justify-center mx-auto"
                    type="submit"
                >
                    Realizar Pago
                </button>
            </form>
        )
    );
}
