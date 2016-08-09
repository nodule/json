on.input.in = function () {
  output({
    out: $.create(json_path_plus({
      json: $.in,
      path: $.path
    }))
  });
};

