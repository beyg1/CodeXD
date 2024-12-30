                                                      Setting Up AuthJS with Next.js


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
})


### 6. create api/auth/[...nextauth]/route.ts file app
``` 
import { handlers } from "@/auth"

export const {GET, POST} = handlers
```

### 7. Playing with Session in client side
make header a client component.
import useSession in it and then use useSession() and store it in a variable
then import sessionProvider in layout to wrap all of the html layout in <SessionProvider>

### 8. Playing with session in server component
dont have to make header a client component
make header a async function
import auth from @auth
then await auth() in session variable
since user is null it will give error at {session?... so you need to do {session.user to overcome this

### 9. Validating credentials
goto auth.ts add logic in validate credentials for server side and return user instead of hard coded user
