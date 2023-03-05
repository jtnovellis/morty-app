import { api } from './api';

export async function getCharacters() {
  const res = await api.get('/character');
  return res.data;
}

export async function getCharacterById(id: string) {
  const res = await api.get(`/character/${id}`);
  return res.data;
}
