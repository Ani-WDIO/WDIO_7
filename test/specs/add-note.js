describe('Add Notes',()=> {
    it.only('Skip Tutorial',async()=>{
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();

        await expect($('//*[@text="Add note"]')).toBeDisplayed();
    });

})