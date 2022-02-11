import sanityClient from "@sanity/client";

export default function Index({ users }) {
  console.log(users);
  return (
    <>
      <div className="border-2 border-indigo-600 text-center">
        <ul>
          {users.map((user) => {
            return <li>{user.name}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const client = sanityClient({
    projectId: "gpajeu4q",
    dataset: "production",
    apiVersion: "v2021-10-21", // use current UTC date - see "specifying API version"!
    token: "", // or leave blank for unauthenticated usage
    useCdn: true, // `false` if you want to ensure fresh data
  });

  const users = await client.fetch('*[_type == "user"]');

  return {
    props: {
      users: users,
    },
  };
}
