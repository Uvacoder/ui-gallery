import { blacklist as createBlacklist, getBlacklist } from '../../db/blacklist'
import create from '../../db/create'
import getIp from '../../requests/getIp'

export const post = async ({ params, request }) => {
  const body = await request.json()

  try {
    const ip = await getIp()
    const isBlacklisted = await getBlacklist(ip)

    if (isBlacklisted)
      return new Response(
        JSON.stringify({ error: 'Cannot create multiple entries' }),
        {
          headers: { 'Content-Type': 'application/json' },
          status: 200,
        }
      )

    const user = await create(body.name, body.tries)
    const blacklist = await createBlacklist(ip)
    return new Response(JSON.stringify({ data: user, blacklist: blacklist }), {
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
