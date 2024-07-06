"use client";

import { useContext, useEffect } from "react";
import { useRouter } from 'next/navigation';
import ShoppingList from "../../components/ShoppingList";
import { AppContext } from "../../lib/AppContext";
import FinalizeButton from "../../components/FinalizeButton";

export default function PaySummary() {
    const router = useRouter();
    const { formData, cartItems, setOrderItems } = useContext(AppContext);

    const itemsOrderCreate = (cartItems) => {
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

    useEffect(() => {
        if (!cartItems || cartItems.length === 0) {
            router.push('/');
        } 
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cartItems, router]);

    return (
        formData && (
            <div className="flex flex-col container mx-auto mt-32 py-10 px-4 lg:px-0 w-full tracking-wider font-light">
                <h2 className="text-2xl font-bold mb-4">Resumen de la Compra</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
                    <div className="lg:col-span-1 mb-6">
                        <h3 className="text-xl font-semibold">Datos del Cliente</h3>
                        <div className="text-lg">
                            <p>{formData.first_name} {formData.last_name}</p>
                            <p>{formData.address}, {formData.city}</p>
                            <p>{formData.province}, {formData.postal_code}</p>
                            <p>Teléfono: {formData.phone}</p>
                            <p>Email: {formData.email}</p>
                            {formData.dni && <p>DNI: {formData.dni}</p>}
                        </div>
                    </div>

                    <div className="lg:col-span-2 mb-6">
                        <h3 className="text-xl font-semibold">Detalles del Pedido</h3>
                        <ShoppingList />
                    </div>
                </div>
                <FinalizeButton />
            </div>
        )
    );
}
