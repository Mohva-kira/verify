import React, { useState } from "react";

const Form = ({ fields, send, fieldsMoral, showForm, setShowForm }) => {
  const [isEntreprise, setIsEntreprise] = useState(false);
  const [selected, setSelected] = useState(fieldsMoral ? fieldsMoral : fields);

  let dataToSend = {};
  const onChange = (e) => {
    console.log("e", e);
    dataToSend[e?.target.id] = !e?.target.files ? e.target.value : e.target.files[0];

    console.log("data To send", dataToSend);
    return dataToSend;
  };
  const path = window.location.pathname
  console.log('path', path)
  const mySelection = () => {
    setSelected(!isEntreprise ? fieldsMoral : fields);
    setIsEntreprise(!isEntreprise);
  };
  return (
    <form class="w-full max-w-lg" key="form-1">
      <div class="flex flex-wrap -mx-3 mb-6">
        {selected &&
          selected.map((item) => (
            <>
              {item.category === "identity" && (
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor={`${item.name}`}
                  >
                    {item.name}
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id={`${item.fieldId}`}
                    name={item.name}
                    type={item.type}
                    placeholder={item.placeholder}
                    onChange={(e) => onChange(e)}
                  />
                  <p class="text-red-500 text-xs italic">
                    Please fill out this field.
                  </p>
                </div>
              )}
            </>
          ))}
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        {selected &&
          selected.map((item) => (
            <>
              {item.category === "date" && (
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor={`${item.name}`}
                  >
                    {item.name}
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id={`${item.fieldId}`}
                    name={item.name}
                    type={item.type}
                    placeholder={item.placeholder}
                    value={"1970-01-01"}
                    onChange={(e) => onChange(e)}
                  />
                  <p class="text-red-500 text-xs italic">
                    Please fill out this field.
                  </p>
                </div>
              )}
            </>
          ))}
      </div>
      
      <div class="flex flex-wrap -mx-3 mb-2">
        <div className="flex flex-wrap"> 
          {selected &&
            selected.map((item) => (
              <>
                {item.category === "adresse" && (
                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor={`${item.name}`}
                    >
                      {item.name}
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      name={item.name}
                      id={`${item.fieldId}`}
                      type={item.type}
                      placeholder={item.placeholder}
                      onChange={(e) => onChange(e)}
                    />
                    <p class="text-red-500 text-xs italic">
                      Please fill out this field.
                    </p>
                  </div>
                )}
              </>
            ))}
        </div>

        {/* File type fields  */}

        {selected && path === "/auteurs" && (
        <p className="text-yellow-500  font-bold text-xl mt-6 flex  m-4 items-center justify-center">
          {" "}
          Les fichiers justificatif de l'auteurs{" "}
        </p>
      )}
        <div className=" flex-col flex w-full ">

        {selected &&
          selected.map((item) => (
            <>
              {item.category === "file" && (
                <div class="w-full md:w-1/0.5 px-3 mb-6 md:mb-4">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor={`grid-${item.name}`}
                  >
                    {item.name}
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name={item.name}
                    id={`${item.fieldId}`}
                    type={item.type}
                    placeholder={item.placeholder}
                    onChange={(e) => onChange(e)}
                  />
                  <p class="text-red-500 text-xs italic">
                    Please fill out this field.
                  </p>
                </div>
              )}
            </>
          ))}
        </div>
        

        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button
            data-modal-hide="default-modal"
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => {
              send(dataToSend);
              setShowForm(!showForm);
            }}
          >
            Envoyer
          </button>
          <button
            data-modal-hide="default-modal"
            type="button"
            className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            onClick={() => setShowForm(!showForm)}
          >
            Annuler
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
