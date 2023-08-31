import { faker } from '@faker-js/faker'
import { Phrases, PrismaClient } from '@prisma/client'
import * as dotenv from 'dotenv'

dotenv.config()
const prisma = new PrismaClient()

const createPhrases = async (quality: number) => {
	const phrases: Phrases[] = []

	for (let i = 0; i < quality; i++) {
		const phrase = await prisma.phrases.create({
			data: {
				text: faker.string.alpha({
					length: { min: 10, max: 20 },
					casing: 'lower'
				})
			}
		})

		phrases.push(phrase)
	}
	console.log(`created ${phrases.length} phrases`)
}

async function main() {
	console.log('start seeding...')
	await createPhrases(100)
}

main()
	.catch(err => console.log(err))
	.finally(async () => {
		await prisma.$disconnect()
	})
