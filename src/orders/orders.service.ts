import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
  ) {}

  findAll(): Promise<Order[]> {
    return this.ordersRepository.find();
  }

  findOne(id: string): Promise<Order> {
    return this.ordersRepository.findOneBy({ id: +id });
  }

  async remove(id: string): Promise<void> {
    await this.ordersRepository.delete(id);
  }

  create(order: Order): Promise<Order> {
    return this.ordersRepository.save(order);
  }
}