import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('ORDER-SERVICE') private readonly client: ClientProxy
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  createOrder(createOrderDto) {
    return this.client.send({ role: 'order', cmd: 'create'}, createOrderDto);
  }

  getOrderById(id: number) {
    return this.client.send({ role: 'order', cmd: 'get-by-id'}, id);
  }

  updateOrder(id: number, createOrderDto) {
    return this.client.send({ role: 'order', cmd: 'update'}, { id, dto: createOrderDto});
  }

  removeOrder(id: number) {
    return this.client.send({ role: 'order', cmd: 'remove'}, id);
  }

  createUser(createUserDto) {
    return this.client.send({ role: 'user', cmd: 'create'}, createUserDto);
  }

  getUserById(id: number) {
    return this.client.send({ role: 'user', cmd: 'get-by-id'}, id);
  }

  updateUser(id: number, createUserDto) {
    return this.client.send({ role: 'user', cmd: 'update'}, { id, dto: createUserDto});
  }

  removeUser(id: number) {
    return this.client.send({ role: 'user', cmd: 'remove'}, id);
  }
}
