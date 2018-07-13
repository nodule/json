on.input.in = function() {
  output({
    out: $.write('in', JSON.stringify($.in, $.replacer, $.space))
  });
};
