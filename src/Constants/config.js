export const LOGIN_DEPENDENCIES = {
  // change these CLIENT_ID and CLIENT_SECRET with true data,
  // and login with github will works.
  CLIENT_ID: null,
  CLIENT_SECRET: null,
  REDIRECT_URI: "http://localhost:3000/Login",
  CORS_PROXY: "http://localhost:5000/",
  GITHUB_API_URL: "https://api.github.com/",
};

export const TODO_FILTERS = {
  ALL: "All",
  COMPLETED: "Completed",
  UNCOMPLETED: "Uncompleted",
};
