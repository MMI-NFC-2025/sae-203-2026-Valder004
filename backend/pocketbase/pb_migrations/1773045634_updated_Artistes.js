/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
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

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "file3581324060",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "Photo",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "file1371548684",
    "maxSelect": 99,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "Galerie",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1154068080")

  // remove field
  collection.fields.removeById("geoPoint414761182")

  // remove field
  collection.fields.removeById("file3581324060")

  // remove field
  collection.fields.removeById("file1371548684")

  return app.save(collection)
})
