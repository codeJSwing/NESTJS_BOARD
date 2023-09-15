import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import {TypeormExModule} from "../configs/typeorm-ex.module";

@Module({
    imports: [TypeormExModule.forCustomRepository([BoardRepository])],
    controllers: [BoardsController],
    providers: [BoardsService],
})
export class BoardsModule {}
