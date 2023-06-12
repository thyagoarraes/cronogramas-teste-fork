import { DataSource } from "typeorm"
import Curso from "../models/curso"
import Unidade from "../models/unidade"
import Turma from "../models/turma"
import Recesso from "../models/recesso"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "dpg-ci2iosak728i8t9n7i8g-a.oregon-postgres.render.com",
  port: 5432,
  username: "dev",
  password: "s9qzDErug5tmpW7lqzM2WHFKJgprRYOS",
  database: "cronogramas",
  synchronize: true,
  logging: true,
  entities: [Curso, Unidade, Turma, Recesso]
})
