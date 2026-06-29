import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/api";

export default function Reservation() {
  const { shopId } = useParams();
  const navigate = useNavigate();

  const [paymentOption, setPaymentOption] = useState("Full");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const buyer = JSON.parse(localStorage.getItem("buyer"));

    if (!buyer) {
      navigate("/login");
    }
  }, [navigate]);

  const submitReservation = async () => {
    const buyer = JSON.parse(localStorage.getItem("buyer"));

    try {
      await api.post(
        "/reservations",
        {
          shopId,
          paymentOption,
          notes,
        },
        {
          headers: {
            Authorization: `Bearer ${buyer.token}`,
          },
        }
      );

      alert("Reservation submitted successfully!");
    } catch (err) {
      console.log(err);
      alert("Reservation failed.");
    }
  };

  return (
    <div>
      Reservation Page

      <button onClick={submitReservation}>
        Submit Reservation
      </button>
    </div>
  );
}