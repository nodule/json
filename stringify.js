module.exports = {
  name: "stringify",
  ns: "json",
  title: "JSON Stringify",
  description: "Stringify a javascript object",
  expose: ["JSON"],
  async: true,
  phrases: {
    active: "JSON Stringifying Object"
  },
  ports: {
    input: {
      "in": {
        type: "any",
        title: "Input Object",
        async: true,
        required: true,
        fn: function __IN__(data, source, state, input, $, output) {
          var r = function() {
            output({
              out: $.write('in', JSON.stringify($.in, $.replacer, $.space))
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      replacer: {
        type: "any",
        title: "Replacer",
        description: "A function that alters the behavior of the stringification process, or an array of String and Number objects that serve as a whitelist for selecting the properties of the value object to be included in the JSON string. If this value is null or not provided, all properties of the object are included in the resulting JSON string.",
        "default": null
      },
      space: {
        type: "number",
        title: "Indentation length",
        "default": 0
      }
    },
    output: {
      out: {
        type: "string",
        title: "The JSON string"
      }
    }
  },
  state: {},
  on: {}
}