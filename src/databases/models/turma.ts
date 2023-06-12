import { Entity, PrimaryColumn, Column } from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("turma")
export default class Turma {
  //Chave Primaria
  @PrimaryColumn()
  id_turma: string

  //chave estrangeira
  @Column()
  fk_curso: string

  // Atributos
  @Column()
  data_inicio: Date

  @Column({ nullable: true })
  data_fim: Date

  @Column()
  horas_aula_dia: Number

  constructor() {
    this.id_turma = uuid()
  }
}
