const data = [
  {
    id: 1,
    image: require("./works-img/work-1.png"),
    title: "Tenzies Game",
    description: "React, React Hooks, localStorage",
    github: "https://github.com/rootfellen/tenzies",
    live: "https://rootfellen.github.io/tenzies/",
    imageBig: require("./works-img/works-1-big.png"),
    idea: "Simple dice game for kids, where person sohuld get all the same dices in a short period of time with a smalless amount of rolls",
    features: "Reusable components, React Hooks, working with localStorage",
  },
  {
    id: 2,
    image: require("./works-img/work-2.png"),
    title: "React Admin Dashboard",
    description: "React, Material UI, React Context, Recharts, RRD, Reducer",
    github: "https://github.com/rootfellen/react-admin-panel",
    live: "https://rootfellen.github.io/react-admin-panel/",
    imageBig: require("./works-img/works-2-big.jpg"),
    idea: "Simple Admin Panel Template, made with React. Implemented design using SCSS and Material UI Icons, Tables from Material UI, Progress Bar from React-Circular-ProgressBar, Charts from Recharts",
    features:
      "Dark Mode (handled by React Context Hook, triggered with dispatch + reducers, Upload avatar, Can filter tables, Flexible data, can be fetched from API / Database in future, Reusable components, New features to be added soon..",
  },
  {
    id: 3,
    image: require("./works-img/work-3.png"),
    title: "Easy Route App",
    description: "React, React Hooks, TomTom API",
    github: "https://github.com/rootfellen/easy-route-app",
    live: "https://rootfellen.github.io/easy-route-app/",
    imageBig: require("./works-img/works-3-big.jpg"),
    idea: "This app is calculating the shortest distance through all location markers on the map by using Tom Tom SDK Matrix Routing.",
    features:
      "displayed closed roads displayed traffic on the roads displayed accidents on the roads using current location with ability to add yours as per your coordinates. The final route is calculated using the “Routing API” which by default will do a “car”  route.",
  },
  {
    id: 4,
    image: require("./works-img/work-4.png"),
    title: "Safe Banking React Website",
    description: "React, SCSS, Styled Components, React-Scroll",
    github: "https://github.com/rootfellen/safe-banking-website",
    live: "https://rootfellen.github.io/safe-banking-website/",
    imageBig: require("./works-img/works-4-big.png"),
    idea: "React based fully responsive website for virtual banking platform. Created with React Components, Styled-Components, React-Scroll, React Hooks.",
    features:
      "I've practiced using react-scroll as it was a new feature for me to make a scroll actions smoooth, and styled-components as well.",
  },
];

export default data;
