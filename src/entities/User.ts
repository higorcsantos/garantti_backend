import {BaseEntity, Column, CreateDateColumn, Entity, Long, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class User extends BaseEntity{
     @PrimaryGeneratedColumn()
     id: number;

     @Column()
     name: string;

     @Column("float")
     cpf: number;

     @Column()
     email: string;

     @Column("float")
     telefone: number;

     @CreateDateColumn()
     createdAt: Date;
}