import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import ProfileMenu from "./profile-menu";

export default function ResultBc() {
  const [field, setField] = useState([
    {
      "id": "1",
      "lab_request_id": "REQ20231126001",
      "result_date": "2024-11-01",
      "lab_item": "Complete Blood Count",
      "test_result": "Normal",
      "cr": "0.8",
      "chol": "200",
      "fbs": "90",
      "tg": "150",
      "sgtp": "25"
    },
    {
      "id": "2",
      "lab_request_id": "REQ20231126002",
      "result_date": "2024-11-02",
      "lab_item": "Lipid Profile",
      "test_result": "Abnormal",
      "cr": "1.1",
      "chol": "240",
      "fbs": "110",
      "tg": "180",
      "sgtp": "30"
    },
    {
      "id": "3",
      "lab_request_id": "REQ20231126003",
      "result_date": "2024-11-03",
      "lab_item": "Liver Function Test",
      "test_result": "Normal",
      "cr": "0.9",
      "chol": "180",
      "fbs": "85",
      "tg": "140",
      "sgtp": "20"
    },
    {
      "id": "4",
      "lab_request_id": "REQ20231126004",
      "result_date": "2024-11-04",
      "lab_item": "Kidney Function Test",
      "test_result": "Normal",
      "cr": "1.0",
      "chol": "190",
      "fbs": "95",
      "tg": "160",
      "sgtp": "28"
    },
    {
      "id": "5",
      "lab_request_id": "REQ20231126005",
      "result_date": "2024-11-05",
      "lab_item": "Glucose Test",
      "test_result": "Normal",
      "cr": "0.7",
      "chol": "170",
      "fbs": "80",
      "tg": "120",
      "sgtp": "22"
    },
    {
      "id": "6",
      "lab_request_id": "REQ20231126006",
      "result_date": "2024-11-06",
      "lab_item": "Cholesterol Test",
      "test_result": "High",
      "cr": "1.2",
      "chol": "250",
      "fbs": "105",
      "tg": "200",
      "sgtp": "35"
    },
    {
      "id": "7",
      "lab_request_id": "REQ20231126007",
      "result_date": "2024-11-07",
      "lab_item": "Thyroid Test",
      "test_result": "Normal",
      "cr": "0.9",
      "chol": "185",
      "fbs": "90",
      "tg": "130",
      "sgtp": "23"
    },
    {
      "id": "8",
      "lab_request_id": "REQ20231126008",
      "result_date": "2024-11-08",
      "lab_item": "Urine Test",
      "test_result": "Normal",
      "cr": "1.0",
      "chol": "195",
      "fbs": "100",
      "tg": "170",
      "sgtp": "29"
    },
    {
      "id": "9",
      "lab_request_id": "REQ20231126009",
      "result_date": "2024-11-09",
      "lab_item": "Lung Function Test",
      "test_result": "Normal",
      "cr": "0.8",
      "chol": "175",
      "fbs": "88",
      "tg": "125",
      "sgtp": "21"
    },
    {
      "id": "10",
      "lab_request_id": "REQ20231126010",
      "result_date": "2024-11-10",
      "lab_item": "ECG",
      "test_result": "Normal",
      "cr": "0.7",
      "chol": "165",
      "fbs": "82",
      "tg": "110",
      "sgtp": "18"
    },
    {
      "id": "11",
      "lab_request_id": "REQ20231126011",
      "result_date": "2024-11-11",
      "lab_item": "Vitamin D Test",
      "test_result": "Deficient",
      "cr": "0.9",
      "chol": "210",
      "fbs": "92",
      "tg": "145",
      "sgtp": "27"
    },
    {
      "id": "12",
      "lab_request_id": "REQ20231126012",
      "result_date": "2024-11-12",
      "lab_item": "Allergy Panel",
      "test_result": "Positive",
      "cr": "1.3",
      "chol": "220",
      "fbs": "98",
      "tg": "150",
      "sgtp": "26"
    },
    {
      "id": "13",
      "lab_request_id": "REQ20231126013",
      "result_date": "2024-11-13",
      "lab_item": "Hepatitis Test",
      "test_result": "Negative",
      "cr": "0.8",
      "chol": "190",
      "fbs": "90",
      "tg": "135",
      "sgtp": "20"
    },
    {
      "id": "14",
      "lab_request_id": "REQ20231126014",
      "result_date": "2024-11-14",
      "lab_item": "Prostate Test",
      "test_result": "Normal",
      "cr": "0.9",
      "chol": "180",
      "fbs": "85",
      "tg": "120",
      "sgtp": "22"
    },
    {
      "id": "15",
      "lab_request_id": "REQ20231126015",
      "result_date": "2024-11-15",
      "lab_item": "Liver Ultrasound",
      "test_result": "Normal",
      "cr": "1.0",
      "chol": "200",
      "fbs": "95",
      "tg": "160",
      "sgtp": "30"
    },
    {
      "id": "16",
      "lab_request_id": "REQ20231126016",
      "result_date": "2024-11-16",
      "lab_item": "Pregnancy Test",
      "test_result": "Positive",
      "cr": "0.8",
      "chol": "170",
      "fbs": "80",
      "tg": "115",
      "sgtp": "21"
    },
    {
      "id": "17",
      "lab_request_id": "REQ20231126017",
      "result_date": "2024-11-17",
      "lab_item": "Pap Smear",
      "test_result": "Normal",
      "cr": "0.7",
      "chol": "175",
      "fbs": "85",
      "tg": "130",
      "sgtp": "24"
    },
    {
      "id": "18",
      "lab_request_id": "REQ20231126018",
      "result_date": "2024-11-18",
      "lab_item": "Blood Gas Test",
      "test_result": "Normal",
      "cr": "0.9",
      "chol": "190",
      "fbs": "90",
      "tg": "140",
      "sgtp": "25"
    },
    {
      "id": "19",
      "lab_request_id": "REQ20231126019",
      "result_date": "2024-11-19",
      "lab_item": "CT Scan Abdomen",
      "test_result": "Normal",
      "cr": "1.0",
      "chol": "200",
      "fbs": "100",
      "tg": "150",
      "sgtp": "28"
    },
    {
      "id": "20",
      "lab_request_id": "REQ20231126020",
      "result_date": "2024-11-20",
      "lab_item": "MRI Brain",
      "test_result": "Normal",
      "cr": "0.9",
      "chol": "180",
      "fbs": "85",
      "tg": "120",
      "sgtp": "20"
    }
    // Add more as needed up to 30
  ]
  );
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [perPage, setPerPage] = useState(10);
  //ค้นหาข้อมูล
  const searchLower = (search || "").toLowerCase();
  const filtered = field.filter(
    (item) =>
      (item.lab_request_id?.toLowerCase() || "").includes(searchLower) ||
      (item.result_date?.toLowerCase() || "").includes(searchLower) ||
      (item.lab_item?.toLowerCase() || "").includes(searchLower) ||
      (item.test_result?.toLowerCase() || "").includes(searchLower) ||
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
  // ปุ่มค้นหา ด้านบนสุด

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
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            <div className="mx-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-center text-[#7d8a99] text-sm border-b">
                    <th className="p-2 pb-4">LAB ID</th>
                    <th className="p-2 pb-4">LAB REQUEST ID</th>
                    <th className="p-2 pb-4">RESULT DATE</th>
                    <th className="p-2 pb-4">LAB ITEM</th>
                    <th className="p-2 pb-4">TEST RESULT</th>
                    <th className="p-2 pb-4">CR.</th>
                    <th className="p-2 pb-4">CHOL</th>
                    <th className="p-2 pb-4">FBS</th>
                    <th className="p-2 pb-4">TG</th>
                    <th className="p-2 pb-4">SGTP (ALT)</th>
                  </tr>
                </thead>
                <tbody>
                  {dataPaginate.length > 0 ? (
                    dataPaginate.map((data, index) => (
                      <tr key={index} className="text-[#7d8a99] border-b text-center">
                        <td className="p-4">{data.id}</td>
                        <td className="p-4">{data.lab_request_id}</td>
                        <td className="p-4">{data.result_date}</td>
                        <td className="p-4">{data.lab_item}</td>
                        <td className="p-4">{data.test_result}</td>
                        <td className="p-4">{data.cr}</td>
                        <td className="p-4">{data.chol}</td>
                        <td className="p-4">{data.fbs}</td>
                        <td className="p-4">{data.tg}</td>
                        <td className="p-4">{data.sgtp}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
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
