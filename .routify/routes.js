
/**
 * @sveltech/routify 1.9.9
 * File generated Mon Oct 26 2020 14:17:31 GMT+0700 (Western Indonesia Time)
 */

export const __version = "1.9.9"
export const __timestamp = "2020-10-26T07:17:31.832Z"

//buildRoutes
import { buildClientTree } from "@sveltech/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "root",
  "filepath": "/",
  "root": true,
  "ownMeta": {},
  "absolutePath": "src/pages",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "_layout.svelte",
      "filepath": "/_layout.svelte",
      "name": "_layout",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "D:/svelte/latihan/svelte-hmr/src/pages/_layout.svelte",
      "importPath": "../src/pages/_layout.svelte",
      "isLayout": true,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "preload": false,
        "prerender": true,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/",
      "id": "__layout",
      "component": () => import('../src/pages/_layout.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "aku.svelte",
      "filepath": "/aku.svelte",
      "name": "aku",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "D:/svelte/latihan/svelte-hmr/src/pages/aku.svelte",
      "importPath": "../src/pages/aku.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "preload": false,
        "prerender": true,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/aku",
      "id": "_aku",
      "component": () => import('../src/pages/aku.svelte').then(m => m.default)
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "danang",
      "filepath": "/danang",
      "name": "danang",
      "ext": "",
      "badExt": false,
      "absolutePath": "D:/svelte/latihan/svelte-hmr/src/pages/danang",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "_reset.svelte",
          "filepath": "/danang/_reset.svelte",
          "name": "_reset",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "D:/svelte/latihan/svelte-hmr/src/pages/danang/_reset.svelte",
          "importPath": "../src/pages/danang/_reset.svelte",
          "isLayout": true,
          "isReset": true,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "ownMeta": {},
          "meta": {
            "preload": false,
            "prerender": true,
            "precache-order": false,
            "precache-proximity": true,
            "recursive": true
          },
          "path": "/danang",
          "id": "_danang__reset",
          "component": () => import('../src/pages/danang/_reset.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/danang/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "D:/svelte/latihan/svelte-hmr/src/pages/danang/index.svelte",
          "importPath": "../src/pages/danang/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "preload": false,
            "prerender": true,
            "precache-order": false,
            "precache-proximity": true,
            "recursive": true
          },
          "path": "/danang/index",
          "id": "_danang_index",
          "component": () => import('../src/pages/danang/index.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "preload": false,
        "prerender": true,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/danang"
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "hai",
      "filepath": "/hai",
      "name": "hai",
      "ext": "",
      "badExt": false,
      "absolutePath": "D:/svelte/latihan/svelte-hmr/src/pages/hai",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "[nama].svelte",
          "filepath": "/hai/[nama].svelte",
          "name": "[nama]",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "D:/svelte/latihan/svelte-hmr/src/pages/hai/[nama].svelte",
          "importPath": "../src/pages/hai/[nama].svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "preload": false,
            "prerender": true,
            "precache-order": false,
            "precache-proximity": true,
            "recursive": true
          },
          "path": "/hai/:nama",
          "id": "_hai__nama",
          "component": () => import('../src/pages/hai/[nama].svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "preload": false,
        "prerender": true,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/hai"
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "D:/svelte/latihan/svelte-hmr/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "preload": false,
        "prerender": true,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    }
  ],
  "isLayout": false,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "meta": {
    "preload": false,
    "prerender": true,
    "precache-order": false,
    "precache-proximity": true,
    "recursive": true
  },
  "path": "/"
}


export const {tree, routes} = buildClientTree(_tree)

