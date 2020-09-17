import {Body, ClassSerializerInterceptor, Controller, HttpStatus, Post, Res, UseInterceptors} from "@nestjs/common";
import {DonationService} from "./donation.service";
import {Response} from "express";
import {Donation} from "./donation.entity";
import {EntityNotFoundException} from "../exceptions/EntityNotFoundException";

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
                if (err instanceof EntityNotFoundException) {
                    res.status(HttpStatus.NOT_FOUND).json({
                        "code": "NOT_FOUND",
                        "message": "Diese Donation gibt es nicht mehr"
                    })
                } else {
                    res.status(HttpStatus.BAD_REQUEST).json({
                        "code": "DONE",
                        "message": "Diese Donation ist bereits vergeben"
                    })
                }
            });
    }
}
