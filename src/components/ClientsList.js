import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProjects } from "../services/statemindService";

const ClientsList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProjects();
      setProjects(data);
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl pb-3">Clients List</h1>
      <ul className="bg-gray-200 p-4 rounded-lg w-60">
        {projects.map((project) => (
          <li
            key={project.tvl}
            className="transition-all hover:bg-gray-300 hover:text-blue-600 p-2 rounded-md"
          >
            <Link to={`/${project.client}`}>{project.client}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsList;
