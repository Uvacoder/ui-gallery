import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const main = async () => {
  const names = [
    'Harsh Singh',
    'John Doe',
    'Dan Abramov',
    'Bill Gates',
    'Shakuntala Devi',
  ].map(
    async (name) =>
      await prisma.user.create({
        data: { name: name, tries: Math.round(Math.random() * 20 + 10) },
      })
  )

  console.log(`🌱 Created ${names.length} records `)
}

main()
  .catch((err) => {
    console.error(err)
  })
  .finally(async () => {
    await prisma.$disconnect
  })
