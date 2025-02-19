import { factorial } from "./test_functions.js"

QUnit.module("factorial function tests", () => {
    QUnit.test("Positive number", function(assert) {
        assert.equal(factorial(5), 120, "Positive number")
    })

    QUnit.test("Zero number", function(assert) {
        assert.equal(factorial(0), 1, "Zero number")
    })

    QUnit.test("Negative number", function(assert) {
        assert.equal(factorial(-1), 1, "Negative number")
    })

    QUnit.test("Large positive number", function(assert) {
        assert.equal(factorial(20), 2432902008176640000, "Large positive number")
    })
})