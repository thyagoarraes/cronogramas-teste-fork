import { Entity, PrimaryColumn, Column } from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("unidade")
export default class Unidade {
  //chave primaria
  @PrimaryColumn()
  id_unidade: string

  //chave estrangeira
  @Column()
  fk_curso: string

  //atributos
  @Column()
  descricao_unidade: string

  @Column()
  carga_horaria_unidade: number

  @Column()
  ordem: number

  constructor() {
    this.id_unidade = uuid()
  }
}
