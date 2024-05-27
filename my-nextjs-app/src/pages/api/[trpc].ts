import { createNextApiHandler } from '@trpc/server/adapters/next';
import { appRouter } from '@/server/routers/_app'; // Adjust the import based on your actual router location
import { createContext } from '@/server/context'; // Adjust the import based on your actual context location

export default createNextApiHandler({
  router: appRouter,
  createContext,
});
