on.input.in = function () {
  output({
    out: input.schema.validate(data)
  });
};
