import Link from "next/link";

const Blog = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen w-full">
      <h1>nested Route</h1>
      <h1 className="text-2xl font-bold">Welcome to the Blog Page</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold text-black">Blog 1</h2>
        <p className="text-gray-600">This is the content of the blog post.</p>
        <Link href="/blog/first-blog" className="text-blue-500 hover:underline">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Blog;
