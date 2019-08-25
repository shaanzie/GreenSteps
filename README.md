# GreenSteps

A web-app to incentivise users to use public transport.

Please adhere to the set up instructions as follows:

First, to make use of the bots, one must go to the scrappers directory and run

`npm install`

Second, to do a dry run they can run `\node_modules\.bin\wdio wdio.conf.js --suite gmaps <place1+place2>`

If all tests pass, the bot is successful


To set up server, ensure the following python packages are installed:

flask, flask_cors, requests and json.

Run the flask server using 

`python3 app.py`


Test an api by using curl or the website/webapp

The apis are used to scrape information and use ecosia to contribute to the environment.

For full version : https://docs.google.com/presentation/d/1F2SIxVk5icC2MAE1l9FdXNxgzVDcA1eGEP-e2NCH2rk/edit#slide=id.g5e3cdb37d5_0_5
