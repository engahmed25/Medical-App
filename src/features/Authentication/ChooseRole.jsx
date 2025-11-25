import { Link } from "react-router-dom";

function ChooseRole() {
  return (
    <div>
      <p>
        Already have an account?
        <Link href="/login" className="text-blue-500 underline">
          {" "}
          Login here
        </Link>
      </p>
    </div>
  );
}

export default ChooseRole;
