import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  about?: string;

  @Column()
  photo: string;

  @Column()
  createdAt: Date;

}