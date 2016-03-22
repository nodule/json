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
      json: {
        type: "object",
        title: "Input JSON",
        description: "Any JSON document",
        required: true,
        fn: function __JSON__(data, x, source, state, input, output, json_path) {
          var r = function() {
            output({
              matches: $.create(json_path.resolve($.json, $.path))
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
      matches: {
        type: "array",
        title: "Selection Output",
        description: ""
      }
    }
  },
  dependencies: {
    npm: {
      "json-path": require('json-path')
    }
  },
  state: {}
}