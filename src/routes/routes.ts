import { Router } from "express";
import CursoController from "../controllers/controllerCurso";
import UnidadeController from "../controllers/controllerUnidade";
import TurmaController from "../controllers/controllerTurma";

const rotas = Router()

rotas.get("/", (request, response) => {
    return response.json ("Home Page")
})

rotas.post("/cursos", new CursoController().create)
rotas.get("/cursos", new CursoController().readAll)
rotas.get("/cursos/:id", new CursoController().readOne)
rotas.put("/cursos/:id", new CursoController().update)
rotas.delete("/cursos/:id", new CursoController().delete)

rotas.post("/unidades", new UnidadeController().create)
rotas.get("/unidades", new UnidadeController().readAll)
rotas.get("/unidades/:id", new UnidadeController().readOne)
rotas.put("/unidades/:id", new UnidadeController().update)
rotas.delete("/unidades/:id", new UnidadeController().delete)

rotas.post("/turmas", new TurmaController().create)
rotas.get("/turmas", new TurmaController().readAll)
rotas.get("/turmas/:id", new TurmaController().readOne)
rotas.put("/turmas/:id", new TurmaController().update)
rotas.delete("/turmas/:id", new TurmaController().delete)

export default rotas