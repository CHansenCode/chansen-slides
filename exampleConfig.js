export const baseURL =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:0000/presentation'
    : 'https://remote.vps.com/presentation';
