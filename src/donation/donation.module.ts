import {TypeOrmModule} from "@nestjs/typeorm";
import {Donation} from "./donation.entity";
import {DonationService} from "./donation.service";
import {Module} from "@nestjs/common";
import {DonationController} from "./donation.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Donation])],
    providers: [DonationService],
    exports: [DonationService],
    controllers: [DonationController],
})
export class DonationModule {
}
