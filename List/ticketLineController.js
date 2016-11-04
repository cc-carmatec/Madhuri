(function () {
    'use strict';
    angular.module('app').controller('ticketLineController', ticketLineController);

    function ticketLineController($scope) {
        var itemForAdd = {};
        $scope.$on('AddRow', function(event, item) {
            console.log("ticketLineController, AddRow: " + item.itemNo);
            //$scope.itemNo = item.itemNo;
            //$scope.itemDescr = item.itemDescr;
            itemForAdd = item;
            $scope.ticketLineGrid.addRow();
        });
        
        $scope.getTicketLineGridOptions = function () {
            return {
                dataSource: {
                    type: "json", 
                    data: ticketLines,
                    schema: {
                        model: {
                            index: "index",
                            fields: {
                                index: { type: "string", editable: false },
                                name: { type: "string", editable: true },
                                email: { type: "string", editable: true },
                                address: { type: "string", editable: true }
                                
                            },
                                                        
                        }
                    },
                    sort: [{ field: "index", dir: "asc" }],
                    pageSize: 50
                },
                height: 543,
                //scrollable: {
                //    virtual: true
                //},
                columns: [
                    {
                        field: "index", title: "User ID", width: 30,
                    },
                    {
                        field: "name", title: "FirstName", width: 60,
                    },
                    {
                        field: "email", title: "Email", width: 60,
                    },
                    {
                        field: "address", title: "Address", width: 60,
                    },
                    {
                        command: ["edit"], title: "Edit", width: "100px", imageClass: "k-icon k-i-pencil ob-icon-only"
                    },
                    {
                        command: ["delete"], title: "Delete", width: "100px", imageClass: "k-icon k-i-pencil ob-icon-only"
                    },
                    
                ],
                pageable: true,
                editable: {
                    mode: "popup",
                    template: kendo.template($("#ticket-line-editor").html()),
                    //template: kendo.template("<b>test</b>"),
                },
                edit: function (e) {
                    if (e.model.isNew()) {
                      e.model.set("itemNo", itemForAdd.itemNo);
                      e.model.set("itemDescr", itemForAdd.itemDescr);
                    }
                    
                    var popupWindow = e.container.getKendoWindow();
                    e.container.find(".k-edit-form-container").width("auto");
                    popupWindow.setOptions({
                        width: 640
                    });
                },
                save: function(e) {
                  if (e.model.isNew()) {
                    // clear out the shared object 
                    itemForAdd = {};
                  }
                }
            };
        }
        var ticketLines = [
  {
    "index": 0,
    "name": "Melissa Conway",
    "email": "melissaconway@billmed.com",
    "address": "863 Grand Street, Harborton, Virginia, 5039"
  },
  {
    "index": 1,
    "name": "Elvira England",
    "email": "elviraengland@billmed.com",
    "address": "568 Mill Avenue, Bawcomville, Kansas, 6438"
  },
  {
    "index": 2,
    "name": "Bolton Kirkland",
    "email": "boltonkirkland@billmed.com",
    "address": "810 Dorset Street, Carrizo, New Mexico, 4134"
  },
  {
    "index": 3,
    "name": "Hampton Riley",
    "email": "hamptonriley@billmed.com",
    "address": "213 Fountain Avenue, Chapin, Florida, 7494"
  },
  {
    "index": 4,
    "name": "Jeanie Hooper",
    "email": "jeaniehooper@billmed.com",
    "address": "369 Winthrop Street, Beason, Indiana, 5651"
  },
  {
    "index": 5,
    "name": "Catherine Ratliff",
    "email": "catherineratliff@billmed.com",
    "address": "737 Clarkson Avenue, Edinburg, New Hampshire, 5240"
  },
   {
    "index": 6,
    "name": "Melissa Conway",
    "email": "melissaconway@billmed.com",
    "address": "863 Grand Street, Harborton, Virginia, 5039"
  },
  {
    "index": 7,
    "name": "Elvira England",
    "email": "elviraengland@billmed.com",
    "address": "568 Mill Avenue, Bawcomville, Kansas, 6438"
  },
  {
    "index": 8,
    "name": "Bolton Kirkland",
    "email": "boltonkirkland@billmed.com",
    "address": "810 Dorset Street, Carrizo, New Mexico, 4134"
  },
  {
    "index": 9,
    "name": "Hampton Riley",
    "email": "hamptonriley@billmed.com",
    "address": "213 Fountain Avenue, Chapin, Florida, 7494"
  },
  {
    "index": 10,
    "name": "Jeanie Hooper",
    "email": "jeaniehooper@billmed.com",
    "address": "369 Winthrop Street, Beason, Indiana, 5651"
  },
  {
    "index": 11,
    "name": "Catherine Ratliff",
    "email": "catherineratliff@billmed.com",
    "address": "737 Clarkson Avenue, Edinburg, New Hampshire, 5240"
  }
];
    }
})();
