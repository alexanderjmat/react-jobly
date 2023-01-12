import axios from "axios";
import jwt from "jsonwebtoken";
import jwtDecode from 'jwt-decode';




const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await axios.get(`${BASE_URL}/companies/${handle}`);
    return res.data.company;
  }

  static async getCompanies() {
    let res = await axios.get(`${BASE_URL}/companies`);
    return res.data.companies;
  }

  static async getCompanyJobs(handle) {
    let res = await axios.get(`${BASE_URL}/jobs`)
    let jobs = res.data.jobs
    const companyJobs = jobs.filter(job => {
      if (job.companyHandle == handle) {
        return job
      }
    })
    return companyJobs
  }

  static async getJobs() {
    let res = await axios.get(`${BASE_URL}/jobs`);
    return res.data.jobs;
  }

  static async getJob(id) {
    let res = await axios.get(`${BASE_URL}/jobs/${id}`);
    return res.data.job;
  }

  static async signup(data) {
    // Send a POST request to the signup endpoint with the user data
    let res = await axios.post(`${BASE_URL}/auth/register`, data);
    JoblyApi.token = res.data.token;
    return JoblyApi.token;
}

  static async login(data) {
    let res = await axios.post(`${BASE_URL}/auth/token`, data);
    console.log(res)
    JoblyApi.token = res.data.token;
    localStorage.setItem("token", JoblyApi.token)
    return JoblyApi.token;
  }

  // obviously, you'll add a lot here ...
}

// for now, put token ("testuser" / "password" on class)
// JoblyApi.token = token;


export default JoblyApi;
