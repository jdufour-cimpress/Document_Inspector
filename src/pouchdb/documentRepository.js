import { v4 as uuidv4 } from "uuid";

export default class DocumentRepository {
  constructor(pouchDb) {
    this.pouchDb = pouchDb;

    this.addDocument = (document) => {
      const documentToAdd = { ...document, _id: uuidv4() };
      console.log("with id", documentToAdd);
      this.pouchDb.put(documentToAdd);
    };

    this.getAllDocuments = () => {
      return this.pouchDb.allDocs({
        include_docs: true,
        attachments: true
      });
    };
  }
}
