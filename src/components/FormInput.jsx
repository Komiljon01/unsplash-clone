// React icons
import { FaSearch } from "react-icons/fa";

function FormInput({ type, placeholder, name }) {
  return (
    <label className="input input-sm input-bordered flex w-full items-center gap-2 md:input-md">
      <input
        type={type}
        className="grow"
        placeholder={placeholder}
        name={name}
      />
      <FaSearch className="h-4 w-4 opacity-70" />
    </label>
  );
}

export default FormInput;
