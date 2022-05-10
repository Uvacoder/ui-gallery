import { prisma } from '.'

const fetch = async (sort: 'asc' | 'desc') => {
  return await prisma.user.findMany({
    orderBy: { tries: sort },
  })
}

export default fetch
