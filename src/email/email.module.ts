import { Module } from '@nestjs/common';
import { EmailService } from "./Email.service"
import { EmailController } from "./Email.controller"
import { MongooseModule } from "@nestjs/mongoose"
import { EmailSchema } from "./schemas/email.schema"

@Module({
    imports: [MongooseModule.forFeature([
        {name: "Email", schema: EmailSchema}
    ])],
    controllers: [EmailController],
    providers: [EmailService]
})
export class EmailModule {}