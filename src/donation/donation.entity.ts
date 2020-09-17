import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Goal} from "../goal/goal.entity";

@Entity()
export class Donation {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({nullable: false})
    amount: number;

    @ManyToOne(type => Goal,
        goal => goal.donations)
    goal: Goal;

    @Column({default: false})
    done: boolean;

    @CreateDateColumn()
    lud: Date;

    @CreateDateColumn()
    iat: Date;
}
