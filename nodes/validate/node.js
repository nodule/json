on.input.in = function () {
  try {
    output({
      out: input.schema.validate(data)
    });
  } catch(err) {
    output({
      error: err
    });
  }
};
