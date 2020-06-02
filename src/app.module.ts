import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailController } from './email/email.controller';
import { EmailService } from './email/email.service';
import { EmailModule } from './email/email.module';
import { MongooseModule } from "@nestjs/mongoose"

@Module({
  imports: [EmailModule
    , MongooseModule.forRoot("mongodb+srv://abarrantes:abarrantes123*@cluster0-36mak.mongodb.net/test?retryWrites=true&w=majority", { useFindAndModify: true, useUnifiedTopology: true })],
  providers: [],
})
export class AppModule {}
