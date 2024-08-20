import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
  private board: string[] = ['testing'];

  getboard(): string[] {
    return this.board;
  }
}
