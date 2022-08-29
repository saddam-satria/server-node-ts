import path from 'path';

// Configure PORT
export const PORT: undefined | number | string = process.env.PORT || 5000;

// Configure Base URL (Server serve the URL)
export const BASE_URL = `http://localhost:${PORT}`;

// Configure Asset URL (Static Files)
export const ASSET_URL = `${BASE_URL}/assets`;

// Configure BASE PATH (root directory)
export const BASE_PATH: string = path.resolve(
  __dirname,
  '..',
  '..',
  '..',
  '..'
);

// Configure Public Path (Static Files)
export const BASE_ASSET: string = path.join(BASE_PATH, 'public');
