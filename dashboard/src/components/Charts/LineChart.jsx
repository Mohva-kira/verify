import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  Tooltip,
  LineSeries,
} from "@syncfusion/ej2-react-charts";

import { LinePrimaryXAxis, LinePrimaryYAxis } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
import { useSelector } from "react-redux";

const LineChart = () => {
  const { currentMode } = useStateContext();
  const data = useSelector((state) => state.vignette?.vignette.data);
  console.log(data);
  let result = []
  let resultBig = []
 
  
  
  data.filter((item) => 
   
      item.attributes.numero !== "00null" &&
      !item.attributes.profile.data?.attributes.prenom.includes("aa") &&
      !item.attributes.profile.data?.attributes.prenom.includes("bb") &&
      !item.attributes.profile.data?.attributes.prenom.includes(
        "undefined")
      &&
        result.push({  x: new Date(item.attributes.createdAt),
          y: 6000 ,})
      
      
  )

  data.filter((item) => {
        if(resultBig.length <= 12 ) {
      item.attributes.numero !== "00null" &&
      !item.attributes.profile.data?.attributes.prenom.includes("aa") &&
      !item.attributes.profile.data?.attributes.prenom.includes("bb") &&
      !item.attributes.profile.data?.attributes.prenom.includes(
        "undefined")
      &&
      

        resultBig.push({  x: new Date(item.attributes.createdAt),
          y: 12 + item.id,})
       
        }}
  )
  const small = result
  console.log("small", small );
  console.log("Big", resultBig );

  const all = [
    small, resultBig
  ]


  console.log("All", all );

  const lineChartData = [
    [
      { x: new Date(2005, 0, 1), y: 21 },
      { x: new Date(2006, 0, 1), y: 24 },
      { x: new Date(2007, 0, 1), y: 36 },
      { x: new Date(2008, 0, 1), y: 38 },
      { x: new Date(2009, 0, 1), y: 54 },
      { x: new Date(2010, 0, 1), y: 57 },
      { x: new Date(2011, 0, 1), y: 70 },
    ],
    [
      { x: new Date(2005, 0, 1), y: 28 },
      { x: new Date(2006, 0, 1), y: 44 },
      { x: new Date(2007, 0, 1), y: 48 },
      { x: new Date(2008, 0, 1), y: 50 },
      { x: new Date(2009, 0, 1), y: 66 },
      { x: new Date(2010, 0, 1), y: 78 },
      { x: new Date(2011, 0, 1), y: 84 },
    ],

    [
      { x: new Date(2005, 0, 1), y: 10 },
      { x: new Date(2006, 0, 1), y: 20 },
      { x: new Date(2007, 0, 1), y: 30 },
      { x: new Date(2008, 0, 1), y: 39 },
      { x: new Date(2009, 0, 1), y: 50 },
      { x: new Date(2010, 0, 1), y: 70 },
      { x: new Date(2011, 0, 1), y: 100 },
    ],
  ];

  console.log(lineChartData)
  const lineCustomSeries = [
    {
      dataSource: all[1],
      xName: "x",
      yName: "y",
      name: "Gros Cylindre",
      width: "2",
      marker: { visible: true, width: 10, height: 10 },
      type: "Line",
    },

    {
      dataSource: all[0],
      xName: "x",
      yName: "y",
      name: "Petit cylindre",
      width: "2",
      marker: { visible: true, width: 10, height: 10 },
      type: "Line",
    },
  ];

  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === "Dark" ? "dark" : "#fff"}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;
