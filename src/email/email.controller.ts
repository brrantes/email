import { Controller, Post, Get, Body, HttpStatus } from '@nestjs/common';
import { EmailService } from './email.service'
import { EmailDTO } from './dto/email.dto'
import { response } from 'express';
import { interfaceEmail } from './interface/interface.email'

@Controller('email')
export class EmailController {

    constructor(private emailservice: EmailService){}

    @Get("getEmails")
    async getEmails(): Promise<interfaceEmail[]> {
      return await this.emailservice.getEmails();
    }
    

    @Post("saveEmail")
    saveEmail(@Body() emailDTO : EmailDTO) : any {
      this.emailservice.saveEmail(emailDTO);
      return response.status(HttpStatus.OK);
  }



}
