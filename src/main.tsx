import { createRoot } from "react-dom/client";
import { Mainpage } from "./pages/MainPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <Mainpage />
  </QueryClientProvider>
);
