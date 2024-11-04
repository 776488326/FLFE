import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 初始化Swagger
  const config = new DocumentBuilder()
  .setTitle('Blog API')
  .setDescription('接口文档')
  .setVersion('1.0')
  .build();
  const doc = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, doc, {
    jsonDocumentUrl: 'docs/json'
  });

  // 监听端口
  await app.listen(process.env.PORT ?? 3000, () => {
    console.log("🚀 ~ awaitapp.listen ~ PORT:", `http://localhost:${process.env.PORT}`);
  });
}
bootstrap();
