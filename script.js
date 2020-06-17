(function(window){
var names=["Yaakov","John","Jen","Jason","Paul","Frank","Larry","Paula","Laura","Jim"];
for(var i in names){
var firstLetter = ((names[i]).char At(0)).toLowerCase();
if(firstletter =='j'){
window.byeSpeaker.speak(names[i]);
} else{
window.helloSpeaker.speak(names[i]);
}
}
})(window);
