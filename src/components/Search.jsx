// Components
import { Form } from "react-router-dom";

// rrd imports
import FormInput from "./FormInput";

function Search() {
  return (
    <Form method="POST">
      <div className="mx-auto flex w-full max-w-96 gap-2">
        <FormInput type="search" placeholder="Search" name="search" />
        <button className="btn btn-primary btn-sm md:hidden">Search</button>
      </div>
    </Form>
  );
}

export default Search;
