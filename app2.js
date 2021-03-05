var $g = {};

$g.datos = [
  { id: 1, cuenta: "cuenta no. 1", razon: "razon social 1" },
  { id: 2, cuenta: "cuenta no. 2", razon: "razon social 2" },
  { id: 3, cuenta: "cuenta numero 3", razon: "razon numero 3" },
  { id: 4, cuenta: "Titulo", razon: "Hola mundo" },
];

$g.cargar_db = function () {
  var Repeat = $("[repeat]"),
    Tpl;

  $.each($g.datos, function (index, value) {
    Tpl = Repeat.clone();
    Tpl.find("*:contains({{ID}})").text(value.id);
    Tpl.find("*:contains({{CUENTA}})").text(value.cuenta);
    Tpl.find("*:contains({{RAZON_SOCIAL}})").text(value.razon);

    Repeat.after(Tpl);
  });
  Repeat.remove();
};

//Document ready
$(document).ready(function () {
  $g.cargar_db();
});
