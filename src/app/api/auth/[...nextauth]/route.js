import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider  from 'next-auth/providers/credentials'
import connectDB from '../../../../../backend/config/db.config'
import userModel from '../../../../../backend/models/allUsers'
import {compare} from "bcrypt"

export const authOptions = { 
  providers: [
    GoogleProvider({
      clientId:process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        connectDB().catch((err)=>{error: "Database Connection Failed"})
        const user = await userModel.findOne({email: credentials.email, role: credentials.role});
        if(!user){
          throw new Error("No User find with this email. Please Sign Up")
        }
        const checkPassword = await compare(credentials.password, user.password);
         if(!checkPassword){
          throw new Error("Password does not match")
         }

         console.log(user)
         return Promise.resolve(user);

        }
    })
  ],
  callbacks: {
   async redirect({ url, baseUrl }) {
      if(url) return url;
      return baseUrl
    },
  },
  secret: 'my secret',
  session: {
    strategy: 'jwt',
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
