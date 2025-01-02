                                                      Setting Up AuthJS with Next.js


### 1. Installation
pnpm add next-auth@beta 
1. 'pnpm dlx shadcn@latest add form'   for shadcn form which uses zod by default for form schema
2. "pnpm dlx shadcn@latest add select" for select
3. "pnpm dlx shadcn@latest add input" for input   

### 2. setup F.E in page.tsx of login route

### 3. Setup Environment Variables
Create `.env.local`:
```env
AUTH_SECRET=your-secret-key-here
            by giving command pnpm dlx auth secret


### 4. Setup Middleware
Create `middleware.ts` in root:
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
remove sessionProvider from layout as it's a client-side session provider
dont have to make header a client component
make header a async function
import auth from @auth
then await auth() in session variable
since user is null it will give error at {session?... so you need to do {session.user to overcome this

### 9. Validating credentials
goto auth.ts add logic in validate credentials for server side and return user instead of hard coded user

### 10. create actions folder in app and add file authActions.ts to it, in it we will create function for signin and signout 
but i have done it in main page.tsx file of login. at the end of login form related part. now use it in onSubmit function
created actions folder for signOut functionality as it needed to be exported and imported by header component. (use client)

### 11. Protect routes by adding callback section in auth.ts
write logic  to protect routes based on session details. for example if user is logged in, he shouldnt have access to signIN page
IT'S NOT WORKING because there's a auth.config.ts file which is conflicting with auth.ts for middlewear and specially for 
callbacks so delete it and bring it all to auth.ts. It still didnt worked as auth.ts was in root directory but i was using src in
nextjs so had to move middleware into src directory and everything worked.
whatever routes you wana protect by writing logic in auth.ts, you have to mention in the matcher in the middleware.ts

### 12. SignIn with socials using oAuth
we will use github in this app. goto github acct goto settings => developer settings => oAuthapps =>
for homepage url : http://localhost:3000
for callback url : http://localhost:3000/api/auth/callback/github
get client id and generate secret over there.
then goto .env.local and add them there
AUTH_GITHUB_ID="example"
AUTH_GITHUB_SECRET="example"

### Setup a button for github login in login page.tsx file
<span className="text-md font-bold text-black text-center block my-2">
                        OR
                    </span>
                    <form className="w-full" action={handleGithubSignin}>
                        <Button
                            variant="outline"
                            className="w-full hover:bg-gray-950 hover:text-white"
                            type="submit"
                        >                            
                            Sign in with GitHub
                        </Button>
                     </form> 
with that make handleGihubSignin function in authActions.ts to handle the sign in                     