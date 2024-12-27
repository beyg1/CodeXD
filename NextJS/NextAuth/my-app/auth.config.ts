import type { NextAuthConfig } from "next-auth"

export const authConfig = {
    providers: [],
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard')
            if (isOnDashboard) {
                if (isLoggedIn) return true
                return false
            }
            return true
        }
    }
} satisfies NextAuthConfig