on.input.json = function () {
  output({
    matches: json_path.resolve($.json, $.path)
  });
};

