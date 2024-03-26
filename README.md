This is a nextjs project integrated with gemini api and using oAuth with google provider for authentication. LocalStorage has been used to store the data. No serverside code and database has been used  for this project.


## Setup in local environment
First clone the project in local environment.
Then install all the required packages with npm install.
 Then create a .env.local file in root folder and set up the following value pair with your own values:
 
    GOOGLE_CLIENT_ID='Google client id from oAuth from google console.'
    GOOGLE_CLIENT_SECRET='Google client secret from oAuth from google console.'
    
    NEXTAUTH_URL=http://localhost:3000/
    NEXTAUTH_SECRET='some secret key'
    
    NEXT_PUBLIC_API_KEY='Gemini Api Key'

## Run the application
  After the above setup, run the command:
  npm run dev

  It should run perfectly.
