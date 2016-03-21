on.input.in = function () {
  try {
    input.schema.validate(input.in)
    output({
      out: input.in
    });
  } catch(err) {
    output({
      error: err
    });
  }
};
