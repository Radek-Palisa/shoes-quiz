import { createContext, ReactNode, useContext, useState } from 'react';

export enum Routes {
  Home = '/',
  Quiz = '/quiz',
}

const RouterContext = createContext<
  [Routes, React.Dispatch<React.SetStateAction<Routes>>]
>([Routes.Home, () => {}]);

type Props = {
  children: ReactNode;
};

export function useRouter() {
  return useContext(RouterContext);
}

export default function Router({ children }: Props) {
  const state = useState<Routes>(Routes.Home);

  return (
    <RouterContext.Provider value={state}>{children}</RouterContext.Provider>
  );
}
