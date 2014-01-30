var obj = {};
if (input.root) {
  obj[input.root] = input.json;
} else {
  obj = input.json;
}

output.out = json2xml(obj, {
  header: input.header
});

/*
on.input.root = function() {
  state.root = data;
};

on.input.header = function() {
  state.header = data;
};

on.input.json = function() {

  var obj = {};
  if(state.root) {
    obj[state.root] = data;
  } else {
    obj = data;
  }

  output({
    out: json2xml(data, { header: state.header })
  });

};
*/
