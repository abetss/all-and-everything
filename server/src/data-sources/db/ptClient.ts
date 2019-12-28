import pg, { PoolConfig } from 'pg';
import axios from 'axios';
import { parse } from 'pg-connection-string';
import { HEROKU_API_KEY, HEROKU_POSTGRES_ID } from 'src/core/constants';

// Pool will be reused for each invocation of the backing container.
let pgPool;

const setupPgPool = async () => {
  const herokuApi = axios.create({
    baseURL: 'https://api.heroku.com/',
    headers: {
      Authorization: `Bearer ${HEROKU_API_KEY}`,
      Accept: 'application/vnd.heroku+json; version=3'
    }
  });

  const herokuRes = await herokuApi.get(`addons/${HEROKU_POSTGRES_ID}/config`);
  const pgConnStr = herokuRes.data[0].value;
  const parsedPgConnStr = parse(pgConnStr);

  // Use connection string from Heroku API response as a base. Overwrite "max"
  // and "ssl".
  const pgConfig: PoolConfig = {
    ...parsedPgConnStr,
    port: Number(parsedPgConnStr.port),
    max: 1,
    ssl: true
  };

  pgPool = new pg.Pool(pgConfig);
};

export const helloPT = async () => {
  if (!pgPool) {
    // "Cold start". Get Heroku Postgres creds and create connection pool.
    await setupPgPool();
  }
  // Else, backing container "warm". Use existing connection pool.

  try {
    const result = await pgPool.query('SELECT now()');

    // Response body must be JSON.
    return {
      statusCode: 200,
      body: JSON.stringify({
        output: {
          currTimePg: result.rows[0].now
        }
      })
    };
  } catch (e) {
    // Return error message in response body for easy debugging.
    // INSECURE - CHANGE FOR PROD
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: e.message
      })
    };
  }
};
