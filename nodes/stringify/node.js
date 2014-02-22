//output.out = JSON.stringify(input. in , input.replacer, input.space);
on.input.in = function() {

  output({
    out: JSON.stringify(data, input.replacer, input.space)
  });

};
