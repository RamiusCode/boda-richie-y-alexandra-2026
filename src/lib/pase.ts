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
 * El nombre NO se fuerza a una sola línea: un "Familia Rodríguez Fernández"
 * baja de renglón, que se lee mucho mejor que achicarlo hasta lo ilegible.
 * Estos tramos solo evitan que un nombre muy largo se coma la tarjeta.
 */
export function tamanoNombre(nombre: string): string {
  const largo = nombre.trim().length;
  if (largo <= 16) return "3rem";
  if (largo <= 28) return "2.5rem";
  if (largo <= 42) return "2.1rem";
  return "1.8rem";
}

/** La frase de abajo de la tarjeta. Una sola vez, para que no se pierda el número. */
export function frasePases(pases: number): string {
  if (pases === 1) return "Esperamos contar con tu presencia";
  if (pases === 2) return "Esperamos contar con la presencia de ambos";
  return `Esperamos contar con la presencia de los ${pases}`;
}
