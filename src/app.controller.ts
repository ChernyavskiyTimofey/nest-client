import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/order/:id')
  getById(@Param('id') id: number) {
    return this.appService.getOrderById(id);
  }

  @Post('/order')
  create(@Body() createOrderDto) {
    return this.appService.createOrder(createOrderDto);
  }

  @Put('/order/:id')
  updateOrder(@Param('id') id: number, @Body() orderDto) {
    return this.appService.updateOrder(id, orderDto);
  }

  @Delete('/order/:id')
  removeOrder(@Param('id') id: number) {
    return this.appService.removeOrder(id);
  }
}
