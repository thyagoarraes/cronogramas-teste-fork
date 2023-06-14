import { Request, Response } from "express"
import { RecessoService } from "../services/serviceRecesso"

const service = new RecessoService()

export default class RecessoController {
  async create(request: Request, response: Response) {
    const {descricao_recesso, data_recesso } = request.body
    const result = await service.create({
        descricao_recesso,
        data_recesso,
    })
    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }
    return response.json(result)
  }

  async readAll(request: Request, response: Response) {
    const result = await service.readAll()
    if (result.length < 1) {
      return response.json("Nenhum recesso cadastrado!")
    }
    return response.json(result)
  }

  async readOne(request: Request, response: Response) {
    const { id_recesso } = request.params
    const result = await service.readOne({ id_recesso })
    if (result instanceof Error) {
      return response.status(404).json(result.message)
    }
    return response.json(result)
  }

  async update(request: Request, response: Response) {
    const { id_recesso } = request.params
    const { descricao_recesso, data_recesso } = request.body
    const result = await service.update({
      id_recesso,
      descricao_recesso,
      data_recesso,
    })
    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }
    return response.json(result)
  }

  async delete(request: Request, response: Response) {
    const { id_recesso } = request.params
    const result = await service.delete({ id_recesso })
    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }
    return response.status(300).json(result)
  }
  
}
