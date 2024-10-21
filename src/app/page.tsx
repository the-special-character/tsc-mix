import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Main Page</h1>
      <div className="flex gap-8">
        <div>
          <Link href={"/learn"}>Learn </Link>
        </div>

        <div>
          <Link href={"/tech"}>Tech </Link>
        </div>
      </div>
    </>
  );
}
