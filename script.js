const app = new Vue({

    el: '#app',
    data:{

        arrayMail: [],
        numeri: [],
        aaa: false
    },

    methods: {

        caricaEmail() {
            for(let i = 0; i < 10; i++) {

                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((risultato) => {
    
                    console.log(risultato)
                    this.arrayMail.push(risultato.data.response)
                });
    
            }
        },
        
    },

    mounted() {
            
        for(let i = 1; i <= 100; i++) {
            const aaa = {num: i}
            this.numeri.push(aaa)
        }
        
    }

})