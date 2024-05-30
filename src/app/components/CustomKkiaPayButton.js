'use client'
import { useEffect } from 'react';
import { useKKiaPay } from 'kkiapay-react';

export default function CustomKkiaPayButton({ amount, description, email, name, message, phonenuumber = "61000000" }) {
    const { openKkiapayWidget, addKkiapayListener, removeKkiapayListener } = useKKiaPay();

    function open() {
        // e.preventaDefault()
        console.log("KKiaPay public key:", process.env.NEXT_PUBLIC_KKIAPAY_PUBLIC_KEY);

        openKkiapayWidget({
            amount: amount,
            api_key: process.env.NEXT_PUBLIC_KKIAPAY_PUBLIC_KEY,
            name: name,
            sandbox: true,
            email: email,
            phone: phonenuumber,

        });
    }

    function successHandler(response) {
        console.log(response);
    }

    function failureHandler(error) {
        console.log(error);
    }

    useEffect(() => {
        addKkiapayListener('success', successHandler)
        addKkiapayListener('failed', failureHandler)
        return () => {
            removeKkiapayListener('success', successHandler)
            removeKkiapayListener('failed', failureHandler)
        };
    }, [addKkiapayListener, removeKkiapayListener]);

    return (
        <>
            <button class="icon-button-3d" onClick={open}> <span class="text">{message} </span>
            </button>
        </>

    );
};

