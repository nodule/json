on.input.in = function () {
  output({
    out: $.create(jsonpath_plus({
      json: $.in,
      path: $.path
    }))
  });
};

