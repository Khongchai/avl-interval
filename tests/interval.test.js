import { describe, it } from 'mocha'

import Tree from '../src/index'
import { assert } from 'chai'

/**
 * @type {Tree<number, undefined>}
 */

describe('interval', () => {
    const tree = new Tree()
    tree.insert(1)
    tree.insert(4)
    tree.insert(3)
    tree.insert(5)
    tree.insert(2)
    tree.insert(6)
    tree.insert(7)

    // todo more test cases

    const firstCases = [
        [3.5, 3, 4],
        [6.7, 6, 7],
        [5.5, 5, 6],
        [2.5, 2, 3],
        [1.5, 1, 2],
    ]

    firstCases.forEach(([key, low, high]) => {
        it("For a key that doesn't exist should return the correct interval when new key is between two existing keys.", () => {
            const interval =
                /** @type {import('../src/index').Interval<number>} */ (
                    tree.findInterval(key)
                )
            console.log(interval)
            assert.isTrue(Boolean(interval))
            assert.equal(interval.low, low)
            assert.equal(interval.high, high)
        })
    })

    it('For a key that exists, the returned interval should match the passed in key for both bounds', () => {
        const interval =
            /** @type {import('../src/index').Interval<number>} */ (
                tree.findInterval(3)
            )
        assert.isTrue(Boolean(interval))
        assert.equal(interval.low, 3)
        assert.equal(interval.high, 3)
    })

    it('Should return right as null when new key is out of upper bound.', () => {
        const interval =
            /** @type {import('../src/index').Interval<number>} */ (
                tree.findInterval(9999)
            )
        assert.isTrue(Boolean(interval))
        assert.equal(interval.low, 7)
        assert.equal(interval.high, null)
    })

    it('Should return left as null when new key is out of upper bound.', () => {
        const interval =
            /** @type {import('../src/index').Interval<number>} */ (
                tree.findInterval(-1)
            )
        assert.isTrue(Boolean(interval))
        assert.equal(interval.low, null)
        assert.equal(interval.high, 1)
    })
})
