const { click } = require("appium-uiautomator2-driver/build/lib/commands/element");

describe('Android Element Tests',()=>{
it('find element by Accessibility id',async()=>{
        //Accessibility ID

       const appOption  = await $('~App');
       await appOption.click();

       const actionBar = await $('~Action Bar');

       await expect(actionBar).toExist();
});

it('find element by Class Name',async()=>{
        const className = await $('android.widget.TextView');

        console.log(await className.getText());

        await expect(className).toHaveText("API Demos")

});

it('find element by xpath',async()=>{
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();
});

it('find multiple elements', async()=>{
    const expectedList = [
        'API Demos', "Access'ibility",
        'Accessibility', 'Animation',
        'App', 'Content',
        'Graphics', 'Media',
        'NFC', 'OS',
        'Preference', 'Text',
        'Views', "Header title"
      ]

    const actualList = []

     const textList = await $$('android.widget.TextView')

     for(const element of textList)  {
        actualList.push(await element.getText());
     }

     await expect(actualList).toEqual(expectedList)

});

it.only('working with text field',async()=>{

        await $('~Views').click();
        await driver.pause(2000);
        await $('~Auto Complete').click();
        await $('~1. Screen Top').click();

        const textfield =  await $('android.widget.AutoCompleteTextView');
        await textfield.addValue('Canada');

        await expect (textfield).toHaveText('Canada');

});

});