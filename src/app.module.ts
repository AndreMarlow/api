import { Module } from '@nestjs/common';
import { SmartController } from './smart/smart.controller';
import { SmartService } from './smart/smart.service';

@Module({
  imports: [],
  controllers: [SmartController],
  providers: [SmartService],
})
export class AppModule {}
