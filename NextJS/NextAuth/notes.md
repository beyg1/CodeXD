# Setting Up AuthJS with Next.js

## Prerequisites
- Node.js 18.17 or later
- Next.js 14 project

## Step-by-Step Guide

### 1. Installation
```bash
pnpm add next-auth@beta
```

### 2. Setup Environment Variables
Create `.env.local`:
```env
AUTH_SECRET=your-secret-key-here
```

### 3. Create Auth Config
Create `auth.config.ts` in root:
```typescript
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
```

### 4. Setup Middleware
Create `middleware.ts` in root:
```typescript
import NextAuth from "next-auth"
import { authConfig } from "./auth.config"

export const { auth: middleware } = NextAuth(authConfig)
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
}
```

### 5. Add Auth Provider
Create `auth.ts` in root:
```typescript
import NextAuth from "next-auth"
import { authConfig } from "./auth.config"
import Credentials from "next-auth/providers/credentials"

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                // Add your authentication logic here
                return null
            }
        })
    ]
})
```

### 6. Implement in Server Components
```typescript
import { auth } from "@/auth"

export default async function Page() {
    const session = await auth()
    return <div>Hello {session?.user?.name}</div>
}
```

### 7. Implement in Client Components
```typescript
'use client'
import { signIn, signOut } from "next-auth/react"

export default function LoginButton() {
    return (
        <button onClick={() => signIn()}>Sign In</button>
    )
}
```

## Notes
- Always keep secrets in `.env.local`
- Configure providers based on your needs (Google, GitHub, etc.)
- Add proper error handling
- Implement proper authentication logic in authorize callback

[Official AuthJS Documentation](https://authjs.dev/getting-started/introduction)