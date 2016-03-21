//output.out = JSON.stringify($. in , $.replacer, $.space);
on.input.in = function() {

  output({
    out: JSON.stringify($.in, $.replacer, $.space)
  });

};
