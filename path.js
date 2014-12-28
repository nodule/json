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
        required: true
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
  fn: function path(input, output, state, done, cb, on, json_path) {
    var r = function() {
      /* output = { matches: json_path.resolve(input.json, input.path) } */
      on.input.json = function() {
        output({
          matches: json_path.resolve(data, state.path)
        });
      };

      on.input.path = function() {
        state.path = data;
      };
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}