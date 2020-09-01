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
    <div class="fila fila-100">
      <div class="izq">
        {{anotherTable.sustantivo}} del {{posicion}} al
        {{(posicion + paginacion - 1)>anotherTable.data.length?anotherTable.data.length:(posicion + paginacion - 1)}}
        de un total de {{anotherTable.data.length}}
      </div>
      <div class="der grupo" style="display:flex">
        <div class="grupo-izq" :class="posicion==1?'desactivado':''"  @click="anterior()">
          <span class="small-show">&lt;&lt;&nbsp;</span>
          <span class="small-hide">Anterior</span>
        </div>
        <div class="grupo-der" :class="posicion+paginacion>=anotherTable.data.length?'desactivado':''" @click="siguiente()">
          <span class="small-hide">Siguiente</span>
          <span class="small-show">>></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import AnotherTable from './components/AnotherTable.vue';

export default {
  name: 'anotherTable',
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
.grupo{
  line-height: 1.4285em;
  color: rgba(0, 0, 0, .87);
  -webkit-box-direction: normal;
  text-align: right;
  box-sizing: inherit;
  font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  background: #fff;
  font-weight: 400;
  border: 1px solid rgba(34, 36, 38, .15);
  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, .15);
  border-radius: .28571429rem;
  min-height: 2.85714286em;
  font-size: 1rem;
  margin: 0;
  display: inline-flex;
  vertical-align: middle;
}
.grupo-izq{
vertical-align: middle;
line-height: 1;
flex: 0 0 auto;
user-select: none;
background: 0 0;
padding: .92857143em 1.14285714em;

display: flex;
-webkit-box-align: center;
align-items: center;
border-radius: .28571429rem 0 0 .28571429rem;
text-align: center;
}

.grupo-der{
vertical-align: middle;
line-height: 1;
flex: 0 0 auto;
border-left: 1px solid rgba(34, 36, 38, .15);
padding: .92857143em 1.14285714em;
color: rgba(0, 0, 0, .87);
display: flex;
-webkit-box-align: center;
align-items: center;
text-align: center;
border-radius: 0 .28571429rem .28571429rem 0;
}
.grupo-der:hover{
  background-color: #f7f7f7
}
.grupo-izq:hover{
  background-color: #f7f7f7
}

.desactivado{
  color: rgba(40, 40, 40, .3)!important;
}
.desactivado:hover{
  background-color: transparent!important;
}
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
