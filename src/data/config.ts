import assert from 'assert';
// Note: Known issue of unable to access .env[key] dynamically. Unable to create a helper function to access .env[key] dynamically.
// https://stackoverflow.com/questions/64152943/cant-access-process-env-values-using-dynamic-keys

assert(process.env.NODE_ENV, 'Missing environment variable: NODE_ENV');
export const NODE_ENV: string = process.env.NODE_ENV;
