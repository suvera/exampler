import React from 'react';
import Layout from '../Layout';
import PendingExamsTable from './PendingExamsTable';

const data ={
  "timestamp": "2024-08-02T09:51:14Z",
  "status": 200,
  "message": "List retrieved successfully",
  "count": 200,
  "offset": 0,
  "limit": 20,
  "data": [
    {
      "uuid": "1d33b8cb-377f-4b57-8000-3fce9ffab6db",
      "name": "Mathematics - Algebra",
      "subject_id": 7,
      "subject_name": "Mathematics",
      "total_questions": 50,
      "total_time_mins": 60,
      "class_id": 32,
      "updated_at": "2024-08-16T08:53:05.038Z",
      "status": "pending",
      "score": 56,
      "start_time": "2024-08-16T08:53:05.038Z",
      "end_time": "2024-08-16T08:53:05.038Z"
    },
    {
      "uuid": "1d33b8cb-377f-4b57-8000-3fce9ffab6db",
      "name": "Number Systems",
      "subject_id": 7,
      "subject_name": "Mathematics",
      "total_questions": 50,
      "total_time_mins": 60,
      "class_id": 34,
      "updated_at": "2024-08-16T08:53:05.038Z",
      "status": "pending",
      "score": 56,
      "start_time": "2024-08-16T08:53:05.038Z",
      "end_time": "2024-08-16T08:53:05.038Z"
    },
    {
      "uuid": "1d33b8cb-377f-4b57-8000-3fce9ffab6db",
      "name": "Trigonometry",
      "subject_id": 7,
      "subject_name": "Mathematics",
      "total_questions": 50,
      "total_time_mins": 60,
      "class_id": 33,
      "updated_at": "2024-08-16T08:53:05.038Z",
      "status": "pending",
      "score": 56,
      "start_time": "2024-08-16T08:53:05.038Z",
      "end_time": "2024-08-16T08:53:05.038Z"
    }
  ]
}



function PendingExams() {
  const handleStartExam = (uuid) => {
    // Example action: Log the UUID or navigate to an exam page
    console.log('Starting exam with ID:', uuid);
    
    // If you want to navigate to an exam page:
    // window.location.href = `/start-exam/${uuid}`;
  };

  return (
    <Layout>
      <PendingExamsTable data={data.data} onStartExam={handleStartExam} />
    </Layout>
  );
}

export default PendingExams;
