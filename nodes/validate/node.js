on.input.in = function () {
  try {
    $.schema.validate($.in)
    output({out: $.get('in')});
  } catch(err) {
    output({ error: $.create(err) });
  }
};
