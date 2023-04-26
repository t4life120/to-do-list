# Simple ToDo List Application

In this GitHub Repository the target was to build a simple ToDo List web-based application that enables user to simply keep track of their open ToDos.

The mini-project was built in the [Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp) from [Dr. Angela Yu](https://github.com/angelabauer).

The `styles.css` was provided as a course resource. Node.js and Express.js were used as the backend solution in combination with the javascript template engine `ejs`.


## Run Locally

If you want to run the app locally or want to take the idea of this repository further by adding a i.e. database, you have to follow a few steps:

```bash
git clone https://github.com/wrecker-of-code/to-do-list.git
cd to-do-list
```

After this you have to install the required npm packages for this project. Those can be found in the `package.json` file and easily be installed by running

```bash
npm install
```

You can then run the server by typing the following command into your terminal:

```bash
node app.js
```

Using Node.js however does not automatically reload the server if changes are made. By using the npm package `nodemon` this problem can be solved:

```bash
npm install nodemon -g
```

The `-g` configuration installs the package globally which is time saving because you don't have to install the package every time you initalize a project with `npm`.

***
## Configurations
After setting up the project, you can modify the application to your needs. Change the color theme to give it a different look or setup a database by using **MongoDB** or any other database software, to save the ToDos permanently. Right now, the ToDos submitted are saved in an array and therefore get lost as soon as the server is rerun!

In one of the next GitHub Repositories, I will add a database solution, to have some degree of data persistence in my applications.

***
## Contact Me
I am relatively new to coding, so if you are interested in learning to code together, I would be happy hearing from you. We can also collabarate on any idea and start something great together!
