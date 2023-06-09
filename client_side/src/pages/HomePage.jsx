import { useState, useEffect } from "react"
import axios from "axios"

function HomePage() {
    const [phones, setPhones] = useState([])
    const [onePhone, setOnePhone] = useState(null);
    const [loading, setLoading] = useState(false);

    
    useEffect (() => {
        const getPhones = async () => {
            try {
                setLoading(true);
                const response = await axios.get("http://localhost:5005/phones");
                console.log(response)
                setPhones(response.data);
                setLoading(false)
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        getPhones();
    }, []);

    const handlePhoneSelect = (phone) => {
        setOnePhone(phone);
      };

  return (
    <div>
    <h1>The Phone Cave</h1>
        {loading ? (
            <div>Getting phones...</div>
        ) : (
            <ul>
            {phones.map((phone) => ( 
        <li key={phone.id} onClick={() => handlePhoneSelect(phone)}>
            {phone.name}
        </li>
            ))}
            </ul>
        )}
        {onePhone && (
        <div>
          <h2>{onePhone.name}</h2>
          <p>Manufacturer: {onePhone.manufacturer}</p>
          <p>Price: €{onePhone.price}</p>
          <p>Description: {onePhone.description}</p>
        </div>
      )}

    </div>
  )
}

export default HomePage