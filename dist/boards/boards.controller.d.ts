import { BoardsService } from './boards.service';
import { Board } from './boards.model';
export declare class BoardsController {
    private boardsService;
    constructor(boardsService: BoardsService);
    getAllBoard(): Board[];
    createBoard(title: string, description: string): Board;
}
