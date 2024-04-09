describe('Android Element Tests',()=>{
it('find element by Accessibiloity id',async()=>{
        //Accessibility ID

       const appOption  = await $('~App');
       await appOption.click();

       const actionBar = await $('~Action Bar');

       await expect(actionBar).toExist();
})

});