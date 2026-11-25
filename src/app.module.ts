import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Sonho } from './sonhos/sonhos.entity.js'
import { SonhosModule } from './sonhos/sonhos.module.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'sonhos_db',
      entities: [Sonho],
      synchronize: true,
      logging: true,
    }),

    SonhosModule,
  ],
})
export class AppModule {}