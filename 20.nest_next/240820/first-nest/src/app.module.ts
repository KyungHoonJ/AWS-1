import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { BoardModule } from './board/board.module';

@Module({
  imports: [TodosModule, BoardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
