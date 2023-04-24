import React, { useState } from "react";
import { Container, FormGroup, Input } from "reactstrap";
const SubiendoImagenes = (props) => {
  const [image, setimage] = useState("");
  const [loading, setloading] = useState(false);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "medicalconnectar");
    setloading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/djlajlvdd/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    //console.log(res);
    setimage(file.secure_url);
    console.log(file.secure_url);
    setloading(false);
  };

  return (
    <div>
      <Container style={{ textAlign: "center" }}>
        <h1>Subiendo Imagenes</h1>
        <FormGroup>
          <Input
            type="file"
            name="file"
            placeholder="Sube tu imagen aqui!"
            onChange={uploadImage}
          />
          {loading ? (
            <h3>Cargando Imagenes...</h3>
          ) : (
            <img src={image} style={{ width: "300px" }} />
          )}
        </FormGroup>
      </Container>
    </div>
  );
};

export default SubiendoImagenes;
