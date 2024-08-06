import React, { useState } from "react";
import Form from "./Form";

const Modal = ({
  showForm,
  toSelect,
  setShowForm,
  fields,
  fieldsMoral,
  send,
}) => {
  const [selected, setSelected] = useState(null);

  return (
    <div
      id="default-modal"
      tabIndex="-1"
      aria-hidden="true"
      className={` ${
        showForm ? "" : "hidden"
      } overflow-y-auto overflow-x-hidden flex fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Formulaire de création
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
              onClick={() => setShowForm(!showForm)}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="flex flex-col  justify-center  items-center ">
            {selected && (
              <span className="text-sm font-semibold text-slate-500">
                {" "}
                Frais d'adhesion{" "}
              </span>
            )}
            <p className="text-yellow-500 ml-10  p-2 font-bold text-xl bg-white w-40">
              {selected && Number(selected).toLocaleString() + " Fcfa"}
            </p>
            {toSelect && (
              <select
                onChange={(e) => {
                  setSelected(e.target.value);
                  console.log("target", e);
                }}
                name="selection"
                className=" capitalize ml-2 font-semibold border-solid rounded-3xl border-2 border-blue-600 "
                id="select"
              >
                <option selected value="Catégorie"></option>
                {toSelect.map((item) => (
                  <option className="capitalize" value={item.charge}>
                    {item.name}
                  </option>
                ))}
              </select>
            )}
          </div>

          <div className="p-4 md:p-5 space-y-4">
            <Form
              send={send}
              fields={fields}
              showForm={showForm}
              setShowForm={setShowForm}
              fieldsMoral={fieldsMoral}
            />
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Conseil et instruction !!!!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
