import { Router } from "express"
import CursoController from "../controllers/controllerCurso"
import TurmaController from "../controllers/controllerTurma"
import UnidadeController from "../controllers/controllerUnidade"

const rotas = Router()

rotas.get("/", (request, response) => {
    return response.json("home page")
})

//Curso
rotas.post("/cursos", new CursoController().create)
rotas.get("/cursos", new CursoController().readAll)
rotas.get("/cursos/:id", new CursoController().readOne)
rotas.put("/cursos/:id", new CursoController().update)
rotas.delete("/cursos/:id", new CursoController().delete)

//Turma
rotas.post("/turmas", new TurmaController().create)
rotas.get("/turmas", new TurmaController().readAll)
rotas.get("/turmas/:id", new TurmaController().readOne)
rotas.put("/turmas/:id", new TurmaController().update)
rotas.delete("/turmas/:id", new TurmaController().delete)

//Unidade
rotas.post("/Unidades", new UnidadeController().create)
rotas.get("/Unidades", new UnidadeController().readAll)
rotas.get("/Unidades/:id", new UnidadeController().readOne)
rotas.put("/Unidades/:id", new UnidadeController().update)
rotas.delete("/Unidades/:id", new UnidadeController().delete)

export default rotas
