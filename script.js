
// Initialize Kakao SDK
Kakao.init('d55ff27e21444533560be9728840074a'); // Kakao JavaScript SDK 키

function sendAuthNumber() {
  const phoneNumber = document.getElementById('phone').value;
  if (!phoneNumber) {
    alert('휴대폰 번호를 입력해주세요');
    return;
  }

  // 카카오톡 채널 메시지 전송
  Kakao.Channel.chat({
    channelPublicId: '_GPALG' // 카카오톡 채널 ID
  });

  document.getElementById('status').innerText = '인증번호가 발송되었습니다';
}

function verifyAuthNumber() {
  const authNumber = document.getElementById('authNumber').value;
  if (!authNumber) {
    alert('인증번호를 입력해주세요');
    return;
  }

  // 여기에 인증번호 검증 로직을 추가하세요
  // 실제로는 서버와 통신하여 검증해야 합니다
  
  document.getElementById('status').innerText = '인증이 완료되었습니다';
}
