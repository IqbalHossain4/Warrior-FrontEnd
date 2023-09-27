import React, { useEffect, useState } from "react";
import axios from "axios";
import stubs from "./defaultStubs";
import moment from "moment";
import Editor from "@monaco-editor/react";
const CodeCompiler = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("cpp");
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState("");
  const [jobId, setJobId] = useState("");
  const [jobDetails, setJobDetails] = useState(null);

  useEffect(() => {
    const defaultLang = localStorage.getItem("default-language") || "cpp";
    setLanguage(defaultLang);
  }, []);

  useEffect(() => {
    setCode(stubs[language]);
  }, [language]);

  const setDefaultLanguage = () => {
    localStorage.setItem("default-language", language);
    console.log(`${language} set as default language`);
  };
  const renderTimeDetails = () => {
    if (!jobDetails) {
      return "";
    }
    let result = "";

    let { submitedAt, completedAt, startedAt } = jobDetails;
    submitedAt = moment(submitedAt).toString();
    result += `Submiteted at: ${submitedAt}`;
    if (!completedAt || startedAt) {
      return result;
    }

    const start = moment(startedAt);
    const end = moment(completedAt);
    const executionTime = end.diff(start, "seconds", true);
    result += `Execution Time: ${executionTime}s`;
    return result;
  };
  const handleSubmit = async () => {
    const payload = {
      language,
      code,
    };
    try {
      setJobId("");
      setStatus("");
      setOutput("");
      setJobDetails(null);
      const { data } = await axios.post("http://localhost:3000/run", payload);
      setJobId(data.output);
      let intervalId;

      intervalId = setInterval(async () => {
        const { data: dataRes } = await axios.get(
          "http://localhost:3000/status",
          { params: { id: data.jobId } }
        );
        const { success, job, error } = dataRes;
        console.log(dataRes);
        if (success) {
          const { status: jobStatus, output: jobOutput } = job;
          setStatus(jobStatus);
          setJobDetails(job);
          if (jobStatus === "pending") return;
          setOutput(jobOutput);
          clearInterval(intervalId);
        } else {
          setStatus("Error:Please retry");
          console.log(error);
          clearInterval(intervalId);
          setOutput(error);
        }
      }, 1000);
    } catch ({ response }) {
      if (response) {
        const errMsg = response.date.err.stderr;
        setOutput(errMsg);
      } else {
        setOutput("Error connecting to server");
      }
    }
  };
  console.log(language);
  return (
    <div className="containers">
      <div className="my-16 ">
        <h1 className="text-2xl text-white font-[700] text-center">
          Online Code Compiler
        </h1>
        <div className="mt-8">
          <label htmlFor="" className="text-xl font-[700] text-white me-4 ">
            Language:
          </label>
          <select
            value={language}
            onChange={(e) => {
              let response = window.confirm(
                "WARNING:Switching the language, will remove your "
              );
              if (response) {
                setLanguage(e.target.value);
              }
            }}
          >
            <option value="cpp">C++</option>
            <option value="py">Python</option>
          </select>
        </div>
        <br />
        <div>
          <button
            onClick={setDefaultLanguage}
            className="bg-white text-black py-2 px-3 font-[600] rounded mb-4"
          >
            Set Default
          </button>
        </div>
        <div className="w-full md:flex items-start gap-8">
          <div className="w-2/3 ">
            <Editor
              value={code}
              onChange={(e) => setCode(e.target.value)}
              defaultLanguage={language}
              theme="vs-dark"
              width="100%"
              className="h-[60vh]"
            />
            <button
              onClick={handleSubmit}
              className="btn btn-warning text-white mt-4"
            >
              Submit
            </button>
          </div>

          <div className="w-1/3 h-[60vh] ">
            <div className="w-full h-full bg-[#1E1E1E] text-whites p-4">
              <p>{status}</p>
              <p>{jobId && `JobID: ${jobId}`}</p>
              <p>{renderTimeDetails()}</p>
              <div className="">
                <p className="text-xl text-white">{output}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeCompiler;
