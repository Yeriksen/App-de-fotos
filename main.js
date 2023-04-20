var Raichu=document.getElementById("pichu")
var jaguares=window.webkitSpeechRecognition
var leones=new jaguares
function tomarselfi (){
    leones.start()
}
leones.onresult=function (rinoceronte){
console.log(rinoceronte)
var nilo=rinoceronte.results[0][0].transcript
document.getElementById("elantra").innerHTML=nilo
if (nilo=="panda") {
    dragon()
}
}
function dragon(){
    var charizar=window.speechSynthesis
    var charmilion="gracias por tomarte fotos en esta app"
    var charmander=new SpeechSynthesisUtterance(charmilion)
    charizar.speak(charmander)
    Webcam.attach(Raichu)
    setTimeout(function(){
        Barcelonafc()
    },5000)
}
Webcam.set({
    width:700,
    height:90,
    image_format:"png",
    png_quality:90
})
function Barcelonafc(){
    Webcam.snap(function(chivasfc){
        document.getElementById("pikachu").innerHTML="<img src="+chivasfc+"></img>"
    })
    
}