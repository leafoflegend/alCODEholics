import React, { useEffect } from "react";

import { getDemAlcohols } from "../api/index";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const GetAllAlocohols = (props) => {
  const { alcohols, setAlcohols } = props;

  useEffect(() => {
    getDemAlcohols()
      .then((alcohols) => {
        console.log(alcohols);
        setAlcohols(alcohols);
      })
      .catch(console.error);
  }, [setAlcohols]);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        marginTop: '50px'
      }}
    >
      {alcohols.map((alcohol, index) => {
        return (
          <div key={index}>
            <Card
              style={{
                width: "250px",
                height: "300px",
              }}
            >
              <CardImg
                top
                width="100%"
                src="/assets/318x180.svg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">{alcohol.name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Type: {alcohol.type} / Price: ${alcohol.price}
                </CardSubtitle>
                <CardText>
                  {alcohol.description}
                  {alcohol.instock}
                </CardText>
                <Button>Add To Cart</Button>
              </CardBody>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default GetAllAlocohols;
