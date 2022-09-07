import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger'
import * as packageJson from '../package.json';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const config = new DocumentBuilder()
    .setTitle('API smartContracts')
    .setDescription('SmartContractAPI')
    .setVersion(packageJson.version)
    .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api', app, document)
  await app.listen(3000);
}
bootstrap().then(() => Logger.log('App is start'))
