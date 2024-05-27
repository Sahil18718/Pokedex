import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const pokemon = [
    {
      name: "Bulbasaur",
      types: "grass",
      sprite: "https://pokemon.com/pictures/bulbasaur.png",
    },
    {
      name: "Charmander",
      types: "fire",
      sprite: "https://pokemon.com/pictures/charmander.png",
    },
    // Add more Pokémon data here
  ];

  for (const p of pokemon) {
    await prisma.pokemon.create({
      data: p,
    });
  }
}

main()
  .then(() => {
    console.log("Database seeded");
  })
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
