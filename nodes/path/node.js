/* output = { matches: json_path.resolve(input.json, input.path) } */
on.input.json = function() {
  output({
   out: json_path.resolve(data, state['path'];
  });
};

on.input.path = function() {
  state['path'] = data;
};
