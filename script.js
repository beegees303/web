document.getElementById('getLocation').addEventListener('click', () => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            document.getElementById('location').innerHTML = 
                `위도: ${latitude}<br>경도: ${longitude}`;
        }, function(error) {
            document.getElementById('location').innerHTML = 
                "위치 정보를 가져올 수 없습니다: " + error.message;
        });
    } else {
        document.getElementById('location').innerHTML = 
            "이 브라우저에서는 Geolocation이 지원되지 않습니다.";
    }
});
