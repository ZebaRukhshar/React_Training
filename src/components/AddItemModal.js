import React, { useState, useEffect } from "react";
import { Modal, Form, Input, InputNumber, Button } from "antd";
import { useData } from "../context/DataContext";

const AddItemModal = ({ visible, onClose, editingItem }) => {
  const { addItem, updateItem } = useData();
  const [form] = Form.useForm();
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (editingItem) {
      setIsEditMode(true);
      form.setFieldsValue({
        title: editingItem.title,
        price: editingItem.price,
      });
    } else {
      setIsEditMode(false);
      form.resetFields(); 
    }
  }, [visible, editingItem, form]);

  const handleSubmit = (values) => {
    if (isEditMode) {
      updateItem({ ...editingItem, ...values });
    } else {
      addItem(values);
    }
    onClose();
  };

  return (
    <Modal
      title={isEditMode ? "Edit Product" : "Add Product"}
      visible={visible}
      onCancel={onClose}
      footer={null}
    >
      <Form
        form={form}
        onFinish={handleSubmit}
        layout="vertical"
        initialValues={{
          title: "",
          price: 0,
        }}
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please enter the title" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: "Please enter the price" }]}
        >
          <InputNumber min={0} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            {isEditMode ? "Update" : "Add"}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddItemModal;
