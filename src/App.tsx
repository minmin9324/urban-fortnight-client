import { Button, Form, Input, Radio, RadioChangeEvent, Space } from "antd";
import { useState } from "react";
import type { Dayjs } from "dayjs";
import Calendar from "./Components/Calendar";
import { BOOKING_TIMES } from "./query";
import { useQuery } from "@apollo/client";

interface FormValueType {
  username: string;
  phoneNo: string;
  model: string;
  date: Dayjs;
}

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

  const [selectTime, setSelectTime] = useState<number | null>(null);

  const onFinish = (value: FormValueType) => {
    console.log("suc:", value, selectTime, value.date.format("YYYY-MM-DD"));
  };

  const times = [
    { time: 2, available: true },
    { time: 3, available: false },
    { time: 4, available: true },
    { time: 5, available: false },
  ];

  const handleTime = (time: number) => {
    setSelectTime(time);
  };

  const { loading, error, data } = useQuery(BOOKING_TIMES, {
    variables: { bikeId: 2, date: "2023-03-17" },
  });

  console.log(data);

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Space
        style={{
          minWidth: "1000px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        size="middle"
        direction="vertical"
      >
        <Form.Item style={{ width: "400px" }} label="이름" name="username">
          <Input />
        </Form.Item>
        <Form.Item style={{ width: "400px" }} label="전화번호" name="phoneNo">
          <Input addonBefore="010" />
        </Form.Item>

        <Form.Item style={{ width: "400px" }} label="바이크 모델" name="model">
          <Radio.Group
            options={options}
            onChange={onChange3}
            value={value3}
            optionType="button"
            buttonStyle="solid"
          />
        </Form.Item>

        <Form.Item name="date">
          <Calendar />
        </Form.Item>

        <Space wrap>
          {times.map(({ time, available }) => (
            <Button
              key={time}
              disabled={!available}
              onClick={() => handleTime(time)}
              type={time === selectTime ? "primary" : "default"}
            >{`${time}:00`}</Button>
          ))}
        </Space>
        <Button style={{ width: "300px", marginTop: "30px" }} htmlType="submit">
          예약하기
        </Button>
      </Space>
    </Form>
  );
}

export default App;
