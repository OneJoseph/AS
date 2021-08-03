const AsistenOne = {
    data() {
      return {
        dgt: false,
        rsol: false,
        iva: [
            inscrito = false,
            fecha = "",
            desinscrito = false
        ]
      }
    }
  }

  var asistenApp = Vue.createApp(AsistenOne).mount('#app')