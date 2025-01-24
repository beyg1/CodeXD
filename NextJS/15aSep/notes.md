building api with next. Sir Awais
build structure of app for api
make api folder in app to store all the apis 
make specific api routes by creating folders and route.ts file. remember to export the async functions
use NextResponse to make the data responsive towards GET api calls
use NextRequest to make data responsive towards POST api calls, pass it in params
GET,POST,PATCH,DELETE all functions have to me made with capital letters

Now since GET & POST are covered. we should render a data from api route to front-end
we use fetch function to call upon the api link to fetch data, render it in useEffect. 
jsonify it then call useState. then in a table we pass on "users" data
Now add functionality to add data into database if POST api is called, in this case db is
a state of the rendering component for now. Only .push method is needed to push data into json format db.
Using postman the POST api pushes the data successfully and main page upon refreshing shows users.
Now let's make a Ui to add users from frontend
useState & useEffect for renderign. NextRequest & NextResponse for GET & POST api operations
useForm from react hook forms for easier data handling through form