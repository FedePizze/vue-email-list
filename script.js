const app = new Vue({

    el: '#app',
    data:{

        arrayMail: [],
        aaa: ''
    },

    mounted() {

        
        for(let i = 0; i < 10; i++) {

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((risultato) => {

                console.log(risultato)
                this.arrayMail.push(risultato.data.response)
            });

        }
        
    }

})