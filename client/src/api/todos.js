const SERVICE_NAME = "todos";
const backend = require("../lib/backend");
export default () => ({
  getAll() {
    return backend.default(SERVICE_NAME).getAll();
  },
  create(data) {
    return backend.default(SERVICE_NAME).create(data);
  },
  patch(id, data) {
    return backend.default(SERVICE_NAME).patch(id, data);
  },
  delete(id) {
    return backend.default(SERVICE_NAME).delete(id);
  },
});
