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
            // const role = auth?.user.role || 'user';
            if (pathname.startsWith('/auth/login') && isLoggedIn) {
                return Response.redirect(new URL('/', nextUrl));
            }
            if (!isLoggedIn && pathname.startsWith('/dashboard')) {
                return Response.redirect(new URL('/auth/login', nextUrl));
            }
            return true;
        },
        // jwt({ token, user, trigger, session }) {
        //     if (user) {
        //         token.id = user.id as string;               this is to console log the user id/role by accessing jwt token & session
        //         token.role = user.role as string;
        //     }
        //     if (trigger === "update" && session) {
        //         token = { ...token, ...session };
        //     }
        //     return token;
        // },
        // session({ session, token }) {
        //     session.user.id = token.id;
        //     session.user.role = token.role;
        //     return session;
        // }
    },
    pages: {
        signIn: "/auth/signin"
    }
})
