import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   Frutas: [
     {nombre: 'Manzana', cantidad: 0},
     {nombre: 'Pera', cantidad: 0},
     {nombre: 'Durazno', cantidad: 0}
    ]
  },
  mutations: {
  aumentar(state, index){
    state.Frutas[index].cantidad ++
  },
  limpiar(state){
    state.Frutas.forEach(elemento =>{
      elemento.cantidad = 0;
    })
  }
  },
  actions: {

  }
})
