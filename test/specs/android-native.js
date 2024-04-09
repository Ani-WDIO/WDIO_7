describe('',()=>{

    it('Access an activity directly',async()=>{
          await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples");
          
          await driver.pause(2500);

          await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    });
})