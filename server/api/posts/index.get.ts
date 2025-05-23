import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
  const posts = await prisma.post.findMany()

  return {
    statusCode: 200,
    data: posts
  }
})
