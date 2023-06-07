import { Router } from "express"
import CursoController from "../controllers/controllerCurso"
import UnidadeController from "../controllers/controllerUnidade"
import TurmaController from "../controllers/controllerTurma"

const rotas = Router()

//rota principal
rotas.get("/", (request, response) => {
    return response.json("Home Page")
})

rotas.post("/cursos", new CursoController().create)
rotas.get("/cursos", new CursoController().readAll)
rotas.get("/cursos:id", new CursoController().readAll)
rotas.put("/cursos:id", new CursoController().update)
rotas.delete("/cursos:id", new CursoController().delete)

rotas.post("/unidade", new UnidadeController().create)
rotas.get("/unidade", new UnidadeController().readAll)
rotas.get("/unidade:id", new UnidadeController().readAll)
rotas.put("/unidade:id", new UnidadeController().update)
rotas.delete("/unidade:id", new UnidadeController().delete)

rotas.post("/turma", new TurmaController().create)
rotas.get("/turma", new TurmaController().readAll)
rotas.get("/turma:id", new TurmaController().readAll)
rotas.put("/turma:id", new TurmaController().update)
rotas.delete("/turma:id", new TurmaController().delete)

export default rotas