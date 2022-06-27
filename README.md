# Bees Brewery Hub

This project is a code challenge, provided by [Bees](https://novo.parceiroambev.com.br/). The challenge can be found [here](https://gist.github.com/lucaslacava/9608d8b957224df44cd198c08de5bf2b)

---

## How to run

First of all, you will need Docker to run this app. 

Clone this repo, and go to the root folder in a terminal instance. All you have to do is run `npm install` to install the npm packages, and after that, run `make run` command.

The project can be accessed by url http://localhost:3000

---

## Techs and definitions

The project is built using *React.js*. The components are defined using functions, and the style using [Styled Components](https://styled-components.com/). No UI frameworks were used, according to project specifications.

[Axios](https://axios-http.com/) was used for making requests, and [React Redux](https://react-redux.js.org/) for creating the global-state, used to store the user's full name. 

[ESLint](https://eslint.org/) was used to keep the code pattern, and can be run by the command `make lint`.

The **add more** tag was implemented, and there are loadings along with the API requests. If any call to API fails, a message will be shown to the user, warning about the error

---

## Folder structure
```
src
  ├── assets
      └── images
          └── store every image and icon used in the application
  ├── components
      └── store the default components shared by the application
  ├── pages
  │   ├── Home
  │   │   └── stores the files and components that build the Home page
  │   └── Login
  │       └── stores the files and components that build the Login page
  ├── redux
  │   └── store the files about redux, like the slices, actions and reducers
  └── services
      └── store the third-party services, like outside APIs
```