import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '0329',
      database: 'capstone_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    ProductsModule,
    OrdersModule,
  ],
})
export class AppModule {}