import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ProfileMenu from "./profile-menu";

export default function HIV() {
  const [field, setField] = useState([
    {
      lab_type: "Blood Test",
      hn: "2JKR8M4L5Z",
      lab_request_id: "REQ20231125001",
      request_date: "2023-11-20 08:45:10",
      lab_status: "Pending",
      report_data: "QWERTY12345",
      lab_request: "Routine Check",
      lab_result: "Normal",
    },
    {
      lab_type: "X-Ray",
      hn: "8YT2GH9K1V",
      lab_request_id: "REQ20231125002",
      request_date: "2023-10-12 10:00:00",
      lab_status: "Completed",
      report_data: "RTYUIO09876",
      lab_request: "Follow-up",
      lab_result: "Abnormal",
    },
    {
      lab_type: "CT Scan",
      hn: "5WER4JK9XD",
      lab_request_id: "REQ20231125003",
      request_date: "2023-09-28 15:30:00",
      lab_status: "In Progress",
      report_data: "LKJHGF54321",
      lab_request: "Specific Test",
      lab_result: "Critical",
    },
    {
      lab_type: "MRI",
      hn: "7ZXCB5NMK8",
      lab_request_id: "REQ20231125004",
      request_date: "2023-08-18 14:45:30",
      lab_status: "Cancelled",
      report_data: "ASDFGH56789",
      lab_request: "Full Panel",
      lab_result: "Borderline",
    },
    {
      lab_type: "Urine Test",
      hn: "4TYUI8OP2L",
      lab_request_id: "REQ20231125005",
      request_date: "2023-11-05 11:20:50",
      lab_status: "Pending",
      report_data: "POIUYT43210",
      lab_request: "Routine Check",
      lab_result: "Normal",
    },
    {
      lab_type: "Blood Test",
      hn: "6NMKO4PL1J",
      lab_request_id: "REQ20231125006",
      request_date: "2023-07-14 09:15:00",
      lab_status: "Completed",
      report_data: "ZXCVBN56789",
      lab_request: "Follow-up",
      lab_result: "Critical",
    },
    {
      lab_type: "X-Ray",
      hn: "3JKLO9ERT5",
      lab_request_id: "REQ20231125007",
      request_date: "2023-11-01 13:40:25",
      lab_status: "Pending",
      report_data: "QAZXSW12345",
      lab_request: "Specific Test",
      lab_result: "Abnormal",
    },
    {
      lab_type: "CT Scan",
      hn: "1GHJK8TY4Z",
      lab_request_id: "REQ20231125008",
      request_date: "2023-10-22 17:30:15",
      lab_status: "Cancelled",
      report_data: "MNBVCX56789",
      lab_request: "Routine Check",
      lab_result: "Normal",
    },
    {
      lab_type: "MRI",
      hn: "9RTYU2OPLK",
      lab_request_id: "REQ20231125009",
      request_date: "2023-06-11 20:25:10",
      lab_status: "In Progress",
      report_data: "QWERTY87654",
      lab_request: "Specific Test",
      lab_result: "Borderline",
    },
    {
      lab_type: "Urine Test",
      hn: "0ZXCV6MNB7",
      lab_request_id: "REQ20231125010",
      request_date: "2023-05-19 18:40:00",
      lab_status: "Completed",
      report_data: "ASDFGH76543",
      lab_request: "Full Panel",
      lab_result: "Critical",
    },
    {
      lab_type: "Blood Test",
      hn: "2JKRI8L5TY",
      lab_request_id: "REQ20231125011",
      request_date: "2023-04-15 14:00:00",
      lab_status: "Pending",
      report_data: "ZXCVBN09876",
      lab_request: "Follow-up",
      lab_result: "Normal",
    },
    {
      lab_type: "X-Ray",
      hn: "7MNB4ZXCB9",
      lab_request_id: "REQ20231125012",
      request_date: "2023-03-30 10:10:30",
      lab_status: "Completed",
      report_data: "POIUYT67890",
      lab_request: "Specific Test",
      lab_result: "Critical",
    },
    {
      lab_type: "CT Scan",
      hn: "5LKJ7NMKO4",
      lab_request_id: "REQ20231125013",
      request_date: "2023-02-21 09:25:00",
      lab_status: "Cancelled",
      report_data: "QAZXSW54321",
      lab_request: "Full Panel",
      lab_result: "Abnormal",
    },
    {
      lab_type: "MRI",
      hn: "8GHJK2TYUI3",
      lab_request_id: "REQ20231125014",
      request_date: "2023-01-18 16:45:20",
      lab_status: "In Progress",
      report_data: "ZXCVBN98765",
      lab_request: "Routine Check",
      lab_result: "Normal",
    },
    {
      lab_type: "Urine Test",
      hn: "3OPLK9ERT5",
      lab_request_id: "REQ20231125015",
      request_date: "2023-11-12 11:20:50",
      lab_status: "Pending",
      report_data: "ASDFGH12345",
      lab_request: "Specific Test",
      lab_result: "Critical",
    },
    {
      lab_type: "Blood Test",
      hn: "6NMKO4PL7J",
      lab_request_id: "REQ20231125016",
      request_date: "2023-08-01 07:15:00",
      lab_status: "Completed",
      report_data: "MNBVCX67890",
      lab_request: "Full Panel",
      lab_result: "Borderline",
    },
    {
      lab_type: "X-Ray",
      hn: "3JTYU9OPLK5",
      lab_request_id: "REQ20231125017",
      request_date: "2023-10-25 13:40:25",
      lab_status: "Pending",
      report_data: "ZXCVBN54321",
      lab_request: "Follow-up",
      lab_result: "Normal",
    },
    {
      lab_type: "CT Scan",
      hn: "1GHJ8TYUI4Z",
      lab_request_id: "REQ20231125018",
      request_date: "2023-09-22 17:30:15",
      lab_status: "Cancelled",
      report_data: "POIUYT98765",
      lab_request: "Routine Check",
      lab_result: "Critical",
    },
    {
      lab_type: "MRI",
      hn: "9RTY2OPLK8",
      lab_request_id: "REQ20231125019",
      request_date: "2023-06-18 20:25:10",
      lab_status: "In Progress",
      report_data: "ASDFGH54321",
      lab_request: "Specific Test",
      lab_result: "Abnormal",
    },
    {
      lab_type: "Urine Test",
      hn: "0ZXCV6MNB2",
      lab_request_id: "REQ20231125020",
      request_date: "2023-05-19 18:40:00",
      lab_status: "Completed",
      report_data: "ZXCVBN12345",
      lab_request: "Full Panel",
      lab_result: "Normal",
    },
    {
      lab_type: "Blood Test",
      hn: "7JKS3LTY9X",
      lab_request_id: "REQ20231125021",
      request_date: "2023-10-12 09:15:00",
      lab_status: "In Progress",
      report_data: "BNMXCV12345",
      lab_request: "Routine Check",
      lab_result: "Normal",
    },
    {
      lab_type: "X-Ray",
      hn: "5OPLK1TYUI",
      lab_request_id: "REQ20231125022",
      request_date: "2023-09-28 14:45:30",
      lab_status: "Completed",
      report_data: "ZXCVTY54321",
      lab_request: "Follow-up",
      lab_result: "Critical",
    },
    {
      lab_type: "CT Scan",
      hn: "9ASDF3NMKO",
      lab_request_id: "REQ20231125023",
      request_date: "2023-07-15 10:30:00",
      lab_status: "Cancelled",
      report_data: "MNBVCW09876",
      lab_request: "Specific Test",
      lab_result: "Borderline",
    },
    {
      lab_type: "MRI",
      hn: "4LKJ8TYR7M",
      lab_request_id: "REQ20231125024",
      request_date: "2023-05-25 16:20:10",
      lab_status: "Pending",
      report_data: "QAZWSX98765",
      lab_request: "Full Panel",
      lab_result: "Abnormal",
    },
    {
      lab_type: "Urine Test",
      hn: "6TYUI9OPLK",
      lab_request_id: "REQ20231125025",
      request_date: "2023-04-11 09:50:00",
      lab_status: "In Progress",
      report_data: "ZXCVBN32145",
      lab_request: "Routine Check",
      lab_result: "Normal",
    },
    {
      lab_type: "Blood Test",
      hn: "2NMKO4ERTY",
      lab_request_id: "REQ20231125026",
      request_date: "2023-08-29 15:40:00",
      lab_status: "Completed",
      report_data: "POIUYT56789",
      lab_request: "Follow-up",
      lab_result: "Critical",
    },
    {
      lab_type: "X-Ray",
      hn: "3RTYU9LKOP",
      lab_request_id: "REQ20231125027",
      request_date: "2023-11-09 14:30:45",
      lab_status: "Pending",
      report_data: "ZXCVBN65432",
      lab_request: "Specific Test",
      lab_result: "Abnormal",
    },
    {
      lab_type: "CT Scan",
      hn: "8ASDF5NMKO",
      lab_request_id: "REQ20231125028",
      request_date: "2023-06-01 12:15:30",
      lab_status: "Cancelled",
      report_data: "MNBVCX67890",
      lab_request: "Full Panel",
      lab_result: "Normal",
    },
    {
      lab_type: "MRI",
      hn: "4OPLK3JTYU",
      lab_request_id: "REQ20231125029",
      request_date: "2023-03-10 18:25:10",
      lab_status: "In Progress",
      report_data: "ASDFGH12390",
      lab_request: "Specific Test",
      lab_result: "Critical",
    },
    {
      lab_type: "Urine Test",
      hn: "7MNB4ZXCVX",
      lab_request_id: "REQ20231125030",
      request_date: "2023-02-18 10:50:00",
      lab_status: "Completed",
      report_data: "POIUYT87654",
      lab_request: "Routine Check",
      lab_result: "Normal",
    },
    {
      lab_type: "Blood Test",
      hn: "9TYUI2JKLOM",
      lab_request_id: "REQ20231125031",
      request_date: "2023-01-25 20:30:15",
      lab_status: "Cancelled",
      report_data: "QWERTY67890",
      lab_request: "Follow-up",
      lab_result: "Abnormal",
    },
    {
      lab_type: "X-Ray",
      hn: "2ZXCV4LKJ8T",
      lab_request_id: "REQ20231125032",
      request_date: "2023-12-05 19:45:30",
      lab_status: "In Progress",
      report_data: "ZXCVTY54390",
      lab_request: "Full Panel",
      lab_result: "Critical",
    },
    {
      lab_type: "CT Scan",
      hn: "6RTYU1MNBKO",
      lab_request_id: "REQ20231125033",
      request_date: "2023-09-10 09:15:00",
      lab_status: "Pending",
      report_data: "ASDFTY12345",
      lab_request: "Routine Check",
      lab_result: "Normal",
    },
    {
      lab_type: "MRI",
      hn: "7JHGF2OPLKX",
      lab_request_id: "REQ20231125034",
      request_date: "2023-08-14 14:20:50",
      lab_status: "Completed",
      report_data: "QAZWSX98765",
      lab_request: "Specific Test",
      lab_result: "Borderline",
    },
    {
      lab_type: "Urine Test",
      hn: "3ZXCV9JTYUL",
      lab_request_id: "REQ20231125035",
      request_date: "2023-10-19 12:00:10",
      lab_status: "Cancelled",
      report_data: "MNBVCX54321",
      lab_request: "Full Panel",
      lab_result: "Critical",
    },
    {
      lab_type: "Blood Test",
      hn: "1LKJ7TYUIPZ",
      lab_request_id: "REQ20231125036",
      request_date: "2023-07-30 17:25:00",
      lab_status: "In Progress",
      report_data: "POIUYT98765",
      lab_request: "Specific Test",
      lab_result: "Abnormal",
    },
    {
      lab_type: "X-Ray",
      hn: "9OPLK4ZXCVT",
      lab_request_id: "REQ20231125037",
      request_date: "2023-06-18 11:50:15",
      lab_status: "Completed",
      report_data: "ZXCVBN54321",
      lab_request: "Routine Check",
      lab_result: "Normal",
    },
    {
      lab_type: "CT Scan",
      hn: "5TYUI8NMKOL",
      lab_request_id: "REQ20231125038",
      request_date: "2023-05-15 10:40:30",
      lab_status: "Cancelled",
      report_data: "MNBVCX12345",
      lab_request: "Follow-up",
      lab_result: "Critical",
    },
    {
      lab_type: "MRI",
      hn: "7ASDF2JTYUL",
      lab_request_id: "REQ20231125039",
      request_date: "2023-04-12 14:30:10",
      lab_status: "Pending",
      report_data: "QAZWSX67890",
      lab_request: "Full Panel",
      lab_result: "Normal",
    },
    {
      lab_type: "Urine Test",
      hn: "3OPLK5ZXCVT",
      lab_request_id: "REQ20231125040",
      request_date: "2023-03-25 18:20:00",
      lab_status: "In Progress",
      report_data: "ASDFTY87654",
      lab_request: "Specific Test",
      lab_result: "Critical",
    },
    {
      lab_type: "Blood Test",
      hn: "8PLKM1ZXTYR",
      lab_request_id: "REQ20231125041",
      request_date: "2023-11-15 08:30:45",
      lab_status: "Pending",
      report_data: "BNMXCV23145",
      lab_request: "Routine Check",
      lab_result: "Normal",
    },
    {
      lab_type: "X-Ray",
      hn: "2MNJH3QWERX",
      lab_request_id: "REQ20231125042",
      request_date: "2023-10-10 14:15:30",
      lab_status: "Completed",
      report_data: "ZXCVTY87903",
      lab_request: "Follow-up",
      lab_result: "Borderline",
    },
    {
      lab_type: "Urine Test",
      hn: "5TYUIM9OPLK",
      lab_request_id: "REQ20231125043",
      request_date: "2023-09-01 09:25:10",
      lab_status: "Cancelled",
      report_data: "MNBVCX56213",
      lab_request: "Full Panel",
      lab_result: "Critical",
    },
    {
      lab_type: "CT Scan",
      hn: "4ASDF9JLKMT",
      lab_request_id: "REQ20231125044",
      request_date: "2023-08-15 13:45:00",
      lab_status: "In Progress",
      report_data: "QAZWSX98723",
      lab_request: "Specific Test",
      lab_result: "Abnormal",
    },
    {
      lab_type: "MRI",
      hn: "1ZXCV5QWEOP",
      lab_request_id: "REQ20231125045",
      request_date: "2023-07-19 12:50:30",
      lab_status: "Completed",
      report_data: "POIUYT43210",
      lab_request: "Follow-up",
      lab_result: "Normal",
    },
    {
      lab_type: "Blood Test",
      hn: "3MNKO9ASDFT",
      lab_request_id: "REQ20231125046",
      request_date: "2023-06-29 10:15:00",
      lab_status: "Cancelled",
      report_data: "ZXCVBN09876",
      lab_request: "Routine Check",
      lab_result: "Critical",
    },
    {
      lab_type: "Urine Test",
      hn: "2PLKJ7ZXCVR",
      lab_request_id: "REQ20231125047",
      request_date: "2023-05-14 18:30:15",
      lab_status: "Pending",
      report_data: "MNBVCX54390",
      lab_request: "Specific Test",
      lab_result: "Abnormal",
    },
    {
      lab_type: "CT Scan",
      hn: "8QWER5TYUIP",
      lab_request_id: "REQ20231125048",
      request_date: "2023-04-25 17:10:45",
      lab_status: "In Progress",
      report_data: "QAZWSX12345",
      lab_request: "Full Panel",
      lab_result: "Borderline",
    },
    {
      lab_type: "X-Ray",
      hn: "9ASDF2MNBKO",
      lab_request_id: "REQ20231125049",
      request_date: "2023-03-10 15:40:00",
      lab_status: "Completed",
      report_data: "ZXCVTY65432",
      lab_request: "Routine Check",
      lab_result: "Normal",
    },
    {
      lab_type: "MRI",
      hn: "6POIU4JKLTR",
      lab_request_id: "REQ20231125050",
      request_date: "2023-02-20 09:30:10",
      lab_status: "Cancelled",
      report_data: "MNBVCX32145",
      lab_request: "Follow-up",
      lab_result: "Critical",
    },
  ]);
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [labType, setLabType] = useState(""); // เก็บค่าของ labType ที่เลือก
  const [filteredData, setFilteredData] = useState([]);
  //button dropdown
  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };
  //ค้นหาข้อมูล
  const handleFilter = () => {
    const searchLower = (search || "").toLowerCase();
    const filteredData = field.filter((item) => {
      const matchesSearch =
      (item.lab_type?.toLowerCase() || "").includes(searchLower) ||
      (item.hn?.toLowerCase() || "").includes(searchLower) ||
      (item.lab_request_id?.toLowerCase() || "").includes(searchLower) ||
      (item.request_date?.toLowerCase() || "").includes(searchLower) ||
      (item.lab_status?.toLowerCase() || "").includes(searchLower) ||
      (item.report_data?.toLowerCase() || "").includes(searchLower) ||
      (item.lab_request?.toLowerCase() || "").includes(searchLower) ||
      (item.lab_result?.toLowerCase() || "").includes(searchLower);

      const matchesLabType =
        !labType || item.lab_type?.toLowerCase() === labType.toLowerCase();

      return matchesSearch && matchesLabType; // ต้องตรงกับทั้งสองเงื่อนไข
    });

    setFilteredData(filteredData);
    setPageNumber(0); // รีเซ็ตหน้ากลับไปที่หน้าแรก
  };
  // นับจำนวนหน้า
  const pageCount = Math.ceil(filteredData.length / perPage);
  const dataPaginate = filteredData.slice(
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
    if (filteredData.length === 0) {
      return "Showing 0 to 0 of 0 entries";
    }

    const start = pageNumber * perPage + 1;
    const end = Math.min((pageNumber + 1) * perPage, filteredData.length);

    return `Showing ${start} to ${end} of ${filteredData.length} entries`;
  };

   // ตั้งค่าเริ่มต้นให้ filteredData เท่ากับ field
   useEffect(() => {
    setFilteredData(field);
  }, [field]);

  return (
    <div>
      <div className="p  sm:ml-[17.5rem]">
        <div className="">
          <div className="mx-auto">
           <ProfileMenu/>
          </div>
          <div className="mt-4 w-[96rem] h-full border mx-auto bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-[#7d8a99] text-2xl font-bold mt-2 mb-4">
              HIV/PCR Requests
            </h1>
            <div className="text-[#707c8a] flex gap-4 justify-between items-center mb-4">
              <div>
                <label htmlFor="">จากวันที่</label>
                <br />
                <input
                  className="border p-2 rounded-lg w-[22rem]"
                  type="date"
                />
              </div>
              <div>
                <label htmlFor="">ถึงวันที่</label>
                <br />
                <input
                  className="border p-2 rounded-lg w-[22rem]"
                  type="date"
                />
              </div>
              <div>
                <label htmlFor="">LAB TYPE</label>
                <br />
                <select
                  className="border p-2 rounded-lg w-[22rem]"
                  onChange={(e) => setLabType(e.target.value)} // อัปเดตค่า labType อย่างเดียว
                >
                  <option value="">-- Select Lab Type --</option>
                  <option value="Blood Test">Blood Test</option>
                  <option value="X-Ray">X-Ray</option>
                  <option value="CT Scan">CT Scan</option>
                  <option value="MRI">MRI</option>
                  <option value="Urine Test">Urine Test</option>
                </select>
              </div>
              <div>
                <br />
                <button
                  className="text-center bg-[#ffbae9] text-[#d60092] p-3 rounded-lg w-[22rem] hover:scale-105 delay-100 hover:bg-[#ffd1f1]"
                  onClick={handleFilter} // กรองข้อมูลเมื่อกดปุ่มน
                >
                  ค้นหา
                </button>
              </div>
            </div>
            <div className="flex justify-between border-t mb-6">
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
                  onChange={(e) => {
                    setSearch(e.target.value);
                    handleFilter(); // เรียกใช้ฟังก์ชันกรองเมื่อเปลี่ยนข้อความค้นหา
                  }}
                />
              </div>
            </div>
            <div className="mx-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-center text-[#7d8a99] text-sm border-b">
                    <th className="p-2 pb-4">
                      <span className="flex justify-between items-center">
                        LAB_TYPE{" "}
                        <svg
                          className="w-8 h-6 ml-1"
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
                        HN{" "}
                        <svg
                          className="w-8 h-6 ml-1"
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
                        LAB_REQUEST_ID{" "}
                        <svg
                          className="w-8 h-6 ml-1"
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
                        REQUEST_DATE{" "}
                        <svg
                          className="w-8 h-6 ml-1"
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
                        LAB_STATUS{" "}
                        <svg
                          className="w-8 h-6 ml-1"
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
                        REPORT_DATE{" "}
                        <svg
                          className="w-8 h-6 ml-1"
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
                        LAB_RESULT{" "}
                        <svg
                          className="w-8 h-6 ml-1"
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
                        ส่งผล
                        <svg
                          className="w-8 h-6 ml-1"
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
                      <tr
                        key={index}
                        className="text-[#7d8a99] border-b text-left"
                      >
                        <td className="p-4">{data.lab_type}</td>
                        <td className="p-4">{data.hn}</td>
                        <td className="p-4">{data.lab_request_id}</td>
                        <td className="p-4">{data.request_date}</td>
                        <td className="p-4">{data.lab_status}</td>
                        <td className="p-4">{data.report_data}</td>
                        <td className="p-4">{data.lab_request}</td>
                        <td className="p-4">{data.lab_result}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
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
