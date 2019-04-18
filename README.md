## Arkera Coding Exercise

A web page that displays a table of cities and their number of high-rise buildings. Data is provided via a CSV file whic is parsed into the application using the npm package Papa Parse. 

The webpage also display the table with rows sorted by a column specified in the url, i.e.:
- http://base-url-of-the-webpage/city ==> will display the table with rows ordered by the
city names.
- http://base-url-of-the-webpage/100+ ==> will display the table with rows ordered by the
"100+ (m)" column and so on.

### Framework Used 

The application is written in the Javascript framework, React.js.

### Running Locally

Go to this repository and click on the 'Clone or download' green button. Then copy the URL that appears (git@github.com:harrygturner/arkera-challenge.git). 

Open up terminal and move yourself into a directory you wish this file to be located in and then issue the command below into the command line:

`git clone <URL you copied (git@github.com:harrygturner/arkera-challenge.git)>`

Then using the command line enter the file you just created and ensure npm has been installed by entering:

`npm -v`

If you have install the dependecies with:

`npm install`

Start the app with:

`npm start`
