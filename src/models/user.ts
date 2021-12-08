export interface User {
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
