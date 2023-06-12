import { Entity, PrimaryColumn, Column } from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("recesso")
export default class Recesso {
  //chave primária
  @PrimaryColumn()
  id_recesso: string

  //atributos
  @Column()
  descricao_recesso: string

  @Column()
  data_recesso: Date

  constructor() {
    this.id_recesso = uuid()
  }
}
