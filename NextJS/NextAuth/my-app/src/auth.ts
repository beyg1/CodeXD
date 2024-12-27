
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"


export const { handlers, auth, signIn, signOut } = NextAuth({

  // Add your authentication providers and configuration here

  providers: [Credentials({
    credentials: {},
    async authorize(credentials) {
      // Add logic here to look up the user from the credentials supplied
       let user = null;
       user = { id: '1', name: 'John Doe', email: '1@11.com'       //hard coded user, not getting from db
    }                                                              //goto http://localhost:3000/api/auth/signin to check if user is authenticated
    if (user) {
      console.log('User found')
      return user
                                                  
    } else {
      console.log('User not found')
      return null
    }
  }
  })],

})
