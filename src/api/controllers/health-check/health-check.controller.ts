import { Controller, Get } from "@nestjs/common";

@Controller('health-check')
export class ApiHealthCheckController {
    @Get()
    healthCheck(): string {
        return 'API online';
    }
}