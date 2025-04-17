import React, { useState } from "react";
import {Modal,message,Dropdown,Menu,Table,Button} from "antd";
import {EditOutlined,DeleteOutlined,MoreOutlined,PauseOutlined,PlusOutlined} from "@ant-design/icons";
import { useData } from "../context/DataContext";
import AddItemModal from "./AddItemModal";

const ProductTable = () => {
  const { data, loading, addItem, updateItem, deleteItem } = useData();
  const [modalVisible, setModalVisible] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const handleMenuClick = (item, action) => {
    if (action === "edit") {
      setEditingItem(item);
      setModalVisible(true);
    } else if (action === "delete") {
      Modal.confirm({
        title: "Are you sure you want to delete this item?",
        onOk: () => {
          deleteItem(item.id);
          message.success("Item deleted");
        },
      });
    }
  };

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Price", dataIndex: "price", key: "price" },
    {
      title: "Action",
      key: "action",
      render: (_, item) => (
        <>
          <Button
            icon={<PauseOutlined />}
            onClick={() => {
              setEditingItem(null); // Not editing, just adding
              setModalVisible(true);
            }}
            style={{ marginRight: 8 }}
          />
          <Dropdown
            overlay={
              <Menu
                onClick={({ key }) => handleMenuClick(item, key)}
                items={[
                  { key: "edit", icon: <EditOutlined />, label: "Edit" },
                  { key: "delete", icon: <DeleteOutlined />, label: "Delete" },
                ]}
              />
            }
            trigger={["click"]}
          >
            <Button icon={<MoreOutlined />} />
          </Dropdown>
        </>
      ),
    },
  ];

  return (
    <>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => {
          setEditingItem(null); // Make sure it's not editing
          setModalVisible(true);
        }}
        style={{ marginBottom: 16 }}
      >
        Add
      </Button>

      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        rowKey="id"
      />

      <AddItemModal
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
          setEditingItem(null);
        }}
        editingItem={editingItem}
      />
    </>
  );
};

export default ProductTable;
