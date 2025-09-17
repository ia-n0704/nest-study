import {Controller,Get} from '@nestjs/common';
import {UserService} from './user.service';

@Controller('/User')
export class UserController{
    constructor(private readonly userService: UserService){}

    @Get('/main')
    async getMainPage(){
        return this.userService.getMainPage();
    }
}