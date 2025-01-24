ssr api testing today
for server side rendering we using async programming
"fetch()" is used in nextjs to get api
api key (a token) is added to headers object 
next js by default uses cache for ssr and static render. (not anymore in next 15)
you have to hard refresh cache

made blog with api integration using fetch
1. made a simple homepage. 
2. made navbar a component because we had to show it to all routes and dynamic routes.
3. for that we included navbar component in root layout, just above children
4. made blogs route for blogs homepage
5. made blogview component. which is basically a card to show blog title & body
6. in blogs home page made getblogpost function and used fetch function to fetch json data 
   for blogs for jsonplaceholder site.
7. convert the data to json and mapped it to store into blogData. it took props whose properties
   were same of json data of fetch response.
8. initialised useState and gave the initial state same type as of blogData. then used setState 
   in getblogpost function right under blogData.
9. Now had to mount getBlogPosts, so used useEffect with dependancy array empty
10. Remember now because of state the data is in "blog" which is state variable
11. then returned the markup with mapping with Link because we want to be able to click on 
    blog and see it. the key we used for mapping is 'id' and in that link we called the blogview 
    component and used the parameter types of blog in it, because later in creating blogview we 
    have to give it same parmeters
12. created blogview component and to pass parameter to it we created a interface. only used those 
    key-value pairs in the component parameters which we wanted to render. but had to use all in 
    interface because in blog home page blogview component required all params.
13. now created dynamic route for blogs, nested in blog folder.
14. in that dynamic route we pass down params to react component for dynamic routing.
15. again we make a function in which we use fetch to get blog data from
    json placeholder site but this time that function in int's ahref takes a dynamic value, a prop
    passed down to the component blog.id. so the data matches when again data is fetched from web.
16. that whole blog is stored in 'blog' a state variable because useState is used.
17. to use useState and call the state variable dynamicaly in the returning markup we define an interface 
    for the blog data fetched.
18. use useEffect to render it and voila. Bingo!                  