import React, { useEffect, useState } from "react";
import { api } from "../../api/api";
import axios from "axios";
import Layout from "../Layout";
// import "./completedExams.css"
import DataTable from "./TableView";

export default function CompletedExams() {
  const [examsList, setExamsList] = useState([]);

  const data = {
    timestamp: "2024-08-02T09:51:14Z",
    status: 200,
    message: "List retrieved successfully",
    count: 200,
    offset: 0,
    limit: 20,
    data: [
      {
        uuid: "1d33b8cb-377f-4b57-8000-3fce9ffab6db",
        name: "Mathematics - Algebra",
        subject_id: 7,
        subject_name: "Mathematics",
        total_questions: 50,
        total_time_mins: 60,
        class_id: 32,
        updated_at: "2024-08-14T05:53:12.755Z",
        status: "pending",
        score: 56,
        start_time: "2024-08-14T05:53:12.755Z",
        end_time: "2024-08-14T05:53:12.755Z",
      },
      {
        uuid: "1d33b8cb-377f-4b57-8000-3fce9ffab6db",
        name: "Physics",
        subject_id: 7,
        subject_name: "Physics",
        total_questions: 50,
        total_time_mins: 60,
        class_id: 32,
        updated_at: "2024-08-14T05:53:12.755Z",
        status: "pending",
        score: 76,
        start_time: "2024-08-14T05:53:12.755Z",
        end_time: "2024-07-14T05:53:12.755Z",
      },
    ],
  };

  const getCompletedExams = async () => {
    const headers = {
      Accept: "application/json",
      token: "2f7f421dae0086f418c9375082f2036126fb13b51262a0723109107a20c5",
    };

    try {
      const response = await axios.get(api.endpoints.exams.completed_exams, {
        headers,
      });
      const { status: apiStatus, data: apiData } = response;

      console.log(apiData);

      if (apiStatus === 200) {
        const { statusCode, data } = apiData;
        if (statusCode === 200) {
          // Process the data, e.g., set it in state or use it otherwise
          // setTempList(data);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCompletedExams();
    setExamsList(data);
  }, []);

  console.log(examsList);



  return (
    <Layout>
      {/* <h2>Completed Exams</h2> */}
      {/* Updated CSS for container */}

      <DataTable data={data.data} />
    
    </Layout>
  );
}
