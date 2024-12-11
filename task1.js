export function costCalculator(montoTransaccion) {
  if (typeof montoTransaccion !== "number" || montoTransaccion <= 0) {
    console.log("La cantidad de la transacción debe ser un número positivo.");
  }

  const monto = parseFloat(montoTransaccion);
  const tarifa = 3;
  const interes = 0.01;
  const total = monto + tarifa + monto * interes;
  return parseFloat(total.toFixed(2));
}
