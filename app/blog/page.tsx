import PostSearch from "@/components/PostSearch";
import Posts from "@/components/Posts";
import { Metadata } from "next";

// async function getData() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
//     next: {
//       revalidate: 60,
//     }
//   });

//   if (!res.ok) throw new Error('Unable to fetch posts');

//   return res.json();
// }

export const metadata: Metadata = {
  title: "Blog | Create Next App",
};

export default function Blog() {
  return (
    <>
      <h1>Blog page</h1>
      <PostSearch />
      <Posts />
    </>
  );
}
