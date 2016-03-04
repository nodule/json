on.input.json = function () {
  output({
    matches: json_path.resolve(data, input.path)
  });
};

