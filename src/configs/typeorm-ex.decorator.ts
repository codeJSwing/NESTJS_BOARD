import { SetMetadata } from '@nestjs/common';

export const TYPE_EX_CUSTOM_REPOSITORY = 'TYPEORM_EX_CUSTOM_REPOSITORY';

export function CustomRepository(entity: Function): ClassDecorator {
    return SetMetadata(TYPE_EX_CUSTOM_REPOSITORY, entity);
}
