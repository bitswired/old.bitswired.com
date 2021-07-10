import { HttpModule, Module } from '@nestjs/common';
import { ContactResolver } from './contact.resolver';
import { EmailModule } from '../email/email.module';

@Module({
  imports: [EmailModule, HttpModule],
  providers: [ContactResolver],
})
export class ContactModule {}
