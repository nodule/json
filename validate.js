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
        fn: function __IN__(data, source, state, input, $, output) {
          var r = function() {
            try {
              $.schema.validate($.in)
              output({
                out: $.get('in')
              });
            } catch (err) {
              output({
                error: $.create(err)
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
  state: {},
  on: {}
}