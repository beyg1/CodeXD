import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { formSchema } from "@/lib/schemas";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: { label: "Password", type: "password", placeholder: "Password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Validate credentials
        const parsedCredentials = formSchema.safeParse(credentials);
        if (!parsedCredentials.success) {
          console.error("Credentials not valid", parsedCredentials.error.errors);
          return null;
        }

        // For testing - replace with actual DB lookup
        const user = {
          id: "1",
          name: "John Doe",
          email: String(credentials.email),
          password: String(credentials.password),
        };

        // Here you would normally verify password against hashed DB password
        if (credentials.email === "1@1.com" && credentials.password === "123456") {
          return user;
        }

        return null;  
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
});
