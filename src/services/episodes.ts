import { api } from './api';

export async function getEpisodes(page: number) {
  const res = await api.get(`/episode?page=${page}`);
  return res.data;
}
