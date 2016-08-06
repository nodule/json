on.input.in = function () {
  output({
    out: $.write('in', json_query($.query, {data: $.in}).value)
  });
};
