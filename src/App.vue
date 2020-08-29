<template>
  <div id="app">
    <AnotherTable
    :cabeceras = "anotherTable.cabeceras"
    :columns = "anotherTable.columns"
    :data = "anotherTable.data"
    :buttons = "anotherTable.buttons">
    </AnotherTable>
  </div>
</template>

<script>
import AnotherTable from './components/AnotherTable.vue';

export default {
  name: 'App',
  components: {
    AnotherTable,
  },
  data() {
    return {
      anotherTable: {
        cabeceras: {}, buttons: [], columns: [], data: [],
      },
    };
  },
  created() {
    this.anotherTable = window.aTable;
  },
};
</script>

<style>
#app {

}
</style>
