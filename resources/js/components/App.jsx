import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import { CardsCollection } from "./CardsCollection";
import { Payment } from "./Payment";
import { Card } from "./Card";

ReactDOM.createRoot(document.getElementById("app")).render(
    <Fragment>
        <div
            style={{
                padding: 40,
                width: 470,
                height: 630,
                borderRadius: 12,
                border: "1px solid #F2F2F5",
                boxShadow:
                    "0px 8px 16px 0px #55577029, 0px 2px 4px 0px #28293D0A",
                margin: "auto",
                fontFamily: "Inter",
            }}
        >
            <p
                style={{
                    fontSize: 24,
                    fontWeight: 500,
                    color: "#28293D",
                    marginTop: 0,
                }}
            >
                Пополнить банковской картой
            </p>
            <Payment />
            <CardsCollection />
            <Card />
        </div>
    </Fragment>
);
