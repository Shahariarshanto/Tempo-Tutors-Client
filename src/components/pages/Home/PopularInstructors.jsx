import React from "react";

const PopularInstructors = () => {
  // Mock data for instructors (replace with your own data)
  const instructors = [
    {
      name: "John Doe",
      imageUrl:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
      students: 120,
    },
    {
      name: "Jane Smith",
      imageUrl:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
      students: 90,
    },
    {
      name: "David Johnson",
      imageUrl:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
      students: 150,
    },
    {
      name: "Sarah Williams",
      imageUrl:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
      students: 80,
    },
    {
      name: "Michael Brown",
      imageUrl:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
      students: 200,
    },
    {
      name: "Emily Davis",
      imageUrl:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
      students: 110,
    },
    {
      name: "Daniel Wilson",
      imageUrl:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
      students: 130,
    },
    {
      name: "Olivia Taylor",
      imageUrl:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
      students: 70,
    },
    {
      name: "William Anderson",
      imageUrl:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
      students: 160,
    },
    {
      name: "Sophia Martinez",
      imageUrl:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
      students: 180,
    },
    {
      name: "Joseph Lee",
      imageUrl:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
      students: 100,
    },
    {
      name: "Mia Hernandez",
      imageUrl:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg",
      students: 140,
    },
  ];

  // Sort instructors based on the number of students in descending order
  const sortedInstructors = instructors.sort((a, b) => b.students - a.students);

  // Get the top 6 instructors
  const topInstructors = sortedInstructors.slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <h1 className="text-2xl font-semibold text-gray-900 text-center">Popular Instructors</h1>
      <div className="grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-3  gap-4 ">
        {topInstructors.map((instructor, index) => (
          <div key={index}>
            <img
              src={instructor.imageUrl}
              alt={`Instructor ${index + 1}`}
              className="h-auto max-w-full rounded-lg"
            />
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mt-2">
                  {instructor.name}
                </h3>
                <p>Classes: {instructor.students}</p>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                View Classes
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
