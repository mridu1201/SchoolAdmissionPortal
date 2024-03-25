import React, { useEffect, useState } from "react";
import api from "../../services/axiosInstances";
import API_ENDPOINTS from "../../services/axiosEndpoints";
import 'bootstrap/dist/css/bootstrap.css';

export default function UserTable() {
  const [users, setUsers] = useState([]);
  const [ascending, setAscending] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const usersPerPage = 7;

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const response = await api.get(API_ENDPOINTS.ALL_USERS);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const toggleSort = () => {
    setAscending(!ascending);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter the users based on the search query for both first and last names
  const filteredUsers = users.filter(user =>
    user.firstname.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.lastname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sorting logic (similar to your previous code)
  const sortedUsers = [...filteredUsers];
  if (ascending) {
    sortedUsers.sort((a, b) => a.age - b.age);
  } else {
    sortedUsers.sort((a, b) => b.age - a.age);
  }

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bodyyy">
      <br />
      <div className="container">
        <button onClick={toggleSort}>
          {ascending ? "Sort Ascending(age)" : "Sort Descending(age)"}
        </button>

        {/* Search input field for first name and last name */}
        <input
          type="text"
          placeholder="Search by First Name or Last Name"
          value={searchQuery}
          onChange={handleSearch}
        />

        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Age</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{index + 1 + indexOfFirstUser}</th>
                <td>
                  <h6>{user.firstname}</h6>
                </td>
                <td>
                  <h6>{user.lastname}</h6>
                </td>
                <td>
                  <h6>{user.email}</h6>
                </td>
                <td>
                  <h6>{user.age}</h6>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <ul className="pagination">
            {Array(Math.ceil(sortedUsers.length / usersPerPage))
              .fill()
              .map((_, index) => (
                <li key={index} className={`page-item ${index + 1 === currentPage ? "active" : ""}`}>
                  <button onClick={() => paginate(index + 1)} className="page-link">
                    {index + 1}
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
