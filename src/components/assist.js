import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import {useState} from "react";

function buttonToggle() {
    var y = document.getElementById("start-btn");
    var x = document.getElementById("stop-btn");
    if (y.style.display === "none") {
        y.style.display = "grid";
        x.style.display = "none";        
        SpeechRecognition.stopListening();
    } else {
        y.style.display = "none";
        x.style.display = "grid";
        x.classList.add("blink-btn");
        SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    }
}

const Assist = () => {
    const [textToCopy, setTextToCopy] = useState();
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration:1000
    });

    // const startListening = () => ;
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }

    return (
        <div className="container">

            <div className="main-content" onClick={() =>  setTextToCopy(transcript)}>
                {transcript.toLowerCase().includes('go to google') ? (
                    window.location.href = 'https://www.google.com'
                ) : (
                    <p></p>
                )}

                {/* {transcript} */}
            </div>

            <div className="btn-style">
                <button className="assist-start-btn" onClick={buttonToggle} id="start-btn">Start Listening</button>
                <button className="assist-stop-btn" onClick={buttonToggle} id="stop-btn" style={{display:'none'}}>Stop Listening</button>

            </div>

        </div>
    );
};

export default Assist;