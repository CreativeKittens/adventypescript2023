import { readLine, sortNumber } from '../helpers'

interface GameRecord {
	gameId: number
	red: number[]
	green: number[]
	blue: number[]
}

type GameRecordCollection = GameRecord[]

export function getGameRecords(sourcePath: string): GameRecordCollection {
	const gameRecordStr = readLine(sourcePath)
	let gameRecordCollection: GameRecordCollection = []
	let gameRecord: GameRecord = {
		gameId: 0,
		red: [],
		green: [],
		blue: [],
	}

	for (const recordStr of gameRecordStr) {
		const [id, stageStr] = recordStr.split(': ')
		const cubeSetStr: string[] = stageStr.split('; ')

		for (const setStr of cubeSetStr) {
			const cubeSet = setStr.split(', ')

			for (const cube of cubeSet) {
				const [cubeNumber, cubeColor] = cube.split(' ')
				if (cubeColor === 'red') {
					gameRecord.red.push(Number.parseInt(cubeNumber))
				}
				if (cubeColor === 'green') {
					gameRecord.green.push(Number.parseInt(cubeNumber))
				}
				if (cubeColor === 'blue') {
					gameRecord.blue.push(Number.parseInt(cubeNumber))
				}
			}
		}

		gameRecord.gameId = Number.parseInt(id.split(' ')[1])
		gameRecordCollection.push(gameRecord)
		gameRecord = {
			gameId: 0,
			red: [],
			green: [],
			blue: [],
		}
	}

	return gameRecordCollection
}

export function sumPossibilityId(sourcePath: string): number {
	const gameRecord = getGameRecords(sourcePath)
	const CONFIGURATION = {
		red: 12,
		green: 13,
		blue: 14,
	}

	const gamePossibility: number[] = gameRecord
		.filter((record) => {
			const { red, green, blue } = record
			const redDesc = sortNumber(red, 'desc')
			const greenDesc = sortNumber(green, 'desc')
			const blueDesc = sortNumber(blue, 'desc')

			const {
				red: redConfig,
				green: greenConfig,
				blue: blueConfig,
			} = CONFIGURATION

			return (
				redDesc[0] <= redConfig &&
				greenDesc[0] <= greenConfig &&
				blueDesc[0] <= blueConfig
			)
		})
		.map((record) => record.gameId)

	return gamePossibility.reduce((acc, curr) => acc + curr)
}

export function sumPowerSet(sourcePath: string): number {
	const gameRecord = getGameRecords(sourcePath)

	const sumPower: number = gameRecord.reduce((acc, record) => {
		const { red, green, blue } = record

		const redDesc = sortNumber(red, 'desc')
		const greenDesc = sortNumber(green, 'desc')
		const blueDesc = sortNumber(blue, 'desc')

		return acc + redDesc[0] * greenDesc[0] * blueDesc[0]
	}, 0)

	return sumPower
}

function main() {
	const firstProblem = sumPossibilityId('./src/day2/data/data.txt')
	const secondProblem = sumPowerSet('./src/day2/data/data.txt')

	console.log(firstProblem)
	console.log(secondProblem)
}

main()
