const addNoteScreen = require("../screenObjects/android/addNoteScreen");

describe('Add Notes',()=> {
    it('Skip Tutorial',async()=>{
     
        await addNoteScreen.skipBtn.click();
        await expect(addNoteScreen.addNoteTxt).toBeDisplayed();
    });
    
    it('add note',async()=>{
        await addNoteScreen.addNoteTxt.click();
        await addNoteScreen.txtField.click();

        await expect(addNoteScreen.editingField).toBeDisplayed();

        await addNoteScreen.titleField.setValue("Abra ca dabra");
        
      //  await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]').addValue("kaar abaar hoilo jorr");

        await driver.back();
        await driver.back();

        await expect(addNoteScreen.editBtn).toBeDisplayed();

        await expect(addNoteScreen.titleField).toHaveText("Abra ca dabra");

    });
})