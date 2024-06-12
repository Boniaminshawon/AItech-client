import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";
import swal from "sweetalert";
import Swal from "sweetalert2";


const CheckOutForm = ({ employeeData }) => {
    const { salary, name, email } = employeeData;
    const axiosSecure = useAxiosSecure();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();

    useEffect(() => {
        if (salary > 0) {
            axiosSecure.post('/create-payment-intent', { salary: salary })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })

        }
    }, [axiosSecure, salary])



    const handleSubmit = async (e) => {
        e.preventDefault();

        const month = e.target.month.value;
        const year = e.target.year.value;
        const monthlySalary = e.target.salary.value;
        const monthlyYear = month.slice(0, 4) + " '" + year.slice(2, 4);




        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if (error) {
            console.log('Payment Error', error);
            setError(error.message);
        }
        else {
            toast.success('success')
            console.log('Payment method success', paymentMethod);
            setError('');
        }
        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('confirm Error', confirmError);
        }
        else {
            console.log('payment intent', paymentIntent);


            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                // setTransactionId(paymentIntent.id);

                try {
                    const paymentInfo = { name, email, monthlySalary, month, year, monthlyYear, transactionId: paymentIntent.id, HrEmail: user?.email };
                    const { data } = await axiosSecure.post('/payment', paymentInfo);
                    console.log(data)
                    if (data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Success",
                            text: "Your successfully payment your employee",

                        });
                        setTransactionId('Payment done successfully')

                    }

                }
                catch (error) {
                    console.log(error)
                    setError('You have already payment for this month')
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        footer: '<a href="#">Why do I have this issue?</a>'
                    });
                    console.log('already axist')
                }


            }
        }



    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="font-bold text-lg flex flex-col md:flex-row gap-3 mb-5">

                    <label className="flex-1">
                        <span>Salary:</span> <br />
                        <input required name="salary" defaultValue={salary} type="text" placeholder="Type here" className="input input-bordered w-[120px] " />
                    </label>

                    <label className="flex-1">
                        <span>Month:</span><br />
                        <select required className="select select-bordered" id="month" name="month">
                            <option value="default" disabled>Select a month</option>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>
                    </label>
                    <label className="flex-1">
                        <span>Year:</span><br />
                        <input required className="input input-bordered w-[120px]" type="number" id="year" defaultValue={2024} name="year" min="2020" max="2030" step="1" placeholder="YYYY" />
                    </label>

                </div>

                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn  rounded bg-[#17b932aa] text-white  my-5" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                {error&& <p className="text-red-600">{error}</p>
                }
                {transactionId&& <p className="text-green-500">{transactionId}</p>}
               
               
            </form>
        </div>
    );
};

export default CheckOutForm;