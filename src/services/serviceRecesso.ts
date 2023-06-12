import { AppDataSource } from "../databases/connections/data-source"
import Recesso from "../databases/models/recesso"

// 1) Estabelece conexão com a tabela alvo no banco de dados através de um cursor

const cursor = AppDataSource.getRepository(Recesso)

// 2) Recebe dados da Requisição HTTP lá do FRONTEND

type newRecessoRequest = {
    descricao_recesso: string
    data_recesso: Date
}

type updateRecessoRequest = {
    id_recesso: string
    descricao_recesso: string
    data_recesso: Date
}

type findOneRecessoRequest = {
    id_recesso: string
}

// 3) Funções CRUD

export class RecessoService {
    
  async create({
    descricao_recesso,
    data_recesso,
    }: newRecessoRequest): Promise<Recesso | Error> {
    if (await cursor.findOne({ where: { descricao_recesso } })) {
    return new Error("Recesso já cadastrado!")
    }

    const recesso = cursor.create({
        descricao_recesso,
        data_recesso
    })

    await cursor.save(recesso)

    return recesso
  }

  async readAll() {
    const recesso = await cursor.find()
    return recesso
  }

  async readOne({ id_recesso }: findOneRecessoRequest): Promise<Recesso | Error> {
    const recesso = await cursor.findOne({ where: { id_recesso } })
    if (!recesso) {
      return new Error("Recesso não encontrado!")
    }
    return recesso
  }

  async update({
    id_recesso,
    descricao_recesso,
    data_recesso,
  }: updateRecessoRequest): Promise<Recesso | Error> {
    const recesso = await cursor.findOne({ where: { id_recesso } })
    if (!recesso) {
      return new Error("Recesso não encontrado!")
    }

    recesso.id_recesso = id_recesso
    ? id_recesso
    : recesso.id_recesso
    recesso.descricao_recesso = descricao_recesso
    ? descricao_recesso
    : recesso.descricao_recesso
    recesso.data_recesso = data_recesso
    ? data_recesso
    : recesso.data_recesso

    await cursor.save(recesso)

    return recesso
}

  async delete({ id_recesso }: findOneRecessoRequest): Promise<Recesso | Error> {
    const recesso = await cursor.findOne({ where: { id_recesso } })
    if (!recesso) {
      return new Error("Recesso não encontrado!")
    }
    await cursor.delete(recesso.id_recesso)
    return recesso
  }
}

