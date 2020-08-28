<template>
  <div id="app">
    <AnotherTable
    :cabeceras = "cabeceras"
    :columns = "columns"
    :data = "data">
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
      cabeceras: {
        nom:{label:"Estación",skill:['text'],asset:"",prefix:"",sufix:"",
        href:function(h){return `https://${h}.com`}},
        cod:{label:"Código",skill:['number'],asset:"",prefix:"",sufix:"",fun:function (a){return a.toUpperCase()}},
        pos:{label:"Ubicación",skill:['geoJSON'],
        asset:"La latitud, nos indica la distancia angular entre la línea ecuatorial y un punto cualquiera sobre la Tierra. Define una de las coordenadas en grados del epicentro. La longitud, indica la distancia angular entre un punto cualquiera sobre la superficie de la Tierra y el meridiano que se tome como 0°. Define una de las coordenadas en grados del epicentro.",
        prefix:"",sufix:"",fun:function(a){return `${a.coordinates[1]}, ${a.coordinates[0]}`}},
      },
      columns:['nom','cod','pos'],
      data: [{"cod":"carv","nom":"caraveli","pos":{"type":"Point","coordinates":[-73.37,-15.77]}},
            {"cod":"toqa","nom":"toquepala","pos":{"type":"Point","coordinates":[-70.64,-17.3]}},
            {"cod":"toqa","nom":"toquepala","pos":{"type":"Point","coordinates":[-70.64,-17.3]}},
            {"cod":"toqa","nom":"toquepala","pos":{"type":"Point","coordinates":[-70.64,-17.3]}},
            {"cod":"toqa","nom":"toquepala","pos":{"type":"Point","coordinates":[-70.64,-17.3]}},
            {"cod":"toqa","nom":"toquepala","pos":{"type":"Point","coordinates":[-70.64,-17.3]}},
            {"cod":"toqa","nom":"toquepala","pos":{"type":"Point","coordinates":[-70.64,-17.3]}},
            {"cod":"toqa","nom":"toquepala","pos":{"type":"Point","coordinates":[-70.64,-17.3]}},
            {"cod":"toqa","nom":"toquepala","pos":{"type":"Point","coordinates":[-70.64,-17.3]}},
            {"cod":"toqa","nom":"toquepala","pos":{"type":"Point","coordinates":[-70.64,-17.3]}},
            {"cod":"toqa","nom":"toquepala","pos":{"type":"Point","coordinates":[-70.64,-17.3]}},
            {"cod":"toqa","nom":"toquepala","pos":{"type":"Point","coordinates":[-70.64,-17.3]}},
            {"cod":"toqa","nom":"toquepala","pos":{"type":"Point","coordinates":[-70.64,-17.3]}},
            {"cod":"toqa","nom":"toquepala","pos":{"type":"Point","coordinates":[-70.64,-17.3]}},
            {"cod":"toqa","nom":"toquepala","pos":{"type":"Point","coordinates":[-70.64,-17.3]}},
            {"cod":"toqa","nom":"toquepala","pos":{"type":"Point","coordinates":[-70.64,-17.3]}},
            {"cod":"toqa","nom":"toquepala","pos":{"type":"Point","coordinates":[-70.64,-17.3]}},
            {"cod":"toqa","nom":"toquepala","pos":{"type":"Point","coordinates":[-70.64,-17.3]}},
            {"cod":"toqa","nom":"toquepala","pos":{"type":"Point","coordinates":[-70.64,-17.3]}},
            {"cod":"toqa","nom":"toquepala","pos":{"type":"Point","coordinates":[-70.64,-17.3]}},
            {"cod":"toqa","nom":"toquepala","pos":{"type":"Point","coordinates":[-70.64,-17.3]}},
            {"cod":"toqa","nom":"toquepala","pos":{"type":"Point","coordinates":[-70.64,-17.3]}},
          ]
    };
  }
};
</script>

<style>
#app {

}
</style>
