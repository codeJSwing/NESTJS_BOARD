import { Repository } from 'typeorm';
import { Board } from './board.entity';

@Repository(Board)
export class BoardRepository extends Repository<Board> {}