import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function HomePage() {
  const [phones, setPhones] = useState([]);
  const [onePhone, setOnePhone] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPhones = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:5005/phones");
        console.log(response);
        setPhones(response.data);
        setLoading(false);
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
      <Navbar />
      <div className="page">
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
          <div className="phoneContainer">
            <div className="phoneHeader">
              <h2>{onePhone.name}</h2>
              <img
                height="200px"
                src={`../../public/images/${onePhone.imageFileName}`}
                alt={onePhone.name}
              />
            </div>
            <p>
              <strong>Manufacturer: </strong>
              {onePhone.manufacturer}
            </p>
            <p>
              <strong>Price: </strong>€{onePhone.price}
            </p>
            <p>
              <strong>Description: </strong>
              {onePhone.description}
            </p>
          </div>
        )}
      </div>
      <br></br>
      <Footer />
    </div>
  );
}

export default HomePage;
