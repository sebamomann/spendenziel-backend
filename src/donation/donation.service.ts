import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Donation} from "./donation.entity";
import {EntityNotFoundException} from "../exceptions/EntityNotFoundException";

@Injectable()
export class DonationService {
    constructor(@InjectRepository(Donation)
                private readonly donationRepository: Repository<Donation>) {
    }

    public async setDone(_donation: Donation) {
        const donation = await this.donationRepository
            .findOne({
                where: {
                    id: _donation.id
                }
            })

        if (!donation) {
            throw new EntityNotFoundException(null, null, 'donation');
        }

        if(donation.done) {
            throw new Error();
        }

        donation.done = true;
        donation.lud = new Date();

        await this.donationRepository.save(donation);

        return donation;
    }
}
