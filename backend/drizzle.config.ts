import type { Config } from 'drizzle-kit';
import 'dotenv/config';

export default {
    schema: './src/config/schema.ts',
    driver: 'mysql2',
    out: './drizzle',
    dbCredentials: {
        host: 'srv1000.hstgr.io',
        port: 3306,
        user: 'datavers',
        database: 'u581162093_oeuvars',
        password: '/V09vx/S8m',
    },
} satisfies Config;
