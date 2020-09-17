import {Injectable} from '@nestjs/common';
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {Goal} from "./goal.entity";
import {EntityNotFoundException} from "../exceptions/EntityNotFoundException";

@Injectable()
export class GoalService {
    constructor(@InjectRepository(Goal)
                private readonly goalRepositoryRepository: Repository<Goal>) {
    }

    async get() {
        const goal = await this.goalRepositoryRepository.findOne({
            where: {
                id: 1
            }
        });

        if (goal === undefined) {
            throw new EntityNotFoundException(null, null, 'goal');
        }

        return goal;
    }
}
