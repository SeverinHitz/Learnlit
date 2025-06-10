gdjs.BattleCode = {};
gdjs.BattleCode.localVariables = [];
gdjs.BattleCode.GDEnemyObjects1= [];
gdjs.BattleCode.GDEnemyObjects2= [];
gdjs.BattleCode.GDEnemyObjects3= [];
gdjs.BattleCode.GDEnemyObjects4= [];
gdjs.BattleCode.GDEnemyObjects5= [];
gdjs.BattleCode.GDMonsterObjects1= [];
gdjs.BattleCode.GDMonsterObjects2= [];
gdjs.BattleCode.GDMonsterObjects3= [];
gdjs.BattleCode.GDMonsterObjects4= [];
gdjs.BattleCode.GDMonsterObjects5= [];
gdjs.BattleCode.GDPlayerHealthBarObjects1= [];
gdjs.BattleCode.GDPlayerHealthBarObjects2= [];
gdjs.BattleCode.GDPlayerHealthBarObjects3= [];
gdjs.BattleCode.GDPlayerHealthBarObjects4= [];
gdjs.BattleCode.GDPlayerHealthBarObjects5= [];
gdjs.BattleCode.GDEnemyHealthBarObjects1= [];
gdjs.BattleCode.GDEnemyHealthBarObjects2= [];
gdjs.BattleCode.GDEnemyHealthBarObjects3= [];
gdjs.BattleCode.GDEnemyHealthBarObjects4= [];
gdjs.BattleCode.GDEnemyHealthBarObjects5= [];
gdjs.BattleCode.GDDialogueObjects1= [];
gdjs.BattleCode.GDDialogueObjects2= [];
gdjs.BattleCode.GDDialogueObjects3= [];
gdjs.BattleCode.GDDialogueObjects4= [];
gdjs.BattleCode.GDDialogueObjects5= [];
gdjs.BattleCode.GDGrassObjects1= [];
gdjs.BattleCode.GDGrassObjects2= [];
gdjs.BattleCode.GDGrassObjects3= [];
gdjs.BattleCode.GDGrassObjects4= [];
gdjs.BattleCode.GDGrassObjects5= [];
gdjs.BattleCode.GDAttack1Objects1= [];
gdjs.BattleCode.GDAttack1Objects2= [];
gdjs.BattleCode.GDAttack1Objects3= [];
gdjs.BattleCode.GDAttack1Objects4= [];
gdjs.BattleCode.GDAttack1Objects5= [];
gdjs.BattleCode.GDAttack2Objects1= [];
gdjs.BattleCode.GDAttack2Objects2= [];
gdjs.BattleCode.GDAttack2Objects3= [];
gdjs.BattleCode.GDAttack2Objects4= [];
gdjs.BattleCode.GDAttack2Objects5= [];
gdjs.BattleCode.GDRunObjects1= [];
gdjs.BattleCode.GDRunObjects2= [];
gdjs.BattleCode.GDRunObjects3= [];
gdjs.BattleCode.GDRunObjects4= [];
gdjs.BattleCode.GDRunObjects5= [];
gdjs.BattleCode.GDBackgroundObjects1= [];
gdjs.BattleCode.GDBackgroundObjects2= [];
gdjs.BattleCode.GDBackgroundObjects3= [];
gdjs.BattleCode.GDBackgroundObjects4= [];
gdjs.BattleCode.GDBackgroundObjects5= [];
gdjs.BattleCode.GDTextBorderObjects1= [];
gdjs.BattleCode.GDTextBorderObjects2= [];
gdjs.BattleCode.GDTextBorderObjects3= [];
gdjs.BattleCode.GDTextBorderObjects4= [];
gdjs.BattleCode.GDTextBorderObjects5= [];
gdjs.BattleCode.GDGoldrute_9595TestObjects1= [];
gdjs.BattleCode.GDGoldrute_9595TestObjects2= [];
gdjs.BattleCode.GDGoldrute_9595TestObjects3= [];
gdjs.BattleCode.GDGoldrute_9595TestObjects4= [];
gdjs.BattleCode.GDGoldrute_9595TestObjects5= [];
gdjs.BattleCode.GDQuestion_9595TextObjects1= [];
gdjs.BattleCode.GDQuestion_9595TextObjects2= [];
gdjs.BattleCode.GDQuestion_9595TextObjects3= [];
gdjs.BattleCode.GDQuestion_9595TextObjects4= [];
gdjs.BattleCode.GDQuestion_9595TextObjects5= [];
gdjs.BattleCode.GDQuestion_9595BorderObjects1= [];
gdjs.BattleCode.GDQuestion_9595BorderObjects2= [];
gdjs.BattleCode.GDQuestion_9595BorderObjects3= [];
gdjs.BattleCode.GDQuestion_9595BorderObjects4= [];
gdjs.BattleCode.GDQuestion_9595BorderObjects5= [];
gdjs.BattleCode.GDAnswer1Objects1= [];
gdjs.BattleCode.GDAnswer1Objects2= [];
gdjs.BattleCode.GDAnswer1Objects3= [];
gdjs.BattleCode.GDAnswer1Objects4= [];
gdjs.BattleCode.GDAnswer1Objects5= [];
gdjs.BattleCode.GDAnswer2Objects1= [];
gdjs.BattleCode.GDAnswer2Objects2= [];
gdjs.BattleCode.GDAnswer2Objects3= [];
gdjs.BattleCode.GDAnswer2Objects4= [];
gdjs.BattleCode.GDAnswer2Objects5= [];
gdjs.BattleCode.GDAnswer3Objects1= [];
gdjs.BattleCode.GDAnswer3Objects2= [];
gdjs.BattleCode.GDAnswer3Objects3= [];
gdjs.BattleCode.GDAnswer3Objects4= [];
gdjs.BattleCode.GDAnswer3Objects5= [];
gdjs.BattleCode.GDQuestion_9595CounterObjects1= [];
gdjs.BattleCode.GDQuestion_9595CounterObjects2= [];
gdjs.BattleCode.GDQuestion_9595CounterObjects3= [];
gdjs.BattleCode.GDQuestion_9595CounterObjects4= [];
gdjs.BattleCode.GDQuestion_9595CounterObjects5= [];
gdjs.BattleCode.GDGoldrute_9595RootsObjects1= [];
gdjs.BattleCode.GDGoldrute_9595RootsObjects2= [];
gdjs.BattleCode.GDGoldrute_9595RootsObjects3= [];
gdjs.BattleCode.GDGoldrute_9595RootsObjects4= [];
gdjs.BattleCode.GDGoldrute_9595RootsObjects5= [];
gdjs.BattleCode.GDPlayer1Objects1= [];
gdjs.BattleCode.GDPlayer1Objects2= [];
gdjs.BattleCode.GDPlayer1Objects3= [];
gdjs.BattleCode.GDPlayer1Objects4= [];
gdjs.BattleCode.GDPlayer1Objects5= [];
gdjs.BattleCode.GDTransitionObjects1= [];
gdjs.BattleCode.GDTransitionObjects2= [];
gdjs.BattleCode.GDTransitionObjects3= [];
gdjs.BattleCode.GDTransitionObjects4= [];
gdjs.BattleCode.GDTransitionObjects5= [];


gdjs.BattleCode.asyncCallback17964404 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Grass"), gdjs.BattleCode.GDGrassObjects2);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.BattleCode.GDGrassObjects2.length !== 0 ? gdjs.BattleCode.GDGrassObjects2[0] : null), true, "Background", 0);
}gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.BattleCode.asyncCallback17964404(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Answer1"), gdjs.BattleCode.GDAnswer1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDAnswer1Objects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDAnswer1Objects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDAnswer1Objects2[k] = gdjs.BattleCode.GDAnswer1Objects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDAnswer1Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17968188);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.BattleCode.GDAnswer1Objects2 */
gdjs.copyArray(runtimeScene.getObjects("Answer2"), gdjs.BattleCode.GDAnswer2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Answer3"), gdjs.BattleCode.GDAnswer3Objects2);
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(1);
}{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(true);
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer1Objects2.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer1Objects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer2Objects2.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer2Objects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer3Objects2.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer3Objects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Answer2"), gdjs.BattleCode.GDAnswer2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDAnswer2Objects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDAnswer2Objects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDAnswer2Objects2[k] = gdjs.BattleCode.GDAnswer2Objects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDAnswer2Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17969940);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Answer1"), gdjs.BattleCode.GDAnswer1Objects2);
/* Reuse gdjs.BattleCode.GDAnswer2Objects2 */
gdjs.copyArray(runtimeScene.getObjects("Answer3"), gdjs.BattleCode.GDAnswer3Objects2);
{for(var i = 0, len = gdjs.BattleCode.GDAnswer3Objects2.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer3Objects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer2Objects2.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer2Objects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer1Objects2.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer1Objects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(true);
}{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(2);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Answer3"), gdjs.BattleCode.GDAnswer3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDAnswer3Objects1.length;i<l;++i) {
    if ( gdjs.BattleCode.GDAnswer3Objects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDAnswer3Objects1[k] = gdjs.BattleCode.GDAnswer3Objects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDAnswer3Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17971732);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Answer1"), gdjs.BattleCode.GDAnswer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Answer2"), gdjs.BattleCode.GDAnswer2Objects1);
/* Reuse gdjs.BattleCode.GDAnswer3Objects1 */
{for(var i = 0, len = gdjs.BattleCode.GDAnswer3Objects1.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer3Objects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer2Objects1.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer2Objects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer1Objects1.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer1Objects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(true);
}{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(3);
}}

}


};gdjs.BattleCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17974156);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Answer1"), gdjs.BattleCode.GDAnswer1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Answer2"), gdjs.BattleCode.GDAnswer2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Answer3"), gdjs.BattleCode.GDAnswer3Objects2);
gdjs.copyArray(runtimeScene.getObjects("Question_Text"), gdjs.BattleCode.GDQuestion_9595TextObjects2);
{for(var i = 0, len = gdjs.BattleCode.GDQuestion_9595TextObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDQuestion_9595TextObjects2[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Questions_Goldrute").getChild(0)));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer1Objects2.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer1Objects2[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("0").getChild(0)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer2Objects2.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer2Objects2[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("0").getChild(1)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer3Objects2.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer3Objects2[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("0").getChild(2)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.BattleCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17976180);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Answer1"), gdjs.BattleCode.GDAnswer1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Answer2"), gdjs.BattleCode.GDAnswer2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Answer3"), gdjs.BattleCode.GDAnswer3Objects2);
gdjs.copyArray(runtimeScene.getObjects("Question_Text"), gdjs.BattleCode.GDQuestion_9595TextObjects2);
{for(var i = 0, len = gdjs.BattleCode.GDQuestion_9595TextObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDQuestion_9595TextObjects2[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Questions_Goldrute").getChild(1)));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer1Objects2.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer1Objects2[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("1").getChild(0)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer2Objects2.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer2Objects2[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("1").getChild(1)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer3Objects2.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer3Objects2[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("1").getChild(2)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.BattleCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17978348);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Answer1"), gdjs.BattleCode.GDAnswer1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Answer2"), gdjs.BattleCode.GDAnswer2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Answer3"), gdjs.BattleCode.GDAnswer3Objects2);
gdjs.copyArray(runtimeScene.getObjects("Question_Text"), gdjs.BattleCode.GDQuestion_9595TextObjects2);
{for(var i = 0, len = gdjs.BattleCode.GDQuestion_9595TextObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDQuestion_9595TextObjects2[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Questions_Goldrute").getChild(2)));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer1Objects2.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer1Objects2[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("2").getChild(0)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer2Objects2.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer2Objects2[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("2").getChild(1)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer3Objects2.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer3Objects2[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("2").getChild(2)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.BattleCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17980444);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Answer1"), gdjs.BattleCode.GDAnswer1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Answer2"), gdjs.BattleCode.GDAnswer2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Answer3"), gdjs.BattleCode.GDAnswer3Objects2);
gdjs.copyArray(runtimeScene.getObjects("Question_Text"), gdjs.BattleCode.GDQuestion_9595TextObjects2);
{for(var i = 0, len = gdjs.BattleCode.GDQuestion_9595TextObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDQuestion_9595TextObjects2[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Questions_Goldrute").getChild(3)));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer1Objects2.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer1Objects2[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("3").getChild(0)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer2Objects2.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer2Objects2[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("3").getChild(1)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer3Objects2.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer3Objects2[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("3").getChild(2)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.BattleCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17982812);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Answer1"), gdjs.BattleCode.GDAnswer1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Answer2"), gdjs.BattleCode.GDAnswer2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Answer3"), gdjs.BattleCode.GDAnswer3Objects2);
gdjs.copyArray(runtimeScene.getObjects("Question_Text"), gdjs.BattleCode.GDQuestion_9595TextObjects2);
{for(var i = 0, len = gdjs.BattleCode.GDQuestion_9595TextObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDQuestion_9595TextObjects2[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Questions_Goldrute").getChild(4)));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer1Objects2.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer1Objects2[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("4").getChild(0)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer2Objects2.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer2Objects2[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("4").getChild(1)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer3Objects2.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer3Objects2[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("4").getChild(2)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.BattleCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 4);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.BattleCode.eventsList8 = function(runtimeScene) {

{


gdjs.BattleCode.eventsList7(runtimeScene);
}


};gdjs.BattleCode.asyncCallback17987508 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Answer1"), gdjs.BattleCode.GDAnswer1Objects5);

gdjs.copyArray(runtimeScene.getObjects("Answer2"), gdjs.BattleCode.GDAnswer2Objects5);
gdjs.copyArray(runtimeScene.getObjects("Answer3"), gdjs.BattleCode.GDAnswer3Objects5);
gdjs.copyArray(runtimeScene.getObjects("Question_Counter"), gdjs.BattleCode.GDQuestion_9595CounterObjects5);
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(1);
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer1Objects5.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer1Objects5[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer3Objects5.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer3Objects5[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer2Objects5.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer2Objects5[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDQuestion_9595CounterObjects5.length ;i < len;++i) {
    gdjs.BattleCode.GDQuestion_9595CounterObjects5[i].getBehavior("Text").setText("1/" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(3))));
}
}gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList9 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
/* Don't save Answer1 as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.BattleCode.asyncCallback17987508(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback17987156 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("PlayPlayerAttack");
}
{ //Subevents
gdjs.BattleCode.eventsList9(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
for (const obj of gdjs.BattleCode.GDAnswer1Objects3) asyncObjectsList.addObject("Answer1", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.6), (runtimeScene) => (gdjs.BattleCode.asyncCallback17987156(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback17990268 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Answer1"), gdjs.BattleCode.GDAnswer1Objects5);
gdjs.copyArray(runtimeScene.getObjects("Answer2"), gdjs.BattleCode.GDAnswer2Objects5);
gdjs.copyArray(runtimeScene.getObjects("Answer3"), gdjs.BattleCode.GDAnswer3Objects5);
gdjs.copyArray(runtimeScene.getObjects("Question_Counter"), gdjs.BattleCode.GDQuestion_9595CounterObjects5);
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(1);
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer1Objects5.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer1Objects5[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer3Objects5.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer3Objects5[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer2Objects5.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer2Objects5[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDQuestion_9595CounterObjects5.length ;i < len;++i) {
    gdjs.BattleCode.GDQuestion_9595CounterObjects5[i].getBehavior("Text").setText("1/" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(3))));
}
}gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList11 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.BattleCode.asyncCallback17990268(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback17989780 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("PlayEnemyAttack");
}
{ //Subevents
gdjs.BattleCode.eventsList11(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList12 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.6), (runtimeScene) => (gdjs.BattleCode.asyncCallback17989780(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback17995460 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Goldrute_Test"), gdjs.BattleCode.GDGoldrute_9595TestObjects5);

{for(var i = 0, len = gdjs.BattleCode.GDGoldrute_9595TestObjects5.length ;i < len;++i) {
    gdjs.BattleCode.GDGoldrute_9595TestObjects5[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, -(2.5), -(2.5), 0, 2, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setString("WaitEnemyChoice");
}gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList13 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
for (const obj of gdjs.BattleCode.GDGoldrute_9595TestObjects4) asyncObjectsList.addObject("Goldrute_Test", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.BattleCode.asyncCallback17995460(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback17993388 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.BattleCode.GDDialogueObjects4);
gdjs.copyArray(runtimeScene.getObjects("Goldrute_Test"), gdjs.BattleCode.GDGoldrute_9595TestObjects4);
{gdjs.evtTools.sound.playSound(runtimeScene, "Attack.wav", false, 90, gdjs.randomFloatInRange(0.9, 1));
}{for(var i = 0, len = gdjs.BattleCode.GDGoldrute_9595TestObjects4.length ;i < len;++i) {
    gdjs.BattleCode.GDGoldrute_9595TestObjects4[i].getBehavior("ShakeObject_PositionAngle").StopShaking((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDGoldrute_9595TestObjects4.length ;i < len;++i) {
    gdjs.BattleCode.GDGoldrute_9595TestObjects4[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.6, 7, 7, 5, 10, 0.2, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDGoldrute_9595TestObjects4.length ;i < len;++i) {
    gdjs.BattleCode.GDGoldrute_9595TestObjects4[i].getBehavior("Flash").Flash(0.3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDGoldrute_9595TestObjects4.length ;i < len;++i) {
    gdjs.BattleCode.GDGoldrute_9595TestObjects4[i].getBehavior("Health").Hit(10, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDDialogueObjects4.length ;i < len;++i) {
    gdjs.BattleCode.GDDialogueObjects4[i].getBehavior("Text").setText("You attacked your enemy.");
}
}
{ //Subevents
gdjs.BattleCode.eventsList13(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList14 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.BattleCode.asyncCallback17993388(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback17993292 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Monster"), gdjs.BattleCode.GDMonsterObjects3);

{for(var i = 0, len = gdjs.BattleCode.GDMonsterObjects3.length ;i < len;++i) {
    gdjs.BattleCode.GDMonsterObjects3[i].getBehavior("Tween").addObjectPositionTween2("BackUp", (gdjs.BattleCode.GDMonsterObjects3[i].getPointX("")) + 67, (gdjs.BattleCode.GDMonsterObjects3[i].getPointY("")), "easeInQuad", 0.1, false);
}
}
{ //Subevents
gdjs.BattleCode.eventsList14(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList15 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
for (const obj of gdjs.BattleCode.GDMonsterObjects2) asyncObjectsList.addObject("Monster", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.BattleCode.asyncCallback17993292(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17992852);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.BattleCode.GDMonsterObjects2);
{for(var i = 0, len = gdjs.BattleCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDMonsterObjects2[i].getBehavior("Tween").addObjectPositionTween2("BackUp", (gdjs.BattleCode.GDMonsterObjects2[i].getPointX("")) - 67, (gdjs.BattleCode.GDMonsterObjects2[i].getPointY("")), "easeOutQuad", 0.5, false);
}
}
{ //Subevents
gdjs.BattleCode.eventsList15(runtimeScene);} //End of subevents
}

}


};gdjs.BattleCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Answer1"), gdjs.BattleCode.GDAnswer1Objects3);
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-achievement-bell-600.wav", false, 20, gdjs.randomFloatInRange(0.8, 0.9));
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer1Objects3.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer1Objects3[i].getBehavior("Effect").enableEffect("Outline", true);
}
}{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(false);
}
{ //Subevents
gdjs.BattleCode.eventsList10(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() != 1);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-negative-answer-lose-2032.wav", false, 20, gdjs.randomFloatInRange(0.8, 0.9));
}{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(false);
}
{ //Subevents
gdjs.BattleCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "PlayPlayerAttack");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList16(runtimeScene);} //End of subevents
}

}


};gdjs.BattleCode.eventsList18 = function(runtimeScene) {

{


gdjs.BattleCode.eventsList17(runtimeScene);
}


};gdjs.BattleCode.asyncCallback17999164 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Answer1"), gdjs.BattleCode.GDAnswer1Objects5);

gdjs.copyArray(runtimeScene.getObjects("Answer2"), gdjs.BattleCode.GDAnswer2Objects5);
gdjs.copyArray(runtimeScene.getObjects("Answer3"), gdjs.BattleCode.GDAnswer3Objects5);
gdjs.copyArray(runtimeScene.getObjects("Question_Counter"), gdjs.BattleCode.GDQuestion_9595CounterObjects5);
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(2);
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer1Objects5.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer1Objects5[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer3Objects5.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer3Objects5[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer2Objects5.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer2Objects5[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDQuestion_9595CounterObjects5.length ;i < len;++i) {
    gdjs.BattleCode.GDQuestion_9595CounterObjects5[i].getBehavior("Text").setText("2/" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(3))));
}
}gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList19 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
/* Don't save Answer1 as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.BattleCode.asyncCallback17999164(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback17998812 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("PlayPlayerAttack");
}
{ //Subevents
gdjs.BattleCode.eventsList19(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList20 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
for (const obj of gdjs.BattleCode.GDAnswer1Objects3) asyncObjectsList.addObject("Answer1", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.6), (runtimeScene) => (gdjs.BattleCode.asyncCallback17998812(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback18001924 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Answer1"), gdjs.BattleCode.GDAnswer1Objects5);
gdjs.copyArray(runtimeScene.getObjects("Answer2"), gdjs.BattleCode.GDAnswer2Objects5);
gdjs.copyArray(runtimeScene.getObjects("Answer3"), gdjs.BattleCode.GDAnswer3Objects5);
gdjs.copyArray(runtimeScene.getObjects("Question_Counter"), gdjs.BattleCode.GDQuestion_9595CounterObjects5);
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(2);
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer1Objects5.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer1Objects5[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer3Objects5.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer3Objects5[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer2Objects5.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer2Objects5[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDQuestion_9595CounterObjects5.length ;i < len;++i) {
    gdjs.BattleCode.GDQuestion_9595CounterObjects5[i].getBehavior("Text").setText("2/" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(3))));
}
}gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList21 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.BattleCode.asyncCallback18001924(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback18001436 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("PlayEnemyAttack");
}
{ //Subevents
gdjs.BattleCode.eventsList21(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList22 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.6), (runtimeScene) => (gdjs.BattleCode.asyncCallback18001436(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback18007116 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Goldrute_Test"), gdjs.BattleCode.GDGoldrute_9595TestObjects5);

{for(var i = 0, len = gdjs.BattleCode.GDGoldrute_9595TestObjects5.length ;i < len;++i) {
    gdjs.BattleCode.GDGoldrute_9595TestObjects5[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, -(2.5), -(2.5), 0, 2, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setString("WaitEnemyChoice");
}gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList23 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
for (const obj of gdjs.BattleCode.GDGoldrute_9595TestObjects4) asyncObjectsList.addObject("Goldrute_Test", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.BattleCode.asyncCallback18007116(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback18005044 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.BattleCode.GDDialogueObjects4);
gdjs.copyArray(runtimeScene.getObjects("Goldrute_Test"), gdjs.BattleCode.GDGoldrute_9595TestObjects4);
{gdjs.evtTools.sound.playSound(runtimeScene, "Attack.wav", false, 90, gdjs.randomFloatInRange(0.9, 1));
}{for(var i = 0, len = gdjs.BattleCode.GDGoldrute_9595TestObjects4.length ;i < len;++i) {
    gdjs.BattleCode.GDGoldrute_9595TestObjects4[i].getBehavior("ShakeObject_PositionAngle").StopShaking((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDGoldrute_9595TestObjects4.length ;i < len;++i) {
    gdjs.BattleCode.GDGoldrute_9595TestObjects4[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.6, 7, 7, 5, 10, 0.2, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDGoldrute_9595TestObjects4.length ;i < len;++i) {
    gdjs.BattleCode.GDGoldrute_9595TestObjects4[i].getBehavior("Flash").Flash(0.3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDGoldrute_9595TestObjects4.length ;i < len;++i) {
    gdjs.BattleCode.GDGoldrute_9595TestObjects4[i].getBehavior("Health").Hit(10, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDDialogueObjects4.length ;i < len;++i) {
    gdjs.BattleCode.GDDialogueObjects4[i].getBehavior("Text").setText("You attacked your enemy.");
}
}
{ //Subevents
gdjs.BattleCode.eventsList23(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList24 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.BattleCode.asyncCallback18005044(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback18004948 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Monster"), gdjs.BattleCode.GDMonsterObjects3);

{for(var i = 0, len = gdjs.BattleCode.GDMonsterObjects3.length ;i < len;++i) {
    gdjs.BattleCode.GDMonsterObjects3[i].getBehavior("Tween").addObjectPositionTween2("BackUp", (gdjs.BattleCode.GDMonsterObjects3[i].getPointX("")) + 67, (gdjs.BattleCode.GDMonsterObjects3[i].getPointY("")), "easeInQuad", 0.1, false);
}
}
{ //Subevents
gdjs.BattleCode.eventsList24(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList25 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
for (const obj of gdjs.BattleCode.GDMonsterObjects2) asyncObjectsList.addObject("Monster", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.BattleCode.asyncCallback18004948(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.eventsList26 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18004508);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.BattleCode.GDMonsterObjects2);
{for(var i = 0, len = gdjs.BattleCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDMonsterObjects2[i].getBehavior("Tween").addObjectPositionTween2("BackUp", (gdjs.BattleCode.GDMonsterObjects2[i].getPointX("")) - 67, (gdjs.BattleCode.GDMonsterObjects2[i].getPointY("")), "easeOutQuad", 0.5, false);
}
}
{ //Subevents
gdjs.BattleCode.eventsList25(runtimeScene);} //End of subevents
}

}


};gdjs.BattleCode.eventsList27 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Answer1"), gdjs.BattleCode.GDAnswer1Objects3);
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-achievement-bell-600.wav", false, 20, gdjs.randomFloatInRange(0.8, 0.9));
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer1Objects3.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer1Objects3[i].getBehavior("Effect").enableEffect("Outline", true);
}
}{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(false);
}
{ //Subevents
gdjs.BattleCode.eventsList20(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() != 1);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-negative-answer-lose-2032.wav", false, 20, gdjs.randomFloatInRange(0.8, 0.9));
}{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(false);
}
{ //Subevents
gdjs.BattleCode.eventsList22(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "PlayPlayerAttack");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList26(runtimeScene);} //End of subevents
}

}


};gdjs.BattleCode.eventsList28 = function(runtimeScene) {

{


gdjs.BattleCode.eventsList27(runtimeScene);
}


};gdjs.BattleCode.asyncCallback18010684 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Answer1"), gdjs.BattleCode.GDAnswer1Objects5);

gdjs.copyArray(runtimeScene.getObjects("Answer2"), gdjs.BattleCode.GDAnswer2Objects5);
gdjs.copyArray(runtimeScene.getObjects("Answer3"), gdjs.BattleCode.GDAnswer3Objects5);
gdjs.copyArray(runtimeScene.getObjects("Question_Counter"), gdjs.BattleCode.GDQuestion_9595CounterObjects5);
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(3);
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer1Objects5.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer1Objects5[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer3Objects5.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer3Objects5[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer2Objects5.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer2Objects5[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDQuestion_9595CounterObjects5.length ;i < len;++i) {
    gdjs.BattleCode.GDQuestion_9595CounterObjects5[i].getBehavior("Text").setText("3/" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(3))));
}
}gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList29 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
/* Don't save Answer1 as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.BattleCode.asyncCallback18010684(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback18009564 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("PlayPlayerAttack");
}
{ //Subevents
gdjs.BattleCode.eventsList29(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList30 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
for (const obj of gdjs.BattleCode.GDAnswer1Objects3) asyncObjectsList.addObject("Answer1", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.6), (runtimeScene) => (gdjs.BattleCode.asyncCallback18009564(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback18013604 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Answer1"), gdjs.BattleCode.GDAnswer1Objects5);
gdjs.copyArray(runtimeScene.getObjects("Answer2"), gdjs.BattleCode.GDAnswer2Objects5);
gdjs.copyArray(runtimeScene.getObjects("Answer3"), gdjs.BattleCode.GDAnswer3Objects5);
gdjs.copyArray(runtimeScene.getObjects("Question_Counter"), gdjs.BattleCode.GDQuestion_9595CounterObjects5);
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(3);
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer1Objects5.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer1Objects5[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer3Objects5.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer3Objects5[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer2Objects5.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer2Objects5[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDQuestion_9595CounterObjects5.length ;i < len;++i) {
    gdjs.BattleCode.GDQuestion_9595CounterObjects5[i].getBehavior("Text").setText("3/" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(3))));
}
}gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList31 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.BattleCode.asyncCallback18013604(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback18013220 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("PlayEnemyAttack");
}
{ //Subevents
gdjs.BattleCode.eventsList31(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList32 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.6), (runtimeScene) => (gdjs.BattleCode.asyncCallback18013220(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback18018828 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Goldrute_Test"), gdjs.BattleCode.GDGoldrute_9595TestObjects5);

{for(var i = 0, len = gdjs.BattleCode.GDGoldrute_9595TestObjects5.length ;i < len;++i) {
    gdjs.BattleCode.GDGoldrute_9595TestObjects5[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, -(2.5), -(2.5), 0, 2, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setString("WaitEnemyChoice");
}gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList33 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
for (const obj of gdjs.BattleCode.GDGoldrute_9595TestObjects4) asyncObjectsList.addObject("Goldrute_Test", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.BattleCode.asyncCallback18018828(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback18016732 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.BattleCode.GDDialogueObjects4);
gdjs.copyArray(runtimeScene.getObjects("Goldrute_Test"), gdjs.BattleCode.GDGoldrute_9595TestObjects4);
{gdjs.evtTools.sound.playSound(runtimeScene, "Attack.wav", false, 90, gdjs.randomFloatInRange(0.9, 1));
}{for(var i = 0, len = gdjs.BattleCode.GDGoldrute_9595TestObjects4.length ;i < len;++i) {
    gdjs.BattleCode.GDGoldrute_9595TestObjects4[i].getBehavior("ShakeObject_PositionAngle").StopShaking((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDGoldrute_9595TestObjects4.length ;i < len;++i) {
    gdjs.BattleCode.GDGoldrute_9595TestObjects4[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.6, 7, 7, 5, 10, 0.2, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDGoldrute_9595TestObjects4.length ;i < len;++i) {
    gdjs.BattleCode.GDGoldrute_9595TestObjects4[i].getBehavior("Flash").Flash(0.3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDGoldrute_9595TestObjects4.length ;i < len;++i) {
    gdjs.BattleCode.GDGoldrute_9595TestObjects4[i].getBehavior("Health").Hit(10, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDDialogueObjects4.length ;i < len;++i) {
    gdjs.BattleCode.GDDialogueObjects4[i].getBehavior("Text").setText("You attacked your enemy.");
}
}
{ //Subevents
gdjs.BattleCode.eventsList33(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList34 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.BattleCode.asyncCallback18016732(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback18016636 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player1"), gdjs.BattleCode.GDPlayer1Objects3);

{for(var i = 0, len = gdjs.BattleCode.GDPlayer1Objects3.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayer1Objects3[i].getBehavior("Tween").addObjectPositionTween2("BackUp", (gdjs.BattleCode.GDPlayer1Objects3[i].getPointX("")) + 67, (gdjs.BattleCode.GDPlayer1Objects3[i].getPointY("")), "easeInQuad", 0.1, false);
}
}
{ //Subevents
gdjs.BattleCode.eventsList34(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList35 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
for (const obj of gdjs.BattleCode.GDPlayer1Objects2) asyncObjectsList.addObject("Player1", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.BattleCode.asyncCallback18016636(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.eventsList36 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18016196);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.BattleCode.GDPlayer1Objects2);
{for(var i = 0, len = gdjs.BattleCode.GDPlayer1Objects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayer1Objects2[i].getBehavior("Tween").addObjectPositionTween2("BackUp", (gdjs.BattleCode.GDPlayer1Objects2[i].getPointX("")) - 67, (gdjs.BattleCode.GDPlayer1Objects2[i].getPointY("")), "easeOutQuad", 0.5, false);
}
}
{ //Subevents
gdjs.BattleCode.eventsList35(runtimeScene);} //End of subevents
}

}


};gdjs.BattleCode.eventsList37 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Answer1"), gdjs.BattleCode.GDAnswer1Objects3);
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-achievement-bell-600.wav", false, 20, gdjs.randomFloatInRange(0.8, 0.9));
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer1Objects3.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer1Objects3[i].getBehavior("Effect").enableEffect("Outline", true);
}
}{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(false);
}
{ //Subevents
gdjs.BattleCode.eventsList30(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() != 1);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-negative-answer-lose-2032.wav", false, 20, gdjs.randomFloatInRange(0.8, 0.9));
}{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(false);
}
{ //Subevents
gdjs.BattleCode.eventsList32(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "PlayPlayerAttack");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList36(runtimeScene);} //End of subevents
}

}


};gdjs.BattleCode.eventsList38 = function(runtimeScene) {

{


gdjs.BattleCode.eventsList37(runtimeScene);
}


};gdjs.BattleCode.asyncCallback18022396 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Answer1"), gdjs.BattleCode.GDAnswer1Objects5);

gdjs.copyArray(runtimeScene.getObjects("Answer2"), gdjs.BattleCode.GDAnswer2Objects5);
gdjs.copyArray(runtimeScene.getObjects("Answer3"), gdjs.BattleCode.GDAnswer3Objects5);
gdjs.copyArray(runtimeScene.getObjects("Question_Counter"), gdjs.BattleCode.GDQuestion_9595CounterObjects5);
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(4);
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer1Objects5.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer1Objects5[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer3Objects5.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer3Objects5[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer2Objects5.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer2Objects5[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDQuestion_9595CounterObjects5.length ;i < len;++i) {
    gdjs.BattleCode.GDQuestion_9595CounterObjects5[i].getBehavior("Text").setText("4/" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(3))));
}
}gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList39 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
/* Don't save Answer1 as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.BattleCode.asyncCallback18022396(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback18021276 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("PlayPlayerAttack");
}
{ //Subevents
gdjs.BattleCode.eventsList39(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList40 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
for (const obj of gdjs.BattleCode.GDAnswer1Objects3) asyncObjectsList.addObject("Answer1", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.6), (runtimeScene) => (gdjs.BattleCode.asyncCallback18021276(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback18025316 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Answer1"), gdjs.BattleCode.GDAnswer1Objects5);
gdjs.copyArray(runtimeScene.getObjects("Answer2"), gdjs.BattleCode.GDAnswer2Objects5);
gdjs.copyArray(runtimeScene.getObjects("Answer3"), gdjs.BattleCode.GDAnswer3Objects5);
gdjs.copyArray(runtimeScene.getObjects("Question_Counter"), gdjs.BattleCode.GDQuestion_9595CounterObjects5);
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(4);
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer1Objects5.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer1Objects5[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer3Objects5.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer3Objects5[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer2Objects5.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer2Objects5[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDQuestion_9595CounterObjects5.length ;i < len;++i) {
    gdjs.BattleCode.GDQuestion_9595CounterObjects5[i].getBehavior("Text").setText("4/" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(3))));
}
}gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList41 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.BattleCode.asyncCallback18025316(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback18024932 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("PlayEnemyAttack");
}
{ //Subevents
gdjs.BattleCode.eventsList41(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList42 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.6), (runtimeScene) => (gdjs.BattleCode.asyncCallback18024932(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback18030540 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Goldrute_Test"), gdjs.BattleCode.GDGoldrute_9595TestObjects5);

{for(var i = 0, len = gdjs.BattleCode.GDGoldrute_9595TestObjects5.length ;i < len;++i) {
    gdjs.BattleCode.GDGoldrute_9595TestObjects5[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, -(2.5), -(2.5), 0, 2, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setString("WaitEnemyChoice");
}gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList43 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
for (const obj of gdjs.BattleCode.GDGoldrute_9595TestObjects4) asyncObjectsList.addObject("Goldrute_Test", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.BattleCode.asyncCallback18030540(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback18028444 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.BattleCode.GDDialogueObjects4);
gdjs.copyArray(runtimeScene.getObjects("Goldrute_Test"), gdjs.BattleCode.GDGoldrute_9595TestObjects4);
{gdjs.evtTools.sound.playSound(runtimeScene, "Attack.wav", false, 90, gdjs.randomFloatInRange(0.9, 1));
}{for(var i = 0, len = gdjs.BattleCode.GDGoldrute_9595TestObjects4.length ;i < len;++i) {
    gdjs.BattleCode.GDGoldrute_9595TestObjects4[i].getBehavior("ShakeObject_PositionAngle").StopShaking((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDGoldrute_9595TestObjects4.length ;i < len;++i) {
    gdjs.BattleCode.GDGoldrute_9595TestObjects4[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.6, 7, 7, 5, 10, 0.2, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDGoldrute_9595TestObjects4.length ;i < len;++i) {
    gdjs.BattleCode.GDGoldrute_9595TestObjects4[i].getBehavior("Flash").Flash(0.3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDGoldrute_9595TestObjects4.length ;i < len;++i) {
    gdjs.BattleCode.GDGoldrute_9595TestObjects4[i].getBehavior("Health").Hit(10, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDDialogueObjects4.length ;i < len;++i) {
    gdjs.BattleCode.GDDialogueObjects4[i].getBehavior("Text").setText("You attacked your enemy.");
}
}
{ //Subevents
gdjs.BattleCode.eventsList43(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList44 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.BattleCode.asyncCallback18028444(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback18028348 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player1"), gdjs.BattleCode.GDPlayer1Objects3);

{for(var i = 0, len = gdjs.BattleCode.GDPlayer1Objects3.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayer1Objects3[i].getBehavior("Tween").addObjectPositionTween2("BackUp", (gdjs.BattleCode.GDPlayer1Objects3[i].getPointX("")) + 67, (gdjs.BattleCode.GDPlayer1Objects3[i].getPointY("")), "easeInQuad", 0.1, false);
}
}
{ //Subevents
gdjs.BattleCode.eventsList44(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList45 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
for (const obj of gdjs.BattleCode.GDPlayer1Objects2) asyncObjectsList.addObject("Player1", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.BattleCode.asyncCallback18028348(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.eventsList46 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18027908);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.BattleCode.GDPlayer1Objects2);
{for(var i = 0, len = gdjs.BattleCode.GDPlayer1Objects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayer1Objects2[i].getBehavior("Tween").addObjectPositionTween2("BackUp", (gdjs.BattleCode.GDPlayer1Objects2[i].getPointX("")) - 67, (gdjs.BattleCode.GDPlayer1Objects2[i].getPointY("")), "easeOutQuad", 0.5, false);
}
}
{ //Subevents
gdjs.BattleCode.eventsList45(runtimeScene);} //End of subevents
}

}


};gdjs.BattleCode.eventsList47 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Answer1"), gdjs.BattleCode.GDAnswer1Objects3);
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-achievement-bell-600.wav", false, 20, gdjs.randomFloatInRange(0.8, 0.9));
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer1Objects3.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer1Objects3[i].getBehavior("Effect").enableEffect("Outline", true);
}
}{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(false);
}
{ //Subevents
gdjs.BattleCode.eventsList40(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() != 1);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-negative-answer-lose-2032.wav", false, 20, gdjs.randomFloatInRange(0.8, 0.9));
}{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(false);
}
{ //Subevents
gdjs.BattleCode.eventsList42(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "PlayPlayerAttack");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList46(runtimeScene);} //End of subevents
}

}


};gdjs.BattleCode.eventsList48 = function(runtimeScene) {

{


gdjs.BattleCode.eventsList47(runtimeScene);
}


};gdjs.BattleCode.asyncCallback18034244 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Answer1"), gdjs.BattleCode.GDAnswer1Objects5);

gdjs.copyArray(runtimeScene.getObjects("Answer2"), gdjs.BattleCode.GDAnswer2Objects5);
gdjs.copyArray(runtimeScene.getObjects("Answer3"), gdjs.BattleCode.GDAnswer3Objects5);
gdjs.copyArray(runtimeScene.getObjects("Question_Counter"), gdjs.BattleCode.GDQuestion_9595CounterObjects5);
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(5);
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer1Objects5.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer1Objects5[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer3Objects5.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer3Objects5[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer2Objects5.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer2Objects5[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDQuestion_9595CounterObjects5.length ;i < len;++i) {
    gdjs.BattleCode.GDQuestion_9595CounterObjects5[i].getBehavior("Text").setText("5/" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(3))));
}
}gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList49 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
/* Don't save Answer1 as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.BattleCode.asyncCallback18034244(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback18033892 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("PlayPlayerAttack");
}
{ //Subevents
gdjs.BattleCode.eventsList49(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList50 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
for (const obj of gdjs.BattleCode.GDAnswer1Objects3) asyncObjectsList.addObject("Answer1", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.6), (runtimeScene) => (gdjs.BattleCode.asyncCallback18033892(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback18037004 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Answer1"), gdjs.BattleCode.GDAnswer1Objects5);
gdjs.copyArray(runtimeScene.getObjects("Answer2"), gdjs.BattleCode.GDAnswer2Objects5);
gdjs.copyArray(runtimeScene.getObjects("Answer3"), gdjs.BattleCode.GDAnswer3Objects5);
gdjs.copyArray(runtimeScene.getObjects("Question_Counter"), gdjs.BattleCode.GDQuestion_9595CounterObjects5);
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(5);
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer1Objects5.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer1Objects5[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer3Objects5.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer3Objects5[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer2Objects5.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer2Objects5[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDQuestion_9595CounterObjects5.length ;i < len;++i) {
    gdjs.BattleCode.GDQuestion_9595CounterObjects5[i].getBehavior("Text").setText("5/" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(3))));
}
}gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList51 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.BattleCode.asyncCallback18037004(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback18036516 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("PlayEnemyAttack");
}
{ //Subevents
gdjs.BattleCode.eventsList51(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList52 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.6), (runtimeScene) => (gdjs.BattleCode.asyncCallback18036516(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback18042196 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Goldrute_Test"), gdjs.BattleCode.GDGoldrute_9595TestObjects5);

{for(var i = 0, len = gdjs.BattleCode.GDGoldrute_9595TestObjects5.length ;i < len;++i) {
    gdjs.BattleCode.GDGoldrute_9595TestObjects5[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, -(2.5), -(2.5), 0, 2, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setString("WaitEnemyChoice");
}gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList53 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
for (const obj of gdjs.BattleCode.GDGoldrute_9595TestObjects4) asyncObjectsList.addObject("Goldrute_Test", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.BattleCode.asyncCallback18042196(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback18040124 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.BattleCode.GDDialogueObjects4);
gdjs.copyArray(runtimeScene.getObjects("Goldrute_Test"), gdjs.BattleCode.GDGoldrute_9595TestObjects4);
{gdjs.evtTools.sound.playSound(runtimeScene, "Attack.wav", false, 90, gdjs.randomFloatInRange(0.9, 1));
}{for(var i = 0, len = gdjs.BattleCode.GDGoldrute_9595TestObjects4.length ;i < len;++i) {
    gdjs.BattleCode.GDGoldrute_9595TestObjects4[i].getBehavior("ShakeObject_PositionAngle").StopShaking((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDGoldrute_9595TestObjects4.length ;i < len;++i) {
    gdjs.BattleCode.GDGoldrute_9595TestObjects4[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.6, 7, 7, 5, 10, 0.2, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDGoldrute_9595TestObjects4.length ;i < len;++i) {
    gdjs.BattleCode.GDGoldrute_9595TestObjects4[i].getBehavior("Flash").Flash(0.3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDGoldrute_9595TestObjects4.length ;i < len;++i) {
    gdjs.BattleCode.GDGoldrute_9595TestObjects4[i].getBehavior("Health").Hit(10, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDDialogueObjects4.length ;i < len;++i) {
    gdjs.BattleCode.GDDialogueObjects4[i].getBehavior("Text").setText("You attacked your enemy.");
}
}
{ //Subevents
gdjs.BattleCode.eventsList53(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList54 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.BattleCode.asyncCallback18040124(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback18040028 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player1"), gdjs.BattleCode.GDPlayer1Objects3);

{for(var i = 0, len = gdjs.BattleCode.GDPlayer1Objects3.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayer1Objects3[i].getBehavior("Tween").addObjectPositionTween2("BackUp", (gdjs.BattleCode.GDPlayer1Objects3[i].getPointX("")) + 67, (gdjs.BattleCode.GDPlayer1Objects3[i].getPointY("")), "easeInQuad", 0.1, false);
}
}
{ //Subevents
gdjs.BattleCode.eventsList54(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList55 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
for (const obj of gdjs.BattleCode.GDPlayer1Objects2) asyncObjectsList.addObject("Player1", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.BattleCode.asyncCallback18040028(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.eventsList56 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18039588);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.BattleCode.GDPlayer1Objects2);
{for(var i = 0, len = gdjs.BattleCode.GDPlayer1Objects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayer1Objects2[i].getBehavior("Tween").addObjectPositionTween2("BackUp", (gdjs.BattleCode.GDPlayer1Objects2[i].getPointX("")) - 67, (gdjs.BattleCode.GDPlayer1Objects2[i].getPointY("")), "easeOutQuad", 0.5, false);
}
}
{ //Subevents
gdjs.BattleCode.eventsList55(runtimeScene);} //End of subevents
}

}


};gdjs.BattleCode.eventsList57 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Answer1"), gdjs.BattleCode.GDAnswer1Objects3);
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-achievement-bell-600.wav", false, 20, gdjs.randomFloatInRange(0.8, 0.9));
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer1Objects3.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer1Objects3[i].getBehavior("Effect").enableEffect("Outline", true);
}
}{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(false);
}
{ //Subevents
gdjs.BattleCode.eventsList50(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() != 1);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-negative-answer-lose-2032.wav", false, 20, gdjs.randomFloatInRange(0.8, 0.9));
}{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(false);
}
{ //Subevents
gdjs.BattleCode.eventsList52(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "PlayPlayerAttack");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList56(runtimeScene);} //End of subevents
}

}


};gdjs.BattleCode.eventsList58 = function(runtimeScene) {

{


gdjs.BattleCode.eventsList57(runtimeScene);
}


};gdjs.BattleCode.eventsList59 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(6).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17985612);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList18(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(6).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17997316);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList28(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(6).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18008972);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList38(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(6).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18019924);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList48(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(6).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18032396);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList58(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.BattleCode.eventsList60 = function(runtimeScene) {

{


gdjs.BattleCode.eventsList59(runtimeScene);
}


};gdjs.BattleCode.eventsList61 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("EnemyHealthBar"), gdjs.BattleCode.GDEnemyHealthBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Goldrute_Test"), gdjs.BattleCode.GDGoldrute_9595TestObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.BattleCode.GDPlayer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerHealthBar"), gdjs.BattleCode.GDPlayerHealthBarObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDPlayerHealthBarObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerHealthBarObjects1[i].SetValue((( gdjs.BattleCode.GDPlayer1Objects1.length === 0 ) ? 0 :gdjs.BattleCode.GDPlayer1Objects1[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDEnemyHealthBarObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDEnemyHealthBarObjects1[i].SetValue((( gdjs.BattleCode.GDGoldrute_9595TestObjects1.length === 0 ) ? 0 :gdjs.BattleCode.GDGoldrute_9595TestObjects1[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.BattleCode.eventsList62 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Attack1"), gdjs.BattleCode.GDAttack1Objects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDAttack1Objects3.length;i<l;++i) {
    if ( gdjs.BattleCode.GDAttack1Objects3[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDAttack1Objects3[k] = gdjs.BattleCode.GDAttack1Objects3[i];
        ++k;
    }
}
gdjs.BattleCode.GDAttack1Objects3.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("PlayPlayerAttack");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Run"), gdjs.BattleCode.GDRunObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDRunObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDRunObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDRunObjects2[k] = gdjs.BattleCode.GDRunObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDRunObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};gdjs.BattleCode.asyncCallback18050100 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Goldrute_Test"), gdjs.BattleCode.GDGoldrute_9595TestObjects4);

{for(var i = 0, len = gdjs.BattleCode.GDGoldrute_9595TestObjects4.length ;i < len;++i) {
    gdjs.BattleCode.GDGoldrute_9595TestObjects4[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, -(2.5), -(2.5), 0, 2, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setString("WaitEnemyChoice");
}gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList63 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
for (const obj of gdjs.BattleCode.GDGoldrute_9595TestObjects3) asyncObjectsList.addObject("Goldrute_Test", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.BattleCode.asyncCallback18050100(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback18048644 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Goldrute_Test"), gdjs.BattleCode.GDGoldrute_9595TestObjects3);
{gdjs.evtTools.sound.playSound(runtimeScene, "Attack.wav", false, 90, gdjs.randomFloatInRange(0.9, 1));
}{for(var i = 0, len = gdjs.BattleCode.GDGoldrute_9595TestObjects3.length ;i < len;++i) {
    gdjs.BattleCode.GDGoldrute_9595TestObjects3[i].getBehavior("ShakeObject_PositionAngle").StopShaking((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDGoldrute_9595TestObjects3.length ;i < len;++i) {
    gdjs.BattleCode.GDGoldrute_9595TestObjects3[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.6, 7, 7, 5, 10, 0.2, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDGoldrute_9595TestObjects3.length ;i < len;++i) {
    gdjs.BattleCode.GDGoldrute_9595TestObjects3[i].getBehavior("Flash").Flash(0.3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDGoldrute_9595TestObjects3.length ;i < len;++i) {
    gdjs.BattleCode.GDGoldrute_9595TestObjects3[i].getBehavior("Health").Hit(10, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.BattleCode.eventsList63(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList64 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.BattleCode.asyncCallback18048644(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback18048572 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player1"), gdjs.BattleCode.GDPlayer1Objects2);

{for(var i = 0, len = gdjs.BattleCode.GDPlayer1Objects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayer1Objects2[i].getBehavior("Tween").addObjectPositionTween2("BackUp", (gdjs.BattleCode.GDPlayer1Objects2[i].getPointX("")) + 67, (gdjs.BattleCode.GDPlayer1Objects2[i].getPointY("")), "easeInQuad", 0.1, false);
}
}
{ //Subevents
gdjs.BattleCode.eventsList64(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList65 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
for (const obj of gdjs.BattleCode.GDPlayer1Objects1) asyncObjectsList.addObject("Player1", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.BattleCode.asyncCallback18048572(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.eventsList66 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18048436);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.BattleCode.GDPlayer1Objects1);
{for(var i = 0, len = gdjs.BattleCode.GDPlayer1Objects1.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayer1Objects1[i].getBehavior("Tween").addObjectPositionTween2("BackUp", (gdjs.BattleCode.GDPlayer1Objects1[i].getPointX("")) - 67, (gdjs.BattleCode.GDPlayer1Objects1[i].getPointY("")), "easeOutQuad", 0.5, false);
}
}
{ //Subevents
gdjs.BattleCode.eventsList65(runtimeScene);} //End of subevents
}

}


};gdjs.BattleCode.eventsList67 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Attack1"), gdjs.BattleCode.GDAttack1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Attack2"), gdjs.BattleCode.GDAttack2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Run"), gdjs.BattleCode.GDRunObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDAttack1Objects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDAttack1Objects2[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDAttack1Objects2[k] = gdjs.BattleCode.GDAttack1Objects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDAttack1Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDAttack2Objects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDAttack2Objects2[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDAttack2Objects2[k] = gdjs.BattleCode.GDAttack2Objects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDAttack2Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDRunObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDRunObjects2[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDRunObjects2[k] = gdjs.BattleCode.GDRunObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDRunObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "HoverSound.wav", false, 20, gdjs.randomFloatInRange(0.8, 0.9));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "WaitPlayerChoice");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList62(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "PlayPlayerAttack");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList66(runtimeScene);} //End of subevents
}

}


};gdjs.BattleCode.asyncCallback18054900 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player1"), gdjs.BattleCode.GDPlayer1Objects4);

{for(var i = 0, len = gdjs.BattleCode.GDPlayer1Objects4.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayer1Objects4[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 3.5, 3.5, 0, 2, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setString("WaitPlayerChoice");
}gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList68 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
for (const obj of gdjs.BattleCode.GDPlayer1Objects3) asyncObjectsList.addObject("Player1", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.BattleCode.asyncCallback18054900(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback18053852 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.BattleCode.GDPlayer1Objects3);
{gdjs.evtTools.sound.playSound(runtimeScene, "Attack.wav", false, 90, gdjs.randomFloatInRange(0.9, 1));
}{for(var i = 0, len = gdjs.BattleCode.GDPlayer1Objects3.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayer1Objects3[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.6, 7, 7, 5, 10, 0.2, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDPlayer1Objects3.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayer1Objects3[i].getBehavior("Flash").Flash(0.3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDPlayer1Objects3.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayer1Objects3[i].getBehavior("Health").Hit(10, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.BattleCode.eventsList68(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList69 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.BattleCode.asyncCallback18053852(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback18053092 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Goldrute_Test"), gdjs.BattleCode.GDGoldrute_9595TestObjects2);

{for(var i = 0, len = gdjs.BattleCode.GDGoldrute_9595TestObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDGoldrute_9595TestObjects2[i].getBehavior("Tween").addObjectPositionTween2("BackUp", (gdjs.BattleCode.GDGoldrute_9595TestObjects2[i].getPointX("")) - 67, (gdjs.BattleCode.GDGoldrute_9595TestObjects2[i].getPointY("")), "easeInQuad", 0.1, false);
}
}
{ //Subevents
gdjs.BattleCode.eventsList69(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList70 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
for (const obj of gdjs.BattleCode.GDGoldrute_9595TestObjects1) asyncObjectsList.addObject("Goldrute_Test", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.BattleCode.asyncCallback18053092(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.eventsList71 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18052908);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Goldrute_Test"), gdjs.BattleCode.GDGoldrute_9595TestObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDGoldrute_9595TestObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDGoldrute_9595TestObjects1[i].getBehavior("Tween").addObjectPositionTween2("BackUp", (gdjs.BattleCode.GDGoldrute_9595TestObjects1[i].getPointX("")) + 67, (gdjs.BattleCode.GDGoldrute_9595TestObjects1[i].getPointY("")), "easeOutQuad", 0.5, false);
}
}
{ //Subevents
gdjs.BattleCode.eventsList70(runtimeScene);} //End of subevents
}

}


};gdjs.BattleCode.eventsList72 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "PlayEnemyAttack");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList71(runtimeScene);} //End of subevents
}

}


};gdjs.BattleCode.asyncCallback18058524 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList73 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3.5), (runtimeScene) => (gdjs.BattleCode.asyncCallback18058524(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback18057844 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-small-win-2020_battlewin.wav", false, 20, gdjs.randomFloatInRange(0.8, 0.9));
}
{ //Subevents
gdjs.BattleCode.eventsList73(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList74 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.BattleCode.asyncCallback18057844(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.eventsList75 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18057692);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Question_Text"), gdjs.BattleCode.GDQuestion_9595TextObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDQuestion_9595TextObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDQuestion_9595TextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("endFight").getChild(2)));
}
}
{ //Subevents
gdjs.BattleCode.eventsList74(runtimeScene);} //End of subevents
}

}


};gdjs.BattleCode.eventsList76 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Goldrute_Test"), gdjs.BattleCode.GDGoldrute_9595TestObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDGoldrute_9595TestObjects1.length;i<l;++i) {
    if ( gdjs.BattleCode.GDGoldrute_9595TestObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDGoldrute_9595TestObjects1[k] = gdjs.BattleCode.GDGoldrute_9595TestObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDGoldrute_9595TestObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Answer1"), gdjs.BattleCode.GDAnswer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Answer2"), gdjs.BattleCode.GDAnswer2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Answer3"), gdjs.BattleCode.GDAnswer3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Goldrute_Roots"), gdjs.BattleCode.GDGoldrute_9595RootsObjects1);
/* Reuse gdjs.BattleCode.GDGoldrute_9595TestObjects1 */
{for(var i = 0, len = gdjs.BattleCode.GDGoldrute_9595TestObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDGoldrute_9595TestObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.BattleCode.GDGoldrute_9595RootsObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDGoldrute_9595RootsObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer1Objects1.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer2Objects1.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer3Objects1.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer3Objects1[i].hide();
}
}
{ //Subevents
gdjs.BattleCode.eventsList75(runtimeScene);} //End of subevents
}

}


};gdjs.BattleCode.eventsList77 = function(runtimeScene) {

};gdjs.BattleCode.asyncCallback18061796 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList78 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3.5), (runtimeScene) => (gdjs.BattleCode.asyncCallback18061796(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback18061324 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
{gdjs.evtTools.sound.playSound(runtimeScene, "draw1.wav", false, 20, 1);
}
{ //Subevents
gdjs.BattleCode.eventsList78(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList79 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.BattleCode.asyncCallback18061324(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.eventsList80 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18061036);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Question_Text"), gdjs.BattleCode.GDQuestion_9595TextObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDQuestion_9595TextObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDQuestion_9595TextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("endFight").getChild(1)));
}
}
{ //Subevents
gdjs.BattleCode.eventsList79(runtimeScene);} //End of subevents
}

}


};gdjs.BattleCode.eventsList81 = function(runtimeScene) {

};gdjs.BattleCode.asyncCallback18063676 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(2);
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList82 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3.5), (runtimeScene) => (gdjs.BattleCode.asyncCallback18063676(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback18063580 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-player-losing-or-failing-2042.wav", false, 20, 1);
}
{ //Subevents
gdjs.BattleCode.eventsList82(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.eventsList83 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.BattleCode.asyncCallback18063580(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.eventsList84 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18063340);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Question_Text"), gdjs.BattleCode.GDQuestion_9595TextObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDQuestion_9595TextObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDQuestion_9595TextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("endFight").getChild(0)));
}
}
{ //Subevents
gdjs.BattleCode.eventsList83(runtimeScene);} //End of subevents
}

}


};gdjs.BattleCode.eventsList85 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Goldrute_Test"), gdjs.BattleCode.GDGoldrute_9595TestObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.BattleCode.GDPlayer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.BattleCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Circular", "Backward", 255, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDPlayer1Objects1.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayer1Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 7, 7, 0, 2, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDGoldrute_9595TestObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDGoldrute_9595TestObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, -(5), -(5), 0, 2, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 6.5, "Background", 0);
}
{ //Subevents
gdjs.BattleCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Question_Counter"), gdjs.BattleCode.GDQuestion_9595CounterObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}{for(var i = 0, len = gdjs.BattleCode.GDQuestion_9595CounterObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDQuestion_9595CounterObjects1[i].getBehavior("Text").setText("0/" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(3))));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Goldrute_Roots"), gdjs.BattleCode.GDGoldrute_9595RootsObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDGoldrute_9595RootsObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDGoldrute_9595RootsObjects1[i].hide();
}
}}

}


{


gdjs.BattleCode.eventsList1(runtimeScene);
}


{


gdjs.BattleCode.eventsList8(runtimeScene);
}


{


gdjs.BattleCode.eventsList60(runtimeScene);
}


{


gdjs.BattleCode.eventsList61(runtimeScene);
}


{


gdjs.BattleCode.eventsList67(runtimeScene);
}


{


gdjs.BattleCode.eventsList72(runtimeScene);
}


{


gdjs.BattleCode.eventsList76(runtimeScene);
}


{


gdjs.BattleCode.eventsList77(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Goldrute_Test"), gdjs.BattleCode.GDGoldrute_9595TestObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.BattleCode.GDPlayer1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayer1Objects1.length;i<l;++i) {
    if ( !(gdjs.BattleCode.GDPlayer1Objects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_1 = true;
        gdjs.BattleCode.GDPlayer1Objects1[k] = gdjs.BattleCode.GDPlayer1Objects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayer1Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDGoldrute_9595TestObjects1.length;i<l;++i) {
    if ( !(gdjs.BattleCode.GDGoldrute_9595TestObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_1 = true;
        gdjs.BattleCode.GDGoldrute_9595TestObjects1[k] = gdjs.BattleCode.GDGoldrute_9595TestObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDGoldrute_9595TestObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 5);
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Answer1"), gdjs.BattleCode.GDAnswer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Answer2"), gdjs.BattleCode.GDAnswer2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Answer3"), gdjs.BattleCode.GDAnswer3Objects1);
{for(var i = 0, len = gdjs.BattleCode.GDAnswer3Objects1.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer2Objects1.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer1Objects1.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer1Objects1[i].hide();
}
}
{ //Subevents
gdjs.BattleCode.eventsList80(runtimeScene);} //End of subevents
}

}


{


gdjs.BattleCode.eventsList81(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.BattleCode.GDPlayer1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayer1Objects1.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayer1Objects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDPlayer1Objects1[k] = gdjs.BattleCode.GDPlayer1Objects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayer1Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Answer1"), gdjs.BattleCode.GDAnswer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Answer2"), gdjs.BattleCode.GDAnswer2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Answer3"), gdjs.BattleCode.GDAnswer3Objects1);
{for(var i = 0, len = gdjs.BattleCode.GDAnswer3Objects1.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer2Objects1.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.BattleCode.GDAnswer1Objects1.length ;i < len;++i) {
    gdjs.BattleCode.GDAnswer1Objects1[i].hide();
}
}
{ //Subevents
gdjs.BattleCode.eventsList84(runtimeScene);} //End of subevents
}

}


};

gdjs.BattleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BattleCode.GDEnemyObjects1.length = 0;
gdjs.BattleCode.GDEnemyObjects2.length = 0;
gdjs.BattleCode.GDEnemyObjects3.length = 0;
gdjs.BattleCode.GDEnemyObjects4.length = 0;
gdjs.BattleCode.GDEnemyObjects5.length = 0;
gdjs.BattleCode.GDMonsterObjects1.length = 0;
gdjs.BattleCode.GDMonsterObjects2.length = 0;
gdjs.BattleCode.GDMonsterObjects3.length = 0;
gdjs.BattleCode.GDMonsterObjects4.length = 0;
gdjs.BattleCode.GDMonsterObjects5.length = 0;
gdjs.BattleCode.GDPlayerHealthBarObjects1.length = 0;
gdjs.BattleCode.GDPlayerHealthBarObjects2.length = 0;
gdjs.BattleCode.GDPlayerHealthBarObjects3.length = 0;
gdjs.BattleCode.GDPlayerHealthBarObjects4.length = 0;
gdjs.BattleCode.GDPlayerHealthBarObjects5.length = 0;
gdjs.BattleCode.GDEnemyHealthBarObjects1.length = 0;
gdjs.BattleCode.GDEnemyHealthBarObjects2.length = 0;
gdjs.BattleCode.GDEnemyHealthBarObjects3.length = 0;
gdjs.BattleCode.GDEnemyHealthBarObjects4.length = 0;
gdjs.BattleCode.GDEnemyHealthBarObjects5.length = 0;
gdjs.BattleCode.GDDialogueObjects1.length = 0;
gdjs.BattleCode.GDDialogueObjects2.length = 0;
gdjs.BattleCode.GDDialogueObjects3.length = 0;
gdjs.BattleCode.GDDialogueObjects4.length = 0;
gdjs.BattleCode.GDDialogueObjects5.length = 0;
gdjs.BattleCode.GDGrassObjects1.length = 0;
gdjs.BattleCode.GDGrassObjects2.length = 0;
gdjs.BattleCode.GDGrassObjects3.length = 0;
gdjs.BattleCode.GDGrassObjects4.length = 0;
gdjs.BattleCode.GDGrassObjects5.length = 0;
gdjs.BattleCode.GDAttack1Objects1.length = 0;
gdjs.BattleCode.GDAttack1Objects2.length = 0;
gdjs.BattleCode.GDAttack1Objects3.length = 0;
gdjs.BattleCode.GDAttack1Objects4.length = 0;
gdjs.BattleCode.GDAttack1Objects5.length = 0;
gdjs.BattleCode.GDAttack2Objects1.length = 0;
gdjs.BattleCode.GDAttack2Objects2.length = 0;
gdjs.BattleCode.GDAttack2Objects3.length = 0;
gdjs.BattleCode.GDAttack2Objects4.length = 0;
gdjs.BattleCode.GDAttack2Objects5.length = 0;
gdjs.BattleCode.GDRunObjects1.length = 0;
gdjs.BattleCode.GDRunObjects2.length = 0;
gdjs.BattleCode.GDRunObjects3.length = 0;
gdjs.BattleCode.GDRunObjects4.length = 0;
gdjs.BattleCode.GDRunObjects5.length = 0;
gdjs.BattleCode.GDBackgroundObjects1.length = 0;
gdjs.BattleCode.GDBackgroundObjects2.length = 0;
gdjs.BattleCode.GDBackgroundObjects3.length = 0;
gdjs.BattleCode.GDBackgroundObjects4.length = 0;
gdjs.BattleCode.GDBackgroundObjects5.length = 0;
gdjs.BattleCode.GDTextBorderObjects1.length = 0;
gdjs.BattleCode.GDTextBorderObjects2.length = 0;
gdjs.BattleCode.GDTextBorderObjects3.length = 0;
gdjs.BattleCode.GDTextBorderObjects4.length = 0;
gdjs.BattleCode.GDTextBorderObjects5.length = 0;
gdjs.BattleCode.GDGoldrute_9595TestObjects1.length = 0;
gdjs.BattleCode.GDGoldrute_9595TestObjects2.length = 0;
gdjs.BattleCode.GDGoldrute_9595TestObjects3.length = 0;
gdjs.BattleCode.GDGoldrute_9595TestObjects4.length = 0;
gdjs.BattleCode.GDGoldrute_9595TestObjects5.length = 0;
gdjs.BattleCode.GDQuestion_9595TextObjects1.length = 0;
gdjs.BattleCode.GDQuestion_9595TextObjects2.length = 0;
gdjs.BattleCode.GDQuestion_9595TextObjects3.length = 0;
gdjs.BattleCode.GDQuestion_9595TextObjects4.length = 0;
gdjs.BattleCode.GDQuestion_9595TextObjects5.length = 0;
gdjs.BattleCode.GDQuestion_9595BorderObjects1.length = 0;
gdjs.BattleCode.GDQuestion_9595BorderObjects2.length = 0;
gdjs.BattleCode.GDQuestion_9595BorderObjects3.length = 0;
gdjs.BattleCode.GDQuestion_9595BorderObjects4.length = 0;
gdjs.BattleCode.GDQuestion_9595BorderObjects5.length = 0;
gdjs.BattleCode.GDAnswer1Objects1.length = 0;
gdjs.BattleCode.GDAnswer1Objects2.length = 0;
gdjs.BattleCode.GDAnswer1Objects3.length = 0;
gdjs.BattleCode.GDAnswer1Objects4.length = 0;
gdjs.BattleCode.GDAnswer1Objects5.length = 0;
gdjs.BattleCode.GDAnswer2Objects1.length = 0;
gdjs.BattleCode.GDAnswer2Objects2.length = 0;
gdjs.BattleCode.GDAnswer2Objects3.length = 0;
gdjs.BattleCode.GDAnswer2Objects4.length = 0;
gdjs.BattleCode.GDAnswer2Objects5.length = 0;
gdjs.BattleCode.GDAnswer3Objects1.length = 0;
gdjs.BattleCode.GDAnswer3Objects2.length = 0;
gdjs.BattleCode.GDAnswer3Objects3.length = 0;
gdjs.BattleCode.GDAnswer3Objects4.length = 0;
gdjs.BattleCode.GDAnswer3Objects5.length = 0;
gdjs.BattleCode.GDQuestion_9595CounterObjects1.length = 0;
gdjs.BattleCode.GDQuestion_9595CounterObjects2.length = 0;
gdjs.BattleCode.GDQuestion_9595CounterObjects3.length = 0;
gdjs.BattleCode.GDQuestion_9595CounterObjects4.length = 0;
gdjs.BattleCode.GDQuestion_9595CounterObjects5.length = 0;
gdjs.BattleCode.GDGoldrute_9595RootsObjects1.length = 0;
gdjs.BattleCode.GDGoldrute_9595RootsObjects2.length = 0;
gdjs.BattleCode.GDGoldrute_9595RootsObjects3.length = 0;
gdjs.BattleCode.GDGoldrute_9595RootsObjects4.length = 0;
gdjs.BattleCode.GDGoldrute_9595RootsObjects5.length = 0;
gdjs.BattleCode.GDPlayer1Objects1.length = 0;
gdjs.BattleCode.GDPlayer1Objects2.length = 0;
gdjs.BattleCode.GDPlayer1Objects3.length = 0;
gdjs.BattleCode.GDPlayer1Objects4.length = 0;
gdjs.BattleCode.GDPlayer1Objects5.length = 0;
gdjs.BattleCode.GDTransitionObjects1.length = 0;
gdjs.BattleCode.GDTransitionObjects2.length = 0;
gdjs.BattleCode.GDTransitionObjects3.length = 0;
gdjs.BattleCode.GDTransitionObjects4.length = 0;
gdjs.BattleCode.GDTransitionObjects5.length = 0;

gdjs.BattleCode.eventsList85(runtimeScene);
gdjs.BattleCode.GDEnemyObjects1.length = 0;
gdjs.BattleCode.GDEnemyObjects2.length = 0;
gdjs.BattleCode.GDEnemyObjects3.length = 0;
gdjs.BattleCode.GDEnemyObjects4.length = 0;
gdjs.BattleCode.GDEnemyObjects5.length = 0;
gdjs.BattleCode.GDMonsterObjects1.length = 0;
gdjs.BattleCode.GDMonsterObjects2.length = 0;
gdjs.BattleCode.GDMonsterObjects3.length = 0;
gdjs.BattleCode.GDMonsterObjects4.length = 0;
gdjs.BattleCode.GDMonsterObjects5.length = 0;
gdjs.BattleCode.GDPlayerHealthBarObjects1.length = 0;
gdjs.BattleCode.GDPlayerHealthBarObjects2.length = 0;
gdjs.BattleCode.GDPlayerHealthBarObjects3.length = 0;
gdjs.BattleCode.GDPlayerHealthBarObjects4.length = 0;
gdjs.BattleCode.GDPlayerHealthBarObjects5.length = 0;
gdjs.BattleCode.GDEnemyHealthBarObjects1.length = 0;
gdjs.BattleCode.GDEnemyHealthBarObjects2.length = 0;
gdjs.BattleCode.GDEnemyHealthBarObjects3.length = 0;
gdjs.BattleCode.GDEnemyHealthBarObjects4.length = 0;
gdjs.BattleCode.GDEnemyHealthBarObjects5.length = 0;
gdjs.BattleCode.GDDialogueObjects1.length = 0;
gdjs.BattleCode.GDDialogueObjects2.length = 0;
gdjs.BattleCode.GDDialogueObjects3.length = 0;
gdjs.BattleCode.GDDialogueObjects4.length = 0;
gdjs.BattleCode.GDDialogueObjects5.length = 0;
gdjs.BattleCode.GDGrassObjects1.length = 0;
gdjs.BattleCode.GDGrassObjects2.length = 0;
gdjs.BattleCode.GDGrassObjects3.length = 0;
gdjs.BattleCode.GDGrassObjects4.length = 0;
gdjs.BattleCode.GDGrassObjects5.length = 0;
gdjs.BattleCode.GDAttack1Objects1.length = 0;
gdjs.BattleCode.GDAttack1Objects2.length = 0;
gdjs.BattleCode.GDAttack1Objects3.length = 0;
gdjs.BattleCode.GDAttack1Objects4.length = 0;
gdjs.BattleCode.GDAttack1Objects5.length = 0;
gdjs.BattleCode.GDAttack2Objects1.length = 0;
gdjs.BattleCode.GDAttack2Objects2.length = 0;
gdjs.BattleCode.GDAttack2Objects3.length = 0;
gdjs.BattleCode.GDAttack2Objects4.length = 0;
gdjs.BattleCode.GDAttack2Objects5.length = 0;
gdjs.BattleCode.GDRunObjects1.length = 0;
gdjs.BattleCode.GDRunObjects2.length = 0;
gdjs.BattleCode.GDRunObjects3.length = 0;
gdjs.BattleCode.GDRunObjects4.length = 0;
gdjs.BattleCode.GDRunObjects5.length = 0;
gdjs.BattleCode.GDBackgroundObjects1.length = 0;
gdjs.BattleCode.GDBackgroundObjects2.length = 0;
gdjs.BattleCode.GDBackgroundObjects3.length = 0;
gdjs.BattleCode.GDBackgroundObjects4.length = 0;
gdjs.BattleCode.GDBackgroundObjects5.length = 0;
gdjs.BattleCode.GDTextBorderObjects1.length = 0;
gdjs.BattleCode.GDTextBorderObjects2.length = 0;
gdjs.BattleCode.GDTextBorderObjects3.length = 0;
gdjs.BattleCode.GDTextBorderObjects4.length = 0;
gdjs.BattleCode.GDTextBorderObjects5.length = 0;
gdjs.BattleCode.GDGoldrute_9595TestObjects1.length = 0;
gdjs.BattleCode.GDGoldrute_9595TestObjects2.length = 0;
gdjs.BattleCode.GDGoldrute_9595TestObjects3.length = 0;
gdjs.BattleCode.GDGoldrute_9595TestObjects4.length = 0;
gdjs.BattleCode.GDGoldrute_9595TestObjects5.length = 0;
gdjs.BattleCode.GDQuestion_9595TextObjects1.length = 0;
gdjs.BattleCode.GDQuestion_9595TextObjects2.length = 0;
gdjs.BattleCode.GDQuestion_9595TextObjects3.length = 0;
gdjs.BattleCode.GDQuestion_9595TextObjects4.length = 0;
gdjs.BattleCode.GDQuestion_9595TextObjects5.length = 0;
gdjs.BattleCode.GDQuestion_9595BorderObjects1.length = 0;
gdjs.BattleCode.GDQuestion_9595BorderObjects2.length = 0;
gdjs.BattleCode.GDQuestion_9595BorderObjects3.length = 0;
gdjs.BattleCode.GDQuestion_9595BorderObjects4.length = 0;
gdjs.BattleCode.GDQuestion_9595BorderObjects5.length = 0;
gdjs.BattleCode.GDAnswer1Objects1.length = 0;
gdjs.BattleCode.GDAnswer1Objects2.length = 0;
gdjs.BattleCode.GDAnswer1Objects3.length = 0;
gdjs.BattleCode.GDAnswer1Objects4.length = 0;
gdjs.BattleCode.GDAnswer1Objects5.length = 0;
gdjs.BattleCode.GDAnswer2Objects1.length = 0;
gdjs.BattleCode.GDAnswer2Objects2.length = 0;
gdjs.BattleCode.GDAnswer2Objects3.length = 0;
gdjs.BattleCode.GDAnswer2Objects4.length = 0;
gdjs.BattleCode.GDAnswer2Objects5.length = 0;
gdjs.BattleCode.GDAnswer3Objects1.length = 0;
gdjs.BattleCode.GDAnswer3Objects2.length = 0;
gdjs.BattleCode.GDAnswer3Objects3.length = 0;
gdjs.BattleCode.GDAnswer3Objects4.length = 0;
gdjs.BattleCode.GDAnswer3Objects5.length = 0;
gdjs.BattleCode.GDQuestion_9595CounterObjects1.length = 0;
gdjs.BattleCode.GDQuestion_9595CounterObjects2.length = 0;
gdjs.BattleCode.GDQuestion_9595CounterObjects3.length = 0;
gdjs.BattleCode.GDQuestion_9595CounterObjects4.length = 0;
gdjs.BattleCode.GDQuestion_9595CounterObjects5.length = 0;
gdjs.BattleCode.GDGoldrute_9595RootsObjects1.length = 0;
gdjs.BattleCode.GDGoldrute_9595RootsObjects2.length = 0;
gdjs.BattleCode.GDGoldrute_9595RootsObjects3.length = 0;
gdjs.BattleCode.GDGoldrute_9595RootsObjects4.length = 0;
gdjs.BattleCode.GDGoldrute_9595RootsObjects5.length = 0;
gdjs.BattleCode.GDPlayer1Objects1.length = 0;
gdjs.BattleCode.GDPlayer1Objects2.length = 0;
gdjs.BattleCode.GDPlayer1Objects3.length = 0;
gdjs.BattleCode.GDPlayer1Objects4.length = 0;
gdjs.BattleCode.GDPlayer1Objects5.length = 0;
gdjs.BattleCode.GDTransitionObjects1.length = 0;
gdjs.BattleCode.GDTransitionObjects2.length = 0;
gdjs.BattleCode.GDTransitionObjects3.length = 0;
gdjs.BattleCode.GDTransitionObjects4.length = 0;
gdjs.BattleCode.GDTransitionObjects5.length = 0;


return;

}

gdjs['BattleCode'] = gdjs.BattleCode;
