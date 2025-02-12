import { Module, Provider } from "@nestjs/common";
import { RepositoriesModule } from "../repositories/repositories.module";
const providers: Provider[] = []

@Module({
    imports: [RepositoriesModule],
    exports: providers,
    providers
})

export class UseCasesModule {}