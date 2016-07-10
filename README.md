# SendIt
Node.js application which allows you to send emails through nodemailer module.

#How to run it
```Latest versions of Node.js and npm required!```
First you will need to clone the repository somewhere on your computer. This can be done the following way:
```
git clone https://github.com/hptks/SendIt.git
cd SendIt
```

After this you need to install all the npm packages needed, in order for the project to run correctly. Enter the following line in your terminal:
```
npm install
```

When all packages are installed navigate to the ```app``` folder ```cd app```. In this folder run the index.js file using ```node```: ```node index.js```.

Now when the server is up and running let's see how does it work.

#How does it work
Open your browser and navigate to the following address: ```http://localhost:8888/```. You will then see the form pictured below:

![form](https://cloud.githubusercontent.com/assets/10895161/16715538/da6d9a78-46da-11e6-9913-d5ee57e5daef.png)

After you fill out all the fields and click Send, an email will be sent to the recepient. One thing to bear in mind is that, because the application uses gmail's smtp address, messages could be sent from a gmail account only.
