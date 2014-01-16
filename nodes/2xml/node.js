var obj = {};
if(input.root) {
  obj[input.root] = input.json;
} else {
  obj = input.json;
}

output.out = json2xml(obj, { header: input.header });
