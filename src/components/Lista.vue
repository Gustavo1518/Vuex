<template>
  <div>
    <h1>Componente Lista</h1>
    <ul class="list-group">
      <li v-for="(item, index) of Frutas" :key="item.id" @click="aumentar(index)" class="list-group-item d-flex justify-content-between align-items-center">
       {{ index }} - {{ item.nombre }}
        <span class="badge badge-primary badge-pill">{{ item.cantidad }}</span>
      </li> 
      <button class="btn btn-primary" @click="limpiar">Limpiar</button>
    </ul>
  </div>
</template>
<script>
import {mapState, mapMutations} from'vuex';

export default {
  name: "Lista",
  computed: {
    ...mapState(['Frutas'])

  },
  methods: {
    ...mapMutations(['aumentar', 'limpiar'])
  },
  props: {

  }
};
</script>
