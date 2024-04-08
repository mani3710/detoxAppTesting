import { When,setDefaultTimeout,Given, Then } from "@cucumber/cucumber";
setDefaultTimeout(120*1000);

// When("I verify that the first element is visible",async()=>{
//    await expect(element(by.id("Europe-image-0"))).toBeVisible();
// })
// Then("I verify that the last element is not visible",async()=>{
//     await expect(element(by.id("Europe-image-0"))).toExist();
//  }) 
Given("I tap on the memberlist selection for expection",async()=>{
    await element(by.id("homeSectionText-Members")).tap();
  // await element(by.text("Member List")).tap();
})
When("I expect the memberlist header text yo be memberList",async()=>{
   await expect(element(by.id("MemberHeaderId"))).toHaveLabel("MemberList");
})
Then("I expect the add member button to have addMemberLabel as label",async()=>{
   await expect(element(by.label("addMemberLabel"))).toHaveId("MemberHeaderAddMemberButton");
 }) 


 