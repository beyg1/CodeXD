non relational dbs store data in an object
relational dbs relations between records/data : 1 to 1, 1 to many, many to many (they are in tables)
study left join, right join, inner , outer and full join.

*sql is taught in w3schools
Major sql querrys: SELECT UPDATE DELETE INSERT 9syntax o w3schools
SELECT querry: sir ran it in vercel on dbs deployed in last lec

orm: object relational mapping (way to align programming code with database structures) *prisma, typeorm, drizzle
create an account on supabase
goto drizzle website and start project by pnpm in "api-routing" project
goto supabase settings => database copy db link to .env file
step 4 from drizzle copy and goto schema in src/db
step6 will give error about url not found in .env so in drizzle.config you can tell it that your env is now .env.local

after that link register page of api-routing with all this

     7/12/24                                make the project connect with SUPABASE
                                            make the project connect with DRIZZLE 

1. "pnpm add react-hook-form zod @hookform/resolvers" for react hook form and zod OR "pnpm dlx shadcn@latest add form" to handle with shadcn 
    as later we will use shadcn for form and other components
2. "pnpm dlx shadcn@latest add select" for select
3. "pnpm dlx shadcn@latest add input" for input                    (Both of these are for form related components) 
4. Create F.E in main page.tsx file and add the form to it
5. Define the form validation schema using Zod
6. Initialize form with React Hook Form and Zod validation in Home Function
7. Create a submit handler for the form before return
9. This will await the data from the form and send it to the server
10. For that create a route handler in api folder. i.e Api routes
11. Create a login route handler in api folder
12. Create a register route handler in api folder
13. Create a status route handler in api folder
14. Create a hello route handler in api folder
15. Goto drizzle.com and click supabase to follow step by step instructions
16. after step1 and basic node package installation go to supabase. create a db and go to settings and copy db link to .env file 
17. goto drizzle and go for step 3 with option 2. dont take them in async function, just export db directly
18. step 4 create schema.ts in db folder. it's a schema for drizzle. you can use default one or you can create a custom one with ai
19. step 5 create drizzle.config.ts and copy the code from drizzle
20. step 6 either drizzle kit push (pnpm drizzle-kit@latest push) then drizzle kit generate(pnpm drizzle-kit@latest generate) then migrate 
21. insert the fetch call into db which in our case is supa base. i have done it in api routing route.ts for register route. line 15 & 16
 
 

