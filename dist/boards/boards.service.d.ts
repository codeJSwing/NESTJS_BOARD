import { Board } from './boards.model';
import { CreateBoardDto } from './dto/create-board.dto';
export declare class BoardsService {
    private boards;
    getAllBoards(): Board[];
    createBoard(createBoardDto: CreateBoardDto): Board;
}
