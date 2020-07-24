import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import { MdDelete,MdModeEdit} from "react-icons/md";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Button, Form , Dropdown, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import DataListLoader from '../../assets/DataListLoader'
import { isMobile } from "react-device-detect";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};


export default class Users extends React.Component {
  constructor(props){
    super(props)

    this.state = {
       
        isloading: true,
        users: [],
        smShow: false,
        que: "",
        ans: "",
        status:"",
        smShowEdit: false,
        editData: [],
        idData: null,
       
    }
}

componentDidMount(){

    fetch('https://laundry-freelance.herokuapp.com/users', {
        method: 'GET',
        })
        .then((response) => response.json())
        .then((responseJson2) => {

                this.setState({
                    users: responseJson2,
                    isloading: false
                })
                console.log(responseJson2)
         
    })
    .catch((error) => {
        console.error(error);
    });
}


checkURL(url) {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
  }
  
 



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

  if (!this.state.isloading) {

    const options = {
        insertModalHeader: this.createCustomModalHeader
      };
      return (
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
            <CardHeader color="primary">
            <h4 className={styles.cardTitleWhite}>Users</h4>
            <p className={styles.cardCategoryWhite}>
              List of all Users
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
              data={ this.state.users.result }
              pagination={ true }
              exportCSV
              options={options}
              search={ true }>
                 <TableHeaderColumn dataField="any" isKey={true} dataFormat={this.indexN}>S.No.</TableHeaderColumn>
              <TableHeaderColumn dataField='firstname' >Name</TableHeaderColumn>
              <TableHeaderColumn dataField='email' >Email</TableHeaderColumn>
              <TableHeaderColumn dataField='contact'  >Contact</TableHeaderColumn>  
               <TableHeaderColumn dataField='source'  >Source</TableHeaderColumn>
               <TableHeaderColumn dataField='login_method' >Login Method</TableHeaderColumn>
               <TableHeaderColumn dataField='status'  >Status</TableHeaderColumn>
               {/* <TableHeaderColumn dataField='_id' dataFormat={this.buttonFormatter.bind(this)} >Action</TableHeaderColumn> */}
                
            </BootstrapTable>
              </CardBody>
            </Card>
          </GridItem>
          
        </GridContainer>
      );
} else {
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={styles.cardTitleWhite}>Users</h4>
            <p className={styles.cardCategoryWhite}>
              List of all Users
            </p>
          </CardHeader>
          <CardBody>

            <DataListLoader/>
            {/* <Table
              tableHeaderColor="primary"
              tableHead={["Name", "Country", "City", "Salary"]}
              tableData={[
                ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
                ["Mason Porter", "Chile", "Gloucester", "$78,615"]
              ]}
            /> */}
          </CardBody>
        </Card>
      </GridItem>
      
    </GridContainer>
  );
}
 
 }
}
