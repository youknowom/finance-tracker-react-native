export async function getTransactionsByUserId(req, res) {
  try {
    const { userId } = req.params;
    const transactions = await sql`
      SELECT * FROM transactions
      WHERE user_id = ${userId}
      ORDER BY created_at DESC
    `;
    res.status(200).json(transactions);
  } catch (error) {
    console.error("❌ Error fetching transactions", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
