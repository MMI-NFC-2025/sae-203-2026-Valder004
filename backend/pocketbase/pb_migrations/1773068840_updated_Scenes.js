/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1299117398")

  // update collection data
  unmarshal({
    "name": "Scene"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1299117398")

  // update collection data
  unmarshal({
    "name": "Scenes"
  }, collection)

  return app.save(collection)
})
