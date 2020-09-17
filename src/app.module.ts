import {Module} from '@nestjs/common';
import {AppService} from './app.service';
import {GoalModule} from './goal/goal.module';
import {Goal} from "./goal/goal.entity";
import {Donation} from "./donation/donation.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {DonationModule} from './donation/donation.module';
import {AppController} from "./app.controller";

require('dotenv').config();

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: [Goal, Donation],
        synchronize: true
    }), GoalModule,
        DonationModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
