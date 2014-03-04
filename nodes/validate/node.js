on.input.in = function () {
  try {
    input.schema.validate(data)
    output({
      out: data
    });
  } catch(err) {
    output({
      error: err
    });
  }
};
