import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Star from "@material-ui/icons/Star";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { bugs, website, server } from "variables/general.js";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Button, Form , Dropdown, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdDelete,MdModeEdit} from "react-icons/md";
import DataListLoader from '../../assets/DataListLoader'
import { isMobile } from "react-device-detect";
import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";


export default class Dashboard extends React.Component {
 

imageFormatter(cell, row){
  console.log("adsd"+cell)
 return (<img style={{width:60}} src={cell}/>)
}
 
indexN(cell, row, enumObject, index) {
 return (<div>{index+1}</div>) 
}

buttonFormatter(cell, row){

    console.log("cell"+cell + " "+row.answer)
   return (
       <div>
            <Button style={{borderRadius:'100%',margin:2, backgroundColor:'green'}} type="button"  onClick={() => {this.setState({
                          smShowEdit: true,
                          idData: cell,
                          que: row.question,
                          ans: row.answer,
                          status: row.status         
                          
                      })}}>
                   <MdModeEdit/>
           </Button>
           <Button style={{borderRadius:'100%',margin:2, backgroundColor:'red'}} type="button" onClick={() => {this.deleteButton(cell)}}>
                   <MdDelete/>
           </Button>
       </div>
   )
  }     

  render(){
    const options = {
      insertModalHeader: this.createCustomModalHeader
    };
    
    return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p style={styles.cardCategory}>Daily Orders</p>
              <h3 style={styles.cardTitle}>
                0
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div style={styles.stats}>
              <Icon>content_copy</Icon>
                Total orders till date :- 13
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p style={styles.cardCategory}>Today Revenue</p>
              <h3 style={styles.cardTitle}>0</h3>
            </CardHeader>
            <CardFooter stats>
              <div style={styles.stats}>
                <DateRange />
                Total revenue till date :- 1003
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
              <Accessibility />
              </CardIcon>
              <p style={styles.cardCategory}>Active Users</p>
              <h3 style={styles.cardTitle}>75</h3>
            </CardHeader>
            <CardFooter stats>
              <div style={styles.stats}>
              <Accessibility />
                Tracked from Data Analytics
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Star />
              </CardIcon>
              <p style={styles.cardCategory}>Today Reward</p>
              <h3 style={styles.cardTitle}>0</h3>
            </CardHeader>
            <CardFooter stats>
              <div style={styles.stats}>
                <Star />
                Total Reward till data :- 200
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>

      <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
            <CardHeader color="primary">
            <h4 style={styles.cardTitleWhite}>Recent Orders</h4>
            <p style={styles.cardCategoryWhite}>
              List of all Orders
            </p>
          </CardHeader>
              <CardBody style={{marginLeft:10, marginRight: 10}}>
               

            <BootstrapTable
             {...isMobile? 
                        
                { tableHeaderClass:"table-responsive",
                 tableBodyClass:"table-responsive",
                 tableContainerClass:"table-responsive",
                 tableFooterClass:"table-responsive"}
                 : null }
        
         autoCollapse={true}
            //   data={ this.state.services }
              pagination={ true }
              // options={options}
              search={ true }>
                 <TableHeaderColumn dataField="any" isKey={true} dataFormat={this.indexN}>S.No.</TableHeaderColumn>
              <TableHeaderColumn dataField='question' >User Name</TableHeaderColumn>
              <TableHeaderColumn dataField='answer'  >Contact</TableHeaderColumn>  
               <TableHeaderColumn dataField='status'  >Address</TableHeaderColumn>
               <TableHeaderColumn dataField='question' >Order Date</TableHeaderColumn>
              <TableHeaderColumn dataField='answer'  >Status</TableHeaderColumn>  
               <TableHeaderColumn dataField='status'  >Items List</TableHeaderColumn>
               <TableHeaderColumn dataField='_id' dataFormat={this.buttonFormatter.bind(this)} >Action</TableHeaderColumn>
                
            </BootstrapTable>
              </CardBody>
            </Card>
          </GridItem>
          
        </GridContainer>
     

        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
            <CardHeader color="primary">
            <h4 style={styles.cardTitleWhite}>Recent Users</h4>
            <p style={styles.cardCategoryWhite}>
              List of all Orders
            </p>
          </CardHeader>
              <CardBody style={{marginLeft:10, marginRight: 10}}>
               

            <BootstrapTable
             {...isMobile? 
                        
                { tableHeaderClass:"table-responsive",
                 tableBodyClass:"table-responsive",
                 tableContainerClass:"table-responsive",
                 tableFooterClass:"table-responsive"}
                 : null }
        
         autoCollapse={true}
            //   data={ this.state.services }
              pagination={ true }
              // options={options}
              search={ true }>
                 <TableHeaderColumn dataField="any" isKey={true} dataFormat={this.indexN}>S.No.</TableHeaderColumn>
              <TableHeaderColumn dataField='question' >User Name</TableHeaderColumn>
              <TableHeaderColumn dataField='answer'  >Contact</TableHeaderColumn>  
               <TableHeaderColumn dataField='status'  >Address</TableHeaderColumn>
               <TableHeaderColumn dataField='_id' dataFormat={this.buttonFormatter.bind(this)} >Action</TableHeaderColumn>
                
            </BootstrapTable>
              </CardBody>
            </Card>
          </GridItem>
          
        </GridContainer>
     
    </div>
  );}
}
