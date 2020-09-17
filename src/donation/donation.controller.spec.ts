import {DonationController} from './donation.controller';
import {Test, TestingModule} from "@nestjs/testing";

describe('DonationController', () => {
    let controller: DonationController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [DonationController],
        }).compile();

        controller = module.get<DonationController>(DonationController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
