import { Entity, PrimaryColumn, Column } from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("curso")
export default class Curso {
  //chave primária
  @PrimaryColumn()
  id_curso: string

  //atributos
  @Column()
  descricao_curso: string

  @Column()
  carga_horaria_curso: number

  @Column()
  modalidade: string

  @Column()
  eixo: string

  constructor() {
    this.id_curso = uuid()
  }
}
