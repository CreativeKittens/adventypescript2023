import { sumPowerSet, sumPossibilityId } from './index'

test('Get sum possibility bag', () => {
	const sumPossibility = sumPossibilityId('./src/day2/data/sample.txt')

	expect(sumPossibility).toBe(8)
})

test('Get sum possibility bag', () => {
	const sumPossibility = sumPowerSet('./src/day2/data/sample.txt')

	expect(sumPossibility).toBe(2286)
})
