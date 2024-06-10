import { isEven } from "./test_functions.js"

QUnit.module("isEven function test", () => {
    QUnit.test("Even number", function(assert) {
        assert.ok(isEven(2), "Even number passed")
    })

    QUnit.test("Odd number", function(assert) {
        assert.notOk(isEven(3), "odd numbers passed")
    })

    QUnit.test("Zero as input", function(assert) {
        assert.ok(isEven(0), "Zero number passed")
    })

    QUnit.test("Negative even number", function(assert) {
        assert.ok(isEven(-4), "Negative number passed")
    })

    QUnit.test("Negative odd number", function(assert) {
        assert.notOk(isEven(-5), "Negative odd number passed")
    })
})