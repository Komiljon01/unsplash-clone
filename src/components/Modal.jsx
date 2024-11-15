// React
import { useEffect } from "react";

// rrd imports
import { Form, useActionData } from "react-router-dom";

// Firebase
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

// Components
import { FormInput } from ".";

// Toast
import { toast } from "sonner";

function Modal({ id }) {
  const data = useActionData();

  useEffect(() => {
    if (data?.emailForReset) {
      sendPasswordResetEmail(auth, data.emailForReset)
        .then(() => {
          document.getElementById(id).close();
          toast.success("Check your inbox for the verification email!");
        })
        .catch((error) => {
          const errorMessage = error.message;
          toast.error(errorMessage);
        });
    }
  }, [data]);

  return (
    <dialog id={id} className="modal px-4">
      <div className="modal-box">
        <h3 className="mb-4 text-lg font-bold">Reset Password</h3>
        <Form method="POST">
          <FormInput type="email" name="email_for_reset" placeholder="Email" />
          <div className="modal-action justify-between">
            <button
              type="button"
              className="btn btn-secondary btn-sm md:btn-md"
              onClick={() => document.getElementById(id).close()}
            >
              Close
            </button>
            <button className="btn btn-primary btn-sm md:btn-md">Send</button>
          </div>
        </Form>
      </div>
    </dialog>
  );
}

export default Modal;
