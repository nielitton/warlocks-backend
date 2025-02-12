import { Module } from "@nestjs/common";
import { UseCasesModule } from "src/core/use-cases/use-cases.module";

@Module({
    imports: [UseCasesModule],
    controllers: [],
    providers: []
})

export class ApiModule {}