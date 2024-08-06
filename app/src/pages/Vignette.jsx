import React, { useEffect } from "react";
import Form from "../components/Form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useGetVignetteQuery } from "../redux/vignette";


const Vignette = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    const {data, isLoading, isSuccess, error, refetch} = useGetVignetteQuery(id)
    
    // if()
    useEffect(() => {

      refetch()
    
      }, [id])

   if( error && !data || data?.data.length === 0) {
    
    navigate('/addVignette', {state :{userId: id}} )
  
  }

  

  
  
  return (
    <div className="flex items-center justify-center">
    
        {console.log('la vignette', data)}
      <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          Vignette
        </h5>
        <div class="flex items-center justify-center text-gray-900 dark:text-white">
          {/* <span class="text-3xl font-semibold">$</span> */}
          <span class="text-5xl font-extrabold tracking-tight"> {data?.data[0]?.attributes?.numero} </span>
          <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
           
          </span>
        </div>
        <ul role="list" class="space-y-5 my-7">
          <li class="flex items-center ">
            <svg
              class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500 mr-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
            {data?.data[0]?.attributes?.profile?.data?.attributes.nom} {data?.data[0]?.attributes?.profile?.data?.attributes.prenom}
            </span>
          </li>
          <li class="flex  items-center ">
            <svg
              class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500 mr-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
            {data?.data[0]?.attributes?.profile?.data?.attributes.numero_chassis}
            </span>
          </li>
          <li class="flex  items-center">
            <svg
              class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500 mr-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
            {data?.data[0]?.attributes?.profile?.data?.attributes.phone}
            </span>
          </li>
          {/* <li class="flex line-through decoration-gray-500">
            <svg
              class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 ms-3">
              Sketch Files
            </span>
          </li>
          <li class="flex line-through decoration-gray-500">
            <svg
              class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 ms-3">
              API Access
            </span>
          </li>
          <li class="flex line-through decoration-gray-500">
            <svg
              class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 ms-3">
              Complete documentation
            </span>
          </li>
          <li class="flex line-through decoration-gray-500">
            <svg
              class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 ms-3">
              24×7 phone & email support
            </span>
          </li> */}
        </ul>
        <p
          
          class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
        >
          Valable jusqu'au 01 Javnier 2025
        </p>
      </div>
    </div>
  );
};

export default Vignette;
