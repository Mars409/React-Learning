import React, { useState } from "react";
import { View, Text, Button, Input, Picker } from "@tarojs/components";
import Taro from "@tarojs/taro";

import "./index.scss";

const Count = () => {
  const [records, setRecords] = useState([]);
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("支出");

  const handleSubmit = () => {
    if (!amount) {
      Taro.showToast({
        title: "请输入金额",
        icon: "none",
      });
      return;
    }

    const newRecord = {
      id: Date.now(),
      amount: parseFloat(amount),
      type,
      date: new Date().toLocaleDateString(),
    };

    setRecords([...records, newRecord]);
    setAmount("");

    Taro.showToast({
      title: "添加成功",
      icon: "success",
    });
  };

  const deleteRecord = (id) => {
    setRecords(records.filter((record) => record.id !== id));
  };

  const calculateTotal = () => {
    const income = records
      .filter((record) => record.type === "收入")
      .reduce((sum, record) => sum + record.amount, 0);
    const expense = records
      .filter((record) => record.type === "支出")
      .reduce((sum, record) => sum + record.amount, 0);
    return { income, expense };
  };

  const totals = calculateTotal();

  return (
    <View className="count">
      <View className="form">
        <Input
          type="digit"
          placeholder="请输入金额"
          value={amount}
          onInput={(e) => setAmount(e.detail.value)}
          className="input"
        />
        <Picker
          mode="selector"
          range={["支出", "收入"]}
          value={type === "支出" ? 0 : 1}
          onChange={(e) => setType(e.detail.value === 0 ? "支出" : "收入")}
          className="picker"
        >
          <View className="picker-text">{type}</View>
        </Picker>
        <Button onClick={handleSubmit} type="primary" className="submit-btn">
          添加记录
        </Button>
      </View>

      <View className="summary">
        <Text>收入：¥{totals.income.toFixed(2)}</Text>
        <Text>支出：¥{totals.expense.toFixed(2)}</Text>
      </View>

      <View className="records">
        {records.map((record) => (
          <View key={record.id} className="record-item">
            <View className="record-main">
              <Text className={record.type === "收入" ? "income" : "expense"}>
                {record.type}
              </Text>
              <Text>¥{record.amount.toFixed(2)}</Text>
            </View>
            <Text className="record-date">{record.date}</Text>
            <Button
              onClick={() => deleteRecord(record.id)}
              size="mini"
              className="delete-btn"
            >
              删除
            </Button>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Count;
