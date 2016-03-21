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
  state.root = input.root;
};

on.input.header = function() {
  state.header = input.header;
};

on.input.json = function() {

  var obj = {};
  if(state.root) {
    obj[state.root] = input.json;
  } else {
    obj = input.json;
  }

  output({
    out: json2xml(input.json, { header: state.header })
  });

};
*/
