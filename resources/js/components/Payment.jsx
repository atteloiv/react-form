import React, { Fragment, useEffect, useState } from "react";

export function Payment() {
    const [cards, setCards] = useState([]);
    const [currency, setCurrency] = useState(0);
    const [ruble, setRuble] = useState(0);
    const exchangeRate = 15;

    useEffect(() => {
        if (currency) {
            setRuble(currency * exchangeRate);
        }
    }, [currency, exchangeRate]);

    return (
        <Fragment>
            <p
                style={{
                    fontSize: 12,
                    fontWeight: 400,
                    color: "#555770",
                    marginBottom: 9,
                    marginTop: 30,
                }}
            >
                УКАЖИТЕ СУММУ
            </p>
            <form>
                <input
                    style={{
                        width: 144,
                        height: 52,
                        borderTopLeftRadius: 8,
                        borderBottomLeftRadius: 8,
                        backgroundColor: "#FAFAFC",
                        border: "1px solid #E4E4EB",
                        borderRightWidth: "0.5px",
                        fontSize: 16,
                        fontWeight: 400,
                        color: "#8F90A6",
                        paddingLeft: 12,
                    }}
                    type="number"
                    name="currency"
                    placeholder="0000.00"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                />
                <input
                    style={{
                        width: 144,
                        height: 52,
                        borderTopRightRadius: 8,
                        borderBottomRightRadius: 8,
                        backgroundColor: "#FAFAFC",
                        border: "1px solid #E4E4EB",
                        borderLeftWidth: "0.5px",
                        fontSize: 16,
                        fontWeight: 400,
                        color: "#8F90A6",
                        paddingLeft: 12,
                    }}
                    type="number"
                    name="ruble"
                    placeholder="0000.00"
                    value={ruble}
                    readOnly
                />
            </form>
        </Fragment>
    );
}
