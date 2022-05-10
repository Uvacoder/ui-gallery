const blacklist = async () => {
  const response = await fetch('https://api.db-ip.com/v2/free/self')
  return await response.json().then((res) => res.ipAddress)
}

export default blacklist
