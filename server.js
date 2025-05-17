import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const post = await prisma.post.create({
    data: {
      title: "Hello World",
      body: "This is my first post",
      author: {
        connect: {
          id: "68289f82a7324efd6121a9d9",
        },
      },
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
