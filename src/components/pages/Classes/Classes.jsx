

const Classes = () => {
  const classes = [
    {
      id: 1,
      image:
        "https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825_1280.png",
      name: "Yoga Class",
      instructor: "John Doe",
      availableSeats: 10,
      price: "$20",
    },
    {
      id: 2,
      image:
        "https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825_1280.png",
      name: "Dance Workshop",
      instructor: "Jane Smith",
      availableSeats: 0,
      price: "$15",
    },
    {
      id: 3,
      image:
        "https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825_1280.png",
      name: "Fitness Bootcamp",
      instructor: "Mike Johnson",
      availableSeats: 5,
      price: "$25",
    },
    {
      id: 4,
      image:
        "https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825_1280.png",
      name: "Fitness Bootcamp",
      instructor: "Mike Johnson",
      availableSeats: 5,
      price: "$25",
    },
   
    // Add more class objects...
  ];

    return (
      <div className=" py-6 sm:px-6 lg:px-8 dark:bg-gray-800">
        <div className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {classes.map((cls) => (
            <div
              key={cls.id}
              className={`p-4 rounded-lg shadow-md ${
                cls.availableSeats === 0 ? "bg-red-400" : "bg-white"
              }`}
            >
              <img
                src={cls.image}
                alt={cls.name}
                className="w-full h-auto mb-4 rounded-lg"
              />
              <h3 className="text-lg font-medium">{cls.name}</h3>
              <p className="text-gray-900 mb-2">Instructor: {cls.instructor}</p>
              <p className="text-gray-900 mb-2">
                Available Seats: {cls.availableSeats}
              </p>
              <p className="text-gray-900 mb-2">Price: {cls.price}</p>
              <button
                className={`px-4 py-2 text-white rounded-lg ${
                  cls.availableSeats === 0 ? "bg-red-600" : "bg-blue-500"
                }`}
                disabled={cls.availableSeats === 0}
              >
                Select
              </button>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Classes;
