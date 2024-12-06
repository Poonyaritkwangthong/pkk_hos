import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import ProfileMenu from "./profile-menu";

export default function BC() {
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [field, setField] = useState([
    {
      nap_no: "NAP001",
      lab_request_id: "LR001",
      status: "Pending",
      hn: "HN001",
      order_date: "2024-11-01",
      report_date: "2024-11-02",
      wbc: "6.5",
      hb: "13.5",
      cr: "1.0",
      chol: "180",
      fbs: "90",
      tg: "150",
      sgtp: "25",
    },
    {
      nap_no: "NAP002",
      lab_request_id: "LR002",
      status: "Completed",
      hn: "HN002",
      order_date: "2024-11-03",
      report_date: "2024-11-04",
      wbc: "7.2",
      hb: "14.1",
      cr: "0.9",
      chol: "200",
      fbs: "95",
      tg: "160",
      sgtp: "30",
    },
    {
      nap_no: "NAP003",
      lab_request_id: "LR003",
      status: "Cancelled",
      hn: "HN003",
      order_date: "2024-10-15",
      report_date: "",
      wbc: "",
      hb: "",
      cr: "",
      chol: "",
      fbs: "",
      tg: "",
      sgtp: "",
    },
    {
      nap_no: "NAP004",
      lab_request_id: "LR004",
      status: "Pending",
      hn: "HN004",
      order_date: "2024-10-20",
      report_date: "2024-10-21",
      wbc: "5.9",
      hb: "12.8",
      cr: "1.1",
      chol: "190",
      fbs: "100",
      tg: "140",
      sgtp: "28",
    },
    {
      nap_no: "NAP005",
      lab_request_id: "LR005",
      status: "Completed",
      hn: "HN005",
      order_date: "2024-09-10",
      report_date: "2024-09-11",
      wbc: "6.0",
      hb: "13.2",
      cr: "1.0",
      chol: "170",
      fbs: "85",
      tg: "145",
      sgtp: "20",
    },
    {
      nap_no: "NAP006",
      lab_request_id: "LR006",
      status: "Completed",
      hn: "HN006",
      order_date: "2024-08-01",
      report_date: "2024-08-02",
      wbc: "7.0",
      hb: "14.0",
      cr: "1.0",
      chol: "190",
      fbs: "92",
      tg: "160",
      sgtp: "29",
    },
    {
      nap_no: "NAP007",
      lab_request_id: "LR007",
      status: "Pending",
      hn: "HN007",
      order_date: "2024-07-12",
      report_date: "2024-07-13",
      wbc: "6.8",
      hb: "13.8",
      cr: "0.8",
      chol: "185",
      fbs: "100",
      tg: "135",
      sgtp: "26",
    },
    {
      nap_no: "NAP008",
      lab_request_id: "LR008",
      status: "Cancelled",
      hn: "HN008",
      order_date: "2024-07-10",
      report_date: "",
      wbc: "",
      hb: "",
      cr: "",
      chol: "",
      fbs: "",
      tg: "",
      sgtp: "",
    },
    {
      nap_no: "NAP009",
      lab_request_id: "LR009",
      status: "Completed",
      hn: "HN009",
      order_date: "2024-06-01",
      report_date: "2024-06-02",
      wbc: "6.3",
      hb: "13.0",
      cr: "1.2",
      chol: "180",
      fbs: "88",
      tg: "150",
      sgtp: "27",
    },
    {
      nap_no: "NAP010",
      lab_request_id: "LR010",
      status: "Pending",
      hn: "HN010",
      order_date: "2024-05-25",
      report_date: "2024-05-26",
      wbc: "6.9",
      hb: "13.6",
      cr: "1.0",
      chol: "190",
      fbs: "94",
      tg: "160",
      sgtp: "22",
    },
    {
      nap_no: "NAP011",
      lab_request_id: "LR011",
      status: "Completed",
      hn: "HN011",
      order_date: "2024-04-15",
      report_date: "2024-04-16",
      wbc: "6.4",
      hb: "13.3",
      cr: "1.1",
      chol: "175",
      fbs: "90",
      tg: "155",
      sgtp: "23",
    },
    {
      nap_no: "NAP012",
      lab_request_id: "LR012",
      status: "Pending",
      hn: "HN012",
      order_date: "2024-03-10",
      report_date: "2024-03-11",
      wbc: "6.7",
      hb: "13.9",
      cr: "0.9",
      chol: "185",
      fbs: "97",
      tg: "140",
      sgtp: "24",
    },
    {
      nap_no: "NAP013",
      lab_request_id: "LR013",
      status: "Cancelled",
      hn: "HN013",
      order_date: "2024-02-20",
      report_date: "",
      wbc: "",
      hb: "",
      cr: "",
      chol: "",
      fbs: "",
      tg: "",
      sgtp: "",
    },
    {
      nap_no: "NAP014",
      lab_request_id: "LR014",
      status: "Completed",
      hn: "HN014",
      order_date: "2024-01-01",
      report_date: "2024-01-02",
      wbc: "6.2",
      hb: "13.1",
      cr: "1.0",
      chol: "170",
      fbs: "89",
      tg: "130",
      sgtp: "20",
    },
    {
      nap_no: "NAP015",
      lab_request_id: "LR015",
      status: "Pending",
      hn: "HN015",
      order_date: "2024-01-20",
      report_date: "2024-01-21",
      wbc: "7.3",
      hb: "14.2",
      cr: "1.2",
      chol: "195",
      fbs: "93",
      tg: "170",
      sgtp: "32",
    },
    {
      nap_no: "NAP016",
      lab_request_id: "LR016",
      status: "Completed",
      hn: "HN016",
      order_date: "2023-12-15",
      report_date: "2023-12-16",
      wbc: "6.6",
      hb: "13.4",
      cr: "1.0",
      chol: "185",
      fbs: "90",
      tg: "145",
      sgtp: "27",
    },
    {
      nap_no: "NAP017",
      lab_request_id: "LR017",
      status: "Cancelled",
      hn: "HN017",
      order_date: "2023-11-25",
      report_date: "",
      wbc: "",
      hb: "",
      cr: "",
      chol: "",
      fbs: "",
      tg: "",
      sgtp: "",
    },
    {
      nap_no: "NAP018",
      lab_request_id: "LR018",
      status: "Pending",
      hn: "HN018",
      order_date: "2023-11-01",
      report_date: "2023-11-02",
      wbc: "6.9",
      hb: "13.7",
      cr: "1.1",
      chol: "190",
      fbs: "95",
      tg: "150",
      sgtp: "28",
    },
    {
      nap_no: "NAP019",
      lab_request_id: "LR019",
      status: "Completed",
      hn: "HN019",
      order_date: "2023-10-10",
      report_date: "2023-10-11",
      wbc: "6.1",
      hb: "12.9",
      cr: "0.9",
      chol: "175",
      fbs: "88",
      tg: "140",
      sgtp: "22",
    },
    {
      nap_no: "NAP020",
      lab_request_id: "LR020",
      status: "Pending",
      hn: "HN020",
      order_date: "2023-09-05",
      report_date: "2023-09-06",
      wbc: "7.0",
      hb: "14.0",
      cr: "1.2",
      chol: "200",
      fbs: "96",
      tg: "165",
      sgtp: "30",
    },
    {
      nap_no: "NAP021",
      lab_request_id: "LR021",
      status: "Completed",
      hn: "HN021",
      order_date: "2023-08-10",
      report_date: "2023-08-11",
      wbc: "6.5",
      hb: "13.5",
      cr: "1.1",
      chol: "185",
      fbs: "92",
      tg: "150",
      sgtp: "25",
    },
    {
      nap_no: "NAP022",
      lab_request_id: "LR022",
      status: "Cancelled",
      hn: "HN022",
      order_date: "2023-07-15",
      report_date: "",
      wbc: "",
      hb: "",
      cr: "",
      chol: "",
      fbs: "",
      tg: "",
      sgtp: "",
    },
    {
      nap_no: "NAP023",
      lab_request_id: "LR023",
      status: "Pending",
      hn: "HN023",
      order_date: "2023-06-01",
      report_date: "2023-06-02",
      wbc: "6.7",
      hb: "13.8",
      cr: "0.9",
      chol: "180",
      fbs: "90",
      tg: "140",
      sgtp: "24",
    },
    {
      nap_no: "NAP024",
      lab_request_id: "LR024",
      status: "Completed",
      hn: "HN024",
      order_date: "2023-05-20",
      report_date: "2023-05-21",
      wbc: "6.3",
      hb: "13.1",
      cr: "1.0",
      chol: "175",
      fbs: "88",
      tg: "135",
      sgtp: "20",
    },
    {
      nap_no: "NAP025",
      lab_request_id: "LR025",
      status: "Pending",
      hn: "HN025",
      order_date: "2023-04-15",
      report_date: "2023-04-16",
      wbc: "6.8",
      hb: "13.9",
      cr: "1.1",
      chol: "190",
      fbs: "95",
      tg: "150",
      sgtp: "27",
    },
    {
      nap_no: "NAP044",
      lab_request_id: "LR044",
      status: "Completed",
      hn: "HN044",
      order_date: "2021-09-12",
      report_date: "2021-09-13",
      wbc: "6.4",
      hb: "13.4",
      cr: "1.2",
      chol: "200",
      fbs: "96",
      tg: "160",
      sgtp: "30",
    },
    {
      nap_no: "NAP045",
      lab_request_id: "LR045",
      status: "Pending",
      hn: "HN045",
      order_date: "2021-08-05",
      report_date: "2021-08-06",
      wbc: "6.7",
      hb: "13.7",
      cr: "1.0",
      chol: "180",
      fbs: "89",
      tg: "145",
      sgtp: "28",
    },
    {
      nap_no: "NAP046",
      lab_request_id: "LR046",
      status: "Cancelled",
      hn: "HN046",
      order_date: "2021-07-18",
      report_date: "",
      wbc: "",
      hb: "",
      cr: "",
      chol: "",
      fbs: "",
      tg: "",
      sgtp: "",
    },
    {
      nap_no: "NAP047",
      lab_request_id: "LR047",
      status: "Completed",
      hn: "HN047",
      order_date: "2021-06-22",
      report_date: "2021-06-23",
      wbc: "6.8",
      hb: "13.8",
      cr: "1.1",
      chol: "210",
      fbs: "98",
      tg: "155",
      sgtp: "31",
    },
    {
      nap_no: "NAP048",
      lab_request_id: "LR048",
      status: "Pending",
      hn: "HN048",
      order_date: "2021-05-15",
      report_date: "2021-05-16",
      wbc: "7.2",
      hb: "14.2",
      cr: "1.2",
      chol: "195",
      fbs: "92",
      tg: "150",
      sgtp: "29",
    },
    {
      nap_no: "NAP049",
      lab_request_id: "LR049",
      status: "Cancelled",
      hn: "HN049",
      order_date: "2021-04-01",
      report_date: "",
      wbc: "",
      hb: "",
      cr: "",
      chol: "",
      fbs: "",
      tg: "",
      sgtp: "",
    },
    {
      nap_no: "NAP050",
      lab_request_id: "LR050",
      status: "Completed",
      hn: "HN050",
      order_date: "2021-03-10",
      report_date: "2021-03-11",
      wbc: "6.3",
      hb: "13.3",
      cr: "1.0",
      chol: "180",
      fbs: "90",
      tg: "140",
      sgtp: "27",
    },
    {
      nap_no: "NAP051",
      lab_request_id: "LR051",
      status: "Pending",
      hn: "HN051",
      order_date: "2021-02-25",
      report_date: "2021-02-26",
      wbc: "6.9",
      hb: "13.9",
      cr: "1.1",
      chol: "200",
      fbs: "95",
      tg: "155",
      sgtp: "32",
    },
    {
      nap_no: "NAP052",
      lab_request_id: "LR052",
      status: "Completed",
      hn: "HN052",
      order_date: "2021-01-15",
      report_date: "2021-01-16",
      wbc: "6.5",
      hb: "13.5",
      cr: "1.2",
      chol: "210",
      fbs: "97",
      tg: "160",
      sgtp: "34",
    },
    {
      nap_no: "NAP053",
      lab_request_id: "LR053",
      status: "Pending",
      hn: "HN053",
      order_date: "2020-12-08",
      report_date: "2020-12-09",
      wbc: "6.6",
      hb: "13.6",
      cr: "1.0",
      chol: "195",
      fbs: "94",
      tg: "150",
      sgtp: "30",
    },
    {
      nap_no: "NAP054",
      lab_request_id: "LR054",
      status: "Cancelled",
      hn: "HN054",
      order_date: "2020-11-01",
      report_date: "",
      wbc: "",
      hb: "",
      cr: "",
      chol: "",
      fbs: "",
      tg: "",
      sgtp: "",
    },
    {
      nap_no: "NAP055",
      lab_request_id: "LR055",
      status: "Completed",
      hn: "HN055",
      order_date: "2020-10-10",
      report_date: "2020-10-11",
      wbc: "6.4",
      hb: "13.4",
      cr: "1.1",
      chol: "200",
      fbs: "98",
      tg: "155",
      sgtp: "33",
    },
    {
      nap_no: "NAP056",
      lab_request_id: "LR056",
      status: "Pending",
      hn: "HN056",
      order_date: "2020-09-20",
      report_date: "2020-09-21",
      wbc: "6.8",
      hb: "13.8",
      cr: "1.2",
      chol: "190",
      fbs: "92",
      tg: "150",
      sgtp: "31",
    },
    {
      nap_no: "NAP057",
      lab_request_id: "LR057",
      status: "Completed",
      hn: "HN057",
      order_date: "2020-08-15",
      report_date: "2020-08-16",
      wbc: "6.2",
      hb: "13.2",
      cr: "1.0",
      chol: "185",
      fbs: "90",
      tg: "140",
      sgtp: "29",
    },
    {
      nap_no: "NAP058",
      lab_request_id: "LR058",
      status: "Cancelled",
      hn: "HN058",
      order_date: "2020-07-30",
      report_date: "",
      wbc: "",
      hb: "",
      cr: "",
      chol: "",
      fbs: "",
      tg: "",
      sgtp: "",
    },
    {
      nap_no: "NAP059",
      lab_request_id: "LR059",
      status: "Pending",
      hn: "HN059",
      order_date: "2020-06-12",
      report_date: "2020-06-13",
      wbc: "7.0",
      hb: "14.0",
      cr: "1.1",
      chol: "200",
      fbs: "95",
      tg: "155",
      sgtp: "34",
    },
    {
      nap_no: "NAP060",
      lab_request_id: "LR060",
      status: "Completed",
      hn: "HN060",
      order_date: "2020-05-25",
      report_date: "2020-05-26",
      wbc: "6.7",
      hb: "13.7",
      cr: "1.2",
      chol: "190",
      fbs: "93",
      tg: "145",
      sgtp: "28",
    },
    {
      nap_no: "NAP061",
      lab_request_id: "LR061",
      status: "Pending",
      hn: "HN061",
      order_date: "2020-04-10",
      report_date: "2020-04-11",
      wbc: "6.9",
      hb: "13.9",
      cr: "1.0",
      chol: "185",
      fbs: "91",
      tg: "140",
      sgtp: "30",
    },
    {
      nap_no: "NAP062",
      lab_request_id: "LR062",
      status: "Completed",
      hn: "HN062",
      order_date: "2020-03-05",
      report_date: "2020-03-06",
      wbc: "7.1",
      hb: "14.1",
      cr: "1.0",
      chol: "205",
      fbs: "100",
      tg: "160",
      sgtp: "32",
    },
    {
      nap_no: "NAP063",
      lab_request_id: "LR063",
      status: "Pending",
      hn: "HN063",
      order_date: "2020-02-20",
      report_date: "2020-02-21",
      wbc: "6.3",
      hb: "13.3",
      cr: "1.1",
      chol: "195",
      fbs: "94",
      tg: "150",
      sgtp: "31",
    },
    {
      nap_no: "NAP064",
      lab_request_id: "LR064",
      status: "Completed",
      hn: "HN064",
      order_date: "2020-01-30",
      report_date: "2020-01-31",
      wbc: "6.9",
      hb: "13.9",
      cr: "1.0",
      chol: "190",
      fbs: "95",
      tg: "155",
      sgtp: "33",
    },
    {
      nap_no: "NAP065",
      lab_request_id: "LR065",
      status: "Cancelled",
      hn: "HN065",
      order_date: "2020-01-05",
      report_date: "",
      wbc: "",
      hb: "",
      cr: "",
      chol: "",
      fbs: "",
      tg: "",
      sgtp: "",
    },
    {
      nap_no: "NAP066",
      lab_request_id: "LR066",
      status: "Pending",
      hn: "HN066",
      order_date: "2019-12-25",
      report_date: "2019-12-26",
      wbc: "6.5",
      hb: "13.5",
      cr: "1.1",
      chol: "200",
      fbs: "97",
      tg: "160",
      sgtp: "34",
    },
    {
      nap_no: "NAP067",
      lab_request_id: "LR067",
      status: "Completed",
      hn: "HN067",
      order_date: "2019-11-15",
      report_date: "2019-11-16",
      wbc: "6.8",
      hb: "13.8",
      cr: "1.2",
      chol: "180",
      fbs: "93",
      tg: "145",
      sgtp: "29",
    },
    {
      nap_no: "NAP068",
      lab_request_id: "LR068",
      status: "Pending",
      hn: "HN068",
      order_date: "2019-10-01",
      report_date: "2019-10-02",
      wbc: "7.0",
      hb: "14.0",
      cr: "1.3",
      chol: "210",
      fbs: "98",
      tg: "165",
      sgtp: "35",
    },
    {
      nap_no: "NAP069",
      lab_request_id: "LR069",
      status: "Completed",
      hn: "HN069",
      order_date: "2019-09-20",
      report_date: "2019-09-21",
      wbc: "6.6",
      hb: "13.6",
      cr: "1.0",
      chol: "175",
      fbs: "92",
      tg: "140",
      sgtp: "30",
    },
    {
      nap_no: "NAP070",
      lab_request_id: "LR070",
      status: "Cancelled",
      hn: "HN070",
      order_date: "2019-08-15",
      report_date: "",
      wbc: "",
      hb: "",
      cr: "",
      chol: "",
      fbs: "",
      tg: "",
      sgtp: "",
    },
    {
      nap_no: "NAP071",
      lab_request_id: "LR071",
      status: "Pending",
      hn: "HN071",
      order_date: "2019-07-30",
      report_date: "2019-07-31",
      wbc: "6.4",
      hb: "13.4",
      cr: "1.2",
      chol: "200",
      fbs: "94",
      tg: "150",
      sgtp: "32",
    },
    {
      nap_no: "NAP072",
      lab_request_id: "LR072",
      status: "Completed",
      hn: "HN072",
      order_date: "2019-06-25",
      report_date: "2019-06-26",
      wbc: "6.7",
      hb: "13.7",
      cr: "1.1",
      chol: "195",
      fbs: "93",
      tg: "145",
      sgtp: "30",
    },
    {
      nap_no: "NAP073",
      lab_request_id: "LR073",
      status: "Pending",
      hn: "HN073",
      order_date: "2019-05-12",
      report_date: "2019-05-13",
      wbc: "6.9",
      hb: "13.9",
      cr: "1.0",
      chol: "185",
      fbs: "91",
      tg: "140",
      sgtp: "31",
    },
    {
      nap_no: "NAP074",
      lab_request_id: "LR074",
      status: "Completed",
      hn: "HN074",
      order_date: "2019-04-05",
      report_date: "2019-04-06",
      wbc: "6.3",
      hb: "13.3",
      cr: "1.2",
      chol: "210",
      fbs: "99",
      tg: "160",
      sgtp: "34",
    },
    {
      nap_no: "NAP075",
      lab_request_id: "LR075",
      status: "Cancelled",
      hn: "HN075",
      order_date: "2019-03-15",
      report_date: "",
      wbc: "",
      hb: "",
      cr: "",
      chol: "",
      fbs: "",
      tg: "",
      sgtp: "",
    },
    {
      nap_no: "NAP076",
      lab_request_id: "LR076",
      status: "Pending",
      hn: "HN076",
      order_date: "2019-02-25",
      report_date: "2019-02-26",
      wbc: "6.6",
      hb: "13.6",
      cr: "1.1",
      chol: "200",
      fbs: "97",
      tg: "155",
      sgtp: "32",
    },
    {
      nap_no: "NAP077",
      lab_request_id: "LR077",
      status: "Completed",
      hn: "HN077",
      order_date: "2019-01-10",
      report_date: "2019-01-11",
      wbc: "6.8",
      hb: "13.8",
      cr: "1.2",
      chol: "190",
      fbs: "94",
      tg: "150",
      sgtp: "30",
    },
    {
      nap_no: "NAP078",
      lab_request_id: "LR078",
      status: "Pending",
      hn: "HN078",
      order_date: "2018-12-01",
      report_date: "2018-12-02",
      wbc: "6.4",
      hb: "13.4",
      cr: "1.0",
      chol: "180",
      fbs: "90",
      tg: "145",
      sgtp: "29",
    },
    {
      nap_no: "NAP079",
      lab_request_id: "LR079",
      status: "Cancelled",
      hn: "HN079",
      order_date: "2018-11-15",
      report_date: "",
      wbc: "",
      hb: "",
      cr: "",
      chol: "",
      fbs: "",
      tg: "",
      sgtp: "",
    },
  ]);
  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };
  //ค้นหาข้อมูล
  const searchLower = (search || "").toLowerCase();
  const filtered = field.filter(
    (item) =>
      (item.nap_no?.toLowerCase() || "").includes(searchLower) ||
      (item.lab_request_id?.toLowerCase() || "").includes(searchLower) ||
      (item.status?.toLowerCase() || "").includes(searchLower) ||
      (item.hn?.toLowerCase() || "").includes(searchLower) ||
      (item.wbc?.toLowerCase() || "").includes(searchLower) ||
      (item.hb?.toLowerCase() || "").includes(searchLower) ||
      (item.cr?.toLowerCase() || "").includes(searchLower) ||
      (item.chol?.toLowerCase() || "").includes(searchLower) ||
      (item.fbs?.toLowerCase() || "").includes(searchLower) ||
      (item.tg?.toLowerCase() || "").includes(searchLower) ||
      (item.sgtp?.toLowerCase() || "").includes(searchLower)
  );
  // นับจำนวนหน้า
  const pageCount = Math.ceil(filtered.length / perPage);
  const dataPaginate = filtered.slice(
    pageNumber * perPage,
    (pageNumber + 1) * perPage
  );
  if (pageNumber < 0 || pageNumber >= pageCount) {
  }
  // กดไปหน้าถัดไป กดกลับไปหน้าเดิม
  const handlePrevious = () => {
    if (pageNumber > 0) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleNext = () => {
    if (pageNumber < pageCount - 1) {
      setPageNumber(pageNumber + 1);
    }
  };
  //กำหนดข้อมูลที่จะเเสดงในตาราง
  const handlePerPageChange = (e) => {
    setPerPage(Number(e.target.value)); // อัปเดต perPage เป็นค่าที่เลือก
    setPageNumber(0); // รีเซ็ตไปที่หน้าที่ 0 เพื่อป้องกันข้อผิดพลาด
  };
  //นับจำนวนข้อมูล ในตาราง ที่เเสดงอยู่
  const getPaginationInfo = () => {
    if (filtered.length === 0) {
      return "Showing 0 to 0 of 0 entries";
    }

    const start = pageNumber * perPage + 1;
    const end = Math.min((pageNumber + 1) * perPage, filtered.length);

    return `Showing ${start} to ${end} of ${filtered.length} entries`;
  };
  return (
    <div>
      <div className="p  sm:ml-[17.5rem]">
        <div className="">
          <div className="mx-auto">
            <ProfileMenu/>
          </div>
          <div className="mt-4 w-[96rem] h-full border mx-auto bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-[#7d8a99] text-2xl font-bold mt-2 mb-4">
              Blood Chemistry Requests
            </h1>
            <div className="text-[#707c8a] flex gap-4 justify-none items-center mb-4">
              <div className="">
                <label htmlFor="">จากวันที่</label>
                <br />
                <input
                  className="border p-2 rounded-lg w-[22rem]"
                  type="date"
                />
              </div>
              <div className="">
                <label htmlFor="">ถึงวันที่วันที่</label>
                <br />
                <input
                  className="border p-2 rounded-lg w-[22rem]"
                  type="date"
                />
              </div>
              <div className="">
                <br />
                <button className="text-center bg-[#ffbae9] text-[#d60092] p-3 rounded-lg w-[22rem] hover:scale-105 delay-100 hover:bg-[#ffd1f1]">
                  ค้นหา
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center border-t mb-6 mt-4">
              <div className="text-[#707c8a] flex gap-2 items-center mt-4">
                <p>Show</p>
                <select
                  className="border p-1 rounded-lg"
                  value={perPage}
                  onChange={handlePerPageChange}
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
                <p>entries</p>
              </div>
              <div className="text-[#707c8a] flex gap-2 items-center mt-4">
                <label htmlFor="search">Search</label>
                <input
                  id="search"
                  className="border p-1 pl-2 rounded-lg"
                  type="text"
                  placeholder="ค้นหา"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            <div className="mx-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-center text-[#7d8a99] text-sm border-b">
                    <th className="p-2 pb-4">
                      <span className="flex justify-between items-center">
                        NAP_NO.
                        <svg
                          className="w-4 h-4 ml-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m8 15 4 4 4-4m0-6-4-4-4 4"
                          />
                        </svg>
                      </span>
                    </th>
                    <th className="p-2 pb-4">
                      <span className="flex justify-between items-center">
                        LAB_REQUEST_ID
                        <svg
                          className="w-4 h-4 ml-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m8 15 4 4 4-4m0-6-4-4-4 4"
                          />
                        </svg>
                      </span>
                    </th>
                    <th className="p-2 pb-4">
                      <span className="flex justify-between items-center">
                        STATUS
                        <svg
                          className="w-4 h-4 ml-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m8 15 4 4 4-4m0-6-4-4-4 4"
                          />
                        </svg>
                      </span>
                    </th>
                    <th className="p-2 pb-4">
                      <span className="flex justify-between items-center">
                        HN
                        <svg
                          className="w-4 h-4 ml-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m8 15 4 4 4-4m0-6-4-4-4 4"
                          />
                        </svg>
                      </span>
                    </th>
                    <th className="p-2 pb-4">
                      <span className="flex justify-between items-center">
                        ORDER DATE
                        <svg
                          className="w-4 h-4 ml-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m8 15 4 4 4-4m0-6-4-4-4 4"
                          />
                        </svg>
                      </span>
                    </th>
                    <th className="p-2 pb-4">
                      <span className="flex justify-between items-center">
                        REPORT_DATE
                        <svg
                          className="w-4 h-4 ml-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m8 15 4 4 4-4m0-6-4-4-4 4"
                          />
                        </svg>
                      </span>
                    </th>
                    <th className="p-2 pb-4">
                      <span className="flex justify-between items-center">
                        WBC
                        <svg
                          className="w-4 h-4 ml-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m8 15 4 4 4-4m0-6-4-4-4 4"
                          />
                        </svg>
                      </span>
                    </th>
                    <th className="p-2 pb-4">
                      <span className="flex justify-between items-center">
                        HB
                        <svg
                          className="w-4 h-4 ml-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m8 15 4 4 4-4m0-6-4-4-4 4"
                          />
                        </svg>
                      </span>
                    </th>
                    <th className="p-2 pb-4">
                      <span className="flex justify-between items-center">
                        CR.
                        <svg
                          className="w-4 h-4 ml-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m8 15 4 4 4-4m0-6-4-4-4 4"
                          />
                        </svg>
                      </span>
                    </th>
                    <th className="p-2 pb-4">
                      <span className="flex justify-between items-center">
                        CHOL
                        <svg
                          className="w-4 h-4 ml-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m8 15 4 4 4-4m0-6-4-4-4 4"
                          />
                        </svg>
                      </span>
                    </th>
                    <th className="p-2 pb-4">
                      <span className="flex justify-between items-center">
                        FBS
                        <svg
                          className="w-4 h-4 ml-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m8 15 4 4 4-4m0-6-4-4-4 4"
                          />
                        </svg>
                      </span>
                    </th>
                    <th className="p-2 pb-4">
                      <span className="flex justify-between items-center">
                        TG
                        <svg
                          className="w-4 h-4 ml-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m8 15 4 4 4-4m0-6-4-4-4 4"
                          />
                        </svg>
                      </span>
                    </th>
                    <th className="p-2 pb-4">
                      <span className="flex justify-between items-center">
                        SGTP (ALT)
                        <svg
                          className="w-4 h-4 ml-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m8 15 4 4 4-4m0-6-4-4-4 4"
                          />
                        </svg>
                      </span>
                    </th>
                    <th className="p-2 pb-4">
                      <span className="flex justify-between items-center">
                        {" "}
                        ACTION
                        <svg
                          className="w-4 h-4 ml-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m8 15 4 4 4-4m0-6-4-4-4 4"
                          />
                        </svg>
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dataPaginate.length > 0 ? (
                    dataPaginate.map((data, index) => (
                      <tr key={index} className="text-[#7d8a99] border-b text-left">
                        <td className="p-4">{data.nap_no}</td>
                        <td className="p-4">{data.lab_request_id}</td>
                        <td className="p-4">{data.status}</td>
                        <td className="p-4">{data.hb}</td>
                        <td className="p-4">{data.order_date}</td>
                        <td className="p-4">{data.report_date}</td>
                        <td className="p-4">{data.wbc}</td>
                        <td className="p-4">{data.hb}</td>
                        <td className="p-4">{data.cr}</td>
                        <td className="p-4">{data.chol}</td>
                        <td className="p-4">{data.fbs}</td>
                        <td className="p-4">{data.tg}</td>
                        <td className="p-4">{data.sgtp}</td>
                        <td className="p-4">
                          <div className="flex gap-2">
                            <div className="bg-[#ffbae9] rounded-lg text-center text-[#d60092]  hover:bg-[#ffd9f3] p-2 text-sm">
                              <button className="">เพิ่มข้อมูล</button>
                            </div>
                            <div className="bg-[#ffbae9] rounded-lg text-center text-[#d60092]  hover:bg-[#ffd9f3] p-2 text-sm">
                              <button className="">ส่งผล</button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="text-[#7d8a99] text-left p-2">
                        ไม่มีข้อมูล
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-[#d60092]">{getPaginationInfo()}</p>

              <div className="flex gap-2">
                <button
                  className="p-2 bg-gray-100 text-gray-500 rounded-lg hover:scale-105 hover:bg-gray-200 shadow-xl"
                  onClick={handlePrevious}
                  disabled={pageNumber === 0} // ป้องกันการคลิกถ้าหน้าปัจจุบันคือหน้าแรก
                >
                  Previous
                </button>
                <button
                  className="p-2 bg-gray-100 text-gray-500 rounded-lg hover:scale-105 hover:bg-gray-200 shadow-xl"
                  onClick={handleNext}
                  disabled={pageNumber === pageCount - 1} // ป้องกันการคลิกถ้าหน้าปัจจุบันคือหน้าสุดท้าย
                >
                  Next
                </button>
              </div>
            </div>
          </div>
          <div className="w-[96rem] mx-auto p-4">
            <div className="flex justify-between">
              <div className="flex gap-1">
                <p className="text-gray-500">@Phrapokklao Hospital,</p>
                <a className="text-[#d60092] hover:text-[#20a68a]" href="">
                  ติดต่อสอบถาม
                </a>
              </div>
              <div className="flex gap-4">
                <a className="text-[#d60092] hover:text-[#20a68a]" href="">
                  คู่มือเเละเอกสาร
                </a>
                <a className="text-[#d60092] hover:text-[#20a68a]" href="">
                  เเจ้งปัญหา
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
