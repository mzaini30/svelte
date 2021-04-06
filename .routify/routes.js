
/**
 * @roxi/routify 2.15.1
 * File generated Tue Apr 06 2021 17:10:48 GMT+0800 (Waktu Indonesia Tengah)
 */

export const __version = "2.15.1"
export const __timestamp = "2021-04-06T09:10:48.933Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports
import _index from '../src/pages/index.svelte'

//options
export const options = {}

//tree
export const _tree = {
  "root": true,
  "children": [
    {
      "isIndex": true,
      "isPage": true,
      "path": "/index",
      "id": "_index",
      "component": () => _index
    }
  ],
  "path": "/"
}


export const {tree, routes} = buildClientTree(_tree)

