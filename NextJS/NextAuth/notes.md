# Setting Up AuthJS with Next.js


### 1. Installation
pnpm add next-auth@beta 
1. 'pnpm dlx shadcn@latest add form'   for shadcn form which uses zod by default for form schema
2. "pnpm dlx shadcn@latest add select" for select
3. "pnpm dlx shadcn@latest add input" for input   

### 1.5 setup F.E in page.tsx of login route

### 2. Setup Environment Variables
Create `.env.local`:
```env
AUTH_SECRET=your-secret-key-here
            by giving command pnpm dlx auth secret
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
Create `auth.ts` in src directory:
```typescript
import NextAuth from "next-auth"



export const { handlers, auth } = NextAuth({

  // Add your authentication providers and configuration here

  providers: [logic implemented in file],

```
### 6. create api/auth/[...nextauth]/route.ts file app
``` 
import { handlers } from "@/auth"

export const {GET, POST} = handlers
```


### 7. Implement in Server Components
```typescript
import { auth } from "@/auth"

export default async function Page() {
    const session = await auth()
    return <div>Hello {session?.user?.name}</div>
}
```

### 8. Implement in Client Components
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