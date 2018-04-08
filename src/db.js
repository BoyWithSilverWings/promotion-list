import Dexie from "dexie";

const db = new Dexie("school");
db.version(1).stores({
  students: "++,name, dob, religion, admission, standard, marks"
});

export default db;
