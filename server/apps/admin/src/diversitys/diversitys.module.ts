import { Module } from '@nestjs/common';
import { DiversitysController } from './diversitys.controller';

@Module({
  controllers: [DiversitysController]
})
export class DiversitysModule {}
