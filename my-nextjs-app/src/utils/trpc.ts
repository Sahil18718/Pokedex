import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../app/trpc"; // Adjust the import based on your actual router location

export const trpc = createTRPCReact<AppRouter>();
