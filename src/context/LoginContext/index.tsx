import { useState, createContext } from "react";

type Form = {
  email: string;
  password: string;
};

type LoginTypes = {
  loginData: Form;
  handleLoginData: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  handleError: () => void;
  // user: boolean;
};
const initialState: LoginTypes = {
  loginData: { email: "", password: "" },
  handleLoginData: () => {},
  error: true,
  handleError: () => {},
  // user: false,
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
  // const [user, setUser] = useState<boolean>(false);

  const handleError = () => {
    if (loginData.email.length) {
      if (
        loginData.email === "adedeji@gmail.com" &&
        loginData.password.length > 5
      ) {
        setError(false);
        localStorage.setItem("user", "true");
      } else setError(true);
    } else setError(true);
  };
  const handleLoginData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      [name]: value,
    }));
  };

  return (
    <LoginContext.Provider
      value={{ loginData, handleLoginData, error, handleError }}
    >
      {children}
    </LoginContext.Provider>
  );
};
