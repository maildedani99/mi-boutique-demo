import React from 'react';
import { getRedsysData } from '../lib/data';

const RedsysForm = async ({ redsysData }) => {
    const data = await getRedsysData(redsysData);

    return (
        data && (
            <form name="form" action="https://sis-t.redsys.es:25443/sis/realizarPago" method="POST">
                <input type="hidden" name="Ds_SignatureVersion" value="HMAC_SHA256_V1" />
                <input type="hidden" name="Ds_MerchantParameters" value={data?.jsonData} />
                <input type="hidden" name="Ds_Signature" value={data?.signature} />
                <button
                    className="flex w-3/12 p-4 text-xl text-white text-center mb-8 cursor-pointer bg-primary justify-center mx-auto"
                    type="submit"
                >
                    Realizar Pago
                </button>
            </form>
        )
    );
};

export default RedsysForm;
