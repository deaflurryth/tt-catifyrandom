// запрос на все факты, fetchAllCatsFacts.ts
export const fetchAllCatsFacts = async (
  limit: number = 1000
): Promise<string[]> => {
  const response = await fetch(`https://catfact.ninja/facts?limit=${limit}`)
  if (!response.ok) {
    throw new Error('Неудача, факты о котиках не загружены (っ °Д °;)っ')
  }
  const data = await response.json()
  console.log(data)
  return data.data.map((fact: { fact: string }) => fact.fact)
}
