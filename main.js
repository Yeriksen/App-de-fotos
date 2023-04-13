var jaguares=window.webkitSpeechRecognition
var leones=new jaguares
function tomarselfi (){
    leones.start()
}
leones.onresult=function (rinoceronte){
console.log(rinoceronte)
var nilo=rinoceronte.results[0][0].transcript
document.getElementById("elantra").innerHTML=nilo
dragon()
}
function dragon(){
    var charizar=window.speechSynthesis
    var charmilion="gracias por tomarte fotos en esta app"
    var charmander=new SpeechSynthesisUtterance(charmilion)
    charizar.speak(charmander)
    Webcam.attach(Raichu)
}
var Raichu=document.getElementById("pichu")
Webcam.set({
    width:700,
    height:90,
    image_format:"png",
    png_quality:90
})