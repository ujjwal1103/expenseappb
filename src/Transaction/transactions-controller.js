import { Transaction } from "./transaction.js";
export const addTransaction = async (req, res) => {
  const { title, amount, type, userId } = req.body;
  if (title && amount && type && userId) {
    const transaction = new Transaction(req.body);
    transaction.save();
    res.status(200).json({ message: "transaction successfully" });
  }
};
export const getTransactions = async (req, res) => {
  try {
    const data = await Transaction.find();
    res.status(200).json(data);
  } catch (err) {
    res.json({ message: "not available" });
  }
};
export const getAllTransaction = async (req, res) => {
  const userId = req.params.userId;
  const transactions = await Transaction.find({ userId: userId });
  res.status(200).json(transactions);
};

export const deleteTransaction = async (req, res) => {
  const id = req.params.id;
  const isDeleted = await Transaction.deleteOne({ _id: id });
  return isDeleted.acknowledged
    ? res.status(200).json({ message: "transactions deleted successfully" })
    : res.json({ message: "transactions cannot be deleted" });
};
