import { Container, Grid, TextField, Button, Card, Box } from "@mui/material";
import axios from 'axios';
import React, { useState } from 'react';

  const AllTrades = () => {
    const [trades, setTrades] = useState([]);

    const handleDisplayAllTrades = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.get("http://localhost:8080/api/trades");
        setTrades(response.data);
      } catch (error) {
        console.error('Error fetching trades', error);
        throw error;
      }
    }

    return (
      <div
        style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            justifyContent: "center",
            minHeight: "80vh",
            flexDirection: "column"
        }}
      >
        <div style={{display: "flex", justifyContent: "center"}}>
          <Box display="flex" justifyContent="center">
            <Button
                size={"large"}
                variant="contained"
                onClick={handleDisplayAllTrades}
            > Display All Trades
            </Button>
          </Box>
        </div>
        <div>
        <ul>
          {trades.map((trade, index) => (
            <li key={index}>
              {/* Render trade details here */}
              Trade ID: {trade.tradeId}, Counterparty: {trade.version}, Amount: {trade.counterPartyId}
            </li>
          ))}
        </ul>
      </div>
      </div>
    )
  }

  export default AllTrades;
