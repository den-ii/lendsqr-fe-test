import { useState, createContext } from "react";

type Form = {
  email: string;
  password: string;
};

type LoginTypes = {
  loginData: Form;
  handleLoginData: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
};
const initialState: LoginTypes = {
  loginData: { email: "", password: "" },
  handleLoginData: () => {},
  error: true,
  setError: () => {},
};
const error: boolean = initialState.error as boolean;
type LoginContextProviderProps = {
  children: React.ReactNode;
};

export const LoginContext = createContext<LoginTypes>(initialState);

export const LoginContextProvider = ({
  children,
}: LoginContextProviderProps) => {
  const [loginData, setLoginData] = useState<Form>({ email: "", password: "" });
  const [error, setError] = useState<boolean>(false);
  const handleLoginData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      [name]: value,
    }));
  };

  return (
    <LoginContext.Provider
      value={{ loginData, handleLoginData, error, setError }}
    >
      {children}
    </LoginContext.Provider>
  );
};
