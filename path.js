module.exports = {
  name: "path",
  ns: "json",
  title: "JSON Path",
  description: "JSON-Path takes a specially formatted path statement and applies it to an object graph in order to select results. The results are returned as an array of data that matches the path.",
  async: true,
  phrases: {
    active: "Performing JSON Path"
  },
  ports: {
    input: {
      "in": {
        type: "object",
        title: "Input JSON",
        description: "Any JSON document",
        required: true,
        fn: function __IN__(data, source, state, input, $, output, jsonpath_plus) {
          var r = function() {
            output({
              out: $.create(jsonpath_plus({
                json: $.in,
                path: $.path
              }))
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      path: {
        type: "string",
        title: "Path",
        description: "",
        required: true
      }
    },
    output: {
      out: {
        type: "array",
        title: "Selection Output",
        description: ""
      }
    }
  },
  dependencies: {
    npm: {
      "jsonpath-plus": require('jsonpath-plus')
    }
  },
  state: {}
}