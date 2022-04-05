import UserProvider from "./Contexts/UserProvider";
import Routes from "./Components/Route/Route";

export default function App() {
  return (
    <div className="w-screen">
      <UserProvider>
        <Routes />
      </UserProvider>
    </div>
  );
}
