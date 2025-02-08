import { useState } from "react";

const Content = () => {

    const {items, setItems} = useState([
        {
            id: 1,
            checked: false,
            item: "pizza",
        },
        {
            id: 2,
            checked: false,
            item: "pasta",
        },
        {
            id: 3,
            checked: false,
            item: "hrissa",
        }
    ]);

    return (
        <main className="content">
            
        </main>
        )
}

export default Content;