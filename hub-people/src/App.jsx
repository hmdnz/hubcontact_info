// import { Button, Col, Row } from "reactstrap";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  let formData = {
    FirstName: "",
    MiddleName: "",
    LastName: "",
    Address: "",
    Email: "",
    Phone: "",
    Twitter: "",
    Instagram: "",
    Linkedin: "",
    Whatsapp: "",
    NextofKin: "",
    EmergencyNum: "",
    Github: "",
    SpeacialNeeds: "",
    Allergies: "",
    Stack: "",
    Image: url,
  };
  const [devsData, setDevsData] = useState(formData);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setDevsData({ ...devsData, [e.target.name]: e.target.value });
  };
  const submit = (e) => {
    setLoading(true);
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "xulfc1nx");
    data.append("cloud_name", "dfdfm0pey");
    e.preventDefault();
    console.log(devsData);

    const url1 = "https://api.cloudinary.com/v1_1/dfdfm0pey/image/upload";
    const url2 = "http://localhost:1111/bsdevs";

    // axios.post(url1, data).then((response) => {
    //   setUrl(response.data.url);
    //   console.log(response.data.url);
    // });
    const request1 = axios.post(url1, data);
    const request2 = axios.post(url2, devsData);

    Promise.all([request1, request2]).then((response) => {
      setLoading(false);
      setUrl(response?.data?.url);
      setDevsData({ ...devsData, Image: response?.data?.url });
      console.log(response.data.url);
    });

    // axios.post("http://localhost:1111/bsdevs", devsData).then((response) => {
    //   console.log(response);
    //   setLoading(false);
    //   if (response) {
    //     alert("submitted");
    //   }
    // });
    // .catch((err)=>console.log(err))
  };
  return (
    <form onSubmit={submit}>
      <div>BrainStorm CONTACT FORM</div>
      <main>
        <div>
          <label htmlFor="name">First Name</label>
          <input
            name="FirstName"
            value={devsData.FirstName}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="name">Middlename</label>
          <input
            name="MiddleName"
            value={devsData.MiddleName}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="name">Last Name</label>
          <input
            name="LastName"
            value={devsData.LastName}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            name="Address"
            value={devsData.Address}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>{" "}
          <input
            name="Email"
            value={devsData.Email}
            onChange={handleChange}
            type="email"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>{" "}
          <input
            name="Phone"
            value={devsData.Phone}
            onChange={handleChange}
            type="tel"
          />
        </div>
        {/* <div>
          <label htmlFor="fb">Facebook</label> <input name="fb" value={devsData.} onChange={handleChange} type="text" />
        </div> */}
        <div>
          <label htmlFor="twitter">Twitter</label>
          <input
            name="Twitter"
            value={devsData.Twitter}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="Instagram">Instagram</label>{" "}
          <input
            name="Instagram"
            value={devsData.Instagram}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="in">LinkedIn</label>{" "}
          <input
            name="Linkedin"
            value={devsData.Linkedin}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="Whatsapp">Whatsapp</label>
          <input
            name="Whatsapp"
            type="tel"
            value={devsData.Whatsapp}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="next-of-kin">Next of Kin</label>
          <input
            name="NextofKin"
            value={devsData.NextofKin}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="emergency-no">Emergency Number</label>
          <input
            name="EmergencyNum"
            type="tel"
            value={devsData.EmergencyNum}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="git">Github</label>{" "}
          <input
            name="Github"
            value={devsData.Github}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="special">Special Needs</label>
          <input
            name="SpeacialNeeds"
            value={devsData.SpeacialNeeds}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="Allergies">Allergies</label>
          <input
            name="Allergies"
            value={devsData.Allergies}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="Stack"> Stack</label>
          <select name="Stack" value={devsData.Stack} onChange={handleChange}>
            <option>--select stack--</option>
            <option>Front End Development</option>
            <option>MiddleWare Development</option>
            <option>Back End Development</option>
            <option>Business Development</option>
          </select>
        </div>
        <div>
          <label htmlFor="Image">Your Picture</label>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>
      </main>
      {loading ? (
        <button type="submit" disabled={true} style={{ cursor: "not-allowed" }}>
          Submitting...
        </button>
      ) : (
        <button type="submit">Submit</button>
      )}
      {/* <button onClick={submit}>upload</button> */}
      <img src={url} alt="imgg" />
    </form>
  );
}

export default App;
