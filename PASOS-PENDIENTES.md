# Pasos pendientes — Richie y Alexandra

La invitación ya quedó conectada al panel de invitados (nombre y pases).
Falta lo que se hace desde el navegador. Todo esto lo hace una persona,
no la computadora.

---

## PASO 1 — Subir los cambios a internet

Los archivos están en la computadora, todavía no en la web.
Subilos como siempre (GitHub Desktop, o pedirle a Claude que lo haga).

## PASO 2 — Cargar las dos claves en Vercel

En vercel.com, en el proyecto de ESTA boda:
Settings -> Environment Variables

Primera clave:
  Key:   PUBLIC_SUPABASE_URL
  Value: https://wfyfiimpcvxnbzngubmb.supabase.co
  Tipo:  Config   (NO Secret)

Segunda clave:
  Key:   PUBLIC_SUPABASE_KEY
  Value: sb_publishable_LxIxjpM_I80eCg0rimoenw_rH-his92
  Tipo:  Config   (NO Secret)

⚠️ Los NOMBRES se escriben a mano, no se pegan: al pegar se cuelan
   caracteres invisibles y Vercel los rechaza. Los valores sí se pegan.

## PASO 3 — Volver a publicar

Vercel no se actualiza solo al cargar claves.
Deployments -> los ⋯ del primero -> Redeploy
DESTILDAR la casilla "Use existing Build Cache" -> Redeploy

Sin esto, la invitación sale sin conexión y sin avisar por qué.

## PASO 4 — Dar de alta la boda en el panel

En sistema-panel-omega.vercel.app/admin -> + Nueva boda

  Nombre:   Richie y Alexandra
  Fecha:    24 de octubre de 2026
  Funciones: marcar "pases".
             Dejar "confirmación" SIN marcar
             (acá los invitados confirman por WhatsApp)
  Dirección del sitio: la dirección de Vercel de ESTA invitación

⚠️ Si la Dirección del sitio queda vacía, los links salen apuntando al
   panel y no le abren a nadie.

Después: Nuevo cliente -> correo y contraseña para los novios.

## PASO 5 — Probar que anda

1. Cargar un invitado de prueba con 3 pases
2. "Solo link" -> abrirlo en otra pestaña -> se ve su nombre y sus 3 pases
3. Editarle los pases a 5 -> volver a la pestaña de la invitación ->
   cambia SIN recargar (hasta 10 segundos)
4. Borrar el invitado -> recargar su link -> "Invitación no disponible"
5. Abrir la invitación SIN el ?i= al final -> se ve normal, pase genérico
6. Borrar los invitados de prueba antes de entregar

---

## Qué se tocó en el proyecto (por si hay que revisar)

Archivos nuevos:
  .env                              las dos claves (git lo ignora)
  src/lib/supabase.ts               copiado del sistema
  src/lib/invitado.ts               copiado del sistema
  src/lib/pase.ts                   tamaño del nombre + frase de los pases
  src/components/LinkNoDisponible.astro

Archivos modificados:
  src/components/Pase.astro         4 id + el script que trae los datos
  src/pages/index.astro             se montó <LinkNoDisponible />
  package.json                      se agregó @supabase/supabase-js

El diseño no se tocó: ni colores, ni tamaños, ni animaciones.

En Supabase NO hay nada que hacer. Todas las bodas comparten la misma base.
