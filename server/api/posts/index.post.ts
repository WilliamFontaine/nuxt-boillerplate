import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content
      }
    })

    return post
  } catch (error) {
    console.log(error)
    throw createError({
      statusCode: 500,
      message: 'Failed to create post'
    })
  }
})
