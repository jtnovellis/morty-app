import { api } from './api';

export async function getLocations(page: number) {
  const res = await api.get(`/location?page=${page}`);
  return res.data;
}

export async function getLocationById(id: string) {
  const res = await api.get(`/location/${id}`);
  return res.data;
}
