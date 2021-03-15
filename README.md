# Movie Layout
This repo is a basic landing page and can be a boilerplate for movie list. Well-structured components are supported 
with [styled-components](https://styled-components.com/). Components are powered with react hooks as well as custom hooks. 
Responsive design is adopted. 

## How to Run
```shell
yarn i
yarn install
```

## About
Movie layout has a cover image and all movies and series are displayed in a grid system. 
Blue icon appears at the top-right corner of each movie|series. This button adds/removes 
movie|series from to/from the favorites preferences.

![Movie-layout](./src/assets/layout.jpg?raw=true "Movie Layout")

## Note
Instead of a complete OOP, I used fully function based solution and FP approach.


## Infrastructure
Store has built with [@reduxjs/toolkit](https://redux-toolkit.js.org/).
Saving to and reading from localStorage is available.
Axios is used as http request handler. A [HttpClient](./src/lib/client/HttpClient.ts) has built as 
base class for network calls. Any class cen be built extending from the one.
the application structure is built with React hooks. [index](./src/index.tsx) is the entrance file wrapped with
Provider which provides the state management through React redux.

Since the game is built with React hooks, Therefore; strongly got benefits from some fascinating react hooks.
That are `useEffect`,  `useCallback`, `useMemo`

## Folder Structure
````markdown
.
├── public
└── src
    ├── assets
    │   └── images
    ├── components (global components)
    │   ├── display
    │   ├── grid
    │   ├── input
    │   ├── navbar
    │   └── svg
    ├── enums
    ├── lib
    │   └── client
    ├── presenters
    │   ├── components
    │   │   ├── header
    │   │   ├── menu
    │   │   │   ├── helpers
    │   │   │   └── hooks
    │   │   ├── search
    │   │   └── section
    │   │       └── hooks
    │   └── home
    │       ├── helpers
    │       └── styled
    ├── store
    │   └── helpers
    └── types

````
In this structure presenter based helper and component folder structure is adopted.
Every main component has its on `components`, `helpers`, `styled` next to it.
Landing page accommodates under `home` as `index.tsx`. 
 
## TODO
- Tests
- Server Side Rendering (SSR)
- Dependency inversion implementation for [HttpClient](./src/lib/client/HttpClient.ts)
