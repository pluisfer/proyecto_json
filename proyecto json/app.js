$(document).ready(function () {
  var editor; // use a global for the submit and return data rendering in the examples
  editor = new $.fn.dataTable.Editor({
    dom: "Tfrtip",
    ajax: "adendum1",
    table: "#example",
    fields: [
      {
        label: "First name:",
        name: "first_name",
      },
      {
        label: "Last name:",
        name: "last_name",
      },
      {
        label: "Position:",
        name: "position",
      },
      {
        label: "Office:",
        name: "office",
      },
      {
        label: "Extension:",
        name: "extn",
      },
      {
        label: "Start date:",
        name: "start_date",
        type: "datetime",
      },
      {
        label: "Salary:",
        name: "salary",
      },
    ],
  });

  // New record
  $("a.editor_create").on("click", function (e) {
    e.preventDefault();

    editor.create({
      title: "Create new record",
      buttons: "Add",
    });
  });

  // Edit record
  $("#example").on("click", "a.editor_edit", function (e) {
    e.preventDefault();

    editor.edit($(this).closest("tr"), {
      title: "Edit record",
      buttons: "Update",
    });
  });

  // Delete a record
  $("#example").on("click", "a.editor_remove", function (e) {
    e.preventDefault();

    editor.remove($(this).closest("tr"), {
      title: "Delete record",
      message: "Are you sure you wish to remove this record?",
      buttons: "Delete",
    });
  });

  $("#example").DataTable({
    dom: "Tfrtip",
    ajax: "adendum1",
    //data: function (data) { return data = JSON.stringify(data); },
    columns: [
      {
        data: null,
        render: function (data, type, row) {
          // Combine the first and last names into a single table field
          return data.first_name + " " + data.last_name;
        },
      },
      { data: "position" },
      { data: "office" },
      { data: "extn" },
      { data: "start_date" },
      { data: "salary" },
      {
        data: null,
        className: "center",
        defaultContent:
          '<a href="" class="editor_edit">Edit</a> / <a href="" class="editor_remove">Delete</a>',
      },
    ],
  });
});
