import Link from "next/link";

const Home = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-4 h-screen w-full">
      <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
      <Link href="/blog" className="text-blue-500 hover:underline">
        Go to Blog
      </Link>
    </div>
  );
};

export default Home;
