"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeormExModule = void 0;
const typeorm_ex_decorator_1 = require("./typeorm-ex.decorator");
const typeorm_1 = require("@nestjs/typeorm");
class TypeormExModule {
    static forCustomRepository(repositories) {
        const providers = [];
        for (const repository of repositories) {
            const entity = Reflect.getMetadata(typeorm_ex_decorator_1.TYPE_EX_CUSTOM_REPOSITORY, repository);
            if (!entity) {
                continue;
            }
            providers.push({
                inject: [(0, typeorm_1.getDataSourceToken)()],
                provide: repository,
                useFactory: (dataSource) => {
                    const baseRepository = dataSource.getRepository(entity);
                    return new repository(baseRepository.target, baseRepository.manager, baseRepository.queryRunner);
                },
            });
        }
        return {
            exports: providers,
            module: TypeormExModule,
            providers,
        };
    }
}
exports.TypeormExModule = TypeormExModule;
//# sourceMappingURL=typeorm-ex.module.js.map