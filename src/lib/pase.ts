// src/lib/pase.ts
//
// Lo que la tarjeta del pase necesita calcular a partir del nombre y los
// pases. Vive acá porque lo usan LOS DOS lados: el render del servidor
// (frontmatter de Pase.astro) y el script que repinta cuando llegan los
// datos del invitado. Si estuviera duplicado, el nombre saltaría de tamaño
// al cargar y la frase se desincronizaría del número.

/**
 * Cuerpo de letra del nombre del invitado.
 *
 * La idea es que un nombre corriente —"Familia Flores"— entre en UNA línea,
 * y que solo baje de renglón cuando de verdad no queda otra. No se achica
 * hasta lo ilegible: pasado cierto largo, se prefiere el salto de línea.
 *
 * Los tramos están calibrados para el ancho útil de la tarjeta (300px menos
 * el padding, con el nombre estirado a los costados con -mx-3).
 */
export function tamanoNombre(nombre: string): string {
  const largo = nombre.trim().length;
  if (largo <= 14) return "2.6rem";
  if (largo <= 20) return "2.3rem";
  if (largo <= 30) return "2rem";
  if (largo <= 42) return "1.75rem";
  return "1.55rem";
}

/** La frase de abajo de la tarjeta. Una sola vez, para que no se pierda el número. */
export function frasePases(pases: number): string {
  return pases === 1
    ? "Esperamos contar con tu presencia"
    : "Esperamos contar con su presencia";
}
