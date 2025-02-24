
  function getToken() {
    let getTokenData = {
      'apikey' : 'lcrmiph2rvyuaqiq1qp3lbs332di0x95', 
      'userid' : 'lcrmiph2rvyuaqiq1qp3lbs332di0x95'
    }

    // ajax로 비동기 통신
    $.ajax({
      // 토큰 발급하는 api url
      url : 'https://kakaoapi.aligo.in/akv10/token/create/30/s',
      data : getTokenData,
      type : 'post',
      success : function(result) {
        // result에서 나온 토큰을 변수 token에 저장
        let token = result.token;
        // sendMassage 함수에 매개변수로 token 전달해줌
        sendMessage(token);
      }
    });
  }

  // 알림톡 보내는 함수
  function sendMessage(token) {
    // 객체로 보냄
    let sendAlimTalkData = {
      'apikey' : 'lcrmiph2rvyuaqiq1qp3lbs332di0x95',
      'userid' : '알리고 ID',
      'token' : token,// 매개변수로 받은 token
      'senderkey' : '알리고 senderkey(지급해줌)',
      'tpl_code' : '템플릿 코드', // 템플릿 생성하면 코드 알려줌 
      'sender' : '발신자 연락처', //발신자 연락처 따로 설정해야함
      'receiver_1' : '수신자 연락처', //php로 값을 받아와 변수에 지정 후 넣어줌 <?= $reciver ?> 이런식으로
      'subject_1' : '템플릿 제목', // 발송된 템플릿 제목 정확히 기입
      'message_1' : "발송될 템플릿 내용", // 발송될 템플릿 내용을 정규식으로 적어야함(띄어쓰기, 기호 등등. GPT에 물어보면 정규식까지 작성해줌)
      'message_2' : "발송될 템플릿 내용2", // 발송될 템플릿 내용2

      // 버튼 있을 시(옵션)
      'button_1' : '{"button" : [{"name":"버튼 이름", "linkType":"WL", "linkP" : "이동할 링크", "linkM": "이동할 링크"}]}' //발송될 템플릿 버튼 내용
    };

    // ajax로 비동기 통신
    $.ajax({
      // 알람톡 보내는 api url
      url : 'https://kakaoapi.aligo.in/akv10/alimtalk/send',
      data : sendAlimTalkData, // 알림톡 데이터(객체)
      type : 'post',
      success : function(result) {
        // 성공시 디버깅
        console.log(result.code);
        console.log(result.message);
      }
    });
  }

  // 토큰 얻는 함수부터 실행해줌 
  getToken();