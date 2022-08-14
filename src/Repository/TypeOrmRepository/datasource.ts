import { DataSource } from 'typeorm'

import { UserFirsMigration1659993664482 } from './Migrations/1659993664482-UserFirsMigration';
import { UserEntity } from './Models/User';

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  database: " userdatabasepg",
  username: "usernamedb",
  password: "passwdconnecthere",
  synchronize: true,
  logging: false,
  entities: [UserEntity],
  subscribers: [],
  migrations: [UserFirsMigration1659993664482]
})

async function connect() {
  await AppDataSource.initialize()
    .then(() => {
      console.log("Gradlations the Database is connected")
    })
    .catch((error) => {
      console.log("Error while connect in database: ", error);
    })
}
connect()
export { AppDataSource }