import { useEffect, useState } from "react";
import UserProfile from "./components/UserProfile";

interface User {
  email: string;
  cell: string;
  name: { first: string; last: string };
  location: { country: string; city: string };
  picture: {
    large: string;
  };
  dob: {
    age: number;
  };
}

function App() {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://randomuser.me/api/");
        const users = await res.json();
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
