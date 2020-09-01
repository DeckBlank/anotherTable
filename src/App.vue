<template>
  <div class="">
    <div class="fila fila-100">
      <div id="filtro-opcional" class="item izq">
      </div>
      <div class="fila der">
        <div class="item small-hide">
          Mostrar
        </div>
        <div class="item">
          <select v-model="paginacionCtrl"  class="custom-select custom-select-sm ">
           <option value="10">10</option>
           <option value="20">20</option>
           <option value="30">30</option>
           <option value="-1">Todos</option>
          </select>
        </div>
        <div class="item small-hide">
          registros
        </div>
      </div>
    </div>
    <br><br>
    <div>
      <AnotherTable
      :cabeceras = "anotherTable.cabeceras"
      :columns = "anotherTable.columns"
      :data = "anotherTable.dataPaginada"
      :buttons = "anotherTable.buttons">
      </AnotherTable>
    </div>
    <br>
    <div class="">
      <div class="">
        {{anotherTable.sustantivo}} del {{posicion}} al
        {{(posicion + paginacion - 1)>anotherTable.data.length?anotherTable.data.length:(posicion + paginacion - 1)}}
        de un total de {{anotherTable.data.length}}
      </div>
      <div class="" style="display:flex">
        <div class="grupo" style=";margin-left:auto">
          <div class="izq" :class="posicion==1?'desactivado':''"  @click="anterior()">
            <span class="small-show">&lt;&lt;&nbsp;</span>
            <span class="small-hide">Anterior</span>
          </div>
          <div class="der" :class="posicion+paginacion>=anotherTable.data.length?'desactivado':''" @click="siguiente()">
            <span class="small-hide">Siguiente</span>
            <span class="small-show">>></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//
import AnotherTable from './components/AnotherTable.vue';

export default {
  name: 'App',
  components: {
    AnotherTable,
  },
  data() {
    return {
      anotherTable: {
        cabeceras: {}, buttons: [], columns: [], data: [], dataPaginada: []
      },
      paginacion:10,
      paginacionCtrl:10,
      posicion:1,
    };
  },
  watch:{
    paginacionCtrl:function(val){
        this.paginacion = parseInt(this.paginacionCtrl)
        if(val==-1){
            this.paginacion = this.anotherTable.data.length
        }
        this.posicion = 1;
        this.anotherTable.dataPaginada = this.anotherTable.data.slice(this.posicion-1,this.posicion-1 + this.paginacion)
    },
  },
  created() {
    this.anotherTable = window.aTable;
    this.asignarPaginacion(this.paginacion)
  },
  methods:{
    asignarPaginacion:async function (paginacion){
        this.posicion = 1;
        this.anotherTable.dataPaginada = this.anotherTable.data.slice(this.posicion-1,this.posicion-1 + this.paginacion)
    },
    siguiente:function (){
      if(this.posicion+this.paginacion<this.anotherTable.data.length){
        this.posicion = this.posicion+this.paginacion
        this.anotherTable.dataPaginada = this.anotherTable.data.slice(this.posicion-1 ,this.posicion-1 + this.paginacion)
      }
    },
    anterior: function () {
      if(this.posicion!==1){
        this.posicion = this.posicion-this.paginacion
        this.anotherTable.dataPaginada = this.anotherTable.data.slice(this.posicion-1 ,this.posicion-1 + this.paginacion)
      }
    },
  },
};
</script>

<style>
.fila-100{
    width: 100%;
}
.der{
  margin-left: auto;
}
.small-show{
  display: none
}
@media(max-width:770px){
  .small-hide{
    display: none
  }
  .small-show{
    display: unset
  }
}
.item:not(:last-of-type){
  padding-right: 10px;
}
.fila{

  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.custom-select-sm {
  height: calc(1.8125rem + 2px);
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  font-size: 75%;
}

.custom-select {
-moz-appearance:none; /* Firefox */
 -webkit-appearance:none; /* Safari and Chrome */
 appearance:none;
outline: none;
  display: inline-block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
  line-height: 1.5;
  color: #495057;
  vertical-align: middle;
  background: #fff url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") no-repeat right 0.75rem center;
  background-size: 8px 10px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
</style>
