import { ModeToggle } from "@/components/ui/mode-toggle";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <div className="bg-yellow-500 p-2 rounded-md ">
      <ul className="flex space-x-4 font-bold ">
        <li>
          <Link className="" to={"/user"}>
            User
          </Link>
        </li>
        <li>
          <Link className="" to={"/task"}>
            Task
          </Link>
        </li>

        <div>
          <ModeToggle></ModeToggle>
        </div>
      </ul>
    </div>
  );
}
