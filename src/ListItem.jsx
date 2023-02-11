import React from "react";
import "./App.css";
import { Row, Col } from "react-bootstrap";
import { useTheme } from "./ThemeContext";

const ListItem = ({ data }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="form">
      {data && (
        <Row className="row">
          {data.forecastday.map((w) => {
            {
              return (
                <Col
                  className={theme === "dark" ? "col-dark" : "col-light"}
                  sm={2}
                  key={w.date}
                >
                  <div>
                    <small>{w.date}</small>
                    <br />
                    <br />

                    <img src={w.day.condition.icon} />
                    <br />
                    <br />

                    <p>{w.day.condition.text}</p>
                    <br />

                    <small>
                      {w.day.maxtemp_c}/{w.day.mintemp_c}
                    </small>
                  </div>
                </Col>
              );
            }
          })}
        </Row>
      )}
    </div>
  );
};

export default ListItem;
