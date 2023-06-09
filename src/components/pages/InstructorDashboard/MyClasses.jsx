import { useState } from "react";
import UpdateClasses from "./UpdateClasses";

const MyClasses = () => {
  const [classes, setClasses] = useState([
    {
      id: 1,
      className: "Mathematics",
      status: "approved",
      enrolledStudents: 20,
      feedback: "Great class! Highly recommended.",
    },
    {
      id: 2,
      className: "English Literature",
      status: "pending",
      enrolledStudents: 15,
      feedback: "Good class, but can be improved.",
    },
    {
      id: 3,
      className: "Science",
      status: "denied",
      enrolledStudents: 10,
      feedback: "Not satisfied with the class content.",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const updateClass = (classId) => {
    // Logic to update the class with the given classId
    // You can use this function to trigger the update modal
    console.log("Update Class:", classId);
    const classToUpdate = classes.find((classItem) => classItem.id === classId);
    setSelectedClass(classToUpdate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-4">My Classes</h2>
      {classes.map((classItem) => (
        <div
          key={classItem.id}
          className="bg-white dark:bg-gray-700 p-4 rounded shadow mb-4"
        >
          <h3 className="text-lg font-semibold">{classItem.name}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            Status: {classItem.status}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            Enrolled Students: {classItem.enrolledStudents}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Feedback: {classItem.feedback}
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-700 dark:hover:bg-blue-800 py-2 px-4 rounded"
            onClick={() => updateClass(classItem.id)}
          >
            Update
          </button>
        </div>
      ))}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Update Class</h2>
            <p>Class: {selectedClass?.name}</p>
            <UpdateClasses classId={selectedClass.id} onClose={closeModal} />
            <button
              className="bg-red-500 hover:bg-red-600 text-white dark:bg-red-700 dark:hover:bg-red-800 py-2 px-4 rounded mt-4"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyClasses;
