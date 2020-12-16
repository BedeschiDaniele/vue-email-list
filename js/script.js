// Esercizio: Generare 10 email e stamparle a schermo, utilizzando Vue, Axios e l'endpoint
var app = new Vue(
 {
   el: '.root',
   data: {
     randomEmails:[]
  },
  methods: {
  },
  mounted: function () {
    for (var i = 0; i < 10; i++) {
      axios
      .get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(function (result) {
       app.randomEmails.push(result.data.response);
       });
    }

  }
 }
);
