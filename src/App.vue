<template>
  <div id="app">
    <AnotherTable msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import AnotherTable from './components/AnotherTable.vue';

export default {
  name: 'App',
  components: {
    AnotherTable,
  },
};
</script>

<style>
#app {

}
</style>
