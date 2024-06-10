import { fake_delay } from "./async_test_functions.js";

QUnit.module("fake_delay function test", () => {
    QUnit.test("Test with 1 sec", async function(assert) {
        const start = Date.now();
        await fake_delay(1000);
        const end = Date.now();

        const difference = end - start;

        assert.ok(difference >= 1000, "Delay is at least 1000 milliseconds");
    })
})