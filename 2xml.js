module.exports = {
  name: "2xml",
  ns: "json",
  title: "JSON To XML",
  description: "Converts JSON to Simple XML",
  phrases: {
    active: "Parsing JSON string"
  },
  ports: {
    input: {
      json: {
        type: "object",
        title: "JSON",
        required: true
      },
      root: {
        type: "string",
        title: "Root Element",
        "default": ""
      },
      header: {
        type: "boolean",
        title: "Add Header?",
        "default": true
      }
    },
    output: {
      out: {
        type: "object",
        title: "The Javascript Object"
      },
      error: {
        type: "object",
        title: "Error"
      }
    }
  },
  dependencies: {
    npm: {
      json2xml: require('json2xml')
    }
  },
  fn: function _2xml(input, output, state, done, cb, on, json2xml) {
    var r = function() {
      var obj = {};
      if (input.root) {
        obj[input.root] = input.json;
      } else {
        obj = input.json;
      }

      output.out = json2xml(obj, {
        header: input.header
      });

      /*
      on.input.root = function() {
        state.root = data;
      };

      on.input.header = function() {
        state.header = data;
      };

      on.input.json = function() {

        var obj = {};
        if(state.root) {
          obj[state.root] = data;
        } else {
          obj = data;
        }

        output({
          out: json2xml(data, { header: state.header })
        });

      };
      */
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}