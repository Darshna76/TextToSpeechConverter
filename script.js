const converter = document.querySelector(".convertBtn");
const textArea = document.querySelector(".textArea")
let isSpeaking = true;

let convertToSpeech = () => {
    const text = textArea.value;
    const synth = window.speechSynthesis;

    if (!synth.speaking && text) {
        const utternace = new SpeechSynthesisUtterance(text);

        synth.speak(utternace);
    }
    if (text.length >= 10) {

        if (synth.speaking && isSpeaking) {
            converter.innerText = "Pause";
            synth.resume();
            isSpeaking = false;
        } else {
            converter.innerText = "Resume";
            synth.pause();
            isSpeaking = true;
        }
    } else {
        isSpeaking = false;
        converter.innerText = "Speaking";
    }
    setInterval(() => {
        if (!synth.speaking && !isSpeaking) {
            isSpeaking = true;
            converter.innerText = "Convert to Speech";
        }
    });

}
converter.addEventListener("click", convertToSpeech);

