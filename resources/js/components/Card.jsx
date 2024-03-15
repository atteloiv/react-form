import React, { Fragment, useState } from "react";
import axios from "axios";

export function Card() {
    const [formData, setFormData] = useState({
        number: "",
        month: "",
        year: "",
        CVV: "",
    });

    const [numberError, setNumberError] = useState(false);

    const handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;

        if (inputName === "number") {
            setNumberError(inputValue.length !== 16);
            if (inputValue.length === 16) {
                setNumberError(false);
            }
        }

        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
            [inputName]: inputValue,
        });
    };

    const handleBlur = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;

        if (inputName === "number" && inputValue.length !== 16) {
            setNumberError(true);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post("http://127.0.0.1:8000/api/cards", formData)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Fragment>
            <div
                style={{
                    display: "flex",
                }}
            >
                <div
                    style={{
                        backgroundImage:
                            "linear-gradient(170deg, rgba(166, 200, 255, 0.85) 10%, rgba(0, 67, 206, 0.85) 90%)",
                        width: 324,
                        height: 208,
                        borderRadius: 12,
                        marginTop: 0,
                        boxShadow:
                            "0px 8px 16px 0px #55577029, 0px 2px 4px 0px #28293D0A",
                        zIndex: 2,
                    }}
                >
                    <form
                        onSubmit={handleSubmit}
                        style={{
                            padding: 20,
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                            }}
                        >
                            <div
                                className="BlueCard"
                                style={{
                                    marginTop: 20,
                                }}
                            >
                                <label
                                    style={{
                                        fontSize: 12,
                                        fontWeight: 400,
                                        color: "#FFFFFF",
                                    }}
                                >
                                    НОМЕР КАРТЫ
                                    <input
                                        type="text"
                                        name="number"
                                        placeholder="Номер карты"
                                        required
                                        value={formData.number}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        style={{
                                            width: 268,
                                            height: 38,
                                            borderRadius: 8,
                                            border: 1,
                                            borderColor: "#E4E4EB",
                                            backgroundColor: "#FAFAFC",
                                            paddingLeft: 16,
                                            fontSize: 16,
                                            fontWeight: 400,
                                            color: "#8F90A6",
                                            marginBottom: 16,
                                            marginTop: 6,
                                            borderColor: numberError
                                                ? "red"
                                                : "#E4E4EB",
                                        }}
                                        className={
                                            numberError ? "input-error" : ""
                                        }
                                    />
                                    {numberError && (
                                        <p
                                            style={{
                                                position: "absolute",
                                                color: "red",
                                                fontSize: 12,
                                                marginTop: -15,
                                            }}
                                        >
                                            Ведите действительный номер карты
                                            (16 цифр)
                                        </p>
                                    )}
                                </label>
                                <label
                                    style={{
                                        fontSize: 12,
                                        fontWeight: 400,
                                        color: "#FFFFFF",
                                    }}
                                >
                                    ДЕЙСТВУЕТ ДО
                                </label>
                                <div
                                    style={{
                                        display: "flex",
                                        marginTop: 6,
                                    }}
                                >
                                    <input
                                        type="text"
                                        name="month"
                                        placeholder="мм"
                                        required
                                        value={formData.month}
                                        onChange={handleChange}
                                        style={{
                                            width: 56,
                                            height: 38,
                                            borderRadius: 8,
                                            border: 1,
                                            borderColor: "#E4E4EB",
                                            backgroundColor: "#FAFAFC",
                                            paddingLeft: 16,
                                            fontSize: 16,
                                            fontWeight: 400,
                                            color: "#8F90A6",
                                        }}
                                    />
                                    <p
                                        style={{
                                            fontSize: 12,
                                            fontWeight: 400,
                                            color: "#FFFFFF",
                                            paddingLeft: 4,
                                            paddingRight: 4,
                                        }}
                                    >
                                        /
                                    </p>
                                    <input
                                        type="text"
                                        name="year"
                                        placeholder="гг"
                                        required
                                        value={formData.year}
                                        onChange={handleChange}
                                        style={{
                                            width: 56,
                                            height: 38,
                                            borderRadius: 8,
                                            border: 1,
                                            borderColor: "#E4E4EB",
                                            backgroundColor: "#FAFAFC",
                                            paddingLeft: 16,
                                            fontSize: 16,
                                            fontWeight: 400,
                                            color: "#8F90A6",
                                        }}
                                    />
                                </div>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="CVV"
                                    placeholder="000"
                                    required
                                    value={formData.CVV}
                                    onChange={handleChange}
                                    style={{
                                        marginLeft: 40,
                                        marginTop: 80,
                                        width: 56,
                                        height: 38,
                                        borderRadius: 8,
                                        border: 1,
                                        borderColor: "#E4E4EB",
                                        backgroundColor: "#FAFAFC",
                                        paddingLeft: 16,
                                        fontSize: 16,
                                        fontWeight: 400,
                                        color: "#8F90A6",
                                    }}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            style={{
                                position: "absolute",
                                marginTop: 119,
                                marginBottom: 0,
                                marginLeft: -20,
                                width: 141,
                                height: 52,
                                backgroundColor: "#3E7BFA",
                                borderRadius: 100,
                                border: 0,
                                color: "#FFFFFF",
                                fontSize: 16,
                            }}
                        >
                            Оплатить
                        </button>
                    </form>
                    <div>
                        <label
                            style={{
                                width: 104,
                                fontSize: 14,
                                color: "#555770",
                                marginTop: 20,
                            }}
                        >
                            <input
                                type="checkbox"
                                style={{
                                    backgroundColor: "#3E7BFA",
                                    marginTop: 28,
                                    marginLeft: 0,
                                }}
                            />
                            Запомнить эту карту. Это безопасно.
                        </label>

                        <p
                            style={{
                                fontSize: 14,
                                color: "#555770",
                                marginLeft: 16,
                                marginTop: 2,
                                whiteSpace: "nowrap",
                            }}
                        >
                            Сохраняя карту, вы соглашаетесь с{" "}
                            <a
                                href=""
                                style={{
                                    color: "#3E7BFA",
                                    textDecoration: "none",
                                }}
                            >
                                условиями привязки карты.
                            </a>
                        </p>
                    </div>
                </div>
                <div
                    className="GrayCard"
                    style={{
                        minWidth: 312,
                        height: 200,
                        backgroundColor: "#EBEBF0",
                        borderRadius: 12,
                        marginTop: 4,
                        marginLeft: -166,
                    }}
                >
                    <div
                        style={{
                            width: 312,
                            height: 40,
                            marginTop: 20,
                            opacity: "30%",
                            backgroundColor: "#C7C9D9",
                        }}
                    ></div>
                    <p
                        style={{
                            fontSize: 12,
                            marginLeft: 190,
                            color: "#555770",
                        }}
                    >
                        CVV/CVC
                    </p>
                    <p
                        style={{
                            marginTop: 55,
                            width: 104,
                            fontSize: 10,
                            marginLeft: 190,
                            color: "#8F90A6",
                        }}
                    >
                        три цифры с обратной стороны карты
                    </p>
                </div>
            </div>
        </Fragment>
    );
}
