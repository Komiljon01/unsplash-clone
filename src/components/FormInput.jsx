// React icons
import { FaKey, FaSearch, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function FormInput({ type, placeholder, name }) {
  return (
    <label className="input input-sm input-bordered flex w-full items-center gap-2 md:input-md">
      <input
        type={type}
        className="grow"
        placeholder={placeholder}
        name={name}
      />
      {placeholder === "Search" && <FaSearch className="h-4 w-4 opacity-70" />}
      {placeholder === "Full name" && <FaUser className="h-4 w-4 opacity-70" />}
      {placeholder === "Email" && <MdEmail className="h-4 w-4 opacity-70" />}
      {placeholder === "Password" && <FaKey className="h-4 w-4 opacity-70" />}
      {placeholder === "Confirm password" && (
        <FaKey className="h-4 w-4 opacity-70" />
      )}
    </label>
  );
}

export default FormInput;
