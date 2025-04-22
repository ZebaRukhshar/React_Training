import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Sidebar from './components/sidebar';
import Home from './pages/home';
import Profile from './pages/profile';
import { DataProvider } from "./context/DataContext";
import Login from './pages/Login';
import Logout from './pages/Logout'; // adjust path if needed
import PrivateRoute from './components/PrivateRoute';
import ProductTable from './components/ProductTable';

const { Content } = Layout;

const App = () => {
  return (
    <DataProvider>
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout>
          <Content style={{ padding: '24px' }}>
          <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />


        {/* Protected Routes */}
        <Route path="/home" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/products" element={<ProductTable />} />
         
        
        
       </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
    </DataProvider>
   
  );
};

export default App;


// import { useEffect, useState } from "react";
// import { Table, Watermark } from "antd";
// import "antd/dist/reset.css";
// //import Test from "./test";
// import { DatePicker, Space } from 'antd';
// import { Button, Checkbox, Form, Input } from 'antd';
// const { RangePicker } = DatePicker
// function App() {
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [yearFilter, setYearFilter] = useState("");

//   useEffect(() => {
//     fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
//       .then((response) => response.json())
//       .then((result) => {
//         setData(result.data);
//         setFilteredData(result.data); // Set default filtered data
//       })
//       .catch((error) => console.log("error fetching data"));
//   }, []);

//   const columns = [
//     { title: "Nation", dataIndex: "Nation", key: "Nation" },
//     { title: "Year", dataIndex: "Year", key: "Year" },
//     { title: "Population", dataIndex: "Population", key: "Population" },
//   ];

//   const handleFilter = () => {
//     const filtered = data.filter((item) => item.Year.toString() === yearFilter);
//     setFilteredData(filtered);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1> US Population Data</h1>

//       <Space direction="horizontal" style={{ marginBottom: 16 }}>
//         <Input
//           placeholder="Enter Year (e.g., 2020)" value={yearFilter} onChange={(e) => setYearFilter(e.target.value)}
//           style={{ width: 200 }}
//         />
//         <Button type="primary" onClick={handleFilter}>
//           Filter by Year
//         </Button>
//         <Button onClick={() => setFilteredData(data)}>Reset</Button>
//       </Space>

//       <Table
//         dataSource={filteredData.map((item, index) => ({ ...item, key: index }))}
//         columns={columns}
//         pagination={{ pageSize: 10 }}
//         bordered
//       />
//     </div>
//   );
// }

// export default App;

// function App() {
//   const [count, setCount] = useState(0);

//   const [randomNumber, setRandomNumber] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   const spin = () => {
//     const randomValue = Math.floor(Math.random() * 100) + 1;
//     setRandomNumber(randomValue);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
     
//         <p>
//           Counter: <span>{count}</span>
//         </p>
//         <div>
//           <button onClick={increment}>Increment</button>
//           <button onClick={decrement}>Decrement</button>
//         </div>
//         <div style={{ marginTop: '20px' }}>
//           <p>Random Spin Box</p>
//           <div className="spin-box">
//             <p>{randomNumber}</p>
//           </div>
//           <button onClick={spin}>Spin</button>
//         </div>
      
//       </header>
//     </div>
//   );
// }

// export default App;
