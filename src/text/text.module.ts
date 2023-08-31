import { Module } from '@nestjs/common';
import { TextService } from './text.service';
import { TextController } from './text.controller';
import { PrismaService } from 'src/prisma.service'

@Module({
  controllers: [TextController],
  providers: [TextService, PrismaService]
})
export class TextModule {}
