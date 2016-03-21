on.input.json = function () {
  output({
    matches: json_path.resolve(input.json, input.path)
  });
};

