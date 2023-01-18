import { useContext, useEffect, useState, createContext } from "react";

type UsersTypes = {
  organization: string;
  setOrganization: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
};
const initialState: UsersTypes = {
  organization: "",
  setOrganization: () => {},
  name: "",
  setName: () => {},
  date: "",
  setDate: () => {},
  email: "",
  setEmail: () => {},
  phone: "",
  setPhone: () => {},
  status: "",
  setStatus: () => {},
};

type UsersContextProviderProps = {
  children: React.ReactNode;
};
export const FilteringContext = createContext<UsersTypes>(initialState);

export const FilteringContextProvider = ({
  children,
}: UsersContextProviderProps) => {
  const [organization, setOrganization] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<any | string>("");
  return (
    <FilteringContext.Provider
      value={{
        organization,
        setOrganization,
        name,
        setName,
        date,
        setDate,
        email,
        setEmail,
        phone,
        setPhone,
        status,
        setStatus,
      }}
    >
      {children}
    </FilteringContext.Provider>
  );
};
