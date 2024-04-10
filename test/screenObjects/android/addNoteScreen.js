class  AddNoteScreen{
    get skipBtn(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
    }

    get addNoteTxt(){
        return $('//*[@text="Add note"]');
    }

    get txtField(){
        return $('//*[@text="Text"]');
    }

    get editingField(){
        return $('//*[@text="Editing"]');
    }

    get editBtn(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
    }

    get titleField(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    }
}

module.exports = new AddNoteScreen();

//export default new AddNoteScreen()