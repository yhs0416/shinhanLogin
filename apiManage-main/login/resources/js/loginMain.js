var app = new Vue({
    el : "#app",
    data : {
        title : {
            companyName : '통합 인증',
            authTypeName : '로그인',
            guide : '가이드....'
        },
        companys : [
            {companyName : '신한금융그룹', companyCode : 'AA'},
            {companyName : '신한지주', companyCode : 'SG'}
        ],
        userData : {
            companyCode :'',
            employeeNo : '',
            passward : ''
        }
    },
    methods : {
       
    }
});

var simpleLogin = new Vue({
    el : '#simpleLogin',
    data : {
        myModal : null
    },
    methods : {
        openModal : function(modalId){
            var targetEl = document.getElementById(modalId);
            var options = {};

            myModal = new Modal(targetEl, options);

            myModal.toggle();
        },
        closeModal : function(){
            myModal.toggle();
            myModal = null;
            console.log(app.userData.employeeNo)
        }
    }
})