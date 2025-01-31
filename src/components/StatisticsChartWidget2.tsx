import React from "react";
import {  Card } from "react-bootstrap";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";


interface StatisticsChartWidgetProps {
  title: string;
  color: string;
  data: number;
  totalSales: string;
  target: string;
  lastWeek: string;
  lastMonth: string;
}

const StatisticsChartWidget2 = ({
  title,
  color,
  data,
  totalSales,
  target,
  lastWeek,
  lastMonth,
}: StatisticsChartWidgetProps) => {
  const apexOpts: ApexOptions = {
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "67%",
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: true,
            fontSize: "24px",
            offsetY: 12,
            formatter: (val: number) => {
              return String(val);
            },
          },
        },
      },
    },
    colors: [color],
    stroke: {
      lineCap: "round",
    },
  };

  const apexData = [data];

  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title mb-2">{title}</h4>

          <div className="widget-chart text-center" dir="ltr">
            <Chart
              options={apexOpts}
              series={apexData}
              type="radialBar"
              height={180}
              className="apex-charts mt-0"
            />

            <h5 className="text-muted mt-0">Total sales made today</h5>
            <h2>{totalSales}</h2>

         
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default StatisticsChartWidget2;
