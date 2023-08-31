import { Phrases } from '@prisma/client'

export const randomNumber = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

export const arrayWithRandomNumbers = (n: number, min: number, max: number) => {
	let set = new Set()

	while (set.size < n) set.add(randomNumber(min, max))

	return [...set]
}

export const randomElementsFromArray = (
	n: number,
	phrases: Phrases[]
): Phrases[] => {
	let randomPhrases: Phrases[] = []

	while (randomPhrases.length < n) {
		const randomIndex = randomNumber(0, phrases.length - 1)

		randomPhrases.push(phrases[randomIndex])

		phrases.splice(randomIndex, 1)
	}

	return randomPhrases
}
