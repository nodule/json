module.exports = {
  name: "parse",
  ns: "json",
  title: "JSON Parse",
  description: "Parses a string into a javascript object",
  expose: ["JSON"],
  async: true,
  phrases: {
    active: "Parsing JSON string"
  },
  ports: {
    input: {
      "in": {
        type: "string",
        title: "JSON String",
        required: true
      },
      reviver: {
        type: "function",
        title: "prescribes how the value originally produced by parsing is transformed, before being returned",
        "default": null
      }
    },
    output: {
      out: {
        type: "object",
        title: "The Javascript Object"
      }
    }
  },
  fn: function parse(input, $, output, state, done, cb, on, JSON) {
    var r = function() {
      /* output.out = JSON.parse($.in, $.reviver); */

      on.input.in = function() {
        output({
          out: $.write('in', JSON.parse($.in, state.reviver))
        });
      };

      on.input.reviver = function() {
        state.reviver = $.reviver;
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