import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './middlewares';
import { AllExceptionsFilter } from './errors';

const port = process.env.port || 4000;
async function start() {
  const app = await NestFactory.create(AppModule);
  app.use(logger);
  const adapterHost = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(adapterHost));
  await app.listen(port, () => {
    console.log(`Server is running at ${port}`);
  });
}
start();
