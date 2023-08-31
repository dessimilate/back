import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma.service';
import { PhrasesModule } from './phrases/phrases.module';
import { TextModule } from './text/text.module';

@Module({
  imports: [ConfigModule.forRoot(), PhrasesModule, TextModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
