import React, { useEffect, useState } from 'react';
import API_ENDPOINTS from '../../services/axiosEndpoints';
import api from '../../services/axiosInstances';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link } from 'react-router-dom';

function ApplicationTable() {
  const [application, setApplication] = useState([]);
  const [filterApplicationStatus, setFilterApplicationStatus] = useState("All");
  const [filterPaymentStatus, setFilterPaymentStatus] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const deleteApplication = async (aid) => {
    try {
      await api.delete(API_ENDPOINTS.DELETE_APPLICATION + `/${aid}`);
      // Reload data after successful deletion
      loadUsers();
    } catch (error) {
      console.error("Error deleting application:", error);
    }
  };

  useEffect(() => {
    // Load data whenever currentPage, filterApplicationStatus, or filterPaymentStatus changes
    loadUsers();
  }, [currentPage, filterApplicationStatus, filterPaymentStatus]);

  const loadUsers = async () => {
    try {
      const response = await api.get(API_ENDPOINTS.ALL_APPLICATION);
      setApplication(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filteredApplications = application.filter((app) => {
    if (
      (filterApplicationStatus === "All" || app.admissionStatus === filterApplicationStatus) &&
      (filterPaymentStatus === "All" || app.paymentStatus === filterPaymentStatus)
    ) {
      return true;
    }
    return false;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredApplications.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="bodyyy">
      <div>
        <strong><label>Filter Application Status:</label></strong>
        <select
          value={filterApplicationStatus}
          onChange={(e) => setFilterApplicationStatus(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>
      <br />
      <div>
        <strong><label>Filter Payment Status:</label></strong>
        <select
          value={filterPaymentStatus}
          onChange={(e) => setFilterPaymentStatus(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Paid">Paid</option>
        </select>
      </div>
      <br />
      <div className="container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Father Name</th>
              <th scope="col">Mother Name</th>
              <th scope="col">DOB</th>
              <th scope="col">Application Status</th>
              <th scope="col">Payment Status</th>
              <th scope="col">Interview</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((app, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <h6>{app.name}</h6>
                </td>
                <td>
                  <h6>{app.fathername}</h6>
                </td>
                <td>
                  <h6>{app.mothername}</h6>
                </td>
                <td>
                  <h6>{app.dob}</h6>
                </td>
                <td>
                  <h6>{app.admissionStatus}</h6>
                </td>
                <td>
                  <h6>{app.paymentStatus}</h6>
                </td>
                <td>
                  <h6>{app.interviewSchedule}</h6>
                </td>
                <td>
                  <Link to={`/admin/viewapplication/${app.aid}`}>
                    <RemoveRedEyeOutlinedIcon
                      style={{
                        color: 'green',
                        marginRight: '10px'
                      }}
                    />
                  </Link>
                  <Link to={`/admin/updateapplication/${app.aid}`}>
                  <ModeEditOutlineOutlinedIcon
                    style={{
                      color: 'black',
                      marginRight: '10px'
                    }}
                  />
                  </Link>
                  <Link onClick={() => deleteApplication(app.aid)}>
                    <DeleteOutlineOutlinedIcon
                      style={{
                        color: 'red'
                      }}
                    />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <ul className="pagination">
          {Array(Math.ceil(filteredApplications.length / itemsPerPage))
            .fill()
            .map((_, index) => (
              <li key={index} className={`page-item ${index + 1 === currentPage ? "active" : ""}`}>
                <button onClick={() => handlePageChange(index + 1)} className="page-link">
                  {index + 1}
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default ApplicationTable;
