export const formatCurrentDate = () => {
    const date = new Date();
    return date.toLocaleDateString()+" "+date.toLocaleTimeString();
}

export const formatDate = (dateString) => {
    const date = new Date(dateString);

    // 날짜와 시간을 추출
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더함
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    // 원하는 형식으로 포맷팅
    return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;
}