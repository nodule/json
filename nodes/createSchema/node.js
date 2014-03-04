try {
  output.out = json_gate.createSchema(input.in);
} catch(e) {
  output.error = e;
}
