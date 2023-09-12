import React, { createContext, useState } from "react";


export const DataContext= createContext(null);


function DataProvider({children}) {
    const [account, setAccount] = useState(false);
    // const [paymentSuccessful, setPaymentSuccessful] = useState(false);

    return (
        <DataContext.Provider value={{account, setAccount,
        //  paymentSuccessful, setPaymentSuccessful
         }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataProvider;