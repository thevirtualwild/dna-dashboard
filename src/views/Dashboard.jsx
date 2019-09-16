/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col, Table } from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "variables/Variables.jsx";
import axios from "axios";



const thArray = ["Account Name","Account ID", "Status", "Code", "Actions"];
const tdArray = [
  ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
  ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
  ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
  ["4", "Philip Chaney", "$38,735", "Korea, South", "Overland Park"],
  ["5", "Doris Greene", "$63,542", "Malawi", "Feldkirchen in Kärnten"],
  ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]
];



class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      accounts: []
    }


  }
  // state = {
  //   accounts: []
  // };

  componentDidMount() {
    this.getAccounts();
  }

  getAccounts = async () => {
    try {
      let res = await axios.get("http://localhost:4000/api/accounts");
      //console.log("res: " + JSON.stringify(res) ); //WORKS

      let { data } = res.data;

      this.setState({ accounts: data });

    } catch (err) {

      console.log(err.response);
      //reject(err);
    }



  };



  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }




  render() {

    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Account List"
                category="Complete list of DNA Customers. Please use search to filter."
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              { this.getAccounts }
            </Col>
          </Row>

          {(() => {
            if (process.env.REACT_APP_ENV==='dev') {
              return (
                <Row id="devInfo" className="alert-success">
                  <Col md={12} className="p-4">
                    <h3>Dev Info (does not show in production)</h3>
                    Stripe Test Key: {process.env.REACT_APP_STRIPE_TEST_PUBLISHABLE}
                    {
                      console.log("Stripe API KEY: " + process.env.REACT_APP_STRIPE_TEST_PUBLISHABLE)}
                      {console.log(this.state.accounts)}

                  </Col>

                </Row>
              )
            }
          })()
        }


        </Grid>
      </div>
    );
  }
}

export default Dashboard;
