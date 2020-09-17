import {Module} from '@nestjs/common';
import {GoalService} from './goal.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Goal} from "./goal.entity";
import {GoalController} from "./goal.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Goal])],
    providers: [GoalService],
    exports: [GoalService],
    controllers: [GoalController],
})
export class GoalModule {
}
