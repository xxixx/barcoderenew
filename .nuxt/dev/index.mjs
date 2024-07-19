import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { Server } from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { mkdirSync } from 'node:fs';
import { parentPort, threadId } from 'node:worker_threads';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, fetchWithEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, createError, setResponseHeader, send, getResponseStatus, setResponseStatus, setResponseHeaders, getRequestHeaders, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler, getRouterParam, getQuery as getQuery$1, readBody, useBase, setCookie, deleteCookie, getCookie, getResponseStatusText } from 'file:///Users/tera/Desktop/%E1%84%86%E1%85%AE%E1%84%8C%E1%85%A6%20%E1%84%91%E1%85%A9%E1%86%AF%E1%84%83%E1%85%A5%202/node_modules/h3/dist/index.mjs';
import jwt from 'file:///Users/tera/Desktop/%E1%84%86%E1%85%AE%E1%84%8C%E1%85%A6%20%E1%84%91%E1%85%A9%E1%86%AF%E1%84%83%E1%85%A5%202/node_modules/jsonwebtoken/index.js';
import CryptoJS from 'file:///Users/tera/Desktop/%E1%84%86%E1%85%AE%E1%84%8C%E1%85%A6%20%E1%84%91%E1%85%A9%E1%86%AF%E1%84%83%E1%85%A5%202/node_modules/crypto-js/index.js';
import { createPool } from 'file:///Users/tera/Desktop/%E1%84%86%E1%85%AE%E1%84%8C%E1%85%A6%20%E1%84%91%E1%85%A9%E1%86%AF%E1%84%83%E1%85%A5%202/node_modules/mysql2/promise.js';
import { getRequestDependencies, getPreloadLinks, getPrefetchLinks, createRenderer } from 'file:///Users/tera/Desktop/%E1%84%86%E1%85%AE%E1%84%8C%E1%85%A6%20%E1%84%91%E1%85%A9%E1%86%AF%E1%84%83%E1%85%A5%202/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { stringify, uneval } from 'file:///Users/tera/Desktop/%E1%84%86%E1%85%AE%E1%84%8C%E1%85%A6%20%E1%84%91%E1%85%A9%E1%86%AF%E1%84%83%E1%85%A5%202/node_modules/devalue/index.js';
import destr from 'file:///Users/tera/Desktop/%E1%84%86%E1%85%AE%E1%84%8C%E1%85%A6%20%E1%84%91%E1%85%A9%E1%86%AF%E1%84%83%E1%85%A5%202/node_modules/destr/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withTrailingSlash, joinRelativeURL } from 'file:///Users/tera/Desktop/%E1%84%86%E1%85%AE%E1%84%8C%E1%85%A6%20%E1%84%91%E1%85%A9%E1%86%AF%E1%84%83%E1%85%A5%202/node_modules/ufo/dist/index.mjs';
import { renderToString } from 'file:///Users/tera/Desktop/%E1%84%86%E1%85%AE%E1%84%8C%E1%85%A6%20%E1%84%91%E1%85%A9%E1%86%AF%E1%84%83%E1%85%A5%202/node_modules/vue/server-renderer/index.mjs';
import { hash } from 'file:///Users/tera/Desktop/%E1%84%86%E1%85%AE%E1%84%8C%E1%85%A6%20%E1%84%91%E1%85%A9%E1%86%AF%E1%84%83%E1%85%A5%202/node_modules/ohash/dist/index.mjs';
import { renderSSRHead } from 'file:///Users/tera/Desktop/%E1%84%86%E1%85%AE%E1%84%8C%E1%85%A6%20%E1%84%91%E1%85%A9%E1%86%AF%E1%84%83%E1%85%A5%202/node_modules/@unhead/ssr/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file:///Users/tera/Desktop/%E1%84%86%E1%85%AE%E1%84%8C%E1%85%A6%20%E1%84%91%E1%85%A9%E1%86%AF%E1%84%83%E1%85%A5%202/node_modules/ofetch/dist/node.mjs';
import { createCall, createFetch } from 'file:///Users/tera/Desktop/%E1%84%86%E1%85%AE%E1%84%8C%E1%85%A6%20%E1%84%91%E1%85%A9%E1%86%AF%E1%84%83%E1%85%A5%202/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///Users/tera/Desktop/%E1%84%86%E1%85%AE%E1%84%8C%E1%85%A6%20%E1%84%91%E1%85%A9%E1%86%AF%E1%84%83%E1%85%A5%202/node_modules/hookable/dist/index.mjs';
import { klona } from 'file:///Users/tera/Desktop/%E1%84%86%E1%85%AE%E1%84%8C%E1%85%A6%20%E1%84%91%E1%85%A9%E1%86%AF%E1%84%83%E1%85%A5%202/node_modules/klona/dist/index.mjs';
import { snakeCase } from 'file:///Users/tera/Desktop/%E1%84%86%E1%85%AE%E1%84%8C%E1%85%A6%20%E1%84%91%E1%85%A9%E1%86%AF%E1%84%83%E1%85%A5%202/node_modules/scule/dist/index.mjs';
import defu, { defuFn } from 'file:///Users/tera/Desktop/%E1%84%86%E1%85%AE%E1%84%8C%E1%85%A6%20%E1%84%91%E1%85%A9%E1%86%AF%E1%84%83%E1%85%A5%202/node_modules/defu/dist/defu.mjs';
import { createStorage, prefixStorage } from 'file:///Users/tera/Desktop/%E1%84%86%E1%85%AE%E1%84%8C%E1%85%A6%20%E1%84%91%E1%85%A9%E1%86%AF%E1%84%83%E1%85%A5%202/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/tera/Desktop/%E1%84%86%E1%85%AE%E1%84%8C%E1%85%A6%20%E1%84%91%E1%85%A9%E1%86%AF%E1%84%83%E1%85%A5%202/node_modules/unstorage/drivers/fs.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/tera/Desktop/%E1%84%86%E1%85%AE%E1%84%8C%E1%85%A6%20%E1%84%91%E1%85%A9%E1%86%AF%E1%84%83%E1%85%A5%202/node_modules/radix3/dist/index.mjs';
import { AsyncLocalStorage } from 'node:async_hooks';
import { consola } from 'file:///Users/tera/Desktop/%E1%84%86%E1%85%AE%E1%84%8C%E1%85%A6%20%E1%84%91%E1%85%A9%E1%86%AF%E1%84%83%E1%85%A5%202/node_modules/consola/dist/index.mjs';
import { getContext } from 'file:///Users/tera/Desktop/%E1%84%86%E1%85%AE%E1%84%8C%E1%85%A6%20%E1%84%91%E1%85%A9%E1%86%AF%E1%84%83%E1%85%A5%202/node_modules/unctx/dist/index.mjs';
import { version, unref } from 'file:///Users/tera/Desktop/%E1%84%86%E1%85%AE%E1%84%8C%E1%85%A6%20%E1%84%91%E1%85%A9%E1%86%AF%E1%84%83%E1%85%A5%202/node_modules/vue/index.mjs';
import { createServerHead as createServerHead$1 } from 'file:///Users/tera/Desktop/%E1%84%86%E1%85%AE%E1%84%8C%E1%85%A6%20%E1%84%91%E1%85%A9%E1%86%AF%E1%84%83%E1%85%A5%202/node_modules/unhead/dist/index.mjs';
import { defineHeadPlugin } from 'file:///Users/tera/Desktop/%E1%84%86%E1%85%AE%E1%84%8C%E1%85%A6%20%E1%84%91%E1%85%A9%E1%86%AF%E1%84%83%E1%85%A5%202/node_modules/@unhead/shared/dist/index.mjs';

const r=Object.create(null),E=e=>globalThis.process?.env||globalThis._importMeta_.env||globalThis.Deno?.env.toObject()||globalThis.__env__||(e?r:globalThis),s=new Proxy(r,{get(e,o){return E()[o]??r[o]},has(e,o){const i=E();return o in i||o in r},set(e,o,i){const g=E(!0);return g[o]=i,!0},deleteProperty(e,o){if(!o)return !1;const i=E(!0);return delete i[o],!0},ownKeys(){const e=E(!0);return Object.keys(e)}}),t=typeof process<"u"&&process.env&&"development"||"",p=[["APPVEYOR"],["AWS_AMPLIFY","AWS_APP_ID",{ci:!0}],["AZURE_PIPELINES","SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"],["AZURE_STATIC","INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"],["APPCIRCLE","AC_APPCIRCLE"],["BAMBOO","bamboo_planKey"],["BITBUCKET","BITBUCKET_COMMIT"],["BITRISE","BITRISE_IO"],["BUDDY","BUDDY_WORKSPACE_ID"],["BUILDKITE"],["CIRCLE","CIRCLECI"],["CIRRUS","CIRRUS_CI"],["CLOUDFLARE_PAGES","CF_PAGES",{ci:!0}],["CODEBUILD","CODEBUILD_BUILD_ARN"],["CODEFRESH","CF_BUILD_ID"],["DRONE"],["DRONE","DRONE_BUILD_EVENT"],["DSARI"],["GITHUB_ACTIONS"],["GITLAB","GITLAB_CI"],["GITLAB","CI_MERGE_REQUEST_ID"],["GOCD","GO_PIPELINE_LABEL"],["LAYERCI"],["HUDSON","HUDSON_URL"],["JENKINS","JENKINS_URL"],["MAGNUM"],["NETLIFY"],["NETLIFY","NETLIFY_LOCAL",{ci:!1}],["NEVERCODE"],["RENDER"],["SAIL","SAILCI"],["SEMAPHORE"],["SCREWDRIVER"],["SHIPPABLE"],["SOLANO","TDDIUM"],["STRIDER"],["TEAMCITY","TEAMCITY_VERSION"],["TRAVIS"],["VERCEL","NOW_BUILDER"],["VERCEL","VERCEL",{ci:!1}],["VERCEL","VERCEL_ENV",{ci:!1}],["APPCENTER","APPCENTER_BUILD_ID"],["CODESANDBOX","CODESANDBOX_SSE",{ci:!1}],["STACKBLITZ"],["STORMKIT"],["CLEAVR"],["ZEABUR"],["CODESPHERE","CODESPHERE_APP_ID",{ci:!0}],["RAILWAY","RAILWAY_PROJECT_ID"],["RAILWAY","RAILWAY_SERVICE_ID"]];function B(){if(globalThis.process?.env)for(const e of p){const o=e[1]||e[0];if(globalThis.process?.env[o])return {name:e[0].toLowerCase(),...e[2]}}return globalThis.process?.env?.SHELL==="/bin/jsh"&&globalThis.process?.versions?.webcontainer?{name:"stackblitz",ci:!1}:{name:"",ci:!1}}const l=B(),d=l.name;function n(e){return e?e!=="false":!1}const I=globalThis.process?.platform||"",T=n(s.CI)||l.ci!==!1,R=n(globalThis.process?.stdout&&globalThis.process?.stdout.isTTY);n(s.DEBUG);const C=t==="test"||n(s.TEST);n(s.MINIMAL)||T||C||!R;const a=/^win/i.test(I);!n(s.NO_COLOR)&&(n(s.FORCE_COLOR)||(R||a)&&s.TERM!=="dumb"||T);const _=(globalThis.process?.versions?.node||"").replace(/^v/,"")||null;Number(_?.split(".")[0])||null;const W=globalThis.process||Object.create(null),c={versions:{}};new Proxy(W,{get(e,o){if(o==="env")return s;if(o in e)return e[o];if(o in c)return c[o]}});const A=globalThis.process?.release?.name==="node",L=!!globalThis.Bun||!!globalThis.process?.versions?.bun,D=!!globalThis.Deno,O=!!globalThis.fastly,S=!!globalThis.Netlify,N=!!globalThis.EdgeRuntime,u=globalThis.navigator?.userAgent==="Cloudflare-Workers",b=!!globalThis.__lagon__,F=[[S,"netlify"],[N,"edge-light"],[u,"workerd"],[O,"fastly"],[D,"deno"],[L,"bun"],[A,"node"],[b,"lagon"]];function G(){const e=F.find(o=>o[0]);if(e)return {name:e[1]}}const P=G();P?.name||"";

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /{{(.*?)}}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const inlineAppConfig = {
  "nuxt": {
    "buildId": "dev"
  }
};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {}
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"/Users/tera/Desktop/무제 폴더 2/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/tera/Desktop/무제 폴더 2","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/tera/Desktop/무제 폴더 2/server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/tera/Desktop/무제 폴더 2/.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/tera/Desktop/무제 폴더 2/.nuxt/cache","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/tera/Desktop/무제 폴더 2/.data/kv","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[nitro] [cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const script = `
if (!window.__NUXT_DEVTOOLS_TIME_METRIC__) {
  Object.defineProperty(window, '__NUXT_DEVTOOLS_TIME_METRIC__', {
    value: {},
    enumerable: false,
    configurable: true,
  })
}
window.__NUXT_DEVTOOLS_TIME_METRIC__.appInit = Date.now()
`;

const _VIRUQgZrIR = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const rootDir = "/Users/tera/Desktop/무제 폴더 2";

const asyncContext = getContext("nuxt-dev", { asyncContext: true, AsyncLocalStorage });
const _TZVbNRBhae = (nitroApp) => {
  const handler = nitroApp.h3App.handler;
  nitroApp.h3App.handler = (event) => {
    return asyncContext.callAsync({ logs: [], event }, () => handler(event));
  };
  onConsoleLog((_log) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    const stack = getStack();
    if (stack.includes("runtime/vite-node.mjs")) {
      return;
    }
    const log = {
      ..._log,
      // Pass along filename to allow the client to display more info about where log comes from
      filename: extractFilenameFromStack(stack),
      // Clean up file names in stack trace
      stack: normalizeFilenames(stack)
    };
    ctx.logs.push(log);
  });
  nitroApp.hooks.hook("afterResponse", () => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    return nitroApp.hooks.callHook("dev:ssr-logs", { logs: ctx.logs, path: ctx.event.path });
  });
  nitroApp.hooks.hook("render:html", (htmlContext) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    try {
      htmlContext.bodyAppend.unshift(`<script type="application/json" id="__NUXT_LOGS__">${stringify(ctx.logs, ctx.event.context._payloadReducers)}<\/script>`);
    } catch (e) {
      console.warn("[nuxt] Failed to stringify dev server logs. You can define your own reducer/reviver for rich types following the instructions in https://nuxt.com/docs/api/composables/use-nuxt-app#payload.", e);
    }
  });
};
const EXCLUDE_TRACE_RE = /^.*at.*(\/node_modules\/(.*\/)?(nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/.*|core\/runtime\/nitro.*)$\n?/gm;
function getStack() {
  const stack = new Error();
  Error.captureStackTrace(stack);
  return stack.stack?.replace(EXCLUDE_TRACE_RE, "").replace(/^Error.*\n/, "") || "";
}
const FILENAME_RE = /at.*\(([^:)]+)[):]/;
const FILENAME_RE_GLOBAL = /at.*\(([^)]+)\)/g;
function extractFilenameFromStack(stacktrace) {
  return stacktrace.match(FILENAME_RE)?.[1].replace(withTrailingSlash(rootDir), "");
}
function normalizeFilenames(stacktrace) {
  return stacktrace.replace(FILENAME_RE_GLOBAL, (match, filename) => match.replace(filename, filename.replace("file:///", "/").replace(/:.*$/, "")));
}
function onConsoleLog(callback) {
  consola.addReporter({
    log(logObj) {
      callback(logObj);
    }
  });
  consola.wrapConsole();
}

const plugins = [
  _VIRUQgZrIR,
_TZVbNRBhae
];

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

function defineRenderHandler(handler) {
  return eventHandler(async (event) => {
    if (event.path.endsWith("/favicon.ico")) {
      setResponseHeader(event, "Content-Type", "image/x-icon");
      return send(
        event,
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      );
    }
    const response = await handler(event);
    if (!response) {
      const _currentStatus = getResponseStatus(event);
      setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
      return send(
        event,
        "No response returned from render handler: " + event.path
      );
    }
    const nitroApp = useNitroApp();
    await nitroApp.hooks.callHook("render:response", response, { event });
    if (response.headers) {
      setResponseHeaders(event, response.headers);
    }
    if (response.statusCode || response.statusMessage) {
      setResponseStatus(event, response.statusCode, response.statusMessage);
    }
    return response.body;
  });
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: statusCode !== 404 ? `<pre>${stack.map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n")}</pre>` : "",
    // TODO: check and validate error.data for serialisation into query
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const _lazy_ll2E3T = () => Promise.resolve().then(function () { return _____$n; });
const _lazy_EGUdZt = () => Promise.resolve().then(function () { return login_post$1; });
const _lazy_M4SUr0 = () => Promise.resolve().then(function () { return logout_post$1; });
const _lazy_vVYp9l = () => Promise.resolve().then(function () { return user_get$1; });
const _lazy_LWXaiF = () => Promise.resolve().then(function () { return defective$1; });
const _lazy_TPTr5c = () => Promise.resolve().then(function () { return _____$l; });
const _lazy_A6t3Yr = () => Promise.resolve().then(function () { return delivery$1; });
const _lazy_dl8mlu = () => Promise.resolve().then(function () { return _____$j; });
const _lazy_xNoB2q = () => Promise.resolve().then(function () { return inventory$1; });
const _lazy_fm7qPg = () => Promise.resolve().then(function () { return jaedan$1; });
const _lazy_MmfLPL = () => Promise.resolve().then(function () { return _____$h; });
const _lazy_byczgr = () => Promise.resolve().then(function () { return _____$f; });
const _lazy_lry99A = () => Promise.resolve().then(function () { return _____$d; });
const _lazy_OyXwAk = () => Promise.resolve().then(function () { return _____$b; });
const _lazy_EzLL5O = () => Promise.resolve().then(function () { return saleproduct$1; });
const _lazy_s2i2Bv = () => Promise.resolve().then(function () { return scannedBarcode$1; });
const _lazy_8RhWJ2 = () => Promise.resolve().then(function () { return scannedBarcodes$1; });
const _lazy_SDBmgP = () => Promise.resolve().then(function () { return stock$1; });
const _lazy_agKdy1 = () => Promise.resolve().then(function () { return _____$9; });
const _lazy_lKYThK = () => Promise.resolve().then(function () { return _____$7; });
const _lazy_QTP1lu = () => Promise.resolve().then(function () { return user$1; });
const _lazy_fA34XC = () => Promise.resolve().then(function () { return _____$5; });
const _lazy_ynZXze = () => Promise.resolve().then(function () { return _____$3; });
const _lazy_jgt6Kx = () => Promise.resolve().then(function () { return workOrder$1; });
const _lazy_kft0MS = () => Promise.resolve().then(function () { return _____$1; });
const _lazy_wH7Cd7 = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '/api/account/**', handler: _lazy_ll2E3T, lazy: true, middleware: false, method: undefined },
  { route: '/api/auth/login', handler: _lazy_EGUdZt, lazy: true, middleware: false, method: "post" },
  { route: '/api/auth/logout', handler: _lazy_M4SUr0, lazy: true, middleware: false, method: "post" },
  { route: '/api/auth/user', handler: _lazy_vVYp9l, lazy: true, middleware: false, method: "get" },
  { route: '/api/defective', handler: _lazy_LWXaiF, lazy: true, middleware: false, method: undefined },
  { route: '/api/defective/**', handler: _lazy_TPTr5c, lazy: true, middleware: false, method: undefined },
  { route: '/api/delivery', handler: _lazy_A6t3Yr, lazy: true, middleware: false, method: undefined },
  { route: '/api/delivery/**', handler: _lazy_dl8mlu, lazy: true, middleware: false, method: undefined },
  { route: '/api/inventory', handler: _lazy_xNoB2q, lazy: true, middleware: false, method: undefined },
  { route: '/api/jaedan', handler: _lazy_fm7qPg, lazy: true, middleware: false, method: undefined },
  { route: '/api/jaedan/**', handler: _lazy_MmfLPL, lazy: true, middleware: false, method: undefined },
  { route: '/api/product/**', handler: _lazy_byczgr, lazy: true, middleware: false, method: undefined },
  { route: '/api/production/**', handler: _lazy_lry99A, lazy: true, middleware: false, method: undefined },
  { route: '/api/products/**', handler: _lazy_OyXwAk, lazy: true, middleware: false, method: undefined },
  { route: '/api/saleproduct', handler: _lazy_EzLL5O, lazy: true, middleware: false, method: undefined },
  { route: '/api/scannedBarcode', handler: _lazy_s2i2Bv, lazy: true, middleware: false, method: undefined },
  { route: '/api/scannedBarcodes', handler: _lazy_8RhWJ2, lazy: true, middleware: false, method: undefined },
  { route: '/api/stock', handler: _lazy_SDBmgP, lazy: true, middleware: false, method: undefined },
  { route: '/api/stock/**', handler: _lazy_agKdy1, lazy: true, middleware: false, method: undefined },
  { route: '/api/test_scannedBarcode/**', handler: _lazy_lKYThK, lazy: true, middleware: false, method: undefined },
  { route: '/api/user', handler: _lazy_QTP1lu, lazy: true, middleware: false, method: undefined },
  { route: '/api/wondan/**', handler: _lazy_fA34XC, lazy: true, middleware: false, method: undefined },
  { route: '/api/working_part/**', handler: _lazy_ynZXze, lazy: true, middleware: false, method: undefined },
  { route: '/api/workOrder', handler: _lazy_jgt6Kx, lazy: true, middleware: false, method: undefined },
  { route: '/api/workOrder/**', handler: _lazy_kft0MS, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_wH7Cd7, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_wH7Cd7, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const server = new Server(toNodeListener(nitroApp.h3App));
function getAddress() {
  if (d === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET || process.versions.bun) {
    return 0;
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (a) {
    return join("\\\\.\\pipe\\nitro", socketName);
  } else {
    const socketDir = join(tmpdir(), "nitro");
    mkdirSync(socketDir, { recursive: true });
    return join(socketDir, socketName);
  }
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address.port }
  });
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
trapUnhandledNodeErrors();
async function onShutdown(signal) {
  await nitroApp.hooks.callHook("close");
}
parentPort.on("message", async (msg) => {
  if (msg && msg.event === "shutdown") {
    await onShutdown();
    parentPort.postMessage({ event: "exit" });
  }
});

const _messages = {"appName":"Nuxt","version":"","statusCode":500,"statusMessage":"Server error","description":"An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.","stack":""};
const _render = function({ messages }) {
var __t, __p = '';
__p += '<!DOCTYPE html><html data-critters-container><head><title>' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
' - ' +
((__t = ( messages.statusMessage )) == null ? '' : __t) +
' | ' +
((__t = ( messages.appName )) == null ? '' : __t) +
'</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1,minimum-scale=1" name="viewport"><style>.spotlight{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);opacity:0.8;filter:blur(30vh);height:60vh;bottom:-40vh}*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1{font-size:inherit;font-weight:inherit}pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}h1,p,pre{margin:0}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.fixed{position:fixed}.left-0{left:0}.right-0{right:0}.z-10{z-index:10}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.h-auto{height:auto}.min-h-screen{min-height:100vh}.flex{display:flex}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.overflow-y-auto{overflow-y:auto}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.bg-black\\/5{background-color:#0000000d}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity))}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.text-6xl{font-size:3.75rem;line-height:1}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-black{--un-text-opacity:1;color:rgb(0 0 0 / var(--un-text-opacity))}.font-light{font-weight:300}.font-medium{font-weight:500}.leading-tight{line-height:1.25}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme: dark){.dark\\:bg-black{--un-bg-opacity:1;background-color:rgb(0 0 0 / var(--un-bg-opacity))}.dark\\:bg-white\\/10{background-color:#ffffff1a}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity))}}@media (min-width: 640px){.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}.sm\\:text-8xl{font-size:6rem;line-height:1}}</style><script>(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll(\'link[rel="modulepreload"]\'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();</script></head><body class="font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col"><div class="fixed left-0 right-0 spotlight"></div><h1 class="text-6xl sm:text-8xl font-medium mb-6">' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
'</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight">' +
((__t = ( messages.description )) == null ? '' : __t) +
'</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto"><pre class="text-xl font-light leading-tight z-10 p-8">' +
((__t = ( messages.stack )) == null ? '' : __t) +
'</pre></div></body></html>';
return __p
};
const _template = (messages) => _render({ messages: { ..._messages, ...messages } });
const template$1 = _template;

const errorDev = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template$1
});

+console.log("Connecting to database...");
const pool = createPool({
  host: "118.128.165.171",
  user: "erpadmin",
  // database: 'ERP_DB',
  database: "ALKO_ERP",
  password: "Elqldjemals@1",
  port: 13306
});
+console.log("Connected to database");
const sql = async ({ query, values }) => {
  +console.log(`Executing query: ${query}, with values: ${JSON.stringify(values)}`);
  const [rows] = await pool.query(query, values);
  +console.log(`Query executed, got ${rows.length} rows`);
  return rows;
};
const transaction = async (callback) => {
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();
    const result = await callback(connection);
    await connection.commit();
    return result;
  } catch (err) {
    await connection.rollback();
    throw err;
  } finally {
    connection.release();
  }
};

const login$1 = async (EMAIL, PASSWORD) => {
  try {
    const query = `
      SELECT NO, EMAIL, NAME,ROLE,POSITION,  CREATE_DATE, ACCOUNT_STATE, LEVEL
      FROM ACCOUNT
      WHERE EMAIL = ? AND PASSWORD = ?
    `;
    const [rows] = await sql({ query, values: [EMAIL, PASSWORD] });
    console.log("Query result:", rows);
    if (rows) {
      console.log("Login success", rows);
      return rows;
    } else {
      console.log("Login fail");
      return null;
    }
  } catch (error) {
    throw error;
  }
};

const getUser = async (evt) => {
  try {
    const token = evt.req.headers.cookie;
    console.log("evt.req.headers.cookie token", token);
    if (token) {
      const tokenWithoutPrefix = token.replace("fineerpToken=", "");
      try {
        const decodeduser = jwt.verify(tokenWithoutPrefix, process.env.SECRET_KEY);
        console.log("decodeduser ================= ", decodeduser);
        evt.res.setHeader("Content-Type", "application/json");
        evt.res.end(JSON.stringify(decodeduser));
      } catch (error) {
        console.error("\uD1A0\uD070\uC774 \uB9CC\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
        evt.res.setHeader("Set-Cookie", "fineerpToken=; Max-Age=0; Path=/");
        evt.res.statusCode = 401;
        evt.res.end();
      }
    } else {
      evt.res.setHeader("Set-Cookie", "fineerpToken=; Max-Age=0; Path=/");
      console.error("\uD1A0\uD070\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.");
    }
  } catch (error) {
    console.error("\uD1A0\uD070 \uD574\uB3C5 \uC624\uB958:", error);
  }
};
const refreshToken = async (evt) => {
  try {
    const token = evt.req.headers.cookie;
    console.log("evt.req.headers.cookie token ===========", token);
    if (token) {
      const tokenWithoutPrefix = token.replace("fineerpToken=", "");
      try {
        const decodeduser = jwt.verify(
          tokenWithoutPrefix,
          process.env.SECRET_KEY
        );
        console.log("refreshToken decodeduser ================= ", decodeduser);
        const EMAIL = decodeduser.EMAIL;
        console.log("decodeduser EMAIL ================= ", EMAIL);
        const PASSWORD = "1";
        const user = await login$1(EMAIL, PASSWORD);
        console.log("decodeduserUser successful for user:", user);
        const newToken = jwt.sign(user, process.env.SECRET_KEY, {
          expiresIn: "1m"
        });
        console.log("New token generated:", newToken);
        evt.res.setHeader("Set-Cookie", `fineerpToken=${newToken}; HttpOnly`);
        console.log("Login successful for EMAIL:", user);
        return {
          data: user
        };
      } catch (error) {
        console.error("\uD1A0\uD070\uC774 \uB9CC\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
        evt.res.statusCode = 401;
      }
    } else {
      evt.res.statusCode = 401;
      console.error("\uD1A0\uD070\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.");
    }
  } catch (error) {
    console.error("\uD1A0\uD070 \uD574\uB3C5 \uC624\uB958:", error);
  }
};
const login = async (evt) => {
  try {
    const body = await readBody(evt);
    const { EMAIL, PASSWORD } = body;
    console.log("Received login request:", { EMAIL, PASSWORD });
    const user = await login$1(EMAIL, PASSWORD);
    console.log("Login successful for user:", user);
    if (!user) {
      console.log("Login failed for EMAIL:", EMAIL);
      throw createError({
        statusCode: 401,
        statusMessage: "Unauthorized"
      });
    }
    const token = jwt.sign(user, process.env.SECRET_KEY, { expiresIn: "24h" });
    console.log("Login successful for token:", token);
    evt.res.setHeader("Set-Cookie", `fineerpToken=${token}; HttpOnly`);
    console.log("Login successful for EMAIL:!!", EMAIL, PASSWORD);
    return {
      data: user
    };
  } catch (error) {
    console.error("Login error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Login failed"
    });
  }
};
const logout = async (evt) => {
  try {
    evt.node.res.setHeader("Set-Cookie", "jwtToken=; Max-Age=0; Path=/;");
    return { message: "\uB85C\uADF8\uC544\uC6C3 \uC131\uACF5" };
  } catch (error) {
    console.error(error);
    throw new Error("\uB85C\uADF8\uC544\uC6C3 \uC2E4\uD328");
  }
};

const router$l = createRouter$1();
router$l.get("/getUser", defineEventHandler(getUser));
router$l.post("/login", defineEventHandler(login));
router$l.post("/logout", defineEventHandler(logout));
router$l.get("/refreshToken", defineEventHandler(refreshToken));
const _____$m = useBase("/api/account", router$l.handler);

const _____$n = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _____$m
});

const verifyPassword = (plainPassword, hash) => {
  return plainPassword === hash;
};

const users = [
  {
    id: "Tera",
    email: "admin@email.com",
    password: "1111",
    roles: ["ADMIN"]
  },
  {
    id: "test",
    email: "user@gmail.com",
    password: "1111",
    roles: ["USER"]
  }
];
function getUserByEmail(email) {
  return users.find((user) => user.email === email);
}

const login_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body;
  if (!email || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: "Email address and password are required"
    });
  }
  const userWithPassword = getUserByEmail(email);
  if (!userWithPassword) {
    throw createError({
      statusCode: 401,
      statusMessage: "Bad credentials"
    });
  }
  const verified = verifyPassword(password, userWithPassword.password);
  if (!verified) {
    throw createError({
      statusCode: 401,
      statusMessage: "Bad credentials"
    });
  }
  const { password: _password, ...userWithoutPassword } = userWithPassword;
  const userDataString = JSON.stringify(userWithoutPassword);
  const encryptionKey = process.env.ENCRYPTION_KEY;
  const encryptedData = CryptoJS.AES.encrypt(userDataString, encryptionKey).toString();
  setCookie(event, "__user", encryptedData, { maxAge: 60 * 1 });
  return {
    user: userWithoutPassword
  };
});

const login_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: login_post
});

const logout_post = defineEventHandler((event) => {
  deleteCookie(event, "__user");
  return {
    user: null
    // deleteCookie,
  };
});

const logout_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: logout_post
});

function getUserFormEvent(event) {
  const encryptedUserJsonString = getCookie(event, "__user");
  const encryptionKey = process.env.ENCRYPTION_KEY;
  if (!encryptedUserJsonString) {
    return null;
  }
  const bytes = CryptoJS.AES.decrypt(encryptedUserJsonString, encryptionKey);
  const decrypteduserJsonString = bytes.toString(CryptoJS.enc.Utf8);
  const user = JSON.parse(decrypteduserJsonString);
  return user;
}

const user_get = defineEventHandler((event) => {
  const user = getUserFormEvent(event);
  getCookie(event, "__user");
  if (!user) {
    return { user: null };
  }
  return {
    user
  };
});

const user_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: user_get
});

const read$1 = async () => {
  const result = await sql({
    // query: 'SELECT no, DATE, PART,CATEGORY, SUB_CATEGORY,COUNT FROM DEFECTIVE_DATA'
    query: `
    SELECT DATE, SUM(COUNT) as total_count
    FROM DEFECTIVE_DATA
    GROUP BY DATE
    ORDER BY DATE ASC
    LIMIT 30`
  });
  return result;
};
const getAllData$1 = async () => {
  const result = await sql({
    // query: 'SELECT no, DATE, PART,CATEGORY, SUB_CATEGORY,COUNT FROM DEFECTIVE_DATA'
    query: `
    SELECT DATE, PART, CATEGORY, SUB_CATEGORY,COUNT, ETC, CREATED_DATE  FROM DEFECTIVE_DATA
    
    ORDER BY DATE DESC
    `
  });
  return result;
};
const partCount$1 = async () => {
  const result = await sql({
    query: `
    SELECT  CATEGORY,SUM(COUNT) as part_count
    FROM DEFECTIVE_DATA
    GROUP BY CATEGORY
    ORDER BY DATE ASC
    LIMIT 30`
  });
  return result;
};
const categoryAll$1 = async () => {
  const result = await sql({
    query: `
    SELECT  SUB_CATEGORY,SUM(COUNT) as categoryAll_count
    FROM DEFECTIVE_DATA
    GROUP BY SUB_CATEGORY
    ORDER BY DATE ASC
    LIMIT 30`
  });
  return result;
};
const getLastData$1 = async () => {
  const result = await sql({
    // query: 'SELECT no, DATE, PART,CATEGORY, SUB_CATEGORY,COUNT FROM DEFECTIVE_DATA'
    // query: `
    // SELECT *
    // FROM DEFECTIVE_DATA ORDER BY DATE DESC LIMIT 10
    // `
    query: `
    SELECT *
    FROM DEFECTIVE_DATA ORDER BY DATE DESC LIMIT 10
    `
  });
  return result;
};
const get10$1 = async () => {
  const result = await sql({
    // query: 'SELECT no, DATE, PART,CATEGORY, SUB_CATEGORY,COUNT FROM DEFECTIVE_DATA'
    query: `
    SELECT DATE, CATEGORY,SUB_CATEGORY
    FROM DEFECTIVE_DATA LIMIT 10`
  });
  return result;
};
const getPart$1 = async () => {
  const result = await sql({
    // query: 'SELECT no, DATE, PART,CATEGORY, SUB_CATEGORY,COUNT FROM DEFECTIVE_DATA'
    query: `SELECT PART FROM PD_NAME`
  });
  return result;
};
const getCategory$1 = async () => {
  const result = await sql({
    // query: 'SELECT no, DATE, PART,CATEGORY, SUB_CATEGORY,COUNT FROM DEFECTIVE_DATA'
    query: `
    SELECT *
    FROM DEFECTIVE_CAT`
  });
  return result;
};
const getSubCategory$1 = async () => {
  const result = await sql({
    // query: 'SELECT no, DATE, PART,CATEGORY, SUB_CATEGORY,COUNT FROM DEFECTIVE_DATA'
    query: `
    SELECT *
    FROM DEFECTIVE_SUB_CAT`
  });
  return result;
};
const insertData = async () => {
  const result = await sql({
    // query: 'SELECT no, DATE, PART,CATEGORY, SUB_CATEGORY,COUNT FROM DEFECTIVE_DATA'
    query: `
    SELECT *
    FROM DEFECTIVE_DATA
    WHERE DATE(CREATED_DATE) = CURRENT_DATE LIMIT 10;`
  });
  return result;
};
const create$5 = async (data) => {
  const result = await sql({
    query: `
      INSERT INTO DEFECTIVE_DATA (
        DATE,
        PART,
        CATEGORY,
        SUB_CATEGORY,
        COUNT,
        SUM,
        ETC
      ) VALUES (
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
      ) 
    
    `,
    values: [data.DATE, data.PART, data.CATEGORY, data.SUB_CATEGORY, data.COUNT, data.SUM, data.ETC]
  });
  return result.length === 1 ? result[0] : null;
};
const detail$8 = async (no) => {
  const result = await sql({
    query: "SELECT id, date, part, category,sub_category,count FROM DEFECTIVE_DATA WHERE no = ?",
    values: [no]
  });
  return result.length === 1 ? result[0] : null;
};
const update$3 = async (no, data) => {
  await sql({
    query: `
      UPDATE products
      SET
      DATE = ?,
      PART = ?,
      CATEGORY = ?,
      SUB_CATEGORY = ?,
      COUNT = ?,
      ETC = ?
      WHERE no = ?
    `,
    values: [data.DATE, data.PART, data.CATEGORY, data.SUB_CATEGORY, data.COUNT, data.ETC, no]
  });
  return await detail$8(no);
};
const remove$d = async (no) => {
  console.log("remove", no);
  await sql({
    query: "DELETE FROM DEFECTIVE_DATA WHERE no = ?",
    values: [no]
  });
  return true;
};

const read = async () => {
  try {
    const result = await read$1();
    return {
      data: result
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const getAllData = async () => {
  try {
    const result = await getAllData$1();
    return {
      data: result
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const categoryAll = async () => {
  try {
    const result = await categoryAll$1();
    return {
      data: result
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const partCount = async () => {
  try {
    const result = await partCount$1();
    return {
      data: result
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const getPart = async () => {
  try {
    const result = await getPart$1();
    return {
      data: result
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const getCategory = async () => {
  try {
    const result = await getCategory$1();
    return {
      data: result
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const getSubCategory = async () => {
  try {
    const result = await getSubCategory$1();
    return {
      data: result
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const get10 = async () => {
  try {
    const result = await get10$1();
    return {
      data: result
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const getLastData = async () => {
  try {
    const result = await getLastData$1();
    return {
      data: result
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const getInsertData = async () => {
  try {
    const result = await insertData();
    return {
      data: result
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const create$4 = async (evt) => {
  try {
    console.log("Creating a new Defective ");
    const body = await readBody(evt);
    console.log("Got request body", body);
    const result = await create$5({
      DATE: body.DATE,
      PART: body.PART,
      CATEGORY: body.CATEGORY,
      SUB_CATEGORY: body.SUB_CATEGORY,
      COUNT: body.COUNT,
      SUM: body.SUM,
      ETC: body.ETC
    });
    console.log("Created Defective post", result);
    return {
      data: result
    };
  } catch (err) {
    +console.error("Error creating Defective post", err);
  }
};
const detail$7 = async (evt) => {
  var _a;
  try {
    const result = await detail$8((_a = evt.context.params) == null ? void 0 : _a.no);
    return {
      data: result
    };
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const update$2 = async (evt) => {
  var _a;
  try {
    const body = await readBody(evt);
    const result = await update$3((_a = evt.context.params) == null ? void 0 : _a.no, {
      name: body.name,
      no: number,
      undefined: undefinedy.part
    });
    return {
      data: result
    };
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const remove$c = async (evt) => {
  var _a;
  try {
    console.log("evt", evt);
    const result = await remove$d((_a = evt.context.params) == null ? void 0 : _a.no);
    console.log(result);
    return {
      data: result
    };
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};

const router$k = createRouter$1();
router$k.get("/defective", defineEventHandler(read));
router$k.get("/defective/get10", defineEventHandler(read));
router$k.post("/defective", defineEventHandler(create$4));
router$k.get("/defective/:id", defineEventHandler(detail$7));
router$k.put("/defective/:id", defineEventHandler(update$2));
const defective = useBase("/api", router$k.handler);

const defective$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: defective
});

const router$j = createRouter$1();
router$j.get("/defective/getAllData", defineEventHandler(getAllData));
router$j.get("/defective/getLastData", defineEventHandler(getLastData));
router$j.get("/defective/get10", defineEventHandler(get10));
router$j.get("/defective/getInsertData", defineEventHandler(getInsertData));
router$j.get("/defective/getPart", defineEventHandler(getPart));
router$j.get("/defective/getCategory", defineEventHandler(getCategory));
router$j.get("/defective/getSubCategory", defineEventHandler(getSubCategory));
router$j.get("/defective/getInsertData", defineEventHandler(getInsertData));
router$j.get("/defective/getpartCount", defineEventHandler(partCount));
router$j.get("/defective/categoryAll", defineEventHandler(categoryAll));
router$j.delete("/defective/:no", defineEventHandler(remove$c));
const _____$k = useBase("/api", router$j.handler);

const _____$l = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _____$k
});

const create$3 = async (data) => {
  const result = await sql({
    query: "INSERT INTO PD_DELIVERY (PD_NAME, COUNT) VALUES ( ?, ?)",
    values: [data.PD_NAME, data.COUNT]
  });
  return result.insertId;
};
const list$7 = async () => {
  const result = await sql({
    query: `
      SELECT d.NO, d.ID, d.PD_NAME, d.COUNT, p.PUMMYUM,d.DATE
      FROM PD_DELIVERY d
      JOIN SALE_PRODUCT p ON d.PD_NAME = p.PUMMYUM
    `
  });
  return result;
};
const remove$b = async (NO) => {
  const result = await sql({
    query: "DELETE FROM PD_DELIVERY WHERE NO = ?",
    values: [NO]
  });
  return result.affectedRows > 0;
};

const create$2 = async (evt) => {
  try {
    const body = await readBody(evt);
    const result = await create$3(body);
    return { data: result };
  } catch (err) {
    console.error("Error creating delivery:", err);
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const list$6 = async (evt) => {
  try {
    const result = await list$7();
    return { data: result };
  } catch (err) {
    console.error("Error fetching deliveries:", err);
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const remove$a = async (evt) => {
  var _a;
  try {
    const NO = (_a = evt.context.params) == null ? void 0 : _a.NO;
    const result = await remove$b(NO);
    return { data: result };
  } catch (err) {
    console.error("Error removing delivery:", err);
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};

const router$i = createRouter$1();
router$i.post("/", defineEventHandler(create$2));
router$i.delete("/:no", defineEventHandler(remove$a));
router$i.get("/", defineEventHandler(list$6));
const delivery = useBase("/api/delivery", router$i.handler);

const delivery$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: delivery
});

const router$h = createRouter$1();
router$h.get("/delivery", defineEventHandler(list$6));
router$h.delete("/delivery/:NO", defineEventHandler(remove$a));
router$h.post("/delivery", defineEventHandler(create$2));
const _____$i = useBase("/api", router$h.handler);

const _____$j = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _____$i
});

const list$5 = async () => {
  const result = await sql({
    query: "SELECT * FROM PD_INVENTORY"
  });
  return result;
};

const list$4 = async (evt) => {
  try {
    const result = await list$5();
    return { data: result };
  } catch (error) {
    throw createError({ statusCode: 500, statusMessage: "Something went wrong" });
  }
};

const router$g = createRouter$1();
router$g.get("/", defineEventHandler(list$4));
const inventory = useBase("/api/inventory", router$g.handler);

const inventory$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: inventory
});

const getRecord$5 = async () => {
  const result = await sql({
    query: `SELECT
    jr.*,
    ACCOUNT.NAME as REG_ACCOUNT_NAME,
    wp.JAEDAN_PART_NAME,  -- \uC6D0\uD558\uB294 \uCEEC\uB7FC \uC120\uD0DD
    PRODUCTION_ACCOUNT.NAME as PRODUCTION_ACCOUNT_NAME
  FROM
    JAEDAN_REGIST jr
  JOIN
    WORKING_ORDER wo ON jr.WORK_ORDER_NO = wo.NO
  JOIN
    WORKING_PART wp ON wo.WORKING_PART = wp.ID
   JOIN 
   ACCOUNT ON wo.REG_ACCOUNT = ACCOUNT.NO
   LEFT JOIN
    ACCOUNT PRODUCTION_ACCOUNT ON jr.PRODUCTION_ACCOUNT = PRODUCTION_ACCOUNT.NO 
    where jr.STATE = 1 or jr.STATE = 2`
  });
  return result;
};
const getRecord10$5 = async () => {
  const result = await sql({
    query: `SELECT
    jr.*,
    ACCOUNT.NAME as REG_ACCOUNT_NAME,
       wp.JAEDAN_PART_NAME  -- \uC6D0\uD558\uB294 \uCEEC\uB7FC \uC120\uD0DD
  FROM
    JAEDAN_REGIST jr
  JOIN
    WORKING_ORDER wo ON jr.WORK_ORDER_NO = wo.NO
  JOIN
    WORKING_PART wp ON wo.WORKING_PART = wp.ID
   JOIN ACCOUNT ON wo.REG_ACCOUNT = ACCOUNT.NO
   where jr.STATE = 0 or jr.STATE = 1`
  });
  return result;
};
const register$5 = async (data) => {
  const result = await sql({
    query: `
      INSERT INTO JAEDAN_REGIST (
        WORK_ORDER_NO,
        WONDAN_STORE,
        WONDAN_MANAGER_NO,
        LOT,
        Y_COUNT,
        MARKS,
        COUNT,
        DEFECTIVE,
        CREATE_DATE,
        WORK_DATE,
        REG_ACCOUNT
      ) VALUES (
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
      )
    `,
    values: [
      data.WORK_ORDER_NO,
      data.WONDAN_STORE,
      data.WONDAN_MANAGER_NO,
      data.LOT,
      data.Y_COUNT,
      data.MARKS,
      data.COUNT,
      data.DEFECTIVE,
      data.CREATE_DATE,
      data.WORK_DATE,
      data.REG_ACCOUNT
    ]
  });
  console.log("result============", result);
  return result.affectedRows === 1 ? data : null;
};
const updateState$7 = async (NO, STATE, UPDATE_ACCOUNT, PROCESSCODE) => {
  const result = await sql({
    query: "UPDATE JAEDAN_REGIST SET STATE = ?, UPDATE_ACCOUNT = ?,PROCESSCODE = ? WHERE NO = ?",
    values: [STATE, UPDATE_ACCOUNT, PROCESSCODE, NO]
  });
  return result.affectedRows === 1 ? { success: true } : { success: false };
};
const detail$6 = async (PD_NAME) => {
  const result = await sql({
    // query: 'SELECT id, date, part, category,sub_category,count FROM DEFECTIVE_DATA WHERE no = ?',
    query: "SELECT *t FROM JEADAN_ITEM WHERE PRODUCT = ?",
    values: [PD_NAME]
  });
  return result.length === 1 ? result[0] : null;
};
const getDetail$3 = async (NO) => {
  const result = await sql({
    query: (
      // 'SELECT jr.NO, jr.WORK_ORDER_NO, DATE_FORMAT(jr.CREATE_DATE, "%Y-%m-%d") as CREATE_DATE, DATE_FORMAT(jr.WORK_DATE, "%Y-%m-%d") as WORK_DATE, jr.COUNT, jr.LOT, ac.NAME as regAccount, ac2.NAME as updateAccount, wp.PUMBUN,wp.ASSY_PART_NAME,wp.ASSY_SUB_PART_NAME,wp.JAEDAN_PART_NAME,PROCESSCODE FROM JAEDAN_REGIST jr JOIN WORKING_ORDER wo ON jr.WORK_ORDER_NO = wo.NO JOIN ACCOUNT ac ON jr.REG_ACCOUNT = ac.NO JOIN ACCOUNT ac2 ON jr.UPDATE_ACCOUNT = ac2.NO JOIN WORKING_PART wp ON wo.WORKING_PART = wp.ID WHERE jr.NO = ?'
      'SELECT jr.NO, jr.WORK_ORDER_NO, DATE_FORMAT(jr.CREATE_DATE, "%Y-%m-%d") as CREATE_DATE, DATE_FORMAT(jr.WORK_DATE, "%Y-%m-%d") as WORK_DATE, jr.COUNT, jr.LOT, ac.NAME as regAccount, ac2.NAME as updateAccount, wp.PUMBUN,wp.ASSY_PART_NAME,wp.ASSY_SUB_PART_NAME,wp.JAEDAN_PART_NAME, jr.PROCESSCODE FROM JAEDAN_REGIST jr JOIN WORKING_ORDER wo ON jr.WORK_ORDER_NO = wo.NO JOIN ACCOUNT ac ON jr.REG_ACCOUNT = ac.NO JOIN ACCOUNT ac2 ON jr.UPDATE_ACCOUNT = ac2.NO JOIN WORKING_PART wp ON wo.WORKING_PART = wp.ID WHERE jr.NO = ?'
    ),
    values: [NO]
  });
  return result.length === 1 ? result[0] : null;
};
const remove$9 = async (NO) => {
  console.log("remove", NO);
  await sql({
    query: "DELETE FROM JAEDAN_REGIST WHERE NO = ?",
    values: [NO]
  });
  return true;
};

const getRecord$4 = async () => {
  try {
    const result = await getRecord$5();
    return {
      data: result
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const register$4 = async (evt) => {
  try {
    console.log("Creating a new JAEDAN RECORD");
    const body = await readBody(evt);
    console.log("Got request body", body);
    const result = await register$5({
      WORK_ORDER_NO: body.WORK_ORDER_NO,
      WONDAN_STORE: body.WONDAN_STORE,
      WONDAN_MANAGER_NO: body.WONDAN_MANAGER_NO,
      LOT: body.LOT,
      Y_COUNT: body.Y_COUNT,
      MARKS: body.MARKS,
      COUNT: body.COUNT,
      DEFECTIVE: body.DEFECTIVE,
      CREATE_DATE: body.CREATE_DATE,
      WORK_DATE: body.WORK_DATE,
      REG_ACCOUNT: body.REG_ACCOUNT
      // REG_ACCOUNT 추가
    });
    console.log("Created JAEDAN REGISTER post", result);
    return {
      data: result
    };
  } catch (err) {
    console.error("Error creating JAEDAN post", err);
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const updateState$6 = async (evt) => {
  try {
    const body = await readBody(evt);
    const NO = body.NO;
    const result = await updateState$7(NO, body.STATE, body.UPDATE_ACCOUNT, body.PROCESSCODE);
    return {
      data: result
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const getRecord10$4 = async () => {
  try {
    const result = await getRecord10$5();
    return {
      data: result
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const getDetail$2 = async (evt) => {
  var _a;
  try {
    const result = await getDetail$3((_a = evt.context.params) == null ? void 0 : _a.NO);
    return {
      data: result
    };
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const detail$5 = async (evt) => {
  var _a;
  try {
    const result = await detail$6((_a = evt.context.params) == null ? void 0 : _a.PD_NAME);
    return {
      data: result
    };
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const remove$8 = async (evt) => {
  var _a;
  try {
    console.log("evt", evt);
    const result = await remove$9((_a = evt.context.params) == null ? void 0 : _a.NO);
    console.log(result);
    return {
      data: result
    };
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};

const router$f = createRouter$1();
router$f.post("/jaedan", defineEventHandler(register$4));
router$f.put("/jaedan/:NO", defineEventHandler(updateState$6));
router$f.delete("/jaedan/:NO", defineEventHandler(remove$8));
const jaedan = useBase("/api", router$f.handler);

const jaedan$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: jaedan
});

const router$e = createRouter$1();
router$e.get("/jaedan/getRecord", defineEventHandler(getRecord$4));
router$e.get("/jaedan/getRecord10", defineEventHandler(getRecord10$4));
router$e.put("/jaedan/:NO", defineEventHandler(updateState$6));
router$e.post("/jaedan/updateState/:NO", defineEventHandler(updateState$6));
router$e.delete("/jaedan/:NO", defineEventHandler(remove$8));
router$e.get("/jaedan/:NO", defineEventHandler(getDetail$2));
router$e.get("/jaedan/:PD_NAME", defineEventHandler(detail$5));
const _____$g = useBase("/api", router$e.handler);

const _____$h = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _____$g
});

const getProduct$1 = async () => {
  const result = await sql({
    query: "SELECT * FROM PRODUCT"
  });
  return result;
};

const getProduct = async () => {
  try {
    const result = await getProduct$1();
    return {
      data: result
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};

const router$d = createRouter$1();
router$d.get("/product/getProduct", defineEventHandler(getProduct));
const _____$e = useBase("/api", router$d.handler);

const _____$f = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _____$e
});

const getRecord10$3 = async () => {
  const result = await sql({
    query: `SELECT
    jr.*,
    ACCOUNT.NAME as REG_ACCOUNT_NAME,
    wp.JAEDAN_PART_NAME,  -- \uC6D0\uD558\uB294 \uCEEC\uB7FC \uC120\uD0DD
    PRODUCTION_ACCOUNT.NAME as PRODUCTION_ACCOUNT_NAME,wp.*,
    PROCESS_BARCODE_COUNT.*
  FROM
    JAEDAN_REGIST jr
  JOIN
    WORKING_ORDER wo ON jr.WORK_ORDER_NO = wo.NO
  JOIN
    WORKING_PART wp ON wo.WORKING_PART = wp.ID
   JOIN 
   ACCOUNT ON wo.REG_ACCOUNT = ACCOUNT.NO
   JOIN PROCESS_BARCODE_COUNT  ON jr.PROCESSCODE = PROCESS_BARCODE_COUNT.PROCESS_CODE
   LEFT JOIN
    ACCOUNT PRODUCTION_ACCOUNT ON jr.PRODUCTION_ACCOUNT = PRODUCTION_ACCOUNT.NO 
    where jr.STATE = 2 or jr.STATE = 3`
  });
  return result;
};
const getRecord$3 = async () => {
  const result = await sql({
    query: `SELECT
    jr.*,
    ACCOUNT.NAME as REG_ACCOUNT_NAME,
       wp.JAEDAN_PART_NAME  -- \uC6D0\uD558\uB294 \uCEEC\uB7FC \uC120\uD0DD
  FROM
    JAEDAN_REGIST jr
  JOIN
    WORKING_ORDER wo ON jr.WORK_ORDER_NO = wo.NO
  JOIN
    WORKING_PART wp ON wo.WORKING_PART = wp.ID
   JOIN ACCOUNT ON wo.REG_ACCOUNT = ACCOUNT.NO ;`
  });
  return result;
};
const getProductionByProcessCode$1 = async (processCode) => {
  const result = await sql({
    // query: `SELECT * FROM PRODUCTION WHERE PROCESS_CODE = ?`,
    query: `SELECT jr.*,  pr.*, wp.*, pc.LAST_SERIAL_NUMBER as LAST_SERIAL_NUMBER2 FROM PRODUCTION pr
JOIN JAEDAN_REGIST jr on jr.PROCESSCODE = pr.PROCESS_CODE
JOIN WORKING_ORDER wo ON jr.WORK_ORDER_NO = wo.NO
JOIN WORKING_PART wp ON wo.WORKING_PART = wp.ID
JOIN PROCESS_BARCODE_COUNT pc ON pr.PROCESS_CODE = pc.PROCESS_CODE
WHERE pr.PROCESS_CODE = ?`,
    values: [processCode]
  });
  console.log("processCode", processCode);
  return result[0];
};
const updateLastSerialNumber$3 = async (processCode, lastSerialNumber) => {
  await sql({
    query: `UPDATE PROCESS_BARCODE_COUNT SET LAST_SERIAL_NUMBER = ? WHERE PROCESS_CODE = ?`,
    values: [lastSerialNumber, processCode]
  });
  console.log("lastSerialNumber processCode", lastSerialNumber, processCode);
};
const getBarcodeCount$1 = async (processCode) => {
  const result = await sql({
    query: "SELECT BARCODE_COUNT FROM PROCESS_BARCODE_COUNT WHERE PROCESS_CODE = ?",
    values: [processCode]
  });
  return result;
};
const register$3 = async (data) => {
  const result = await sql({
    query: `
      INSERT INTO PRODUCTION (
        JAEDAN_NO,
        PROCESS_CODE,
        STATE
      ) VALUES (
        ?,
        ?,
        ?
      )
    `,
    values: [
      data.JAEDAN_NO,
      data.PROCESS_CODE,
      data.STATE
    ]
  });
  console.log("result============", result);
  return result.affectedRows === 1 ? data : null;
};
const updateState$5 = async (NO, STATE, PD_STATE, PD_ACCOUNT, PD_DATE) => {
  const formattedDate = PD_DATE.split("T")[0];
  const result = await sql({
    query: "UPDATE JAEDAN_REGIST SET STATE =?, PD_STATE = ?, PD_ACCOUNT = ?, PD_DATE = ? WHERE NO = ?",
    values: [STATE, PD_STATE, PD_ACCOUNT, formattedDate, NO]
    // 여기에 formattedDate 사용
  });
  return result.affectedRows === 1 ? { success: true } : { success: false };
};
const detail$4 = async (PD_NAME) => {
  const result = await sql({
    // query: 'SELECT id, date, part, category,sub_category,count FROM DEFECTIVE_DATA WHERE no = ?',
    query: "SELECT *t FROM JEADAN_ITEM WHERE PRODUCT = ?",
    values: [PD_NAME]
  });
  return result.length === 1 ? result[0] : null;
};
const getDetail$1 = async (NO) => {
  const result = await sql({
    query: 'SELECT jr.NO, jr.WORK_ORDER_NO, DATE_FORMAT(jr.CREATE_DATE, "%Y-%m-%d") as CREATE_DATE, DATE_FORMAT(jr.WORK_DATE, "%Y-%m-%d") as WORK_DATE, jr.COUNT, jr.LOT, ac.NAME as regAccount, ac2.NAME as updateAccount, wp.PUMBUN,wp.ASSY_PART_NAME,wp.ASSY_SUB_PART_NAME,wp.JAEDAN_PART_NAME,PROCESSCODE FROM JAEDAN_REGIST jr JOIN WORKING_ORDER wo ON jr.WORK_ORDER_NO = wo.NO JOIN ACCOUNT ac ON jr.REG_ACCOUNT = ac.NO JOIN ACCOUNT ac2 ON jr.UPDATE_ACCOUNT = ac2.NO JOIN WORKING_PART wp ON wo.WORKING_PART = wp.ID WHERE jr.NO = ?',
    values: [NO]
  });
  return result.length === 1 ? result[0] : null;
};
const remove$7 = async (NO) => {
  console.log("remove", NO);
  await sql({
    query: "DELETE FROM JAEDAN_REGIST WHERE NO = ?",
    values: [NO]
  });
  return true;
};

const getProductionAllData = async () => {
  try {
    const result = await undefined();
    return {
      data: result
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const getRecord$2 = async () => {
  try {
    const result = await getRecord$3();
    return {
      data: result
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const getProductionByProcessCode = async (event) => {
  const { processCode } = event.context.params;
  try {
    const production = await getProductionByProcessCode$1(processCode);
    if (production) {
      return production;
    } else {
      return null;
    }
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const getBarcodeCount = async (event) => {
  const processCode = event.context.params.processCode;
  try {
    const result = await getBarcodeCount$1(processCode);
    if (result.length === 0) {
      return { barcodeCount: 0 };
    }
    return { barcodeCount: result[0].BARCODE_COUNT };
  } catch (err) {
    console.error("Error fetching barcode count for process code", processCode, err);
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const updateLastSerialNumber$2 = async (event) => {
  const { processCode } = event.context.params;
  const { lastSerialNumber } = await readBody(event);
  try {
    await updateLastSerialNumber$3(processCode, lastSerialNumber);
    return { success: true };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const register$2 = async (evt) => {
  try {
    console.log("Creating a new PRODUCTION RECORD");
    const body = await readBody(evt);
    console.log("Got request body", body);
    const result = await register$3({
      JAEDAN_NO: body.JAEDAN_NO,
      PROCESS_CODE: body.PROCESS_CODE,
      STATE: body.STATE
    });
    console.log("Created JAEDAN REGISTER post", result);
    return {
      data: result
    };
  } catch (err) {
    console.error("Error creating JAEDAN post", err);
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const updateState$4 = async (evt) => {
  try {
    const body = await readBody(evt);
    const NO = body.NO;
    const result = await updateState$5(NO, body.STATE, body.PD_STATE, body.PD_ACCOUNT, body.PD_DATE);
    return {
      data: result
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const getRecord10$2 = async () => {
  try {
    const result = await getRecord10$3();
    return {
      data: result
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const getDetail = async (evt) => {
  var _a;
  try {
    const result = await getDetail$1((_a = evt.context.params) == null ? void 0 : _a.NO);
    return {
      data: result
    };
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const detail$3 = async (evt) => {
  var _a;
  try {
    const result = await detail$4((_a = evt.context.params) == null ? void 0 : _a.PD_NAME);
    return {
      data: result
    };
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const remove$6 = async (evt) => {
  var _a;
  try {
    console.log("evt", evt);
    const result = await remove$7((_a = evt.context.params) == null ? void 0 : _a.NO);
    console.log(result);
    return {
      data: result
    };
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};

const router$c = createRouter$1();
router$c.get("/production/getProductionAllData", defineEventHandler(getProductionAllData));
router$c.get("/production", defineEventHandler(getProductionByProcessCode));
router$c.get("/production/getprocessCode/:processCode", defineEventHandler(getProductionByProcessCode));
router$c.put("/production/:processCode", defineEventHandler(updateLastSerialNumber$2));
router$c.get("/production/barcodeCount/:processCode", defineEventHandler(getBarcodeCount));
router$c.post("/production/updateState/:NO", defineEventHandler(updateState$4));
router$c.post("/production/register", defineEventHandler(register$2));
router$c.get("/production/getRecord", defineEventHandler(getRecord$2));
router$c.get("/production/getRecord10", defineEventHandler(getRecord10$2));
router$c.put("/production/:NO", defineEventHandler(updateState$4));
router$c.delete("/production/:NO", defineEventHandler(remove$6));
router$c.get("/production/:NO", defineEventHandler(getDetail));
router$c.get("/production/:PD_NAME", defineEventHandler(detail$3));
const _____$c = useBase("/api", router$c.handler);

const _____$d = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _____$c
});

const getProductsByProductCode$1 = async (productsCode) => {
  const result = await sql({
    // query: `SELECT * FROM PRODUCTION WHERE PROCESS_CODE = ?`,
    query: `SELECT  pr.*, pc.LAST_SERIAL_NUMBER as LAST_SERIAL_NUMBER2 FROM PRODUCTS pr
JOIN PRODUCTS_BARCODE_COUNT pc ON pr.PRODUCT_CODE = pc.PRODUCT_CODE
WHERE pr.PRODUCT_CODE = ?`,
    values: [productsCode]
  });
  console.log("productsCode", productsCode);
  return result[0];
};
const updateLastSerialNumber$1 = async (productsCode, lastSerialNumber) => {
  await sql({
    query: `UPDATE PRODUCTS_BARCODE_COUNT SET LAST_SERIAL_NUMBER = ? WHERE PROCESS_CODE = ?`,
    values: [lastSerialNumber, productsCode]
  });
  console.log("lastSerialNumber processCode", lastSerialNumber, productsCode);
};

const getProductsByProductCode = async (event) => {
  const { productsCode } = event.context.params;
  try {
    const product = await getProductsByProductCode$1(productsCode);
    if (product) {
      return product;
    } else {
      return null;
    }
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const updateLastSerialNumber = async (event) => {
  const { productsCode } = event.context.params;
  const { lastSerialNumber } = await readBody(event);
  try {
    await updateLastSerialNumber$1(productsCode, lastSerialNumber);
    return { success: true };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};

const router$b = createRouter$1();
router$b.get("/products/getproductsCode/:productsCode", defineEventHandler(getProductsByProductCode));
router$b.put("/products/:productsCode", defineEventHandler(updateLastSerialNumber));
const _____$a = useBase("/api", router$b.handler);

const _____$b = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _____$a
});

const list$3 = async () => {
  const result = await sql({
    query: "SELECT PUMMYUM FROM SALE_PRODUCT"
  });
  return result;
};

const list$2 = async (evt) => {
  try {
    const result = await list$3();
    return { data: result };
  } catch (error) {
    throw createError({ statusCode: 500, statusMessage: "Something went wrong" });
  }
};

const router$a = createRouter$1();
router$a.get("/saleproduct", defineEventHandler(list$2));
const saleproduct = useBase("/api", router$a.handler);

const saleproduct$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: saleproduct
});

const saveScannedBarcode$1 = async (data) => {
  try {
    const result = await transaction(async (connection) => {
      const insertResult = await connection.query("INSERT INTO SCANNED_BARCODE (BARCODE, CREATE_DATE, PROCESS_CODE) VALUES (?, ?, ?)", [data.BARCODE, data.CREATE_DATE, data.PROCESS_CODE]);
      if (insertResult[0].affectedRows === 0) {
        throw new Error("\uBC14\uCF54\uB4DC \uB4F1\uB85D\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.");
      }
      const updateResult = await connection.query("INSERT INTO PROCESS_BARCODE_COUNT (PROCESS_CODE, BARCODE_COUNT) VALUES (?, 1) ON DUPLICATE KEY UPDATE BARCODE_COUNT = BARCODE_COUNT + 1", [data.PROCESS_CODE]);
      if (updateResult[0].affectedRows === 0) {
        throw new Error("PROCESS_BARCODE_COUNT \uC5C5\uB370\uC774\uD2B8\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.");
      }
      return { success: true };
    });
    return result;
  } catch (err) {
    console.error("Error saving scanned barcode:", err);
    return { error: err.message };
  }
};
const saveScannedBarcodes$1 = async (evt) => {
  try {
    const body = await readBody(evt);
    const result = await sql.transaction(async (tx) => {
      const queries = body.barcodes.map((barcode) => {
        return tx.query("INSERT INTO SCANNED_BARCODE (BARCODE, CREATE_DATE, PROCESS_CODE) VALUES (?, ?, ?)", [barcode, body.date, body.processCode]);
      });
      const insertResults = await Promise.all(queries);
      const failedInserts = insertResults.filter((result2) => result2.affectedRows === 0);
      if (failedInserts.length > 0) {
        return { error: "\uC77C\uBD80 \uBC14\uCF54\uB4DC \uB4F1\uB85D\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4." };
      }
      const updateResult = await tx.query("INSERT INTO PROCESS_BARCODE_COUNT (PROCESS_CODE, BARCODE_COUNT) VALUES (?, ?) ON DUPLICATE KEY UPDATE BARCODE_COUNT = BARCODE_COUNT + ?", [body.processCode, body.barcodes.length, body.barcodes.length]);
      if (updateResult.affectedRows === 0) {
        return { error: "PROCESS_BARCODE_COUNT \uC5C5\uB370\uC774\uD2B8\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4." };
      }
      return { success: true };
    });
    return result;
  } catch (err) {
    console.error("Error creating saveScannedBarcodes posts", err);
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};

const saveScannedBarcode = async (evt) => {
  try {
    const body = await readBody(evt);
    const result = await saveScannedBarcode$1({
      BARCODE: body.barcode,
      CREATE_DATE: body.date,
      PROCESS_CODE: body.processCode
    });
    if (result.error) {
      evt.res.statusCode = 400;
      evt.res.end(JSON.stringify({ error: result.error }));
    } else {
      evt.res.statusCode = 200;
      evt.res.end(JSON.stringify({ success: true }));
    }
  } catch (err) {
    console.error("Error creating saveScannedBarcode post", err);
    evt.res.statusCode = 500;
    evt.res.end(JSON.stringify({ error: "Something went wrong" }));
  }
};
const saveScannedBarcodes = async (evt) => {
  try {
    const body = await readBody(evt);
    const result = await saveScannedBarcodes$1({
      barcodes: body.barcodes,
      CREATE_DATE: body.date,
      PROCESS_CODE: body.processCode
    });
    if (result.error) {
      evt.res.statusCode = 400;
      evt.res.end(JSON.stringify({ error: result.error }));
    } else {
      evt.res.statusCode = 200;
      evt.res.end(JSON.stringify({ success: true }));
    }
  } catch (err) {
    console.error("Error creating saveScannedBarcodes posts", err);
    evt.res.statusCode = 500;
    evt.res.end(JSON.stringify({ error: "Something went wrong" }));
  }
};

const router$9 = createRouter$1();
router$9.post("/scannedBarcode", defineEventHandler(saveScannedBarcode));
const scannedBarcode = useBase("/api", router$9.handler);

const scannedBarcode$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: scannedBarcode
});

const router$8 = createRouter$1();
router$8.post("/scannedBarcodes", defineEventHandler(saveScannedBarcodes));
const scannedBarcodes = useBase("/api", router$8.handler);

const scannedBarcodes$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: scannedBarcodes
});

const create$1 = async (data) => {
  const result = await sql({
    query: "INSERT INTO PD_STOCK (PD_NAME, COUNT) VALUES ( ?, ?)",
    values: [data.PD_NAME, data.COUNT]
  });
  return result.insertId;
};
const list$1 = async () => {
  const result = await sql({
    query: `
      SELECT s.NO, s.ID, s.PD_NAME, s.COUNT, DATE_FORMAT(s.DATE, '%Y-%m-%d') AS DATE, p.PUMMYUM
      FROM PD_STOCK s
      JOIN SALE_PRODUCT p ON s.PD_NAME = p.PUMMYUM
    `
  });
  return result;
};
const remove$5 = async (NO) => {
  await sql({
    query: "DELETE FROM PD_STOCK WHERE NO = ?",
    values: [NO]
  });
  return true;
};

const create = async (evt) => {
  try {
    const body = await readBody(evt);
    const result = await create$1(body);
    return { data: result };
  } catch (err) {
    console.error("Error creating stock:", err);
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const list = async (evt) => {
  try {
    const result = await list$1();
    return { data: result };
  } catch (err) {
    console.error("Error fetching stocks:", err);
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const remove$4 = async (evt) => {
  var _a;
  try {
    const result = await remove$5((_a = evt.context.params) == null ? void 0 : _a.NO);
    return { data: result };
  } catch (err) {
    console.error("Error removing stock:", err);
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};

const router$7 = createRouter$1();
router$7.post("/", defineEventHandler(create));
router$7.get("/", defineEventHandler(list));
router$7.delete("/:NO", defineEventHandler(remove$4));
const stock = useBase("/api/stock", router$7.handler);

const stock$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: stock
});

const router$6 = createRouter$1();
router$6.get("/stock", defineEventHandler(list));
router$6.delete("/stock/:NO", defineEventHandler(remove$4));
router$6.post("/stock", defineEventHandler(create));
const _____$8 = useBase("/api", router$6.handler);

const _____$9 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _____$8
});

const router$5 = createRouter$1();
router$5.post("/scannedBarcode", defineEventHandler(saveScannedBarcode));
router$5.post("/scannedBarcodes", defineEventHandler(saveScannedBarcodes));
const _____$6 = useBase("/api", router$5.handler);

const _____$7 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _____$6
});

const user$2 = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      const user2 = decoded;
      res.json({ user: user2 });
    } catch (error) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const router$4 = createRouter$1();
router$4.get("/user", defineEventHandler(async (evt) => {
  try {
    const user = await user$2(evt);
    if (!user) {
      throw new Error("Unauthorized");
    }
    const token = jwt.sign({ email: user.EMAIL }, process.env.JWT_SECRET, { expiresIn: "1h" });
    evt.res.setHeader("Set-Cookie", `token=${token}; HttpOnly`);
    return {
      data: user
    };
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}));
const user = useBase("/api/account", router$4.handler);

const user$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: user
});

const getWondanCode$1 = async () => {
  const result = await sql({
    query: `SELECT
        *    
      FROM
      WONDAN
      `
  });
  return result;
};
const getRecord$1 = async () => {
  const result = await sql({
    query: `SELECT ws.*, a.NAME as REG_ACCOUNT 
    FROM WONDAN_STORE ws
    JOIN ACCOUNT a ON ws.REG_ACCOUNT = a.NO`
  });
  return result;
};
const update$1 = async (NO, data) => {
  try {
    await sql({
      query: `
        UPDATE WONDAN_STORE
        SET
        REG_DATE = ?,
        WONDAN_NAME = ?,
        LOT_NO = ?,
        LENGTH = ?,
        REAL_LENGTH = ?,
        SUPPLY = ?,
        DEFECTIVE_LENGTH = ?,
        STATE = ?
        WHERE NO = ?
      `,
      values: [data.REG_DATE, data.WONDAN_NAME, data.LOT_NO, data.LENGTH, data.REAL_LENGTH, data.SUPPLY, data.DEFECTIVE_LENGTH, data.STATE, NO]
    });
    console.log("Update successful");
    return await detail$2(NO);
  } catch (error) {
    console.error("Update error:", error);
    throw error;
  }
};
const getUseable$1 = async () => {
  const result = await sql({
    // query: 'SELECT no, DATE, PART,CATEGORY, SUB_CATEGORY,COUNT FROM DEFECTIVE_DATA'
    query: `
    SELECT NO, WONDAN_NAME, DATE_FORMAT(REG_DATE, '%Y-%m-%d') AS REG_DATE, LOT_NO, LENGTH, REAL_LENGTH, SUPPLY, REG_ACCOUNT, DEFECTIVE_LENGTH, STATE, STATE_DATE, ETC  FROM WONDAN_STORE WHERE STATE = 0
    `
  });
  return result;
};
const register$1 = async (data) => {
  try {
    const existingRecord = await sql({
      query: `
        SELECT * FROM WONDAN_STORE WHERE LOT_NO = ?
      `,
      values: [data.LOT_NO]
    });
    if (existingRecord.length > 0) {
      return {
        statusCode: 400,
        statusMessage: "LOT_NO already exists"
      };
    }
    const result = await sql({
      query: `
        INSERT INTO WONDAN_STORE (
          REG_DATE,
          WONDAN_NAME,
          LOT_NO,
          LENGTH,
          REAL_LENGTH,
          SUPPLY,
          REG_ACCOUNT,
          DEFECTIVE_LENGTH,
          UPDATE_ACCOUNT
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      values: [
        data.REG_DATE,
        data.WONDAN_NAME,
        data.LOT_NO,
        data.LENGTH,
        data.REAL_LENGTH,
        data.SUPPLY,
        data.REG_ACCOUNT,
        data.DEFECTIVE_LENGTH,
        data.UPDATE_ACCOUNT
      ]
    });
    console.log("result============", result);
    return result.affectedRows === 1 ? data : null;
  } catch (error) {
    console.error("Wondan \uAC8C\uC2DC\uBB3C \uC0DD\uC131 \uC911 \uC624\uB958 \uBC1C\uC0DD", error);
    throw error;
  }
};
const updateState$3 = async (NO, STATE, UPDATE_ACCOUNT) => {
  const result = await sql({
    query: "UPDATE WONDAN_STORE SET STATE = ?, UPDATE_ACCOUNT = ? WHERE NO = ?",
    values: [STATE, UPDATE_ACCOUNT, NO]
  });
  return result.affectedRows === 1 ? { success: true } : { success: false };
};
const remove$3 = async (NO) => {
  console.log("remove", NO);
  await sql({
    query: "DELETE FROM WONDAN_STORE WHERE NO = ?",
    values: [NO]
  });
  return true;
};
const detail$2 = async (NO) => {
  const result = await sql({
    query: "SELECT * FROM WONDAN_STORE WHERE NO = ?",
    values: [NO]
  });
  return result.length === 1 ? result[0] : null;
};

const getWondanCode = async () => {
  try {
    const result = await getWondanCode$1();
    return {
      data: result
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const getRecord = async () => {
  try {
    const result = await getRecord$1();
    return {
      data: result
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const register = async (evt) => {
  try {
    console.log("Creating a new wondan RECORD");
    const body = await readBody(evt);
    console.log("Got request body", body);
    const result = await register$1({
      REG_DATE: body.REG_DATE,
      WONDAN_NAME: body.WONDAN_NAME,
      LOT_NO: body.LOT_NO,
      LENGTH: body.LENGTH,
      REAL_LENGTH: body.REAL_LENGTH,
      SUPPLY: body.SUPPLY,
      REG_ACCOUNT: body.REG_ACCOUNT,
      DEFECTIVE_LENGTH: body.DEFECTIVE_LENGTH,
      UPDATE_ACCOUNT: body.UPDATE_ACCOUNT
    });
    if (result.statusCode === 400 && result.statusMessage === "LOT_NO already exists") {
      return {
        statusCode: 400,
        statusMessage: "LOT_NO already exists"
      };
    }
    console.log("Created Wondan REGISTER post", result);
    return {
      data: result
    };
  } catch (err) {
    console.error("Error creating Wondan post", err);
    throw err;
  }
};
const update = async (evt) => {
  var _a;
  try {
    const body = await readBody(evt);
    const result = await update$1((_a = evt.context.params) == null ? void 0 : _a.NO, {
      REG_DATE: body.REG_DATE,
      WONDAN_NAME: body.WONDAN_NAME,
      LOT_NO: body.LOT_NO,
      LENGTH: body.LENGTH,
      REAL_LENGTH: body.REAL_LENGTH,
      SUPPLY: body.SUPPLY,
      DEFECTIVE_LENGTH: body.DEFECTIVE_LENGTH,
      STATE: body.STATE
    });
    return {
      data: result
    };
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const updateState$2 = async (evt) => {
  try {
    const body = await readBody(evt);
    const NO = body.NO;
    const result = await updateState$3(NO, body.STATE, body.UPDATE_ACCOUNT);
    return {
      data: result
    };
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const getUseable = async () => {
  try {
    const result = await getUseable$1();
    return {
      data: result
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const remove$2 = async (evt) => {
  var _a;
  try {
    console.log("evt", evt);
    const result = await remove$3((_a = evt.context.params) == null ? void 0 : _a.NO);
    console.log(result);
    return {
      data: result
    };
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};

const router$3 = createRouter$1();
router$3.get("/wondan/getRecord", defineEventHandler(async (evt) => {
  try {
    const result = await getRecord();
    return {
      data: result
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
}));
router$3.get("/wondan/getWondanCode", defineEventHandler(getWondanCode));
router$3.post("/wondan/register", defineEventHandler(register));
router$3.put("/wondan/:NO", defineEventHandler(update));
router$3.delete("/wondan/:NO", defineEventHandler(remove$2));
router$3.get("/wondan/getUseable", defineEventHandler(getUseable));
router$3.post("/wondan/updateState/:NO", defineEventHandler(updateState$2));
const _____$4 = useBase("/api", router$3.handler);

const _____$5 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _____$4
});

const getWORKING_PART$1 = async () => {
  const result = await sql({
    query: "SELECT * FROM WORKING_PART"
  });
  return result;
};

const getWORKING_PART = async () => {
  try {
    const result = await getWORKING_PART$1();
    return {
      data: result
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};

const router$2 = createRouter$1();
router$2.get("/working_part/getWORKING_PART", defineEventHandler(getWORKING_PART));
const _____$2 = useBase("/api", router$2.handler);

const _____$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _____$2
});

const registerOrder$1 = async (data) => {
  const result = await sql({
    query: `
      INSERT INTO WORKING_ORDER (
        CREATE_DATE,
        WORKING_PART,
        COUNT,
        REG_ACCOUNT
        ) VALUES (
          ?,
          ?,
          ?,
          ?
        )
    `,
    values: [data.CREATE_DATE, data.WORKING_PART, data.COUNT, data.REG_ACCOUNT]
  });
  return result.length === 1 ? result[0] : null;
};
const updateState$1 = async (NO, STATE, UPDATE_ACCOUNT) => {
  const result = await sql({
    query: "UPDATE WORKING_ORDER SET STATE = ?, UPDATE_ACCOUNT = ? WHERE NO = ?",
    values: [STATE, UPDATE_ACCOUNT, NO]
  });
  return result.affectedRows === 1 ? { success: true } : { success: false };
};
const getOrder$1 = async () => {
  const result = await sql({
    query: `SELECT *
    FROM WORKING_ORDER
    JOIN WORKING_PART ON WORKING_ORDER.WORKING_PART = WORKING_PART.ID
    ; 
    `
  });
  return result;
};
const getOrderWithAccount$1 = async () => {
  const result = await sql({
    query: `SELECT wo.*, wp.*, a.NAME, a.EMAIL, a.NO as ACCOUNT_NO
    FROM WORKING_ORDER wo
    JOIN WORKING_PART wp ON wo.WORKING_PART = wp.ID
    JOIN ACCOUNT a ON wo.REG_ACCOUNT = a.NO
    where wo.STATE = 0;
    `
  });
  return result;
};
const getOrderWithAccountAll$1 = async () => {
  const result = await sql({
    query: `SELECT wo.*, wp.*, a.NAME, a.EMAIL, a.NO as ACCOUNT_NO
    FROM WORKING_ORDER wo
    JOIN WORKING_PART wp ON wo.WORKING_PART = wp.ID
    JOIN ACCOUNT a ON wo.REG_ACCOUNT = a.NO
   ;
    `
  });
  return result;
};
const getRecord10$1 = async () => {
  const result = await sql({
    query: `SELECT * FROM WORKING_ORDER ORDER BY CREATE_DATE DESC LIMIT 10;`
  });
  return result;
};
const detail$1 = async (NO) => {
  const result = await sql({
    query: "SELECT wo.*, wp.* FROM WORKING_ORDER wo JOIN WORKING_PART wp ON wo.WORKING_PART = wp.ID WHERE wo.NO = ?",
    values: [NO]
  });
  return result.length === 1 ? result[0] : null;
};
const remove$1 = async (NO) => {
  console.log("remove", NO);
  await sql({
    query: "DELETE FROM WORKING_ORDER WHERE NO = ?",
    values: [NO]
  });
  return true;
};

const getOrder = async () => {
  try {
    const result = await getOrder$1();
    return {
      data: result
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const getOrderWithAccount = async () => {
  try {
    const result = await getOrderWithAccount$1();
    return {
      data: result
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const getOrderWithAccountAll = async () => {
  try {
    const result = await getOrderWithAccountAll$1();
    return {
      data: result
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const registerOrder = async (evt) => {
  try {
    console.log("Creating a new worrk order RECORD ");
    const body = await readBody(evt);
    console.log("Got request body", body);
    const result = await registerOrder$1({
      CREATE_DATE: body.CREATE_DATE,
      WORKING_PART: body.WORKING_PART,
      COUNT: body.COUNT,
      REG_ACCOUNT: body.REG_ACCOUNT
    });
    console.log("Created work order post", result);
    return {
      data: result
    };
  } catch (err) {
    console.error("Error creating work order post", err);
  }
};
const updateState = async (evt) => {
  try {
    const body = await readBody(evt);
    const NO = body.NO;
    const result = await updateState$1(NO, body.STATE, body.UPDATE_ACCOUNT);
    return {
      data: result
    };
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const getRecord10 = async () => {
  try {
    const result = await getRecord10$1();
    return {
      data: result
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const remove = async (evt) => {
  var _a;
  try {
    console.log("evt", evt);
    const result = await remove$1((_a = evt.context.params) == null ? void 0 : _a.NO);
    console.log(result);
    return {
      data: result
    };
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};
const detail = async (evt) => {
  var _a;
  try {
    const NO = (_a = evt.context.params) == null ? void 0 : _a.NO;
    const result = await detail$1(NO);
    return {
      data: result
    };
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong"
    });
  }
};

const router$1 = createRouter$1();
router$1.post("/workOrder", defineEventHandler(registerOrder));
const workOrder = useBase("/api", router$1.handler);

const workOrder$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: workOrder
});

const router = createRouter$1();
router.get("/workOrder/getOrderWithAccount", defineEventHandler(getOrderWithAccount));
router.delete("/workOrder/:NO", defineEventHandler(remove));
router.post("/workOrder/updateState/:NO", defineEventHandler(updateState));
router.get("/workOrder/getOrderWithAccountAll", defineEventHandler(getOrderWithAccountAll));
router.get("/workOrder/getOrder", defineEventHandler(getOrder));
router.get("/workOrder/getRecord10", defineEventHandler(getRecord10));
router.get("/workOrder/getOrder/:NO", defineEventHandler(detail));
router.post("/workOrder", defineEventHandler(registerOrder));
const _____ = useBase("/api", router.handler);

const _____$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _____
});

const Vue3 = version.startsWith("3");

function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref, lastKey = "") {
  if (ref instanceof Promise)
    return ref;
  const root = resolveUnref(ref);
  if (!ref || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}

const VueReactivityPlugin = defineHeadPlugin({
  hooks: {
    "entries:resolve": function(ctx) {
      for (const entry of ctx.entries)
        entry.resolvedInput = resolveUnrefHeadInput(entry.input);
    }
  }
});

const headSymbol = "usehead";
function vueInstall(head) {
  const plugin = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head;
        app.config.globalProperties.$head = head;
        app.provide(headSymbol, head);
      }
    }
  };
  return plugin.install;
}
function createServerHead(options = {}) {
  const head = createServerHead$1(options);
  head.use(VueReactivityPlugin);
  head.install = vueInstall(head);
  return head;
}

const unheadPlugins = [];

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"}],"link":[],"style":[],"script":[],"noscript":[]};

const appRootId = "__nuxt";

const appRootTag = "div";

const appTeleportTag = "div";

const appTeleportId = "teleports";

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const app = useRuntimeConfig().app;
  const publicBase = app.cdnURL || app.baseURL;
  return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const getClientManifest = () => import('file:///Users/tera/Desktop/%E1%84%86%E1%85%AE%E1%84%8C%E1%85%A6%20%E1%84%91%E1%85%A9%E1%86%AF%E1%84%83%E1%85%A5%202/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getServerEntry = () => import('file:///Users/tera/Desktop/%E1%84%86%E1%85%AE%E1%84%8C%E1%85%A6%20%E1%84%91%E1%85%A9%E1%86%AF%E1%84%83%E1%85%A5%202/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "").then((r) => APP_ROOT_OPEN_TAG + r + APP_ROOT_CLOSE_TAG);
  const options = {
    manifest,
    renderToString: () => spaTemplate,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig(ssrContext.event);
    ssrContext.modules = ssrContext.modules || /* @__PURE__ */ new Set();
    ssrContext.payload = {
      _errors: {},
      serverRendered: false,
      data: {},
      state: {},
      once: /* @__PURE__ */ new Set()
    };
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
const ISLAND_SUFFIX_RE = /\.json(\?.*)?$/;
async function getIslandContext(event) {
  let url = event.path || "";
  const componentParts = url.substring("/__nuxt_island".length + 1).replace(ISLAND_SUFFIX_RE, "").split("_");
  const hashId = componentParts.length > 1 ? componentParts.pop() : void 0;
  const componentName = componentParts.join("_");
  const context = event.method === "GET" ? getQuery$1(event) : await readBody(event);
  const ctx = {
    url: "/",
    ...context,
    id: hashId,
    name: componentName,
    props: destr(context.props) || {},
    slots: {},
    components: {}
  };
  return ctx;
}
const APP_TELEPORT_OPEN_TAG = `<${appTeleportTag} id="${appTeleportId}">` ;
const APP_TELEPORT_CLOSE_TAG = `</${appTeleportTag}>` ;
const APP_ROOT_OPEN_TAG = `<${appRootTag}${` id="${appRootId}"` }>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
const PAYLOAD_URL_RE = /\/_payload.json(\?.*)?$/ ;
const ROOT_NODE_REGEX = new RegExp(`^${APP_ROOT_OPEN_TAG}([\\s\\S]*)${APP_ROOT_CLOSE_TAG}$`);
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
  if (ssrError && ssrError.statusCode) {
    ssrError.statusCode = parseInt(ssrError.statusCode);
  }
  if (ssrError && !("__unenv__" in event.node.req)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const isRenderingIsland = event.path.startsWith("/__nuxt_island");
  const islandContext = isRenderingIsland ? await getIslandContext(event) : void 0;
  let url = ssrError?.url || islandContext?.url || event.path;
  const isRenderingPayload = PAYLOAD_URL_RE.test(url) && !isRenderingIsland;
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event._path = url;
    event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  const head = createServerHead({
    plugins: unheadPlugins
  });
  const headEntryOptions = { mode: "server" };
  if (!isRenderingIsland) {
    head.push(appHead, headEntryOptions);
  }
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(event),
    noSSR: event.context.nuxt?.noSSR || routeOptions.ssr === false && !isRenderingIsland || (false),
    head,
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    _payloadReducers: {},
    modules: /* @__PURE__ */ new Set(),
    set _registeredComponents(value) {
      this.modules = value;
    },
    get _registeredComponents() {
      return this.modules;
    },
    islandContext
  };
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    return response2;
  }
  const inlinedStyles = isRenderingIsland ? await renderInlineStyles(ssrContext.modules ?? []) : [];
  const NO_SCRIPTS = routeOptions.experimentalNoScripts;
  const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
  head.push({ style: inlinedStyles });
  if (!isRenderingIsland || true) {
    const link = [];
    for (const style in styles) {
      const resource = styles[style];
      if ("inline" in getQuery(resource.file)) {
        continue;
      }
      if (!isRenderingIsland || resource.file.includes("scoped") && !resource.file.includes("pages/")) {
        link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file) });
      }
    }
    head.push({ link }, headEntryOptions);
  }
  if (!NO_SCRIPTS && !isRenderingIsland) {
    head.push({
      link: getPreloadLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      link: getPrefetchLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      script: renderPayloadJsonScript({ id: "__NUXT_DATA__", ssrContext, data: ssrContext.payload }) 
    }, {
      ...headEntryOptions,
      // this should come before another end of body scripts
      tagPosition: "bodyClose",
      tagPriority: "high"
    });
  }
  if (!routeOptions.experimentalNoScripts && !isRenderingIsland) {
    head.push({
      script: Object.values(scripts).map((resource) => ({
        type: resource.module ? "module" : null,
        src: renderer.rendererContext.buildAssetsURL(resource.file),
        defer: resource.module ? null : true,
        crossorigin: ""
      }))
    }, headEntryOptions);
  }
  const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(head);
  const htmlContext = {
    island: isRenderingIsland,
    htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
    head: normalizeChunks([headTags, ssrContext.styles]),
    bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
    bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
    body: [
      replaceIslandTeleports(ssrContext, _rendered.html) ,
      APP_TELEPORT_OPEN_TAG + (joinTags([ssrContext.teleports?.[`#${appTeleportId}`]]) ) + APP_TELEPORT_CLOSE_TAG
    ],
    bodyAppend: [bodyTags]
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  if (isRenderingIsland && islandContext) {
    const islandHead = {
      link: [],
      style: []
    };
    for (const tag of await head.resolveTags()) {
      if (tag.tag === "link") {
        islandHead.link.push({ key: "island-link-" + hash(tag.props), ...tag.props });
      } else if (tag.tag === "style" && tag.innerHTML) {
        islandHead.style.push({ key: "island-style-" + hash(tag.innerHTML), innerHTML: tag.innerHTML });
      }
    }
    const islandResponse = {
      id: islandContext.id,
      head: islandHead,
      html: getServerComponentHTML(htmlContext.body),
      state: ssrContext.payload.state,
      components: getClientIslandResponse(ssrContext),
      slots: getSlotIslandResponse(ssrContext)
    };
    await nitroApp.hooks.callHook("render:island", islandResponse, { event, islandContext });
    const response2 = {
      body: JSON.stringify(islandResponse, null, 2),
      statusCode: getResponseStatus(event),
      statusMessage: getResponseStatusText(event),
      headers: {
        "content-type": "application/json;charset=utf-8",
        "x-powered-by": "Nuxt"
      }
    };
    return response2;
  }
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: getResponseStatus(event),
    statusMessage: getResponseStatusText(event),
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
  return response;
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  if (chunks.length === 0) {
    return "";
  }
  return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html><html${joinAttrs(html.htmlAttrs)}><head>${joinTags(html.head)}</head><body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body></html>`;
}
async function renderInlineStyles(usedModules) {
  const styleMap = await getSSRStyles();
  const inlinedStyles = /* @__PURE__ */ new Set();
  for (const mod of usedModules) {
    if (mod in styleMap) {
      for (const style of await styleMap[mod]()) {
        inlinedStyles.add(style);
      }
    }
  }
  return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}
function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: getResponseStatus(ssrContext.event),
    statusMessage: getResponseStatusText(ssrContext.event),
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  const payload = {
    type: "application/json",
    id: opts.id,
    innerHTML: contents,
    "data-ssr": !(opts.ssrContext.noSSR)
  };
  if (opts.src) {
    payload["data-src"] = opts.src;
  }
  return [
    payload,
    {
      innerHTML: `window.__NUXT__={};window.__NUXT__.config=${uneval(opts.ssrContext.config)}`
    }
  ];
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}
function getServerComponentHTML(body) {
  const match = body[0].match(ROOT_NODE_REGEX);
  return match ? match[1] : body[0];
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=(?:[^;]*);(.*)$/;
function getSlotIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) {
    return void 0;
  }
  const response = {};
  for (const slot in ssrContext.islandContext.slots) {
    response[slot] = {
      ...ssrContext.islandContext.slots[slot],
      fallback: ssrContext.teleports?.[`island-fallback=${slot}`]
    };
  }
  return response;
}
function getClientIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) {
    return void 0;
  }
  const response = {};
  for (const clientUid in ssrContext.islandContext.components) {
    const html = ssrContext.teleports?.[clientUid] || "";
    response[clientUid] = {
      ...ssrContext.islandContext.components[clientUid],
      html,
      slots: getComponentSlotTeleport(ssrContext.teleports ?? {})
    };
  }
  return response;
}
function getComponentSlotTeleport(teleports) {
  const entries = Object.entries(teleports);
  const slots = {};
  for (const [key, value] of entries) {
    const match = key.match(SSR_CLIENT_SLOT_MARKER);
    if (match) {
      const [, slot] = match;
      if (!slot) {
        continue;
      }
      slots[slot] = value;
    }
  }
  return slots;
}
function replaceIslandTeleports(ssrContext, html) {
  const { teleports, islandContext } = ssrContext;
  if (islandContext || !teleports) {
    return html;
  }
  for (const key in teleports) {
    const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
    if (matchClientComp) {
      const [, uid, clientId] = matchClientComp;
      if (!uid || !clientId) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-component="${clientId}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
      continue;
    }
    const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
    if (matchSlot) {
      const [, uid, slot] = matchSlot;
      if (!uid || !slot) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-slot="${slot}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
    }
  }
  return html;
}

const renderer$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: renderer
});

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: styles
});

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template
});
//# sourceMappingURL=index.mjs.map
