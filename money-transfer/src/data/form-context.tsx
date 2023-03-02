import React, { createContext, useState } from "react";

interface IFormState {
  title: string;
  value: string;
  subTitle: string;
}
interface IFormContext {
  formValues: IFormState[];
  setFormValues: React.Dispatch<React.SetStateAction<IFormState[]>>;
}

interface IFormContextProviderProps {
  children: React.ReactNode;
}

export const FormContext = createContext<IFormContext>({
  formValues: [],
  setFormValues: () => {},
});

export const FormContextProvider: React.FC<IFormContextProviderProps> = ({
  children,
}) => {
  const [formValues, setFormValues] = useState<IFormState[]>([]);

  return (
    <FormContext.Provider value={{ formValues, setFormValues }}>
      {children}
    </FormContext.Provider>
  );
};
