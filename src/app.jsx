import "./global.css";

import { useScrollToTop } from "./hooks/use-scroll-to-top";

import Router from "./routes/section";
import ThemeProvider from "./theme";

export default function App() {
  useScrollToTop();

  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
