import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Contact } from './models/contact.model';
import { CreateContactInput } from './dto/create-contact.input';
import { EmailService } from '../email/email.service';
import { HcaptchaAuthGuard } from '../auth/guards/hcaptcha-auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => Contact)
export class ContactResolver {
  constructor(private readonly emailService: EmailService) {}

  @UseGuards(HcaptchaAuthGuard)
  @Mutation(() => Contact)
  createContact(
    @Args('contact')
    contact: CreateContactInput,
  ) {
    return this.emailService.subscribeToContact(contact);
  }
}
