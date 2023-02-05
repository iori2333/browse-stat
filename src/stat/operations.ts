import { db } from '@/store';

export async function updateLink(url: string) {
  const host = new URL(url).host;
  const result = await db.links.get({ url });
  if (result != undefined) {
    return result.id as number;
  }
  return await db.links.put({ url, host });
}
