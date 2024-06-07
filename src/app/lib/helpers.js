


export const roundToTwoDecimals = (num) => parseFloat(num.toFixed(2));
export const formatPrice = (price) => roundToTwoDecimals(price).toFixed(2).replace('.', ',');
