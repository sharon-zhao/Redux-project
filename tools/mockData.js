const courses = [
  {
    id: 1,
    title: "Xvideo",
    slug: "xvideo.html",
    authorId: 1,
    category: "Django"
  },
  {
    id: 2,
    title: "ST training",
    slug: "training.html",
    authorId: 1,
    category: "React.js"
  },
  {
    id: 3,
    title: "Envoy",
    slug: "social-media.html",
    authorId: 1,
    category: "React.js"
  },
  {
    id: 4,
    title: "Movie Library -- single page",
    slug: "movie.html",
    authorId: 1,
    category: "Single page"
  },
  {
    id: 5,
    title: "Tic-Tac-Toe",
    slug: "game.html",
    authorId: 1,
    category: "Single page"
  }

];

const authors = [
  { id: 1, name: "Sharon Zhao" },
  { id: 2, name: "Todd Wang" },
  { id: 3, name: "Dan Xie" }
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors
};
