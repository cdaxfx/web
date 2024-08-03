
import { TSMigrationGenerator } from '@mikro-orm/migrations';
import { defineConfig } from "@mikro-orm/sqlite";
import {
    BENEFICIARIES_REGISTERED_ENTITIES,
    BankMetadata,
    Broker,
    BusinessMetadata,
    DOCUMENTS_MANAGER_REGISTERED_ENTITIES,
    Director,
    FEES_REGISTERED_ENTITIES,
    IndividualMetadata,
    RiskAssessment,
    Shareholder,
    USER_REGISTERED_ENTITIES,
    USER_CLIENTS_REGISTERED_ENTITIES,
    TRANSACTION_REGISTERED_ENTITIES
} from '@luxbank/models';

import * as dotenv from 'dotenv';

dotenv.config({ path: './.env.dev' });

export default defineConfig({
    forceUtcTimezone: true,
    migrations: {
        snapshot: true,
        glob: '!(*.d).{js,ts}',
        path: 'dist/scripts/sqlite',
        pathTs: 'src/scripts/sqlite',
        emit: 'ts',
        generator: TSMigrationGenerator
    },
    entities: [
        ...USER_REGISTERED_ENTITIES,
        ...BENEFICIARIES_REGISTERED_ENTITIES,
        ...DOCUMENTS_MANAGER_REGISTERED_ENTITIES,
        ...FEES_REGISTERED_ENTITIES,
        ...USER_CLIENTS_REGISTERED_ENTITIES,
        ...TRANSACTION_REGISTERED_ENTITIES,
        BankMetadata,
        IndividualMetadata,
        BusinessMetadata,
        Broker,
        RiskAssessment,
        Director,
        Shareholder
    ],
    clientUrl: process.env.DATABASE_URL,
    driverOptions: {
        connection: {
            // ssl: {
            //   ca: fs.readFileSync('./rds-us-east-1-bundle.pem'),
            // },
        }
    }
});