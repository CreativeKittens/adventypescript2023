import {
	getCalibrationDigit,
	getCalibrationDigitWord,
	getCalibrationValuesWord,
	getSumCalibrationValue,
	getSumCalibrationValueWord,
} from './index'
import { getCalibrationValues } from './index'

test('Test calibration digit', () => {
	const calibrationString = [
		getCalibrationDigit('1abc2'),
		getCalibrationDigit('pqr3stu8vwx'),
		getCalibrationDigit('a1b2c3d4e5f'),
		getCalibrationDigit('treb7uchet'),
		getCalibrationDigit('78ffard8zoneight'),
	]

	expect(calibrationString[0]).toBe(12)
	expect(calibrationString[1]).toBe(38)
	expect(calibrationString[2]).toBe(15)
	expect(calibrationString[3]).toBe(77)
	expect(calibrationString[4]).toBe(78)
})
test('Test getting calibration values', () => {
	const document = ['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet']
	const calibrationValues = getCalibrationValues(document)

	expect(calibrationValues).toEqual([12, 38, 15, 77])
})
test('Get summary of calibration values', () => {
	const calibrationValues = getSumCalibrationValue('./src/day1/data/sample.txt')

	expect(calibrationValues).toBe(142)
})

test('Test calibration digit as word valid', () => {
	const calibrationString = [
		getCalibrationDigitWord('two1nine'),
		getCalibrationDigitWord('eightwothree'),
		getCalibrationDigitWord('abcone2threexyz'),
		getCalibrationDigitWord('xtwone3four'),
		getCalibrationDigitWord('4nineeightseven2'),
		getCalibrationDigitWord('zoneight234'),
		getCalibrationDigitWord('7pqrstsixteen'),
		getCalibrationDigitWord('78ffard8zoneight'),
	]

	expect(calibrationString[0]).toBe(29)
	expect(calibrationString[1]).toBe(83)
	expect(calibrationString[2]).toBe(13)
	expect(calibrationString[3]).toBe(24)
	expect(calibrationString[4]).toBe(42)
	expect(calibrationString[5]).toBe(14)
	expect(calibrationString[6]).toBe(76)
	expect(calibrationString[7]).toBe(78)
})
test('Test getting calibration values', () => {
	const document = [
		'two1nine',
		'eightwothree',
		'abcone2threexyz',
		'xtwone3four',
		'4nineeightseven2',
		'zoneight234',
		'7pqrstsixteen',
		'78ffard8zoneight',
	]
	const calibrationValues = getCalibrationValuesWord(document)

	expect(calibrationValues).toEqual([29, 83, 13, 24, 42, 14, 76, 78])
})
test('Get summary of calibration values', () => {
	const calibrationValues = getSumCalibrationValueWord(
		'./src/day1/data/sample2.txt',
	)

	expect(calibrationValues).toBe(281)
})
