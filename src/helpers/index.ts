import { readFileSync } from 'fs'

/**
 * @description Split text file by line into array
 * @param {string} sourceFilePath
 * */
export function readLine(sourceFilePath: string): string[] {
	const text = readFileSync(sourceFilePath, {
		encoding: 'utf-8',
		flag: 'r',
	}).match(/.+/g)

	return text ? [...text] : []
}
