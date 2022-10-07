const isProductionEnvironment = process.env.NODE_ENV === 'production';

export const HOST_BASE_URL = !isProductionEnvironment ? 'http://localhost:3000' : 'https://tiktok-creator-studio.vercel.app';