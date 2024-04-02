import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(120 * 1000);

//match by type and text
When("I tap on the Water Counter by type and text", async () => {
    if (device.getPlatform() === "ios")
        await element(by.type("RCTView").and(by.id("WATERCOUNTER"))).tap();
    else
        await element(by.type("RCTView").and(by.text("WATER COUNTER"))).tap();
});
Then("I tap on the Electricity Counter by traits and id", async () => {
    await element(by.traits(['staticText']).and(by.text("ELECTRICITY COUNTER"))).tap();
});
Then("I tap on the Gas Couter by Ancestor id and descendant text", async () => {
    await element(by.id("GASCOUNTER").withDescendant(by.text("GAS COUNTER"))).tap();
});
Then("I tap on the Gas Couter by Descendant id and Ancestor id", async () => {
    await element(by.text("BROADBAND COUNTER").withAncestor(by.id("GASCOUNTER"))).tap();
});

//match by id
When("I tap on the Water Counter by id", async () => { 
    await element(by.id("WATERCOUNTER")).longPress(2000);
}); 

Then("I tap on the Electricity Counter by id", async () => {
    await element(by.id("ELECTRICITYCOUNTER")).multiTap(2);
});
Then("I tap on the Gas Counter by id", async () => {
    await element(by.id("GASCOUNTER")).multiTap(5);
});
Then("I tap on the Broadband counter by id", async () => {
    await element(by.id("BROADBANDCOUNTER")).tap({x:5,y:250});
});
// match by label
When("I tap the Home navigtion section by label", async () => {
    await element(by.label("HomeNav")).atIndex(0).tap();
});
// Then("I tap on the Counter section by label",async()=>{
//     await element(by.text("COUNTERS")).tap();
// });
Then("I tap the Water Counter by label", async () => {
    await element(by.label("Water_Counter")).tap();
});

// Match by text
Given("I tap on the Counter section by text", async () => {
    await element(by.text("COUNTERS")).tap();
});
When("I tap on the Water Counter by text", async () => {
    await element(by.text("WATER COUNTER")).tap();
});
Then("I tap on the Electricity Counter by text", async () => {
    await element(by.text("ELECTRICITY COUNTER")).tap();
});
Then("I tap on the Gas Counter by text", async () => {
    await element(by.text("GAS COUNTER")).tap();
});
Then("I tap on the Broadband counter by text", async () => {
    await element(by.text("BROADBAND COUNTER")).tap();
});
