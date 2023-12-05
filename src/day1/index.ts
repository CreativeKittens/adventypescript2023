import { readLine } from '../helpers'

/**
 * @function
 * @description Getting calibration digit
 * @param documentText {string}
 * */
export function getCalibrationDigit(documentText: string): number {
	const DIGIT_PATTERN = new RegExp('\\d')
	const firstDigit = documentText.match(DIGIT_PATTERN)
	const lastDigit = documentText
		.split('')
		.reverse()
		.join('')
		.match(DIGIT_PATTERN)
	let finalDigit

	if (!firstDigit || !lastDigit) throw new Error('Digit not found')

	finalDigit = Number.parseInt(`${firstDigit[0]}${lastDigit[0]}`)
	return finalDigit
}
/**
 * @function
 * @description Get calibration digit to array
 * @param documentText {string}
 * */
export function getCalibrationValues(document: string[]): number[] {
	const calibrationValues = document.map((documentText: string) => {
		return getCalibrationDigit(documentText)
	})

	return calibrationValues
}
/**
 * @function
 * @description Sum up calibration values
 * @param documentText {string}
 * */
export function getSumCalibrationValue(sourceUrl: string): number {
	const document = readLine(sourceUrl)
	const calibrationValues = getCalibrationValues(document)

	return calibrationValues.reduce((acc, curr) => acc + curr)
}

/**
 * @function
 * @description Get calibration digit word digit valid as a digit
 * @param documentText {string}
 * */
export function getCalibrationDigitWord(documentText: string): number {
	const NUMBER_INDEX = [
		'zero',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
	]
	const DIGIT_PATTERN = new RegExp(`\\d|${NUMBER_INDEX.join('|')}`)

	let currentTextIndex = -1
	let currentText = documentText.slice(currentTextIndex)

	let firstDigitStr = documentText.match(DIGIT_PATTERN)
	let lastDigitStr = currentText.match(DIGIT_PATTERN)

	let firstDigit: string
	let lastDigit: string
	let finalDigit: number

	while (!lastDigitStr) {
		lastDigitStr = currentText.match(DIGIT_PATTERN)

		currentTextIndex--
		currentText = documentText.slice(currentTextIndex)
	}

	if (!firstDigitStr || !lastDigitStr)
		throw new Error('Digit or word not found')

	firstDigit = NUMBER_INDEX.includes(firstDigitStr[0])
		? `${NUMBER_INDEX.indexOf(firstDigitStr[0])}`
		: firstDigitStr[0]
	lastDigit = NUMBER_INDEX.includes(lastDigitStr[0])
		? `${NUMBER_INDEX.indexOf(lastDigitStr[0])}`
		: lastDigitStr[0]
	finalDigit = Number.parseInt(`${firstDigit}${lastDigit}`)

	return finalDigit
}
/**
 * @function
 * @description Get calibration digit word valid
 * @param document {string}
 * */
export function getCalibrationValuesWord(document: string[]): number[] {
	const calibrationValues = document.map((documentText: string) => {
		return getCalibrationDigitWord(documentText)
	})

	return calibrationValues
}
/**
 * @function
 * @description Sum up calibration values
 * @param sourceUrl {string}
 * */
export function getSumCalibrationValueWord(sourceUrl: string): number {
	const document = readLine(sourceUrl)
	const calibrationValues = getCalibrationValuesWord(document)

	return calibrationValues.reduce((acc, curr) => acc + curr)
}

function main() {
	const firstProblem = getSumCalibrationValue('./src/day1/data/data.txt')
	const secondProblem = getSumCalibrationValueWord('./src/day1/data/data.txt')
	console.log('First problem', firstProblem)
	console.log('Second problem', secondProblem)
}

main()
