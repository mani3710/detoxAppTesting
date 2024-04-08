import { When, Given, setDefaultTimeout } from "@cucumber/cucumber";
setDefaultTimeout(120 * 1000);
Given("I locate {string} bar by tabid", async (section) => {
    await element(by.id(`${section}`)).atIndex(0).tap();
});
// Given("I locate extra {string} view by id",async(extraid)=>{
//     return element(by.id(`extraSteps-${extraid}`)).tap();
// })


// Given("I locate citiesnavigationid bar",async()=>{
//     await element(by.id("citiesnavigationid")).atIndex(0).tap();
// })
  