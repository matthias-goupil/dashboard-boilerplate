import { getUsers } from "@/db/services/users";

export default async function Home() {
  const users = await getUsers();

  return (
    <div>
      <h1>Liste de utilisateurs</h1>
      {users.length > 0 ? (
        <ul>
          {users.map(({ id, name, age, email }) => (
            <li key={id}>
              {" "}
              <span className="font-bold">
                {name} - {age} ans
              </span>{" "}
              {email}
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun utilisateurs</p>
      )}
    </div>
  );
}
