export const Statistics = ({dataList}) => {
    const newData = dataList.map(item => {
        return <li key={item.id} className="item">
                <span className="label">{item.label} - </span>
                <span className="percentage">{item.percentage}%</span>
            </li>
    })
    return <section className="statistics">
        <h2 className="title">Upload stats</h2>

        <ul className="stat-list">
            {newData}
        </ul>
    </section>
}