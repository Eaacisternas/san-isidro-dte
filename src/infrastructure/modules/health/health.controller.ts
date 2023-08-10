import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HealthService } from './health.service';

@ApiTags('status aplicacóon')
@Controller()
export class HealthController {
  constructor(private readonly healthsService: HealthService) {}

  @Get('health')
  @ApiOperation({ summary: 'Health check service' })
  @ApiResponse({ description: 'Return status OK' })
  getStatus() {
    return this.healthsService.getStatus();
  }
}
