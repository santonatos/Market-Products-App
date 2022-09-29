# Market-Products-App

A simple super market products viewer. To use:

Environment setup:

1) download all the files in the same local folder or clone the repo, at directory <project root>
2) assumes node.js and npm are installed. More info: https://nodejs.org/en/download/ . The "node" command has been added to your path.
Check by running 'node -v' from your <project root> of your terminal if you are on mac os.

3) assumes mongodb is installed and mongodb service has started. More info on: https://www.mongodb.com/docs/manual/administration/install-community/
Check by making a succesfull connection to mongo, e.g. by running 'mongo' from your <project root> of your terminal if you are on mac.

Start app (mac os):

1) run 'npm install' in the project root directory <project root> to install all required node packages
2) run 'node seed.js' from your <project root>  terminal to populate the database with a few products and type "Control ^C" to exit.
3) run 'node index.js' to start server, and navigate to the printed port from 'localhost:<port>/products' in any browser window,
e.g. in "http://localhost:3030/products" 

Use app:

1) to show the products navigate to '/products' from the URL. We call this the 'show' page
2) to view a product, click on its link from the 'show' page. From there you can edit it or delete it pressing the corresponding buttons.
3) to add a product, click on "New Product" and enter the name, price and other fields and click 'Submit' on the right.

TODO List:

- add more buttons for routing in pages of the application
- add better product display, with pictures and styling
- add styling in general.

