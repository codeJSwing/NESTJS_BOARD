import { BoardsService } from './boards.service';
import { BoardStatus } from './boards.status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './board.entity';
export declare class BoardsController {
    private boardsService;
    constructor(boardsService: BoardsService);
    getAllBoard(): Promise<Board[]>;
    createBoard(createBoardDto: CreateBoardDto): Promise<Board>;
    getBoardById(id: number): Promise<Board>;
    deleteBoard(id: any): Promise<void>;
    updateBoardStatus(id: number, status: BoardStatus): Promise<Board>;
}
