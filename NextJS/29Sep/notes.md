                         Api Development
we will use simple-books api
in postman there's an base url then there are endpoints
=> route handlers in nextJs
have to make api folder in app folder in nextjs project
in api folder make status folder and then make a file route.ts
to master url search params : google  mdn web docs *
each method like GET,POST,PUT will have their specific functions exported from 
specific api routes. you can check their syntax in route.ts files
   (url search params to get user data from login or register just to practice it's functionality)
2:45:00 from utube video of sir for urlsearchparams.


                          forms
react-hook-form.com for studying forms
shadcn works with react hook forms
or use formik
will use shadcn for forms
shadcn uses zod.dev (zod schema)
you create schema so there's a protocol to validate in terms of requirements for forms. in our case is email an email?
and is password atleast 6 chracters?
to validate schema shadcn uses react hook form
 in api calling u use try/catch
 in our codebase for 29Sep we onlydid schema/form validation for frontend. i.e where users put the data. we didn't do it for back-end i.e where devs might send put requests from POstman.(api validation) How ever Sir did it in their video. 
 https://www.youtube.com/watch?v=tKkL6vp9tZI&t=2407s