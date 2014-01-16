try {
  output.out = json2xml(input.json, { header: input.header });
} catch (e) {
  output.error = e;
}
