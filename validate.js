module.exports = {
  name: "validate",
  ns: "json",
  async: true,
  title: "Validate JSON",
  description: "Validates JSON agains JSON Schema",
  phrases: {
    active: "Validating JSON"
  },
  ports: {
    input: {
      "in": {
        type: "object",
        async: true,
        title: "JSON",
        format: "json",
        required: true,
        fn: function __IN__(data, x, source, state, input, output) {
          var r = function() {
            try {
              input.schema.validate(data)
              output({
                out: data
              });
            } catch (err) {
              output({
                error: err
              });
            }
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      schema: {
        type: "object",
        title: "JSON Gate Schema"
      }
    },
    output: {
      error: {
        type: "object",
        title: "Error"
      },
      out: {
        type: "object",
        title: "The Validated Object"
      }
    }
  },
  state: {}
}