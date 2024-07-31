import Link from "next/link";

const Header = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl">DBMS</h1>
        <Link href="/">
          <h1 className="text-white text-xl">School Management System</h1>
        </Link>

        <div className="flex space-x-4">
          <Link href="/users">
            <span className="text-white">Users</span>
          </Link>
          <Link href="/local-governments">
            <span className="text-white">Local Governments</span>
          </Link>
          <Link href="/schools">
            <span className="text-white">Schools</span>
          </Link>
          <Link href="/students">
            <span className="text-white">Students</span>
          </Link>
          <Link href="/teachers">
            <span className="text-white">Teachers</span>
          </Link>
          <Link href="/results">
            <span className="text-white">Results</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
