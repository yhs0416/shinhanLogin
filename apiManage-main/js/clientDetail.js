// 저장버튼 온클릭 처리
var mainSaveBtn = new Vue({
    el : "#mainSaveBtn",
    methods:{
        saveFn : function(event){
            if (!confirm("저장하시겠습니까?")) {
                // 취소
                alert("취소되었습니다");
            } else {
                // 성공
                // 성공 후 업데이트 처리

                // 성공 앨럿
                alert("저장되었습니다.");
            }
        }
    }
});

var reIssueBtn = new Vue({
    el: "#reIssueBtn",
    methods:{
        reIssue : function(event){
            if (!confirm("재발급하시겠습니까?")) {
                // 취소
                alert("취소되었습니다");
            } else {
                // 성공
                // 성공 후 업데이트 처리
                var newUuid = uuidv4();
                var clientSecret = document.getElementById("client_secret");
                clientSecret.value = newUuid;
                clientSecret.disabled = true;

                // 성공 앨럿
                alert("재발급하였습니다");
            }
        }
    }
});