import { db } from "./src/prisma/db";

async function main() {
   const created = await db.orm.public.User.createAll([
         {
           username: 'stoff',
           email: 'stoff@example.com',
           password: '123456',
         },
         {
           username: 'user',
           email: 'user@example.com',
           password: '123456',
         },
         {
           username: 'admin',
           email: 'admin@example.com',
           password: '123456',
         },
         {
           username: 'test',
           email: 'test@example.com',
           password: '123456',
         },
       ])
//   console.log("Created:", created);

  const users = await db.orm.public.User.all();
//   console.log("All users:", users);

  await db.close();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});