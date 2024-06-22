import { ReactNode } from "react";

interface Iprops {
  htmlFor: string;
  children: ReactNode;
}

const Label = ({ htmlFor, children }: Iprops) => {
  return (
    <label
      className="block text-white dark:text-zinc-800 text-sm font-bold mb-2"
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};

export default Label;
