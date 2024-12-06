import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ProfileMenu from "./profile-menu";

export default function ResultHivPcr() {
  const [field, setField] = useState([
    {
      lab_item: "Complete Blood Count",
      lab_request_id: "REQ20231126001",
      lab_type: "Blood Test",
      result_date: "2024-11-01",
      test_result: "Normal",
    },
    {
      lab_item: "Liver Function Test",
      lab_request_id: "REQ20231126002",
      lab_type: "Blood Test",
      result_date: "2024-11-02",
      test_result: "Abnormal",
    },
    {
      lab_item: "Chest X-Ray",
      lab_request_id: "REQ20231126003",
      lab_type: "X-Ray",
      result_date: "2024-11-03",
      test_result: "Normal",
    },
    {
      lab_item: "Kidney Function Test",
      lab_request_id: "REQ20231126004",
      lab_type: "Blood Test",
      result_date: "2024-11-04",
      test_result: "Normal",
    },
    {
      lab_item: "MRI Brain",
      lab_request_id: "REQ20231126005",
      lab_type: "MRI",
      result_date: "2024-11-05",
      test_result: "Critical",
    },
    {
      lab_item: "Urinalysis",
      lab_request_id: "REQ20231126006",
      lab_type: "Urine Test",
      result_date: "2024-11-06",
      test_result: "Normal",
    },
    {
      lab_item: "Thyroid Function Test",
      lab_request_id: "REQ20231126007",
      lab_type: "Blood Test",
      result_date: "2024-11-07",
      test_result: "Abnormal",
    },
    {
      lab_item: "Abdominal CT",
      lab_request_id: "REQ20231126008",
      lab_type: "CT Scan",
      result_date: "2024-11-08",
      test_result: "Normal",
    },
    {
      lab_item: "Chest CT",
      lab_request_id: "REQ20231126009",
      lab_type: "CT Scan",
      result_date: "2024-11-09",
      test_result: "Abnormal",
    },
    {
      lab_item: "Glucose Test",
      lab_request_id: "REQ20231126010",
      lab_type: "Blood Test",
      result_date: "2024-11-10",
      test_result: "Normal",
    },
    {
      lab_item: "HIV Test",
      lab_request_id: "REQ20231126011",
      lab_type: "Blood Test",
      result_date: "2024-11-11",
      test_result: "Negative",
    },
    {
      lab_item: "Cholesterol Test",
      lab_request_id: "REQ20231126012",
      lab_type: "Blood Test",
      result_date: "2024-11-12",
      test_result: "High",
    },
    {
      lab_item: "Bone Density Scan",
      lab_request_id: "REQ20231126013",
      lab_type: "X-Ray",
      result_date: "2024-11-13",
      test_result: "Low",
    },
    {
      lab_item: "Lung Function Test",
      lab_request_id: "REQ20231126014",
      lab_type: "Breath Test",
      result_date: "2024-11-14",
      test_result: "Normal",
    },
    {
      lab_item: "Lipid Profile",
      lab_request_id: "REQ20231126015",
      lab_type: "Blood Test",
      result_date: "2024-11-15",
      test_result: "Normal",
    },
    {
      lab_item: "Pregnancy Test",
      lab_request_id: "REQ20231126016",
      lab_type: "Urine Test",
      result_date: "2024-11-16",
      test_result: "Positive",
    },
    {
      lab_item: "Pap Smear",
      lab_request_id: "REQ20231126017",
      lab_type: "Microscopy",
      result_date: "2024-11-17",
      test_result: "Normal",
    },
    {
      lab_item: "COVID-19 PCR",
      lab_request_id: "REQ20231126018",
      lab_type: "Swab Test",
      result_date: "2024-11-18",
      test_result: "Negative",
    },
    {
      lab_item: "Vitamin D Test",
      lab_request_id: "REQ20231126019",
      lab_type: "Blood Test",
      result_date: "2024-11-19",
      test_result: "Deficient",
    },
    {
      lab_item: "Liver Ultrasound",
      lab_request_id: "REQ20231126020",
      lab_type: "Ultrasound",
      result_date: "2024-11-20",
      test_result: "Normal",
    },
    {
      lab_item: "Blood Gas Analysis",
      lab_request_id: "REQ20231126021",
      lab_type: "Blood Test",
      result_date: "2024-11-21",
      test_result: "Normal",
    },
    {
      lab_item: "Prostate-Specific Antigen",
      lab_request_id: "REQ20231126022",
      lab_type: "Blood Test",
      result_date: "2024-11-22",
      test_result: "Elevated",
    },
    {
      lab_item: "ECG",
      lab_request_id: "REQ20231126023",
      lab_type: "Cardiology Test",
      result_date: "2024-11-23",
      test_result: "Normal",
    },
    {
      lab_item: "Malaria Test",
      lab_request_id: "REQ20231126024",
      lab_type: "Blood Test",
      result_date: "2024-11-24",
      test_result: "Negative",
    },
    {
      lab_item: "Allergy Panel",
      lab_request_id: "REQ20231126025",
      lab_type: "Blood Test",
      result_date: "2024-11-25",
      test_result: "Positive",
    },
    {
      lab_item: "Fecal Occult Blood Test",
      lab_request_id: "REQ20231126026",
      lab_type: "Stool Test",
      result_date: "2024-11-26",
      test_result: "Normal",
    },
    {
      lab_item: "Hemoglobin Test",
      lab_request_id: "REQ20231126027",
      lab_type: "Blood Test",
      result_date: "2024-11-27",
      test_result: "Low",
    },
    {
      lab_item: "Rheumatoid Factor",
      lab_request_id: "REQ20231126028",
      lab_type: "Blood Test",
      result_date: "2024-11-28",
      test_result: "Positive",
    },
    {
      lab_item: "Creatinine Test",
      lab_request_id: "REQ20231126029",
      lab_type: "Blood Test",
      result_date: "2024-11-29",
      test_result: "Normal",
    },
    {
      lab_item: "Calcium Test",
      lab_request_id: "REQ20231126030",
      lab_type: "Blood Test",
      result_date: "2024-11-30",
      test_result: "Normal",
    },
  ]);
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [labType, setLabType] = useState(""); // เก็บค่าของ labType ที่เลือก
  const [filteredData, setFilteredData] = useState([]);

  //ค้นหาข้อมูล
  const handleFilter = () => {
    const searchLower = (search || "").toLowerCase();
    const filteredData = field.filter((item) => {
      const matchesSearch =
        (item.lab_item?.toLowerCase() || "").includes(searchLower) ||
        (item.lab_request_id?.toLowerCase() || "").includes(searchLower) ||
        (item.lab_type?.toLowerCase() || "").includes(searchLower) ||
        (item.result_date?.toLowerCase() || "").includes(searchLower) ||
        (item.test_result?.toLowerCase() || "").includes(searchLower);

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
              HIV/PCR Result - ดูผล LAB จาก NAPP
            </h1>
            <div className="text-[#707c8a] flex gap-4 justify-between items-center mb-4">
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
                  <tr className=" text-[#7d8a99] text-sm border-b text-center">
                    <th className="p-2 pb-4">LEB_ITEM</th>
                    <th className="p-2 pb-4">LAB_REQUEST_ID</th>
                    <th className="p-2 pb-4">LAB_TYPE</th>
                    <th className="p-2 pb-4">RESULT_DATE</th>
                    <th className="p-2 pb-4">TEST_RESULT</th>
                  </tr>
                </thead>
                <tbody>
                  {dataPaginate.length > 0 ? (
                    dataPaginate.map((data, index) => (
                      <tr
                        key={index}
                        className="text-[#7d8a99] border-b text-center"
                      >
                        <td className="p-4">{data.lab_item}</td>
                        <td className="p-4">{data.lab_request_id}</td>
                        <td className="p-4">{data.lab_type}</td>
                        <td className="p-4">{data.result_date}</td>
                        <td className="p-4">{data.test_result}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td></td>
                      <td></td>
                      <td className="text-[#7d8a99] text-left p-2">
                        ไม่มีข้อมูล
                      </td>
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
