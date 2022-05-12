import create from '../../db/create'

export const post = async ({ params, request }) => {
  const body = await request.json()

  try {
    const user = await create(body.name, body.tries)
    return new Response(JSON.stringify({ data: user }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: err }), {
      headers: { 'Content-Type': 'application/json' },
      status: 400,
    })
  }
}
