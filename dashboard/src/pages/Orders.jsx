import React, { useEffect, useState } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
  ContextMenu,
  Toolbar,
} from "@syncfusion/ej2-react-grids";

import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";
import { Header } from "../components";
import { useGetVignetteQuery } from "../redux/vignetteService";
import { Stacked, Pie, Button, SparkLine } from "../components";
// import { vignetteData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import { BiDotsHorizontal } from "react-icons/bi";
import { Modal } from "../components";
import { fieldsProfile } from "../components/Fields";
import logo from "../assets/logo-transparent.png";
import moto from "../assets/moto.png";
import { PiMotorcycle } from "react-icons/pi";
import { FaMotorcycle } from "react-icons/fa";
import { GiCash } from "react-icons/gi";
import { useDispatch } from "react-redux";
import {setSoldCountState, setSoldMiniState, setSoldBig } from '../redux/vignetteService'
import { sort } from "@syncfusion/ej2-react-charts";


const Orders = () => {
  const { data, isFetching, isLoading, isError } = useGetVignetteQuery();
  let result = [];
  console.log("data vignette", data);
  const [showForm, setShowForm] = useState(false);
  const { currentColor } = useStateContext();
  const [soldMini, setSoldMini] = useState();
  const [soldCount, setSoldCount] = useState();
  const dispatch = useDispatch()
  const vente1 = []
  const vente2 = []
  const send = () => {};

  let grid;

  const shapeData = () => {
    if (data?.data) {
      data?.data.map(
        (item) =>{
          item.attributes.numero !== "00null" &&
          !item.attributes.profile.data?.attributes?.prenom?.includes("aa") &&
          !item.attributes.profile.data?.attributes?.prenom?.includes("bb") &&
          !item.attributes.profile.data?.attributes?.prenom?.includes(
            "undefined"
          ) &&
          result.push({
            OrderID: item.id,
            CustomerName:
              item?.attributes?.profile?.data?.attributes?.prenom +
              " " +
              item?.attributes?.profile?.data?.attributes?.nom,

            TotalAmount: item?.attributes.numero,
            OrderItems: item.id,
            Phone: item?.attributes?.profile?.data?.attributes?.phone,
            Status: "pending",
            date: new Date(item?.attributes.createdAt).toLocaleDateString(),
            ProductImage: moto,
          })

          if(new Date().toLocaleDateString() === new Date(item.attributes.createdAt).toLocaleDateString()) {
            
           vente1.push(item)
          }

          }
      );
    }

    

    setSoldCount(result?.length)
    
    dispatch(setSoldCountState(result?.length))

    result.length !== 0 && calculateSoldMini(result);
  };




  const filterSettings = { columns: [
    { field: 'CustomerName', operator: 'OrderItems', value: 2 }
] };
const toolbarOptions = ['Search', 'Print', 'ExcelExport'];
  const calculateSoldMini = (data) => {
    
    data?.length !== 0 && setSoldMini(6000 * data.length) 
    data?.length !== 0 && dispatch(setSoldMiniState(6000 * data.length))
  };


  const toolbarClick = (args) => {
    if (grid && args.item.id === 'Grid_excelexport') {
        grid.excelExport();
    }
};



  useEffect(() => {
    shapeData();
    
    console.log("sold mini", soldMini);
    console.log("result", result);
  });

  const pourcentageEvolution = (ventesJour1, ventesJour2) => {
    if (ventesJour1?.length !== ventesJour2?.length) {
        return "Les tableaux doivent avoir la même longueur.";
    }
    console.log('ventes jour 1', vente1)
    return ventesJour1?.map((venteJour1, index) => {
        const venteJour2 = ventesJour2[index];
        return ((venteJour2 - venteJour1) / venteJour1) * 100;
    });
}


const pourcentageEvolutionJour = pourcentageEvolution(vente1, vente2);

console.log('evolution', pourcentageEvolutionJour)

  const vignetteData = [
    {
      icon: <GiCash />,
      amount: `${soldCount ? soldCount : 'Loading ....'}`,
      // percentage: '-4%',
      title: 'Vignettes Vendu',
      iconColor: '#03C9D7',
      iconBg: '#E5FAFB',
      pcColor: 'red-600',
    },
    {
      icon: <PiMotorcycle />,
      amount: `${soldMini ? soldMini.toLocaleString() + ' Fcfa' : ' Loading ....'}`,
     
      title: '-128 m3 vendu',
      iconColor: 'rgb(255, 244, 229)',
      iconBg: 'rgb(254, 201, 15)',
      pcColor: 'green-600',
    },
    {
      icon: <FaMotorcycle />,
      amount: '12 000 Fcfa',
      title: '+128 m3 vendu',
      iconColor: 'rgb(228, 106, 118)',
      iconBg: 'rgb(255, 244, 229)',
  
      pcColor: 'green-600',
    },
    // {
    //   icon: <HiOutlineRefresh />,
    //   amount: '39,354',
    //   percentage: '-12%',
    //   title: 'Reversés',
    //   iconColor: 'rgb(0, 194, 146)',
    //   iconBg: 'rgb(235, 250, 242)',
    //   pcColor: 'red-600',
    // },
  ];
  return (
    <div className="m-2 md:m-10  md: p-10 bg-white rounded-3xl">
      <Header category="Page" title="Suivi vignette" />

      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        {/* <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-auto p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className='font-bold text-gray-400'>Montant total Attendue</p>
              <p className='text-xl'>2 520 450 125  <span className='text-sm text-yellow-300  mb-16 '>Fcfa</span> </p>  
            </div>
          </div>
          <div className='mt-6'>
            <Button 
              color="white"
              bgColor={currentColor}
              text="Télécharger"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div> */}
        <Modal
          showForm={showForm}
          send={send}
          setShowForm={setShowForm}
          fields={fieldsProfile}
        />
        <div className="flex m-3 flex-wrap justify-center gap-1 mt-5 items-center">
          {vignetteData.map((item) => (
            <div
              key={item.title}
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
      {isLoading ? (
        <p>Loading ....</p>
      ) : (
        <GridComponent
          id="gridcomp"
          dataSource={result}
          allowPaging={true}
          toolbar={toolbarOptions}
          allowExcelExport={true}
          allowSorting={true}
         
          allowFiltering={true}
          toolbarClick={toolbarClick} ref={g => grid = g}
        > 
          <ColumnsDirective>
            {ordersGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Page, Edit, Toolbar, Filter, Sort]} />
        </GridComponent>
      )}
    </div>
  );
};

export default Orders;
