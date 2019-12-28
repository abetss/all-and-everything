require('dotenv').config();
// let path;

// switch (process.env.NODE_ENV) {
//   case "production":
//     path = `${__dirname}/../../.env.production`;
//     break;
//   default:
//     path = `${__dirname}/../../.env.development`;
// }

// dotenv.config({ path: path });

export const HEROKU_API_KEY = process.env.HEROKU_API_KEY;
export const HEROKU_POSTGRES_ID = process.env.HEROKU_POSTGRES_ID;
