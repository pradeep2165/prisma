import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const post = await prisma.post.create({
    data: {
      title: "Hello World",
      body: "This is my first post",
    },
  });
  console.log(post);
}
main();
