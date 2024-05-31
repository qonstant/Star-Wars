# Star Wars

This application was created using React JS, [SWAPI](https://swapi.dev/).

### Run

1. Clone the repository:
   ```sh
   git clone https://github.com/qonstant/Star-Wars.git
2. Install dependencies:
   ```sh
   npm install
3. Run the project:
   ```sh
   npm start
4. If there are some issues, it can be solved with:
   ```sh
   npm install --legacy-peer-deps   
4. Project will be up and running at:
   ```sh
   http://localhost:3000   

### Introduction:

Welcome to the ultimate Star Wars fan web app! Explore the galaxy far, far away with our comprehensive app powered by the Star Wars API ([SWAPI](https://swapi.dev/)). Dive into detailed information about your favorite characters, planets, starships, and films. Whether you're a seasoned Jedi Master or a young Padawan, there's something here for every Star Wars enthusiast.

### First page

The home page lists planets by default. A navigation bar is available in the middle of the page and can be used for navigation. Pagination was added by fetching data from the corresponding page of the [SWAPI](https://swapi.dev/) like this:

```javascript
    const fetchPeople = async (page) => {
        const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
        return res.json();
    };
```

The home page:

<img width="1470" alt="1" src="https://github.com/qonstant/Star-Wars/assets/98641240/d7d8afdf-9ccc-4341-af22-179231090144">

Navigation bar:

<img width="1470" alt="2" src="https://github.com/qonstant/Star-Wars/assets/98641240/ede05bf8-ed8f-4e9b-a760-d5fdb9379b2f">


### Landing page with "**Star Wars**" effect

This "Star Wars" effect was created using CSS transformations such as rotateX, rotateY, and scaling. To start this effect, you need to click on the Star Wars logo.

<img width="1048" alt="3" src="https://github.com/qonstant/Star-Wars/assets/98641240/8fa4a7a5-787e-4b2b-9764-6ced7fa2a9ec">

### Getting posters for films

I have implemented a feature to fetch posters from The Movie Database (TMDb) and display them next to the data about each movie. Some films may not be found in this database; in such cases, a poster of a movie with a similar name will be displayed.

<img width="1470" alt="4" src="https://github.com/qonstant/Star-Wars/assets/98641240/e2d44af3-abfe-48be-9d68-25a1cb9fb4c6">

### Hosting

This project is deployed on Vercel. Here is the [link](https://zhuldyz-wars.vercel.app/)