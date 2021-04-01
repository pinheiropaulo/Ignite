import { Header } from "./componentes/Header";
import { Dashboard } from "./componentes/Dashboard";

import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Dashboard />
    </>
  );
}
