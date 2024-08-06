import React, { useEffect, useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
// import { GoPrimitiveDot } from 'react-icons/go'

import { Stacked, Pie, Button, SparkLine } from "../components";
import { SparklineAreaData, ecomPieChartData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import { BiDotsHorizontal } from "react-icons/bi";
import {
  setProfile,
  useGetProfileQuery,
  usePostProfileMutation,
} from "../redux/profileService";
import { Modal } from "../components";
import { fieldsProfile } from "../components/Fields";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { FiBarChart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useGetVignetteQuery } from "../redux/vignetteService";
import moto from "../assets/moto.png";
import { PiMotorcycle } from "react-icons/pi";
import { FaMotorcycle } from "react-icons/fa";
import { GiCash } from "react-icons/gi";
import {
  setSoldCountState,
  setSoldMiniState,
  setSoldBig,
} from "../redux/vignetteService";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const Ecommerce = () => {
  const user =
    localStorage.getItem("auth") && JSON.parse(localStorage.getItem("auth"));

  console.log("user", user);
  const { data, isLoading, isFetching, isSuccess, refetch } =
    useGetProfileQuery(user?.user?.id);
  const {
    data: VignetteDatas,
    isFetching: VignetteFetching,
    isLoading: vignetteLoading,
    isError,
  } = useGetVignetteQuery();

  const [postProfile] = usePostProfileMutation();
  const [showForm, setShowForm] = useState(false);
  const [toExport, setToExport] = useState();
  const dispatch = useDispatch();

  const handleDownload = () => {
    let treatedToExport = [];

    VignetteDatas?.data.map(
      (item) =>
        item.attributes.numero !== "00null" &&
        !item.attributes.profile.data?.attributes.prenom.includes("aa") &&
        !item.attributes.profile.data?.attributes.prenom.includes("bb") &&
        !item.attributes.profile.data?.attributes.prenom.includes(
          "undefined"
        ) &&
        treatedToExport.push({
          Id: item.id,
          Acheteur:
            item?.attributes?.profile?.data?.attributes.prenom +
            " " +
            item?.attributes?.profile?.data?.attributes.nom,

          QR_No: item?.attributes.numero,
        })
    );

    console.log("to export ", treatedToExport);
    setToExport(treatedToExport);
    const data = [
      ["name", "Age"],
      ["Dada", "25"],
      ["Nana", "21"],
    ];

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(treatedToExport);

    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    const blob = XLSX.write(wb, {
      bookType: "xlsx",
      bookSST: false,
      type: "array",
    });

    console.log("blob", blob);

    saveAs(
      new Blob([blob], { type: "application/octet-stream" }),
      "rapport.xslx"
    );
  };

  // Vignettes Fetch and shape
  let result = [];
  console.log("data vignette", data);

  const [soldMini, setSoldMini] = useState();
  const [soldCount, setSoldCount] = useState();
  const [soldCountBig, setSoldCountBig] = useState();

  let grid;
  const headers = [
    { label: "orderId", key: "OrderID" },
    { label: "Nom et prenom", key: "CustomerName" },
    { label: "Total", key: "Total" },
    { label: "Id Vignette", key: "OrderItems" },
  ];

  const shapeData = () => {
    if (VignetteDatas?.data) {
      VignetteDatas?.data.map(
        (item) =>
          item.attributes.numero !== "00null" &&
          !item.attributes.profile.data?.attributes.prenom?.includes("aa") &&
          !item.attributes.profile.data?.attributes.prenom?.includes("bb") &&
          !item.attributes.profile.data?.attributes.prenom?.includes(
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
            Location: "",
            Status: "pending",
            ProductImage: moto,
          })
      );
    }

    setSoldCount(result?.length);

    dispatch(setSoldCountState(result?.length));
    result.length !== 0 && calculateSoldMini(result);
  };

  const filterSettings = {
    columns: [{ field: "CustomerName", operator: "OrderItems", value: 2 }],
  };
  const toolbarOptions = ["Search", "Print", "ExcelExport"];
  const calculateSoldMini = (data) => {
    data?.length !== 0 && setSoldMini(6000 * data.length);
    data?.length !== 0 && dispatch(setSoldMiniState(6000 * data.length));
  };

  const toolbarClick = (args) => {
    if (grid && args.item.id === "Grid_excelexport") {
      grid.excelExport();
    }
  };

  // */Vignettes Fetch and shape
  console.log("data", data);
  // console.log("sold soldMini", soldMini);
  // console.log("sold Count", soldCount);
  const { currentColor } = useStateContext();

  const checkProfile = () => {
    isLoading && <p>Loading ...</p>;
    isSuccess && data.data.length > 0 ? setShowForm(false) : setShowForm(true);
  };

  const send = async (data) => {
    data.user = [user?.user?.id];
    // const dataToSend = JSON.stringify({data})
    console.log("to send", data);

    try {
      await postProfile({ data }).then((rep) => {
        console.log("reponse", rep);
        dispatch(setProfile(rep?.data));
      });

      toast.success("Le profile est bien enregistré!");
    } catch (error) {
      console.error("erreur", error);
      toast.error("Une erreur c'est produite veuillez réessayé");
    }
  };

  useEffect(() => {
    refetch();
    data?.data.length > 0 && checkProfile();
  }, [data]);

  useEffect(() => {
    shapeData();

    console.log("sold mini", soldMini);
    console.log("result", result);
  }, [VignetteDatas]);

  const vignetteData = [
    {
      icon: <GiCash />,
      amount: `${soldCount ? soldCount : "Loading ...."}`,
      percentage: "-4%",
      title: "Vignettes Vendu",
      iconColor: "#03C9D7",
      iconBg: "#E5FAFB",
      pcColor: "red-600",
    },
    {
      icon: <PiMotorcycle />,
      amount: `${
        soldMini ? soldMini.toLocaleString() + " Fcfa" : " Loading ...."
      }`,
      percentage: "+23%",
      title: "-128 m3 vendu",
      iconColor: "rgb(255, 244, 229)",
      iconBg: "rgb(254, 201, 15)",
      pcColor: "green-600",
    },
    {
      icon: <FaMotorcycle />,
      amount: "12 000 Fcfa",
      percentage: "+38%",
      title: "+128 m3 vendu",
      iconColor: "rgb(228, 106, 118)",
      iconBg: "rgb(255, 244, 229)",

      pcColor: "green-600",
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
  const earningData = [
    {
      icon: <MdOutlineSupervisorAccount />,
      amount: `${soldCount ? soldCount?.toLocaleString() : "Loading ...."}`,
      // percentage: '-4%',
      title: "Vignettes Vendu",
      iconColor: "#03C9D7",
      iconBg: "#E5FAFB",
      pcColor: "red-600",
      link: "/orders",
    },
    {
      icon: <BsBoxSeam />,
      amount: `${
        soldCount ? (soldCount - 1)?.toLocaleString() : "Loading ...."
      }`,
      // percentage: '+23%',
      title: "-128 m3",
      iconColor: "rgb(255, 244, 229)",
      iconBg: "rgb(254, 201, 15)",
      pcColor: "green-600",
      link: "/orders",
    },
    {
      icon: <FiBarChart />,
      amount: `${soldCount ? 1?.toLocaleString() : "Loading ..."}`,
      // percentage: '+38%',
      title: "+128 m3",
      iconColor: "rgb(228, 106, 118)",
      iconBg: "rgb(255, 244, 229)",

      pcColor: "green-600",
      link: "/orders",
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
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-auto p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Montant total Attendue</p>
              <p className="text-xl">
                4 500 000{" "}
                <span className="text-sm text-yellow-300  mb-16 ">Fcfa</span>{" "}
              </p>
            </div>
          </div>
          <div className="mt-6">
            <a onClick={() => handleDownload()}>
              <Button
                color="white"
                bgColor={currentColor}
                text="Télécharger"
                borderRadius="10px"
                size="md"
              />
            </a>
          </div>
        </div>
        
          <Modal
            showForm={showForm}
            send={send}
            setShowForm={setShowForm}
            fields={fieldsProfile}
          />
 

        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
            >
              <Link to={item.link}>
                <button
                  type="button"
                  style={{
                    color: item.iconColor,
                    backgroundColor: item.iconBg,
                  }}
                  className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
                >
                  {item.icon}
                </button>
              </Link>

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

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 rounded-2xl md:w-780">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Details des ventes</p>
            <div className="flex items-center gap-4">
              <p className="flex item-center text-gray-600 gap-4 hover:drop-shadow-xl">
                <span>
                  {" "}
                  <BiDotsHorizontal />{" "}
                </span>
                <span>Expense</span>
              </p>
              <p className="flex item-center text-green-400 gap-4 hover:drop-shadow-xl">
                <span>
                  {" "}
                  <BiDotsHorizontal />{" "}
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-colo m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">
                    {" "}
                    {soldMini?.toLocaleString()}{" "}
                  </span>{" "}
                  <span className="text-sm text-yellow-300  mb-16 left-5">
                    Fcfa
                  </span>
                  {/* <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>23%</span> */}
                </p>
                <p className="text-gray-500 mt-1">Vendu</p>
              </div>
              <div className="mt-8 flex-row align-text-top items-center">
                <p>
                  <span className="text-3xl font-semibold">
                    {(4500000 - soldMini)?.toLocaleString()}{" "}
                  </span>{" "}
                  <span className="text-sm text-yellow-300  mb-16 left-5">
                    Fcfa
                  </span>
                </p>
                <p className="text-gray-500 mt-1">A Vendre</p>
              </div>

              <div className="mt-5">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              <div className="mt-10">
                <a onClick={() => handleDownload()}>
                  <Button
                    color="white"
                    bgColor={currentColor}
                    text="Télécharger Rapport"
                    borderRadius="10px"
                  />
                </a>
              </div>
            </div>
            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
