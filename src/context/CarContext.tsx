import { PropsWithChildren, createContext, useContext } from "react";
import useFetch from "../hooks/useFetch";
import { ICar } from "../types/car";

type CarContextProps = {
  data: ICar[] | null;
  error: string | null;
  loading: boolean;
};

const CarContext = createContext<CarContextProps | null>({
  data: [],
  error: "",
  loading: true,
});

export const useCar = () => {
  const context = useContext(CarContext);
  if (!context)
    throw new Error("useCar needs to be used within a CarContextProvider");
  return context;
};

export const CarContextProvider = ({ children }: PropsWithChildren) => {
  const { data, error, loading } = useFetch<ICar[]>("/api/cars");

  return (
    <CarContext.Provider
      value={{
        data,
        error,
        loading,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
