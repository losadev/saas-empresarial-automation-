import NexAuth from "next-auth";
import googleProvider from "next-auth/providers/google";

// ?CON ESTE HANDLER YA VOY A PODER MANEJAR LAS PETICIONES HTTP
const handler = NexAuth({
  // los providers son los servicios de internet con el cual quiero autenticar (google, github, etc)
  providers: [
    googleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
});

export { handler as GET, handler as POST };
