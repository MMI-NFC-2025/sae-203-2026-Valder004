/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1154068080")

  // remove field
  collection.fields.removeById("geoPoint414761182")

  // add field
  collection.fields.addAt(7, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1299117398",
    "hidden": false,
    "id": "relation3648647130",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "scene",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "date179083332",
    "max": "",
    "min": "",
    "name": "Date",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1154068080")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "geoPoint414761182",
    "name": "Scene",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "geoPoint"
  }))

  // remove field
  collection.fields.removeById("relation3648647130")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "date179083332",
    "max": "",
    "min": "",
    "name": "Date_de_debut",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
})
