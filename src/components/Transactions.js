export const TransactionHistory = ({transactions}) => {
    const transactionsList = transactions.map(item => {
        return <tr key={item.id}>
                <th>{item.type}</th>
                <th>{item.amount}</th>
                <th>{item.currency}</th>
            </tr>
    })
    return <table className="transaction-history">
        <thead>
            
        </thead>

        <tbody>
            {transactionsList}
        </tbody>
    </table>
}