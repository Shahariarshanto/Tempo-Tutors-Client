
import { useForm } from "react-hook-form";

const AddClass = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const instructorName = "John Doe";
  const instructorEmail = "john.doe@example.com";


  const onSubmit = (data) => {
    console.log("Form data:", data);
    // Handle the logic for adding the class
  };

  return (
    <div className="max-w-md mx-auto p-2">
<h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Add Class</h2>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Class Name
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded"
            type="text"
            {...register("className", { required: true })}
          />
          {errors.className && (
            <span className="text-red-500 text-sm">Class Name is required</span>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Class Image
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded"
            type="text"
            {...register("classImage", { required: true })}
          />
          {errors.classImage && (
            <span className="text-red-500 text-sm">
              Class Image is required
            </span>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Instructor Name
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded"
            type="text"
            value={instructorName}
            readOnly
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Instructor Email
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded"
            type="email"
            value={instructorEmail}
            readOnly
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Available Seats
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded"
            type="number"
            {...register("availableSeats", { required: true })}
          />
          {errors.availableSeats && (
            <span className="text-red-500 text-sm">
              Available Seats is required
            </span>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Price
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded"
            type="number"
            {...register("price", { required: true })}
          />
          {errors.price && (
            <span className="text-red-500 text-sm">Price is required</span>
          )}
        </div>

        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddClass;
