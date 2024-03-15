import { IUser } from "../interfaces/user";

const apiBaseURL = process.env.NEXT_PUBLIC_API_BASE_URL

console.log(apiBaseURL);

// RSC
const UsersPage = async () => {
  const response = await fetch(`${apiBaseURL}/api/users`, { next : { tags : ["users"] } });
  const data = await response.json() as unknown as IUser[];

  return (
    <div className="p-10">
      {data?.length > 0 &&
        data.map((user) => {
          return <div className="p-4">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>;
        })}
    </div>
  );
};

export default UsersPage;
