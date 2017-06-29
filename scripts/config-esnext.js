System.config({
  transpiler: "plugin-babel",
  devConfig: {
    "map": {
      "plugin-babel": "babel:systemjs-plugin-babel@0.0.12"
    }
  },
  paths: {
    "babel:": "scripts/babel/",
    "paths": "scripts/paths.js"
  },
  packageConfigPaths: [
    "babel:@*/*.json",
    "babel:*.json"
  ],
  packages: {
    "src": {
      defaultJSExtensions: true,
      defaultExtension: "js"
    }
  }
});
