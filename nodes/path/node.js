on.input.in = function () {
  output({
    out: $.write('in', jsonpath_plus({
      json: $.in,
      path: $.path
    }))
  });
};

