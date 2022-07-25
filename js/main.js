function call() {
  text.value = '원음을 생생하게 살리는 메리디안 사운드의 톤프리\n강력해진 노이즈 캔슬링과 생생한 공간감까지 선사합니다.\n그리고 크래들에 5분만 넣어두면 유해세균까지 제거해줍니다.\n기기와의 연결 기능인 플러그 앤 와이어리스까지 있답니다.';

  speak(text.value, { rate: 1,
               pitch: 1.2,
             lang: selectLang.options[selectLang.selectedIndex].value
           }
         ) ;
}

function speak(text, opt_prop) {
    if (typeof SpeechSynthesisUtterance === "undefined" || typeof window.speechSynthesis === "undefined") {
        alert("이 브라우저는 음성 합성을 지원하지 않습니다.")
        return
    }

    window.speechSynthesis.cancel() // 현재 읽고있다면 초기화

    const prop = opt_prop || {}

    const speechMsg = new SpeechSynthesisUtterance()
    speechMsg.rate = prop.rate || 1 // 속도: 0.1 ~ 10
    speechMsg.pitch = prop.pitch || 1 // 음높이: 0 ~ 2
    speechMsg.lang = prop.lang || "ko-KR"
    speechMsg.text = text

    // SpeechSynthesisUtterance에 저장된 내용을 바탕으로 음성합성 실행
    window.speechSynthesis.speak(speechMsg)
}


// 이벤트 영역
//const selectLang = "ko-KR" //document.getElementById("select-lang")

const selectLang = document.getElementById("select-lang")
const text = document.getElementById("text")
const btnRead = document.getElementById("btn-read")


btnRead.addEventListener("click", e => {
    speak(text.value, {
        rate: 1,
        pitch: 1.2,
        lang: selectLang.options[selectLang.selectedIndex].value
    })
})
