import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Blog from "../Components/Blog/Blog";
import Login from "../Components/User/Login/Login";
import Profile from "../Components/User/Profile/Profile";
import EditProfile from "../Components/User/Profile/EditProfile/EditProfile";
import TodoList from "../Components/TodoList/TodoList";
import SlotMachine from "../Components/SlotMachine/SlotMachine";

export const routes = [
  {
    path: "/",
    title: "Home",
    exact: true,
    privatePage: false,
    publicPage: true,
    component: <Home />,
  },
  {
    path: "/About",
    title: "About",
    exact: true,
    privatePage: false,
    publicPage: true,
    component: <About />,
  },
  {
    path: "/Blog",
    title: "Blog",
    exact: true,
    privatePage: false,
    publicPage: true,
    component: <Blog />,
  },

  {
    path: "/Login",
    title: "Login",
    exact: true,
    privatePage: false,
    publicPage: true,
    component: <Login />,
  },
  {
    path: "/Profile",
    title: "Profile",
    exact: true,
    privatePage: true,
    publicPage: false,
    component: <Profile />,
  },
  {
    path: "/Profile/edit",
    title: "Eidt",
    exact: true,
    privatePage: true,
    publicPage: false,
    component: <EditProfile />,
  },
  {
    path: "/TodoList",
    title: "TodoList",
    exact: true,
    privatePage: true,
    publicPage: false,
    component: <TodoList />,
  },
  {
    path: "/SlotMachine",
    title: "SlotMachine",
    exact: true,
    privatePage: true,
    publicPage: false,
    component: <SlotMachine />,
  },
];
