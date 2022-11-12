const app = Vue.createApp({
    data(){
        return {
            title : 'The Final Empire',
            userName : null
        }
    },
    method(){
        axios.post('http://127.0.0.1:5000/user')
        .then(function(res){
            console.log(res)
            this.userName = res.name
        })
        .catch(function(err){
            alert.log(err)
            this.userName = res.name
        })

    }
})


app.mount('#app')