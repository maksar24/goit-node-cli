import { program } from "commander";
import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from "./contacts.js";

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      return console.table(allContacts);
    case "get":
      const oneContact = await getContactById(id);
      return console.log(oneContact);
    case "remove":
      const deletedContact = await removeContact(id);
      return console.log(deletedContact);
    case "add":
      const newContact = await addContact(name, email, phone);
      return console.log(newContact);
    default:
      console.log("Unknown action");
  }
};

program
  .option("-a, --action <type>")
  .option("-i, --id <type>")
  .option("-n, --name <type>")
  .option("-e, --email <type>")
  .option("-p, --phone <type>");

program.parse();

const options = program.opts();

invokeAction(options);
