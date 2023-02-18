import axios from "axios";

const HOST = "https://api.lancerkit.com";

export class Lancerkit {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  listTransactions({ page, sort }) {
    return axios.get(
      HOST + "/transactions?" + new URLSearchParams({ page, sort }).toString(),
      { headers: { Authorization: this.apiKey } }
    );
  }

  listContacts({ page, sort }) {
    return axios.get(
      HOST + "/contacts?" + new URLSearchParams({ page, sort }).toString(),
      { headers: { Authorization: this.apiKey } }
    );
  }

  listDocuments({ page, sort }) {
    return axios.get(
      HOST + "/documents?" + new URLSearchParams({ page, sort }).toString(),
      { headers: { Authorization: this.apiKey } }
    );
  }

  createContact(data) {
    return this.editContact("new", data);
  }

  createDocument(data) {
    return this.editDocument("new", data);
  }

  editContact(id, data) {
    return axios.post(HOST + "/contacts/" + id, data, {
      headers: { Authorization: this.apiKey },
    });
  }

  editDocument(id, data) {
    return axios.post(HOST + "/documents/" + id, data, {
      headers: { Authorization: this.apiKey },
    });
  }

  editTransaction(id, data) {
    return axios.post(HOST + "/transactions/" + id, data, {
      headers: { Authorization: this.apiKey },
    });
  }

  deleteContacts(ids) {
    return axios.post("/contacts/delete", ids, {
      headers: { Authorization: this.apiKey },
    });
  }

  deleteDocuments(ids) {
    return axios.post("/documents/delete", ids, {
      headers: { Authorization: this.apiKey },
    });
  }

  deleteTransactions(ids) {
    return axios.post("/transactions/delete", ids, {
      headers: { Authorization: this.apiKey },
    });
  }
}
