describe('Add Notes',()=> {
    it('Skip Tutorial',async()=>{
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();

        await expect($('//*[@text="Add note"]')).toBeDisplayed();
    });

    // it.only('Skip Tutorial 2',async()=>{
    //     await $('//*[@text="Add note"]').click();
    //     await $('//*[@"]').click();
    // });
    
    it('add note',async()=>{
        await $('//*[@text="Add note"]').click();
        await $('//*[@text="Text"]').click();

        await expect($('//*[@text="Editing"]')).toBeDisplayed();

        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').setValue("Abra ca dabra");
        
      //  await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]').addValue("kaar abaar hoilo jorr");

        await driver.back();
        await driver.back();

        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();

        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')).toHaveText("Abra ca dabra");

    });
})