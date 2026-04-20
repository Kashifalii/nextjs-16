import Link from "next/link";
import React from "react";

const F1 = () => {
  return (
    <div>
      <h1>F1 Page</h1>
      <Link href="/f1/f2">
        <h1>Go to F2</h1>
      </Link>
    </div>
  );
};

export default F1;
