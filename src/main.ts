import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, POST, PUT, DELETE');
        res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Authorization, X-Auth-Token, content-type');
        return next();
    });

    await app.listen(3000);
}

bootstrap();
