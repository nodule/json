var obj = {};
if ($.root) {
  obj[$.root] = $.json;
} else {
  obj = $.json;
}

output.out = $.create(json2xml(obj, {header: $.header}));

/*
on.input.root = function() {
  state.root = $.root;
};

on.input.header = function() {
  state.header = $.header;
};

on.input.json = function() {

  var obj = {};
  if(state.root) {
    obj[state.root] = $.json;
  } else {
    obj = $.json;
  }

  output({
    out: json2xml($.json, { header: state.header })
  });

};
*/
