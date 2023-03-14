export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  image: null | string;
  role: "user" | "admin";
}