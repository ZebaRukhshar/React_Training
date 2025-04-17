import React, { createContext, useContext, useEffect, useState } from "react";
import { message } from "antd";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => {
        setData(products);
        setLoading(false);
      });
  }, []);

  const addItem = (item) => {
    setData((prev) => [...prev, { ...item, id: prev.length + 1 }]);
    message.success("Item added successfully");
  };

  const updateItem = (updatedItem) => {
    setData((prev) =>
      prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    message.success("Item updated successfully");
  };
  
  const deleteItem = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <DataContext.Provider value={{ data, loading, addItem,updateItem, deleteItem }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
