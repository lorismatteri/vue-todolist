console.log('ciaone');
//Istruzioni:
//Create una todo list usando VueJS.
//Funzionalitá:
//La nostra todo list avrá alcune tasks di default predefinite
//L'utente puó inserire nuove tasks
//Cliccando sulla "X" l'utente puó cancellare una task
//Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
//Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add o preme il taso Enter della tastiera.
//Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri.

let app = new Vue({
    el: '#app',
    data:{
        task: "",
        tasks: [
            'Cosa 1',
            'Cosa 2',
            'Cosa 3',
            'Cosa 4'
        ]
    },
    methods: {
        aggiungi() {
            this.tasks.push(task)
        }
    }
})


