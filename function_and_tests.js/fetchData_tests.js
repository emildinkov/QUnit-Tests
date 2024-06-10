import {fetchData} from "./async_test_functions.js"

QUnit.module("fetchData function tests", () => {
    QUnit.test("fetch data from correct url", async function(assert) {
        const data = await fetchData("https://www.zippopotam.us/bg/8000");

        // Check main object properties
        assert.ok(data.hasOwnProperty("post code"), "Data contains post code");
        assert.equal(data["post code"], 8000, "Post Code is 8000");
        assert.ok(data.hasOwnProperty("country"), "Data contains country");
        assert.equal(data["country"], "Bulgaria", "Country is Bulgaria");
        assert.ok(data.hasOwnProperty("country abbreviation"), "Data contains country abbreviation");
        assert.equal(data["country abbreviation"], "BG", "country abbreviation is BG");

        // Check places array
        assert.ok(Array.isArray(data.places), "places is an array");
        assert.equal(data.places.length, 1, "places array has one element");

        const place = data.places[0];
        assert.ok(place.hasOwnProperty("place name"), "Place contains place name");
        assert.equal(place["place name"], "Бургас / Burgas", "Place name is Бургас / Burgas");
        assert.ok(place.hasOwnProperty("longitude"), "Place contains longitude");
        assert.equal(place["longitude"], "27.4667", "Longitude is 27.4667");
        assert.ok(place.hasOwnProperty("state"), "Place contains state");
        assert.equal(place["state"], "Бургас / Burgas", "State is Бургас / Burgas");
        assert.ok(place.hasOwnProperty("state abbreviation", "Place contains state abbreviation"));
        assert.equal(place["state abbreviation"], "BGS", "State abbreviation is BGS");
        assert.ok(place.hasOwnProperty("latitude"), "Place contains latitude");
        assert.equal(place["latitude"], "42.5", "Latitude is 42.5");
    })
})

QUnit.module("fetchData function with invalid post code test", () => {
    QUnit.test("With invalid post code", async function(assert) {
        const data = await fetchData("https://www.zippopotam.us/bg/8552222");

        assert.notOk(data);
    })
})

QUnit.module("fetchData function with incorrect url", () => {
    QUnit.test("With incorrect url", async function(assert) {
        const data = await fetchData("https://www.zippopotamsdsd.us/bg/8000");

        assert.equal(data, "fetch failed");
    })
})