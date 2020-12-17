//Istruzioni:
//Create una todo list usando VueJS.
//Funzionalitá:
//Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
//Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri.

let app = new Vue({
    el: '#app',
    data:{
        task: "",
        //La nostra todo list avrá alcune tasks di default predefinite
        tasks: [
            'Cosa 1',
            'Cosa 2',
            'Cosa 3',
        ]
    },
    methods: {
        //L'utente puó inserire nuove tasks
        aggiungi: function() {
            this.tasks.push(this.task);
            console.log(this.task);
            this.task = "";
        },
        //Cliccando sulla "X" l'utente puó cancellare una task
        togli: function(index) {
            this.tasks.splice(index, 1);
        }
    },
    //Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add o preme il taso Enter della tastiera.
    mounted() {
        document.addEventListener('keyup', e => {
            
            if(e.key === "Enter"){
                this.aggiungi()
            }
        })
    }
})


