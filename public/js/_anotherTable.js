const funcion = (data) => {
  console.log(data)
}
const _at = {
  sustantivo: 'AlgoQueListamos',
  cabeceras: {
    nom:{label:"Estación",skill:['text'],asset:"",prefix:"",sufix:"",
    href:function(h){return `https://${h}.com`}},
    cod:{label:"Código",skill:['number'],asset:"",prefix:"",sufix:"",fun:function (a){return a.toUpperCase()}},
    pos:{label:"Ubicación",skill:['geoJSON'],
    asset:"La latitud, nos indica la distancia angular entre la línea ecuatorial.",
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
        {"cod":"xxx","nom":"diesciseis","pos":{"type":"Point","coordinates":[-70.64,-17.3]}},
        {"cod":"toqa","nom":"toquepala","pos":{"type":"Point","coordinates":[-70.64,-17.3]}},
        {"cod":"toqa","nom":"toquepala","pos":{"type":"Point","coordinates":[-70.64,-17.3]}},
        {"cod":"toqa","nom":"toquepala","pos":{"type":"Point","coordinates":[-70.64,-17.3]}},
        {"cod":"toqa","nom":"toquepala","pos":{"type":"Point","coordinates":[-70.64,-17.3]}},
        {"cod":"toqa","nom":"toquepala","pos":{"type":"Point","coordinates":[-70.64,-17.3]}},
      ],
  buttons : [{label:'Algo',class:'red',action:funcion},
              {label:'Nuevo',class:'',action:funcion}]
}

window.aTable = _at;
