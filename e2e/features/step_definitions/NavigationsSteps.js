import { Given,Then,When,setDefaultTimeout } from "@cucumber/cucumber";
setDefaultTimeout(120*1000);
Given("I locate icon by testID",async()=>{
    console.log("maniii id");
    await element(by.id("rocketIcon")).tap();
})
// Given("I locate MemberList by id", async () => {
//     await element(by.text("Member List")).tap();
// });
When("I locate MemberList title by id",async()=>{
    await element(by.id("MemberHeaderId")).atIndex(0).tap(); 
})
Then("I locate MemberList header add memebr button by id",async()=>{
    await element(by.id("MemberHeaderAddMemberButton")).atIndex(0).tap();
});  
Then("I tap the Member navigtion section by label", async () => {
    await element(by.label("MemberList, back")).atIndex(0).tap();
});   
Then("I locate cities tab bar",async ()=>{
    await element(by.label("CitiesNavigation")).atIndex(0).tap();
})          
