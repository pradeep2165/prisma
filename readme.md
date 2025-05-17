## Prisma Setup

Follow these steps to set up Prisma in your project:

### 1. Initialize Project

```bash
cd prisma
npm init -y
```

### 2. Install Prisma

```bash
npx prisma init
npm install prisma
npm install -D @prisma/client
```

### 3. Define Your Prisma Models

Edit the prisma/schema.prisma

model Post {
id String @id @default(dbgenerated()) @map("\_id") @db.ObjectId
title String
body String
}
⚠️ Make sure not to include commas at the end of lines.

### 4. Generate Prisma Client

### 5. Start Your Application

npm run dev
