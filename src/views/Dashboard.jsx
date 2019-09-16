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
  legendBar,
  thArray,
  tdArray
} from "variables/Variables.jsx";


class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // if (!this.props.isAuthenticated) {
    //   this.props.history.replace('/');
    // }
  }

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

  browseUser(userProp) {
    console.log('USER PROP: ', userProp);
    this.props.history.push({
      pathname: `/admin/account/${userProp[0]}`,
      state: { userQueryById: userProp[1] }
    });
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
                          <tr key={key}
                              onClick={((e) => this.browseUser(prop, e))}>
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

          {(() => {
            if (process.env.REACT_APP_ENV==='dev') {
              return (
                <Row id="devInfo" className="alert-success">
                  <Col md={12} className="p-4">
                    <h3>Dev Info (does not show in production)</h3>
                    Stripe Test Key: {process.env.REACT_APP_STRIPE_TEST_PUBLISHABLE}
                    {console.log("Stripe API KEY: " + process.env.REACT_APP_STRIPE_TEST_PUBLISHABLE)}
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
