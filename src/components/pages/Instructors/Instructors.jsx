import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../../hooks/useAxios";

const Instructors = () => {
   const [axiosSecure] = useAxios();
   const { data: instructors = [] } = useQuery(["instructors"], async () => {
     const res = await axiosSecure.get("/instructors");
     return res.data;
   });

  return (
    <div className=" py-6 sm:px-6 lg:px-8 dark:bg-gray-800">
      <div className=" max-w-7xl mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Position
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {instructors.map((instructor, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src={instructor.imageUrl}
                    alt={instructor.name}
                  />
                  <div className="pl-3">
                    <div className="text-base font-semibold">
                      {instructor.name}
                    </div>
                    <div className="font-normal text-gray-500">
                      {instructor.email}
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">{instructor.numClasses}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                    Online
                  </div>
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    See All
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Instructors;
