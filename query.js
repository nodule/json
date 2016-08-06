module.exports = {
  name: "query",
  ns: "json",
  title: "JSON Query",
  description: "Retrieves values from JSON objects",
  async: true,
  phrases: {
    active: "Querying JSON"
  },
  ports: {
    input: {
      "in": {
        type: "object",
        title: "JSON",
        required: true,
        fn: function __IN__(data, source, state, input, $, output, json_query) {
          var r = function() {
            output({
              out: $.write('in', json_query($.query, {
                data: $.in
              }).value)
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      query: {
        type: "string",
        title: "Query"
      }
    },
    output: {
      out: {
        type: "object",
        title: "Object"
      }
    }
  },
  dependencies: {
    npm: {
      "json-query": require('json-query')
    }
  },
  state: {}
}