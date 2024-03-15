import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

export function CardsCollection() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/cards")
            .then((response) => {
                console.log(response.data);
                setCards(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <Fragment>
            <div
                style={{
                    paddingTop: 24,
                    paddingBottom: 24,
                    display: "flex",
                    overflowX: "auto",
                    whiteSpace: "nowrap",
                }}
            >
                {cards?.map((card) => (
                    <div
                        key={card.id}
                        style={{
                            minWidth: 116,
                            height: 80,
                            borderRadius: 8,
                            border: "1px solid #F2F2F5",
                            backgroundColor: "#6698FA",
                            marginRight: 16,
                            fontSize: 12,
                            fontWeight: 400,
                            color: "#FFFFFF",
                            transition: "transform 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.05)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                        }}
                    >
                        <p
                            style={{
                                marginTop: 36,
                                marginLeft: 8,
                            }}
                        >
                            **** {card.number.toString().slice(-4)}
                        </p>
                        <p
                            style={{
                                marginLeft: 8,
                                marginTop: -8,
                            }}
                        >
                            {card.month} / {card.year}
                        </p>
                    </div>
                ))}

                <div>
                    <div
                        style={{
                            minWidth: 116,
                            height: 80,
                            borderRadius: 8,
                            border: "2px solid #3E7BFA",
                            backgroundColor: "#F2F2F5",
                            marginRight: 16,
                            fontWeight: 400,
                            transition: "transform 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.05)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                        }}
                    >
                        <p
                            style={{
                                marginLeft: 47,
                                marginTop: 18,
                                fontSize: 28,
                                color: "#7B8794",
                            }}
                        >
                            +
                        </p>
                        <p
                            style={{
                                marginLeft: 15,
                                marginTop: -30,
                                fontSize: 14,
                                color: "#555770",
                            }}
                        >
                            Новая карта
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
