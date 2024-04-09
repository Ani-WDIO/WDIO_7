describe('',()=>{

    it('Access an activity directly',async()=>{
          await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples");
          
          await driver.pause(2500);

          await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    });

    it('Accepting Dialog Boxes',async()=>{

        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples");
          
        await $('//*[resource-id="io.appium.android.apis:id/two_buttons"]').click();

        await driver.acceptAlert();

        await expect($('//*[resource-id="android:id/alertTitle"]')).not.toExist();
    });

    it('Dismissing Dialog Boxes',async()=>{

        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples");
          
        await $('//*[resource-id="io.appium.android.apis:id/two_buttons"]').click();

        await driver.dismissAlert();

        await expect($('//*[resource-id="android:id/alertTitle"]')).not.toExist();
    });

    it.only('Get text from Dialog Boxes',async()=>{

        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples");
          
        await $('//*[resource-id="io.appium.android.apis:id/two_buttons"]').click();

        console.log("Alert Text ",await driver.getAlertText());

        await expect($('//*[resource-id="android:id/alertTitle"]')).not.toExist();
    });

})