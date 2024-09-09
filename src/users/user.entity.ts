// user.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['email']) // Example unique constraint on the email field
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  // Define other columns based on your application's requirements
}