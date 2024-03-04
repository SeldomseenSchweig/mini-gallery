import axios from "axios";
// import { apiKey } from "../apiKey";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

// const MURAL_URL = `https://data.sfgov.org/resource/wg8w-68vc.json?`

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class MiniaturesApi {
  // the token for interactive with the API will be stored here.
  //There are two routes the database and the SF Mural API
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;

    const headers = { Authorization: `Bearer ${MiniaturesApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      if (!err.response.data) throw console.error("Something went wrong");
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a suggested murals. */

  // admin denys suggested mural, deletes from suggestedMurals table

  static async delete(id) {
    let data = {};

    await this.request(`projects/${id}`, data, "delete");
  }

  /**register to website */

  static async register(values) {
    try {
      let data = {
        username: values.username,
        password: values.password,
        email: values.email,
      };
      let res = await this.request("register", data, "post");
      return res;
    } catch (error) {
      console.error(error);
    }
  }

  /** login. */

  static async login({ username, password }) {
    let data = {
      username: username,
      password: password,
    };

    let res = await this.request("login", data, "get");
    return res;
  }

  static async getUser(testuser) {
    let res = this.request(`users/${testuser}`);

    return res;
  }

  static async update(username, data) {
    let res = this.request(`users/${username}`, data, "patch");
    return res.user;
  }
}

export default MiniaturesApi;
