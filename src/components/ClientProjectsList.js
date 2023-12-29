import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProjects } from "../services/statemindService";

const ClientProjectsList = () => {
  const { client } = useParams();
  const [clientProjects, setClientProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProjects();
      const filteredProjects = data.filter(
        (project) => project.client === client
      );
      setClientProjects(filteredProjects[0].audits);
    };

    fetchData();
  }, [client]);

  return (
    <div className="p-4">
      <h1 className="pb-3 text-2xl">{client}'s Projects</h1>
      <ul className="bg-gray-200 p-4 rounded-lg w-60">
        {clientProjects.map((project) => (
          <li
            key={project.details.loc}
            className="transition-all hover:bg-gray-300 hover:text-blue-600 p-2 rounded-md"
          >
            <Link to={`/${client}/project/${project.audit_name}`}>
              {project.audit_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientProjectsList;
