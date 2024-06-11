import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";




const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const PayModal = ({ employeeData }) => {


    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">


                    <Elements stripe={stripePromise}>
                        <CheckOutForm employeeData={employeeData}></CheckOutForm>
                    </Elements>


                  
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn  rounded bg-[#f01c1ce9] text-white">Close</button>

                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default PayModal;