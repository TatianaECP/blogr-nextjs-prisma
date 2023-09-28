import { put } from '@vercel/blob';
import type { NextApiResponse, NextApiRequest } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const filename = Array.isArray(request.query.filename)
    ? request.query.filename[0] // 配列の場合、最初の要素を選択
    : request.query.filename;    // 文字列の場合、そのまま使用


  const blob = await put(filename, request.body, {
    access: 'public',
  });

  return response.status(200).json(blob);
}