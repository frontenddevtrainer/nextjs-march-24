"use client";
import { useEffect, useState } from "react";
import { IUser } from "../interfaces/user";

const apiBaseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

console.log(apiBaseURL);

// CSR
const UsersPage = () => {
  const [users, setUsers] = useState<IUser[] | null>();

  useEffect(() => {
    async function getData() {
      const response = await fetch(`${apiBaseURL}/api/users`, {
        next: { tags: ["users"] },
      });
      const data = (await response.json()) as unknown as IUser[];
      setUsers(data);
    }
    getData();
  });

  return (
    <div className="p-10">
      {users &&
        users?.length > 0 &&
        users.map((user) => {
          return (
            <div className="p-4">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>
          );
        })}
    </div>
  );
};

export default UsersPage;
