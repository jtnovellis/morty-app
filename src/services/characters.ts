import { api } from './api';

export async function getCharacters(page: number) {
  const res = await api.get(`/character?page=${page}`);
  return res.data;
}

export async function getCharacterById(id: string) {
  const res = await api.get(`/character/${id}`);
  return res.data;
}
