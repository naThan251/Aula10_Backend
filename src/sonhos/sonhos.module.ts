import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Sonho } from './sonhos.entity.js';
import { SonhosService } from './sonhos.service.js';
import { SonhosController } from './sonhos.controller.js';

@Module({
  imports: [
    TypeOrmModule.forFeature([Sonho])
  ],
  providers: [SonhosService],
  controllers: [SonhosController],
})
export class SonhosModule {}
