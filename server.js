import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const author = await prisma.author.create({
    data: {
      name: "John Doe",
    },
  });
  console.log(author);
}
main();
