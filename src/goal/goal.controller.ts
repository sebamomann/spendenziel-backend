import {ClassSerializerInterceptor, Controller, Get, HttpStatus, Res, UseInterceptors} from '@nestjs/common';
import {GoalService} from "./goal.service";
import {Response} from 'express';

@Controller('goals')
export class GoalController {
    constructor(private goalService: GoalService) {
    }

    @Get()
    @UseInterceptors(ClassSerializerInterceptor)
    get(@Res() res: Response,) {
        return this.goalService
            .get()
            .then(result => {
                res.status(HttpStatus.OK).json(result);
            })
            .catch(err => {
                throw err;
            });
    }
}
