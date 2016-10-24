import chai from "chai";
import chaiEnzyme from "chai-enzyme";

chai.use(chaiEnzyme());

// Prevent Mocha from compiling class
function noop() {
  return null;
}

require.extensions[".css"] = noop;
require.extensions[".scss"] = noop;
