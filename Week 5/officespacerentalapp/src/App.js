import './App.css';
import officeImage from './office.jpg';

function App() {

  const office = {
    name: "Cognizant Office",
    rent: 55000,
    address: "Chennai, Tamil Nadu"
  };

  const officeSpaces = [
    {
      id: 1,
      name: "Cognizant Office",
      rent: 55000,
      address: "Chennai"
    },
    {
      id: 2,
      name: "Tech Park",
      rent: 75000,
      address: "Bangalore"
    },
    {
      id: 3,
      name: "Business Hub",
      rent: 48000,
      address: "Hyderabad"
    },
    {
      id: 4,
      name: "Innovation Center",
      rent: 82000,
      address: "Pune"
    }
  ];

  return (

    <div style={{ padding: "20px" }}>

      <h1>Office Space Rental Application</h1>

      <img
        src={officeImage}
        alt="Office"
        width="500"
      />

      <hr />

      <h2>Featured Office</h2>

      <p><b>Name:</b> {office.name}</p>

      <p
        style={{
          color: office.rent < 60000 ? "red" : "green"
        }}
      >
        <b>Rent:</b> ₹ {office.rent}
      </p>

      <p><b>Address:</b> {office.address}</p>

      <hr />

      <h2>Available Office Spaces</h2>

      {
        officeSpaces.map((item) => (

          <div
            key={item.id}
            style={{
              border: "1px solid gray",
              borderRadius: "10px",
              padding: "10px",
              marginBottom: "10px",
              width: "400px"
            }}
          >

            <h3>{item.name}</h3>

            <p
              style={{
                color: item.rent < 60000 ? "red" : "green"
              }}
            >
              <b>Rent:</b> ₹ {item.rent}
            </p>

            <p><b>Address:</b> {item.address}</p>

          </div>

        ))
      }

    </div>

  );

}

export default App;