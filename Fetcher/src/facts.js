const CAT_ENDPOINT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  const response = await fetch(CAT_ENDPOINT)
  const data = await response.json()
  return data.fact
}