/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

export default function UpdateClasses({ classId, onClose }) {
  const { register, handleSubmit } = useForm();

  const handleUpdate = (data) => {
    // Handle the logic for updating the class with the new values
    console.log("Updated Class:", {
      classId,
      ...data,
    });

    // Close the modal after updating
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-10">
      <div className="bg-white dark:bg-gray-800 rounded p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Update Class</h2>
        <form onSubmit={handleSubmit(handleUpdate)}>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Class Name</label>
            <input
              type="text"
              {...register("className")}
              className="w-full border border-gray-300 dark:border-gray-700 rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Status</label>
            <input
              type="text"
              {...register("status")}
              className="w-full border border-gray-300 dark:border-gray-700 rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">
              Enrolled Students
            </label>
            <input
              type="number"
              {...register("enrolledStudents")}
              className="w-full border border-gray-300 dark:border-gray-700 rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Feedback</label>
            <textarea
              {...register("feedback")}
              className="w-full border border-gray-300 dark:border-gray-700 rounded p-2"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-700 dark:hover:bg-blue-800 py-2 px-4 rounded"
            >
              Update
            </button>
            <button
              type="button"
              className="ml-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-white py-2 px-4 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
