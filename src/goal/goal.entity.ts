import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Donation} from "../donation/donation.entity";

@Entity()
export class Goal {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({nullable: false})
    title: string;

    @Column({nullable: false})
    total: number;

    @OneToMany(type => Donation,
        donation => donation.goal,
        {
            eager: true
        })
    donations: Donation[];

    @CreateDateColumn()
    iat: Date;
}
