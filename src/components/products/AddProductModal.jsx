import { Form, Input, InputNumber, Select, Modal, Button } from "antd";
// import 'antd/dist/reset.css';

const { TextArea } = Input;
const { Option } = Select;

const AddProductModal = ({ open = false, onSuccess, onCancel }) => {
  const [form] = Form.useForm();

  const handleOk = () => {

    form
      .validateFields()
      .then((values) => {
        // Structure the form data to match the product object
        // const productData = {
        //   title: values.title,
        //   price: values.price,
        //   description: values.description,
        //   category: values.category,
        //   image: values.image,
        //   rating: {
        //     rate: values.rating_rate,
        //     count: values.rating_count,
        //   },
        // };
        // onSuccess(productData); // Pass the data to the parent component
        // form.resetFields(); // Reset form after successful submission
        console.log(values);
        
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <Modal
      title="Add New Product"
      open={open}
      onOk={handleOk}
      onCancel={() => {
        form.resetFields(); // Reset form on cancel
        onCancel();
      }}
      closable
      okText="Add Product"
      cancelText="Cancel"
      className="max-w-lg" // Tailwind for responsive modal width
    >
      <Form
        form={form}
        layout="vertical"
        className="p-4" // Tailwind padding
        initialValues={{
          category: "men's clothing", // Default category
          rating_rate: 0,
          rating_count: 0,
        }}
      >
        <Form.Item
          name="title"
          label="Product Title"
          rules={[{ required: true, message: "Please enter the product title" }]}
        >
          <Input
            placeholder="Enter product title"
            className="w-full rounded-md" // Tailwind for input styling
          />
        </Form.Item>

        <Form.Item
          name="price"
          label="Price"
          rules={[
            { required: true, message: "Please enter the price" },
            { type: "number", min: 0, message: "Price must be a positive number" },
          ]}
        >
          <InputNumber
            placeholder="Enter price"
            className="w-full"
            formatter={(value) => `$ ${value}`}
            parser={(value) => value.replace("$ ", "")}
          />
        </Form.Item>

        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: "Please enter the description" }]}
        >
          <TextArea
            placeholder="Enter product description"
            rows={4}
            className="w-full rounded-md"
          />
        </Form.Item>

        <Form.Item
          name="category"
          label="Category"
          rules={[{ required: true, message: "Please select a category" }]}
        >
          <Select placeholder="Select a category" className="w-full">
            <Option value="men's clothing">Men's Clothing</Option>
            <Option value="women's clothing">Women's Clothing</Option>
            <Option value="electronics">Electronics</Option>
            <Option value="jewelery">Jewelery</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="image"
          label="Image URL"
          rules={[{ required: true, message: "Please enter the image URL" }]}
        >
          <Input
            placeholder="Enter image URL"
            className="w-full rounded-md"
          />
        </Form.Item>

        <Form.Item
          name="rating_rate"
          label="Rating (Stars)"
          rules={[
            { required: true, message: "Please enter the rating" },
            { type: "number", min: 0, max: 5, message: "Rating must be between 0 and 5" },
          ]}
        >
          <InputNumber
            placeholder="Enter rating (0-5)"
            className="w-full"
            step={0.1}
          />
        </Form.Item>

        <Form.Item
          name="rating_count"
          label="Rating Count"
          rules={[
            { required: true, message: "Please enter the rating count" },
            { type: "number", min: 0, message: "Rating count must be a positive number" },
          ]}
        >
          <InputNumber
            placeholder="Enter number of reviews"
            className="w-full"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddProductModal;