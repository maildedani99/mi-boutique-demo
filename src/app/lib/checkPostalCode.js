const nonPeninsulaPostalCodes = [
    { start: 70000, end: 79999 },   // Islas Baleares
    { start: 35000, end: 35999 }, // Las Palmas
    { start: 38000, end: 38999 }, // Santa Cruz de Tenerife
    { start: 51000, end: 51999 }, // Ceuta
    { start: 52000, end: 52999 }  // Melilla
  ];
  
  export const checkPostalCode = (postalCode) => {
    const postal = parseInt(postalCode, 10);
  
    const isNonPeninsula = nonPeninsulaPostalCodes.some(range => {
      return postal >= range.start && postal <= range.end;
    });
  
    return !isNonPeninsula;
  };
  