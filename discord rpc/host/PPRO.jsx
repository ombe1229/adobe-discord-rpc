function state(){
    try{
        var x;
        
        if (app.project.activeSequence) {
            x = app.project.activeSequence.name+" ("+ app.project.rootItem.children.numItems+ ")";
        } else {
            x = "No active sequence.";
        }

        return x
    }catch(e){
        return "";
    }
}

function details(){
    try{
        return app.project.name
    }catch(e){
        return "No file.";
    }
}

function smallImageKey(){

}

function smallImageText(){

}

function partySize(){

}

function partyMax(){

}