import { initTRPC } from "@trpc/server";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const t = initTRPC.create();

export const appRouter = t.router({
  getPokemon: t.procedure.input(z.string()).query(async ({ input }) => {
    return prisma.pokemon.findFirst({
      where: { name: input },
    });
  }),
  getPokemonArray: t.procedure
    .input(z.array(z.string()))
    .query(async ({ input }) => {
      return prisma.pokemon.findMany({
        where: {
          name: {
            in: input,
          },
        },
      });
    }),
  getPokemonByType: t.procedure
    .input(z.string().optional())
    .query(async ({ input }) => {
      if (!input) {
        return [];
      }
      return prisma.pokemon.findMany({
        where: {
          types: {
            contains: input, // Use contains to check if types array contains the input value
          },
        },
      });
    }),
});

export type AppRouter = typeof appRouter;
