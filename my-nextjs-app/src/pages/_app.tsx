import { AppProps } from "next/app";
import { trpc } from "@/utils/trpc";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../styles/globals.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <trpc.Provider client={trpc.createClient({ url: "/api/trpc" })}>
        <Component {...pageProps} />
      </trpc.Provider>
    </QueryClientProvider>
  );
}

export default trpc.withTRPC(MyApp);
