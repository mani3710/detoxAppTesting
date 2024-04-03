import { When,Given,setDefaultTimeout } from "@cucumber/cucumber";
setDefaultTimeout(120*1000);
Given("I locate {string} tab bar",async(Tab)=>{
    console.log("Tab",Tab)
    await element(by.id(`${Tab}`)).tap();
}); 
