<template>
      <div class="total">
        <table style="width:100%">
          <tr style="height: min-content;">
            <td style="padding:0">
              <table class="head" ref="tabla">
                  <tr class="">
                    <th>
                        <div  class="new-div mini"  >
                          <div class="">
                            <span>Ordenados por:</span>
                          </div>
                          <div style="margin-left:8px;display:inline-flex">
                            <select style="max-width:200px" v-model="orden"
                            class="custom-select custom-select-sm ">
                              <option v-bind:key="key" v-for="(item,key) in cabeceras"
                              :value="key">{{item['label']}}</option>
                            </select>
                            <button class="asc" :class="asc?'arriba':'abajo'"
                            v-if="typeof asc==='boolean'"
                            @click="cambio(orden)">
                            <span > <b>&#10140;</b> </span>
                            </button>
                          </div>
                        </div>
                    </th>
                  </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <div class="table-datos">
                <table  class="cien datos" >
                    <tr  v-bind:key="index" v-for="(entry,index) in filteredData"
                     class="md-table-row">
                      <td  class="md-table-cell " >
                        <div class="md-table-cell-container celdas" >
                          <div v-bind:key="key" v-for="(item,key) in cabeceras" class="">
                            <span>
                                <b style="color:#0200ae">
                                {{ cabeceras[key].label}}:
                                </b>
                                <a :href="entry[key]|href(cabeceras[key].href)" class="fecha">
                                {{cabeceras[key].prefix}}
                                {{entry[key] |ejecutar(cabeceras[key].fun)}}
                                {{cabeceras[key].sufix}}
                                </a>
                            </span><br>
                          </div>
                          <div class="botones" >
                            <button v-bind:key="i" @click="clickButton(entry,but.action)"
                            v-for="(but, i) in buttons" :class="but.class" type="button" >
                              {{but.label}}
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
               </table>
             </div>
            </td>
          </tr>
        </table>
  </div>

</template>

<script>
export default {
  name: 'AnotherTable',
  props: {
    data: Array,
    filterKey: String,
    cabeceras: Object,
    columns: Array,
    buttons: Array,
  },
  data() {
    const ordenados = {};
    this.columns.forEach((key) => {
      ordenados[key] = 1;
    });
    return {
      sortKey: '',
      sortOrders: ordenados,
      ancho: '150px',
      tablaWidth: '',
      orden: 'fec',
      asc: '',
    };
  },
  computed: {
    filteredData() {
      const { sortKey } = this;
      const filterKey = this.filterKey && this.filterKey.toLowerCase();
      const order = this.sortOrders[sortKey] || 1;
      let { data } = this;
      if (filterKey) {
        data = data.filter((row) => Object.keys(row).some((key) => {
          return String(row[key]).toLowerCase().indexOf(filterKey) > -1;
        }));
      }
      if (sortKey) {
        data = data.slice().sort((a, b) => {
          a = a[sortKey];
          b = b[sortKey];
          return (a === b ? 0 : a > b ? 1 : -1) * order;
        });
      }
      return data;
    },
  },
  filters: {
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    parseGeo(arr) {
      return `${arr[1]}, ${arr[0]}`;
    },
    ejecutar(a, f) {
      if (f) {
        return f(a);
      }
      return a;
    },
    href(a, f) {
      if (f) {
        return f(a);
      }
      return '#';
    },
  },
  watch: {
    orden(valor) {
      this.sortBy(valor);
      this.asc = true;
    },
  },
  methods: {
    sortBy(key) {
      this.sortKey = key;
      const val = this.sortOrders[key] * -1;
      this.sortOrders[key] = val;
    },
    cambio(valor) {
      this.sortBy(valor);
      this.asc = !this.asc;
    },
    clickButton(data, fun) {
      if (fun) {
        fun(data);
      }
    },
  },
  created() {
  },
  mounted() {
    const ancho = this.$refs.tabla.clientWidth;
    this.ancho = `${ancho / (this.columns.length + 1)}px`;
    window.addEventListener('resize', () => {
    });
  },
};

</script>

<style scoped>
a{
text-decoration: none;
color:unset;
}
.new-div{
  position:unset;overflow:unset;width: 100%;height:auto;
  padding-right: 32px;
  padding-left: 24px;
  height:auto;padding:4px
}

.celdas{
  display: inline-flex;
    align-items: center;
    width: 100%;
    line-height: 2;
}
.celdas>div{
  margin: auto;
}
.mini{
  display: inline-flex;
    align-items: center;
    width: auto;
}
.botones{
  display: flex;
  margin: auto;
}
.botones>button:not(:last-child){
  margin-right: 5px;
}
@media(max-width:1000px){
  .botones{
    display: grid;
  }
  .botones>button:not(:last-child){
    margin-right: 0;
    margin-bottom: 5px;
  }

}
@media(max-width:600px){
  .celdas{
    display: grid;
  }
  .celdas>div{
    margin: 0 auto 0 0 ;
  }
  .botones{
    display: inline-flex;
    margin: auto!important;
  }
  .botones>button:not(:last-child){
    margin-right: 15px;
    margin-bottom: 0;
  }

}
@media(max-width:450px){
  .mini{
    display: grid;
  }
}

.fecha{
  cursor: pointer;
}
.fecha:hover {
    text-decoration: underline;
    color: #40B4E3;
}
  .cien{
    width: 100%
  }
  .table-datos{
     max-height:60vh;
      overflow-y:auto;
      overflow-x:hidden;
  }
  .content-tabla{
    overflow-x: auto;
  }

  /* width */
::-webkit-scrollbar {
  width: 8px;

}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
/* .linea{
  border-top: gray 1px solid;
} */

th.active >div >div{
  /* color: #fff; */
  text-decoration: underline;
}

.md-table-cell{
  text-align: left!important;
}
.espacio{
  margin:10px 5px!important;
}

table {
border-collapse: collapse;
}

table.head{
width: 100%;

}
table.head th{
color:#0200ae;
font-size: 14px;
}

.datos tr {
border-top: 1px solid #dddddd;
text-align: left;
padding: 0;
background: white;
}


div.total {

    border-top: 1px solid rgba(34,36,38,.15);
    border-right: 1px solid rgba(34,36,38,.15);
    border-bottom: 1px solid rgba(34,36,38,.15);
    border-left: 1px solid rgba(34,36,38,.15);
    border-radius: 10px;
    background: #d7ecf7!important;
}

.asc{

border-collapse: collapse;
box-sizing: inherit;
padding: 0;
display: inline-block;
position: relative;
overflow: hidden;
outline: none;
background: transparent;
border: 0;
transition: .4s cubic-bezier(.4,0,.2,1);
font-family: inherit;
line-height: normal;
text-decoration: none;
vertical-align: top;
white-space: nowrap;
user-select: none;
font-size: 14px;
font-weight: 500;
text-transform: uppercase;
border-radius: 50%;
z-index: 5;
width: 40px;
min-width: 40px;
height: 40px;
margin: 0 6px;
cursor: pointer;
color: var(--md-theme-default-text-primary-on-background,rgba(0,0,0,.87));

}
.asc:hover{
  background-color: currentColor;
    opacity: .12;
}
.arriba{
  transform: rotate(90deg);
}
.abajo{
  transform: rotate(-90deg)!important;
}
</style>
