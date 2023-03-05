export async function getCharacters() {
  const res = await fetch(`${import.meta.env.VITE_BASE_API_URL}/character`);
  const data = await res.json();
  return data;
}
