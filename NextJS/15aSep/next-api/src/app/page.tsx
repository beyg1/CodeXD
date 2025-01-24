'use client';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const API_URL = '/api/users'; // Replace with your API endpoint

type FormData = { // Define the form data type
  name: string;
  id: string;
};

export default function Home() {
  const [data, setData] = useState<{ id: number; name: string }[]>([]); 
  const { register, handleSubmit, reset } = useForm<FormData>();// Define the form hook

  useEffect(() => { // Fetch data when the component mounts
    fetchData(); // Call the fetchData function
  }, []);

  const fetchData = async () => {  // Fetch data from the API
    try {
      const response = await fetch(API_URL); // Fetch data
      const jsonData = await response.json(); // Convert response to JSON
      setData(jsonData);// Update the state with the fetched data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const onSubmit = async (data: FormData) => { // Handle form submission
    try {
      const response = await fetch(API_URL, { // Send a POST request
        method: 'POST',          
        headers: { 'Content-Type' : 'application/json' }, // Set content type
        body: JSON.stringify(data), // Convert data to JSON
      });
      if (response.ok) {  
        fetchData();
        reset();
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (    
    <div className="flex flex-col min-h-screen bg-slate-400">   {/*Main container */} 
      <div className="flex justify-center items-start space-x-8 pt-10 px-4">{/* Inner container */} 
        <div className="w-96">  
          <form className="bg-slate-300 rounded-lg shadow-xl p-10" onSubmit={handleSubmit(onSubmit)}> {/* Form*/} 
            <div className="mb-4">
              <label htmlFor="name">Name:</label>  
              <input
                type="text"
                id="name"
                aria-label="New user name"
                {...register('name', { required: true })}
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="id">ID:</label>
              <input
                type="text"
                id="id"
                aria-label="New user ID"
                {...register('id', { required: true })}
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white rounded-lg px-4 py-2">
              Submit
            </button>
          </form>
        </div>
        <div className="w-auto">
          <table className="table-auto border-collapse border border-gray-500 bg-slate-300 rounded-lg shadow-xl">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border border-gray-200 text-left">Name</th>
                <th className="px-4 py-2 border border-gray-200 text-left">ID</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td className="px-4 py-2 border border-gray-200">{item.name}</td>
                  <td className="px-4 py-2 border border-gray-200">{item.id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
