<template>
  <div class="home">
    <Cabecera/>
    <Lista/>
  </div>
</template>

<script>
import Cabecera from '@/components/Cabecera.vue';
import Lista from '@/components/Lista.vue';

export default {
  name: 'home',
  components: {
    Cabecera,
    Lista
  }
}
</script>
