"use client"

import { useState } from 'react';

const useCurrencyFormatter = () => {
  const [formatoMoneda] = useState(
    new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
    })
  );

  const formatCurrency = (monto) => formatCurrency.format(monto);

  return formatCurrency;
};

export default useCurrencyFormatter;
