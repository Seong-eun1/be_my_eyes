const selectLang = document.getElementById("select-lang")
const text = document.getElementById("text")
const btnRead = document.getElementById("btn-read")

document.addEventListener("DOMContentLoaded",function(){
  text.value = '함께라는 마법 코카콜라,\n본 제품은 코카콜라 오리지널이며, 1300원에 판매되고 있습니다.\n현재 원 플러스 원 이벤트를 진행 중이며, 유통기한은 7월 31일까지입니다.\n8월 달엔 여름 캠페인 이벤트가 진행되니 기대해주세요.';

  btn_click();

  btnRead.click();
})

function call() {
  text.value = '함께라는 마법 코카콜라,\n본 제품은 코카콜라 오리지널이며, 1300원에 판매되고 있습니다.\n현재 원 플러스 원 이벤트를 진행 중이며, 유통기한은 7월 31일까지입니다.\n8월 달엔 여름 캠페인 이벤트가 진행되니 기대해주세요.';

  speak(text.value, {
      rate: 1,
      pitch: 1.2,
      lang: selectLang.options[selectLang.selectedIndex].value
  })
}

function speak(text, opt_prop) {

    if (typeof SpeechSynthesisUtterance === "undefined" || typeof window.speechSynthesis === "undefined") {
        alert("이 브라우저는 음성 합성을 지원하지 않습니다.")
        return
    }

    window.speechSynthesis.cancel(); // 현재 읽고있다면 초기화

    const prop = opt_prop || {}

    const speechMsg = new SpeechSynthesisUtterance()
    speechMsg.rate = prop.rate || 1 // 속도: 0.1 ~ 10
    speechMsg.pitch = prop.pitch || 1 // 음높이: 0 ~ 2
    speechMsg.lang = prop.lang || "ko-KR"
    speechMsg.text = text

    // SpeechSynthesisUtterance에 저장된 내용을 바탕으로 음성합성 실행
    window.speechSynthesis.speak(speechMsg);

}


// 이벤트 영역
//const selectLang = "ko-KR" //document.getElementById("select-lang")
function btn_click(){
  btnRead.addEventListener("click", e => {
      speak(text.value, {
          rate: 1,
          pitch: 1.2,
          lang: selectLang.options[selectLang.selectedIndex].value
      })
  })
}
