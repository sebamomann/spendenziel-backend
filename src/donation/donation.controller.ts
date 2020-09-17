import {Body, ClassSerializerInterceptor, Controller, HttpStatus, Post, Res, UseInterceptors} from "@nestjs/common";
import {DonationService} from "./donation.service";
import {Response} from "express";
import {Donation} from "./donation.entity";

@Controller('donations')
export class DonationController {
    constructor(private donationService: DonationService) {
    }

    @Post('done')
    @UseInterceptors(ClassSerializerInterceptor)
    get(@Body() donation: Donation,
        @Res() res: Response,) {
        return this.donationService
            .setDone(donation)
            .then(result => {
                res.status(HttpStatus.OK).json(result);
            })
            .catch(err => {
                console.log(err);
                throw err;
            });
    }
}
