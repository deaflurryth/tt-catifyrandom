export const fetchCatFact = async (): Promise<string> => {
  const response = await fetch('https://catfact.ninja/fact')
  if (!response.ok) {
    throw new Error('Неудача, факт о котиках не загружен (っ °Д °;)っ')
  }
  const data = await response.json()
  return data.fact
}
