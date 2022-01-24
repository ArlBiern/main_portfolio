const slides = [
  {
    id: 1,
    title: "CookBook - app created as a part of the CodersCamp project",
    desc: "App helps choose meal, cocktail or dessert recipes. It also provides a 'culinary curiosity' feature. App provides the ability to choose ingredients (with hints) and present a few randomly chosen recipes received from the external APIs.",
    img1: `${process.env.PUBLIC_URL}/images/projects/cookbook_1.jpg`,
    img2: `${process.env.PUBLIC_URL}/images/projects/cookbook_2.jpg`,
    img3: `${process.env.PUBLIC_URL}/images/projects/cookbook_3.jpg`,
    technologies: [
      "HTMLIcon",
      "CSS3Icon",
      "JSIcon",
      "BabelIcon",
      "WebpackIcon",
      "GithubIcon",
    ],
    webLink: "https://freefrogs.github.io/CookBook/",
    githubLink: "https://github.com/arlbiern/CookBook",
  },
  {
    id: 2,
    title: "Gallery generator plugin",
    desc: "Plugin transform HTML structure (based on div element and its children elements) into gallery. You can chouse between slider (Slider), accordion (Accordion), tab gallery (TabGallery) and 3D gallery (Gallery3D). Backgrounds of the gallery are placed in script file as an array. You can apply background randomly or in sequence.",
    img1: `${process.env.PUBLIC_URL}/images/projects/galleryGen_1.jpg`,
    img2: `${process.env.PUBLIC_URL}/images/projects/galleryGen_2.jpg`,
    img3: `${process.env.PUBLIC_URL}/images/projects/galleryGen_3.jpg`,
    technologies: ["HTMLIcon", "CSS3Icon", "JSIcon"],
    webLink: "https://arlbiern.github.io/gallery_generator/",
    githubLink: "https://github.com/arlbiern/gallery_generator",
  },
  {
    id: 3,
    title: "Book store app",
    desc: "This app was created as a part of the CodersCamp project. App is connected to database and you are able to add, edit, delete books as editor (authorization) and add comment and rating after registration and login (authentication).",
    img1: `${process.env.PUBLIC_URL}/images/projects/bookStore_1.jpg`,
    img2: `${process.env.PUBLIC_URL}/images/projects/bookStore_2.jpg`,
    img3: `${process.env.PUBLIC_URL}/images/projects/bookStore_3.jpg`,
    technologies: [
      "PugIcon",
      "CSS3Icon",
      "BootstrapIcon",
      "JSIcon",
      "NodeJSIcon",
      "MongoDBIcon",
      "GithubIcon",
    ],
    webLink: "https://bookstore-seven.herokuapp.com/",
    githubLink: "https://github.com/arlbiern/BookStore",
  },
  {
    id: 4,
    title: "Online shop app",
    desc: "Sample React and Redux app based on MERN stack. In this app you are able to register, login and add products to the cart after authorization. App contains all main features of typicall e-commerce web-site.",
    img1: `${process.env.PUBLIC_URL}/images/projects/TTshop_1.jpg`,
    img2: `${process.env.PUBLIC_URL}/images/projects/TTshop_2.jpg`,
    img3: `${process.env.PUBLIC_URL}/images/projects/TTshop_3.jpg`,
    technologies: [
      "CSS3Icon",
      "ReactIcon",
      "ReduxIcon",
      "NodeJSIcon",
      "MongoDBIcon",
      "GithubIcon",
    ],
    webLink: "https://thinktree-e-shop.herokuapp.com/",
    githubLink: "https://github.com/arlbiern/OnlineShop",
  },
  {
    id: 5,
    title: "Trusiaczek Fruits Rush Game",
    desc: "Game dedicated for laptop or PC (keyboard is needed) and is based on canvas and vanilla JavaScript. All game elements coordinates are stored in JSON. Game aim - just try to collect all fruits as fast as you can ;). Use arrows to move Trusiaczek (left, right, up).",
    img1: `${process.env.PUBLIC_URL}/images/projects/rushGame_1.jpg`,
    img2: `${process.env.PUBLIC_URL}/images/projects/rushGame_2.jpg`,
    img3: `${process.env.PUBLIC_URL}/images/projects/rushGame_3.jpg`,
    technologies: ["HTMLIcon", "CSS3Icon", "JSIcon"],
    webLink: "https://arlbiern.github.io/Trusiaczek-rush-game/",
    githubLink: "https://github.com/ArlBiern/Trusiaczek-rush-game",
  },
  {
    id: 6,
    title: "Landing page",
    desc: "This is a simple landing page project based on ready to use template. I have implemented some modyfications like hamburger, carousel and hover effects.",
    img1: `${process.env.PUBLIC_URL}/images/projects/portfolio1_1.jpg`,
    img2: `${process.env.PUBLIC_URL}/images/projects/portfolio1_2.jpg`,
    img3: `${process.env.PUBLIC_URL}/images/projects/portfolio1_3.jpg`,
    technologies: ["HTMLIcon", "SassIcon", "JSIcon"],
    webLink: "https://arlbiern.github.io/portfolio-2/",
    githubLink: "https://github.com/arlbiern/portfolio-2",
  },
  {
    id: 7,
    title: "Sample resume as a landing page",
    desc: "This is my  personale resume. It was made as a task for CodersCamp bootcamp (2019/2020). The aim of this task was to create resume without any usage of JavaScript.",
    img1: `${process.env.PUBLIC_URL}/images/projects/portfolio2_1.jpg`,
    img2: `${process.env.PUBLIC_URL}/images/projects/portfolio2_2.jpg`,
    img3: `${process.env.PUBLIC_URL}/images/projects/portfolio2_3.jpg`,
    technologies: ["HTMLIcon", "CSS3Icon"],
    webLink: "https://arlbiern.github.io/HTML-resume-template/",
    githubLink: "https://github.com/arlbiern/HTML-resume-template",
  },
  {
    id: 8,
    title: "Simple landing page",
    desc: "One of my first projects. Main aim was to get familiar with Sass and its possibilities as well to write npm scripts that automate dev and build process.",
    img1: `${process.env.PUBLIC_URL}/images/projects/portfolio4_1.jpg`,
    img2: `${process.env.PUBLIC_URL}/images/projects/portfolio4_2.jpg`,
    img3: `${process.env.PUBLIC_URL}/images/projects/portfolio4_3.jpg`,
    technologies: ["HTMLIcon", "SassIcon", "BootstrapIcon", "JSIcon"],
    webLink: "https://arlbiern.github.io/portfolio-1/",
    githubLink: "https://github.com/arlbiern/portfolio-1",
  },
];

export default slides;
