import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import * as SibClient from 'sib-api-v3-sdk';
import { EmailConfig } from '../configuration';
import { CreateContactInput } from '../contacts/dto/create-contact.input';

@Injectable()
export class EmailService {
  private contactsClient: any;

  constructor(private configService: ConfigService) {
    const emailConfig = this.configService.get<EmailConfig>('email');
    const defaultClient = SibClient.ApiClient.instance;
    const apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = emailConfig.apiKey;
    this.contactsClient = new SibClient.ContactsApi();
  }

  async subscribeToContact(contact: CreateContactInput): Promise<any> {
    // FLAG: TESTING
    if (process.env.NODE_ENV === 'test') {
      return contact;
    }

    const createContact = new SibClient.CreateContact();
    createContact.email = contact.email;
    createContact.attributes = {
      FIRSTNAME: contact.firstName,
      LASTNAME: contact.lastName,
    };
    createContact.listIds = [2];

    try {
      await this.contactsClient.createContact(createContact);
      return contact;
    } catch (err) {
      if (err.response.body.code === 'duplicate_parameter') {
        throw new HttpException('Already subscribed', HttpStatus.BAD_REQUEST);
      }
    }
  }
}
