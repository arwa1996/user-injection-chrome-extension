import { useEffect, useState } from "react";
import UserProfile from "./components/UserProfile";
import { User } from "./models/user";
import { UsersData } from "./models/usersData";
import { getUser } from "./services/restful-service";

function App() {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const users: UsersData = await getUser();
        setUser(users.results[0]);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(true);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      {error ? (
        <h3>There was an error fetching API</h3>
      ) : (
        [loading ? <h1>...Loading</h1> : <UserProfile user={user} />]
      )}
    </>
  );
}

export default App;
