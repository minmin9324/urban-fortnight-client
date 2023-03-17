import { Button, Form, Input, Radio, RadioChangeEvent, Space } from "antd";
import React, { useState } from "react";
import Calendar from "./Components/Calendar";

function App() {
  const [value3, setValue3] = useState("Apple");
  const options = [
    { label: "Apple", value: "Apple" },
    { label: "Pear", value: "Pear" },
    { label: "Orange", value: "Orange" },
  ];

  const onChange3 = ({ target: { value } }: RadioChangeEvent) => {
    console.log("radio3 checked", value);
    setValue3(value);
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Space.Compact block>
        <Input style={{ width: "20%" }} />
        <Input style={{ width: "20%" }} addonBefore="010" />

        <Radio.Group
          options={options}
          onChange={onChange3}
          value={value3}
          optionType="button"
          buttonStyle="solid"
        />
      </Space.Compact>
      <Calendar />
      <Space wrap>
        <Button type="primary">2:00</Button>
        <Button>3:00</Button>

        <Button disabled>4:00</Button>
      </Space>
    </Form>
  );
}

export default App;
