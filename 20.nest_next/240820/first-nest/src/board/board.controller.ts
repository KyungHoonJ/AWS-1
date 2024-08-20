import { Controller, Get } from '@nestjs/common';
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  getList(): string[] {
    return this.boardService.getboard();
  }
}
