on.input.json = function () {
  output({
    matches: $.create(json_path.resolve($.json, $.path))
  });
};

