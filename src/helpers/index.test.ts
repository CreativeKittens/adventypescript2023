import { readLine } from './index'

/* Testing readline */
test('Read text file into array', () => {
	const sampleCalibration = readLine('../day1/sample.txt')
	expect(sampleCalibration).toEqual([
		'1abc2',
		'pqr3stu8vwx',
		'a1b2c3d4e5f',
		'treb7uchet',
	])
})
