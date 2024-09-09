import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  // Change the parameter type to 'number'
  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne({ where: { id } });
  }

  create(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  // Change the parameter type to 'number'
  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}