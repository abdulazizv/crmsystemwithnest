import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from './middlewares';
import { BranchModule } from './branch/branch.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as process from 'process';

const environment = process.env.NODE_ENV || 'development';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${environment}.env`,
      isGlobal: true,
    }),
    BranchModule,
    MongooseModule.forRoot(process.env.mongo_uri),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats');
  }
}
