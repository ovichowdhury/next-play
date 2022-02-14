import { useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../services/fetcher";

function usePosts(BASE_URL, shouldFetch) {
  const url = `${BASE_URL}/posts`;
  const { data, error } = useSWR(shouldFetch ? url : null, fetcher);
  return {
    posts: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default function Index({ BASE_URL }) {
  const [shouldFetchPosts, setShouldFetchPosts] = useState(false);
  const { posts, isLoading, isError } = usePosts(BASE_URL, shouldFetchPosts);
  // if (isLoading) return <div>Loading</div>;
  // if (isError) return <div>Error</div>;
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex">
          <button
            onClick={() => setShouldFetchPosts(true)}
            className="m-3 px-4 py-1 text-sm font-semibold text-purple-600 border border-purple-200 rounded-full hover:border-transparent hover:text-white hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          >
            Fetch
          </button>

          <button
            onClick={() => setShouldFetchPosts(false)}
            className="m-3 px-4 py-1 text-sm font-semibold text-purple-600 border border-purple-200 rounded-full hover:border-transparent hover:text-white hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          >
            Reset
          </button>
        </div>

        {posts &&
          posts.map((p) => {
            return (
              <div
                key={p.id}
                className="border-4 border-indigo-600 w-1/3 mb-3 text-center"
              >
                <h2 className="font-bold">{p.title}</h2>
                <h3>{p.body}</h3>
              </div>
            );
          })}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      BASE_URL: process.env.NEXT_PUBLIC_API_URL,
    },
  };
}
