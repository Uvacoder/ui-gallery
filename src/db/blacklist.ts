import { prisma } from '.'

export const blacklist = async (ip: string) => {
  return await prisma.blacklist.create({ data: { ip: ip } })
}

export const getBlacklist = async (ip: string) => {
  return await prisma.blacklist.findUnique({ where: { ip: ip } })
}
