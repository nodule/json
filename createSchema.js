module.exports = {
  name: "createSchema",
  ns: "json",
  title: "JSON Schema",
  description: "Instantiate a JSON Schema",
  phrases: {
    active: "Creating JSON Schema"
  },
  ports: {
    input: {
      "in": {
        type: "object",
        title: "JSON Schema",
        format: "json",
        required: true
      }
    },
    output: {
      error: {
        type: "object",
        title: "Error"
      },
      out: {
        type: "object",
        title: "JSON Schema"
      }
    }
  },
  dependencies: {
    npm: {
      "json-gate": require('json-gate')
    }
  },
  fn: function createSchema(input, output, state, done, cb, on, json_gate) {
    var r = function() {
      output.out = json_gate.createSchema(input.in);
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}