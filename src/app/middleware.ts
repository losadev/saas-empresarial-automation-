export { default } from "next-auth/middleware";

// ! AQUI LE PUEDES IR PONIENDO LAS RUTAS QUE QUIERES PROTEGER SI NO ESTÁ LOGUEADO
export const config = { matcher: ["./dashboard.(*)"] };
