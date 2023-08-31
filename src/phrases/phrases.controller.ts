import {
	Controller,
	Get,
	Post,
	Put,
	Delete,
	HttpCode,
	HttpStatus,
  Param,
  Body
} from '@nestjs/common'
import { PhrasesService } from './phrases.service'
import { PhraseDto } from './phrases.dto'

@Controller('phrases')
export class PhrasesController {
	constructor(private readonly phrasesService: PhrasesService) {}

	@Get()
	@HttpCode(HttpStatus.OK)
	async getAll() {
		return this.phrasesService.getAll()
	}

	@Get(':id')
	@HttpCode(HttpStatus.OK)
	async getById(@Param('id') id: string) {
		return this.phrasesService.getById(+id)
	}

	@Get('random/:n')
	@HttpCode(HttpStatus.OK)
	async getRandom(@Param('n') n: string) {
		return this.phrasesService.getRandom(+n)
	}

	@Post()
	@HttpCode(HttpStatus.CREATED)
	async create(@Body() dto: PhraseDto) {
		return this.phrasesService.create(dto)
	}

	@Put(':id')
	@HttpCode(HttpStatus.OK)
	async update(@Param('id') id: string, @Body() dto: PhraseDto) {
		return this.phrasesService.update(+id, dto)
	}

	@Delete(':id')
	@HttpCode(HttpStatus.OK)
	async delete(@Param('id') id: string) {
		return this.phrasesService.delete(+id)
	}
}
