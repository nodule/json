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
  fn: function _2xml(input, $, output, state, done, cb, on, json2xml) {
    var r = function() {
      var obj = {};
      if ($.root) {
        obj[$.root] = $.json;
      } else {
        obj = $.json;
      }

      output.out = $.create(json2xml(obj, {
        header: $.header
      }));

      /*
      on.input.root = function() {
        state.root = $.root;
      };

      on.input.header = function() {
        state.header = $.header;
      };

      on.input.json = function() {

        var obj = {};
        if(state.root) {
          obj[state.root] = $.json;
        } else {
          obj = $.json;
        }

        output({
          out: json2xml($.json, { header: state.header })
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