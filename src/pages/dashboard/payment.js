import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';

import CheckoutForm from './CheckOutForm';


const stripePromise = loadStripe('pk_test_51NeALsDtf6KItbnWrezGYJZ1gBRqUwseZhqB7R52fjShox3SPcQisKb7y5KlhOthQMKFF2oE1kkpoz1mkaA9HYQL00xowM9RXy');

const Payment = () => {
    const order = useLoaderData();
    // const navigation = useNavigation();
    const { name, price } = order;
    // if(navigation.state === "loading"){
    //     return <Loading></Loading>
    // }
    return (
        <div>
            <h3 className="text-3xl">Payment for {name}</h3>
            <p className="text-xl">Please pay <strong>${price}</strong> for your appointment on </p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                    order={order}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;