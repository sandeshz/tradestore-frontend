import { Container, Grid, TextField, Button, Card, Box } from "@mui/material";
import React, { useState } from 'react';
import axios from 'axios';

const TradeStore = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleTradeSearch = async (event) => {
    event.preventDefault();
    const term = searchTerm.trim();
    try {
      const result = await fectchByTradeId();
      setSearchResult(result);
    } catch (error) {
      throw error;
    }
    setSearchTerm(term);
  };

  const fectchByTradeId = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/trades/${tradeId}");
      console.log('resp : ' + response.data);
      return response.data;      
    } catch (error) {
      console.error('Error fetching Trade Id', error);
      throw error;
    }
  }

  return <div
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
      <Card varint={"outlined"} style={{width: 400, padding: 20, marginTop: 30, height: "100%"}}>
          <TextField
              style={{marginBottom: 10}}
              onChange={(e) => {
                setSearchTerm(e.target.value)
              }}
              fullWidth={true}
              label="Search by Trade Id"
              variant="outlined"
          />
          <Box display="flex" justifyContent="center">
            <Button
                size={"large"}
                variant="contained"
                onClick={handleTradeSearch}
            > Search
            </Button>
          </Box>
      </Card>
  </div>
  {searchResult && (
        <Card variant={"outlined"} style={{ width: 400, padding: 20, marginTop: 30 }}>
          <p>Trade ID: {searchResult.tradeId}</p>
          {/* Display other trade data */}
        </Card>
      )}
</div>
};

export default TradeStore;