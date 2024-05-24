import { Button, Box, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import axios from 'axios';
import React, { useState } from 'react';

  const AllTrades = () => {
    const [trades, setTrades] = useState([]);

    const handleDisplayAllTrades = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.get("http://localhost:8081/api/trades/all");
        console.log(response.data);
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
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Trade ID</TableCell>
              <TableCell>Version</TableCell>
              <TableCell>Counter Party ID</TableCell>
              <TableCell>Book ID</TableCell>
              <TableCell>Maturity Date</TableCell>
              <TableCell>Created Date</TableCell>
              <TableCell>Expired</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trades.map((trade, index) => (
              <TableRow key={index}>
                <TableCell>{trade.tradeId}</TableCell>
                <TableCell>{trade.version}</TableCell>
                <TableCell>{trade.counterPartyId}</TableCell>
                <TableCell>{trade.bookId}</TableCell>
                <TableCell>{trade.maturityDate}</TableCell>
                <TableCell>{trade.createdDate}</TableCell>
                <TableCell>{trade.expired}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>      
        </div>
      </div>
    )
  }

  export default AllTrades;
