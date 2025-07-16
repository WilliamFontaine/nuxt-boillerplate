import prisma from '@@/lib/prisma'

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)

  await prisma.post.delete({
    where: { id: Number(id) }
  })

  return {
    statusCode: 200
  }
})
