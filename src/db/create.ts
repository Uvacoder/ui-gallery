import { prisma } from '.'

const create = async (name: string, tries: number) => {
  return await prisma.user.create({
    data: { name: name, tries: tries },
  })
}

export default create
