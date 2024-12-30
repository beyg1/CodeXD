import type { NextAuthConfig } from "next-auth"

export const authConfig = {    // Export the auth config
    providers: [],
    callbacks: { 
        authorized({ auth, request: { nextUrl } }) { // Check if user is authorized
            const isLoggedIn = !!auth?.user             // Check if user is logged in
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard') // Check if user is on dashboard
            if (isOnDashboard) { 
                if (isLoggedIn) return true 
                return false
            }
            return true
        }
    }
} satisfies NextAuthConfig // Make sure this satisfies NextAuthConfig