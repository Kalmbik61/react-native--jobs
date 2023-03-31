import axios from "axios";
import { useState, useEffect } from "react";
import { RAPID_API_KEY } from "@env";
import { Alert } from "react-native";

const API_KEY = RAPID_API_KEY;

export const useFetch = (endPoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endPoint}`,
    params: { ...query },
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const res = await axios.request(options);

      setData(res.data.data);
      setIsLoading(false);
    } catch (e) {
      setError(e);
      setIsLoading(false);
      Alert.alert("There is an error", "Some error while fetching");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return {
    data,
    isLoading,
    error,
    refetch,
  };
};

// {query: 'Python developer in Texas, USA', page: '1', num_pages: '1'}
