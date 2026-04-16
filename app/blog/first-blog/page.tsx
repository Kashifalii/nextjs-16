import Link from "next/link";

const FirstBlog = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen w-full">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
        blanditiis vel veritatis nisi officiis maiores maxime atque assumenda
        natus distinctio ab temporibus culpa explicabo voluptatibus, ullam
        ipsam, deserunt harum in inventore aliquid, repudiandae nulla rerum rem
        ut. Sit rem dolor numquam nesciunt voluptatum nulla assumenda atque
        vitae quos doloremque minima quasi asperiores porro magnam iure fugit
        ipsum, fuga nihil! Recusandae corporis maxime at aliquid eligendi
        officia ad necessitatibus esse deserunt ullam facere rem mollitia
        aspernatur quae ipsa omnis animi, provident sed labore voluptas alias ex
        quis eius. Quae eligendi perspiciatis modi praesentium amet saepe,
        necessitatibus, pariatur asperiores corrupti vero molestias.
      </p>

      <Link href="/blog" className="text-blue-500 hover:underline">
        Back to Blog
      </Link>
    </div>
  );
};

export default FirstBlog;
