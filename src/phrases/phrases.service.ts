import { Phrases } from '@prisma/client'
import {
	BadRequestException,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { randomElementsFromArray, randomNumber } from 'src/utils/randomFunctions'
import { PhraseDto } from './phrases.dto'
import { returnPhrasesObject } from './return-fields.object'

@Injectable()
export class PhrasesService {
	constructor(private prisma: PrismaService) {}

	/** --GET ALL-- */
	async getAll() {
		return await this.prisma.phrases.findMany({
			select: returnPhrasesObject
		})
	}

	/** --GET BY ID-- */
	async getById(id: number) {
		const phrase = await this.prisma.phrases.findUnique({
			where: { id },
			select: returnPhrasesObject
		})

		if (!phrase) throw new NotFoundException('phrase not found')

		return phrase
	}

	/** --GET RANDOM PHRASE-- */
	async getRandom(n: number) {
		const phrases = await this.getAll()

		if (n > 150 && n > parseInt(String(phrases.length / 2))) {
			throw new BadRequestException('quantity must be less than 150')
		}

		return randomElementsFromArray(n, phrases)
	}

	/** --CREATE PHRASE-- */
	async create(dto: PhraseDto) {
		return await this.prisma.phrases.create({
			data: { text: dto.text }
		})
	}

	/** --UPDATE PHRASE-- */
	async update(id: number, dto: PhraseDto) {
		return await this.prisma.phrases.update({
			where: { id },
			data: { text: dto.text }
		})
	}

	/** --DELETE PHRASE-- */
	async delete(id: number) {
		return await this.prisma.phrases.delete({
			where: { id }
		})
	}
}
