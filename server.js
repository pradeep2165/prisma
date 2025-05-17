import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const post = await prisma.post.findMany({
    include: {
      author: true,
    },
  });
  console.log(post);

  //   const author = await prisma.author.create({
  //     data: {
  //       name: "John Doe",
  //     },
  //   });
  //   console.log(author);
}

main();
