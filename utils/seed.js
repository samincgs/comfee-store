const { PrismaClient } = require('@prisma/client');
const products = require('../prisma/products.json');

const prisma = new PrismaClient();

const main = async () => {
  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }
};

main()
  .then(async () => {
    console.log('Data seeded.');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
