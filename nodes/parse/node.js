/* output.out = JSON.parse($.in, $.reviver); */

on.input.in = function () {
  output({out: $.write('in', JSON.parse($.in, state.reviver))});
};

on.input.reviver = function () {
  state.reviver = $.reviver;
};
