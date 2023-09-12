import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../boards.model';
export declare class BoardStatusValidationPipe implements PipeTransform {
    readonly StatusOptions: BoardStatus[];
    transform(value: any, metadata: ArgumentMetadata): any;
    private isStatusValid;
}
