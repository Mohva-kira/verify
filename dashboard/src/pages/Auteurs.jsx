import React, { useState } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Edit,
  Search,
  Toolbar,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { employeesData, contextMenuItems, employeesGrid, auteursData } from "../data/dummy";
import { Header, Button } from "../components";
import { IoIosPersonAdd } from "react-icons/io";
import { fieldsPerson as fields } from "../components/Fields";
import { fieldsMoral } from "../components/Fields";
import {
  redevablesData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import Modal from "../components/Modal";
import Form from "../components";
import { usePostRedevableMoraleMutation, usePostRedevableMutation } from "../redux/redevableService";
import { authorType } from "../components/Fields";
import { usePostAuteurMutation } from "../redux/auteursService";
const Auteurs = () => {const { currentColor } = useStateContext();
const [showForm, setShowForm] = useState(false)
const [postAuteurs] = usePostAuteurMutation()
// const [postRedevableMorale] = usePostRedevableMoraleMutation()

const send = async data => {
  // data.preventDefault()
console.log('les data', data)
const dataToSend = new FormData()

// dataToSend.append('data',JSON.stringify({data}))

dataToSend.append('acte', data.acte)
dataToSend.append('cin', data.cin)
dataToSend.append('oeuvre', data.oeuvre)
delete data.cin 
delete data.acte 
delete data.oeuvre 

dataToSend.append('data', JSON.stringify(data))

// data.cin = JSON.stringify(data.cin)
// data.acte = JSON.stringify(data.acte)
// data.oeuvre = JSON.stringify(data.oeuvre)
// data.attestation = JSON.stringify(data.attestation)
// data.contrat_edition = JSON.stringify(data.contrat_edition)

console.log('to send', dataToSend.entries())
try {
  await postAuteurs(dataToSend)
    .then(rep => console.log('Auteurs reponse', rep))
} catch (error) {
  console.error('erreur', error)
}
}

return (
  <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Page" title="Auteurs" />
    <div className="flex justify-around items-center">
      <select className="w-56 border-b-slate-800 border-b-2 border-l-2 rounded-l-lg border-l-slate-800">
        <option value="Bamako">Bamako</option>
        <option value="Commune I">Commune I</option>
        <option value="Commune II">Commune II</option>
        <option value="Commune III">Commune III</option>
        <option value="Commune VI">Commune VI</option>
        <option value="Commune V">Commune V</option>
        <option value="Commune VI">Commune VI</option>
      </select>

      <button
        data-modal-target="default-modal"
        data-modal-toggle="default-modal"
        onClick={() => setShowForm(!showForm)}
        class="block text-white text-3xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
       <IoIosPersonAdd />
      </button>

      <Modal toSelect={authorType} showForm={showForm} send={send} setShowForm={setShowForm} fields={fields}  />


      
    </div>
    <div className="flex flex-wrap lg:flex-nowrap justify-center">
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-gray-400">NB Auteurs</p>
            <p className="text-xl">21 520 </p>
          </div>
        </div>
        <div className="mt-6">
          <Button
            color="white"
            bgColor={currentColor}
            text="Download"
            borderRadius="10px"
            size="md"
          />
        </div>
      </div>

      <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
        {auteursData.map((item, i) => (
          <div
            key={i}
            className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
          >
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
            >
              {item.icon}
            </button>
            <p className="mt-3">
              <span className="text-lg font-semibold">{item.amount}</span>
              <span className={`text-sm text-${item.pcColor} ml-2`}>
                {item.percentage}
              </span>
            </p>
            <p className="text-sm text-gray-400 mt-1"> {item.title} </p>
          </div>
        ))}
      </div>
    </div>

    <GridComponent
      dataSource={employeesData}
      allowPaging
      allowSorting
      toolbar={["Search"]}
      width="auto"
    >
      <ColumnsDirective>
        {employeesGrid.map((item, index) => (
          <ColumnDirective key={index} {...item} />
        ))}
      </ColumnsDirective>
      <Inject services={[Page, Edit, Toolbar]} />
    </GridComponent>
  </div>
);
}

export default Auteurs