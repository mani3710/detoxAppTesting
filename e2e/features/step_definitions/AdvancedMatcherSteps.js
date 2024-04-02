import { When,setDefaultTimeout } from "@cucumber/cucumber";
setDefaultTimeout(120*1000);
When("I tap on the {string} title and image",async(Continents)=>{
    await element(by.id(`${Continents}`)).tap();
    await element(by.id(`${Continents}-image-0`)).tap();
    await element(by.id(`${Continents}-text-0`)).tap();
});
When("I tap on the {string} section",async(section)=>{
    await element(by.id(`homeSectionText-${section}`)).tap()
});
When("I tap on the {string} extra section",async(extra)=>{
    await element(by.id(`extraSteps-${extra}`)).tap()
});