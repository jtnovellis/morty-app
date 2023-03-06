import { api } from './api';

export async function getEpisodes(page: number) {
  const res = await api.get(`/episode?page=${page}`);
  return res.data;
}

export async function getEpisodeById(id: string) {
  const res = await api.get(`/episode/${id}`);
  return res.data;
}
