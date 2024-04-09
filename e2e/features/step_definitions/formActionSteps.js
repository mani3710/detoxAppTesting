import { When, setDefaultTimeout, Given, Then } from "@cucumber/cucumber";
setDefaultTimeout(120*1000)
Given("I locate member list in the home screens", async () => {
    await element(by.id("homeSectionText-Members")).tap();
});
When("I move add member list in memberlist", async () => {
    await element(by.id("MemberHeaderAddMemberButton")).atIndex(0).tap(); 
});
Then("I check {string} title is found", async (title) => {
    // await expect(element(by.id(`formInputFiled-${title}`))).toExist();
    await expect(element(by.id(`formTitle-${title}`))).toExist();
    await element(by.id(`formInputFiled-${title}`)).typeText("mani");
});
   