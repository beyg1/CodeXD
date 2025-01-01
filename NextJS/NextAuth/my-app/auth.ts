import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import { formSchema } from "@/lib/zod";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Github,
        Credentials({
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Email" },
                password: { label: "Password", type: "password", placeholder: "Password" },
            },
            async authorize(credentials) {
                let user = null;

                // validate credentials
                const parsedCredentials = formSchema.safeParse(credentials);
                if (!parsedCredentials.success) {
                    console.error("Invalid credentials:", parsedCredentials.error.errors);
                    return null;
                }
                // get user

                user = {
                    id: '1',
                    name: 'John Doe',
                    email: '1@1.com',
                    role: "admin"
                }

                if (!user) {
                    console.log("Invalid credentials");
                    return null;
                }

                return user;
            }
        })
    ],
    callbacks: {
        authorized({ request: { nextUrl }, auth }) {
            const isLoggedIn = !!auth?.user;
            const { pathname } = nextUrl;
            if (pathname.startsWith('/auth') && isLoggedIn) {
                return Response.redirect(new URL('/', nextUrl));
            }
            if (!isLoggedIn && !pathname.startsWith('/dashboard')) {
                return Response.redirect(new URL('/auth/signin', nextUrl));
            }
            return isLoggedIn;
        },    
    },
    pages: {
        signIn: "/auth/signin"
    }
})
