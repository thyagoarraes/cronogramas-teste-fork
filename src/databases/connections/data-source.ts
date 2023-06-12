import { DataSource } from "typeorm"
import Curso from "../models/curso"
import Unidade from "../models/unidade"
import Turma from "../models/turma"
import Recesso from "../models/recesso"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "cronogramas",
  synchronize: true,
  logging: true,
  entities: [Curso, Unidade, Turma, Recesso]
})
