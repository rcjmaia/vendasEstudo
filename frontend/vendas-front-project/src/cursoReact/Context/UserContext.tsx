import { createContext } from "react";

type User = {
    nome: string;
    idade: number;
  };
  
const UserContext = createContext<User | null>(null)

export default UserContext