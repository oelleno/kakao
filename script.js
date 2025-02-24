document.getElementById('sendKakao').addEventListener('click', async () => {
  try {
    const 회사명 = '바디스타';
    const 고객명 = '한수지';
    const 계약서사본 = 'oelleno.github.io/ok/';


    const response = await fetch('https://kakaoapi.aligo.in/akv10/alimtalk/send/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        'apikey': 'lcrmiph2rvyuaqiq1qp3lbs332di0x95',
        'userid': 'bodystar',
        'senderkey': 'b4c886fa9bd3cbf1faddb759fa6532867844ef03',
        'tpl_code': 'TY_1680',
        'sender': '01092792273',
        'receiver_1': '01086871992',
        'subject_1': '계약서',
        'message_1': `[${회사명}]\n안녕하세요. ${고객명}님!\n${회사명}에 등록해주셔서 진심으로 감사드립니다!`                'button_1': {
          'buttons': JSON.stringify([
            {
              "name": "채널 추가",
              "linkType": "AC",
              "linkTypeName": "채널 추가"
            },
            {
              "name": "계약서바로가기",
              "linkType": "WL",
              "linkTypeName": "웹링크",
              "linkPc": "https://${계약서사본}",
              "linkMo": "https://${계약서사본}"
            }
          ]),
          'failover': 'N'
        })
    });

    const data = await response.json();
    console.log(data);
    alert(data.message || '알림톡이 전송되었습니다.');
  } catch (error) {
    console.error('전송 오류:', error);
    alert('전송 중 오류가 발생했습니다.');
  }
});

module.exports = {
  alimtalkSend
}