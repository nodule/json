/* output.out = JSON.parse(input.in, input.reviver); */

on.input.in = function() {
  output({
    out: JSON.parse(data, state.reviver)
  });
};

on.input.reviver = function() {
  state.reviver = data;
};
