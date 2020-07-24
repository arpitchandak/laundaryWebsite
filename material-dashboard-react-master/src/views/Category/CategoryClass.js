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
import { isMobile } from "react-device-detect";
import axios from 'axios';

import DataListLoader from '../../assets/DataListLoader'

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


export default class CategoryClass extends React.Component {
  constructor(props){
    super(props)

    this.state = {
       
      isloading: true,
      services: [],
      smShow: false,
      name: "test",
      imgLink: null,
      smShowEdit: false,
      editData: [],
      idData: null,
      imgname: '',
      file : [],
      status: 1
       
    }

    this.fileInput = React.createRef();

}


handleChange(e){
  console.log("sad"+typeof e.target.files[0])
  const file = e.target.files[0]; // accesing file
  console.log(file);
    this.setState({
      file: file
    })
  }


  fetchalldata(){
    fetch('https://laundry-freelance.herokuapp.com/admin/category', {
          method: 'GET',
          })
          .then((response) => response.json())
          .then((responseJson2) => {
  
                  this.setState({
                      services: responseJson2,
                      isloading: false
                  })
                  console.log(responseJson2)
           
      })
      .catch((error) => {
          console.error(error);
      });
  }
  
  componentDidMount(){
  
    this.fetchalldata()
      
  }
  
  checkURL(url) {
    return(url.match(/\.(jpeg|jpg|png)$/) != null);
  }
  
  
  addslider(){
  
    console.log(this.state.name+ " "+ this.state.imgLink)
    
      if (this.state.name == "" || this.state.name== null || this.state.imgLink == "" || this.state.imgLink== null) {
        console.log("no")
        alert("Enter the required Data!!")
    } else {
        let a = this.checkURL(this.state.imgLink)
  
        if (a) {
  
            fetch('https://laundry-freelance.herokuapp.com/admin/category', {
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json',
                'Accept':'application/json'
                
              },
            body:JSON.stringify({
              "name": this.state.name,
              "image": this.state.imgLink,
              "description": "HHHHHH",
              "status":this.state.status
            })
            })
            .then((response) => response.json())
            .then((responseJson3) => {
            
               
  //              console.log(responseJson3)
                
                window.location.reload(false);
  
  
            })
            //If response is not in json then in error
            .catch((error) => {
                //Error 
                console.error(error);
            });
           
              
        } else {
            alert("Enter a valid url")   
        }
    }
  
  }
  
  
  
  
  
  
  editButton(cell){
  
  
    console.log(cell)
  
    if (this.state.name == '' || this.state.name== null || this.state.imgLink == '' || this.state.imgLink== null) {
      console.log("no")
      alert("Enter the required Data!!")
  } else {
      let a = this.checkURL(this.state.imgLink)
  
      if (a) {
  
          fetch('https://laundry-freelance.herokuapp.com/admin/category/'+cell, {
          method: 'POST',
          headers:{
              'Content-Type' : 'application/json',
              'Accept':'application/json'
              
            },
          body:JSON.stringify({
            "name": this.state.name,
            "image": this.state.imgLink,
            "description": "HHHHHH",
            "status":this.state.status

          })
          })
          .then((response) => response.json())
          .then((responseJson3) => {
          
             
              console.log(responseJson3)
              window.location.reload(false);
  
  
          })
          //If response is not in json then in error
          .catch((error) => {
              //Error 
              console.error(error);
          });
         
            
      } else {
          alert("Enter a url")   
      }
  }
  }
  
  deleteButton(cell){
    fetch('https://laundry-freelance.herokuapp.com/admin/delete/category/'+cell, {
       method: 'DELETE',
       })
       .then((response) => response.json())
       .then((responseJson3) => {
       
   
           console.log(responseJson3)
           this.fetchalldata()
   
   
       })
       .catch((error) => {
           console.error(error);
       });
   }
  
  


imageFormatter(cell, row){
  console.log("adsd"+cell)
 return (<img style={{width:60}} src={cell}/>)
}
 
indexN(cell, row, enumObject, index) {
 return (<div>{index+1}</div>) 
}

buttonFormatter(cell, row){

  console.log("cell"+cell + " "+row.image)
 return (
     <div>
          <Button style={{borderRadius:'100%',margin:2, backgroundColor:'green'}} type="button"  onClick={() => {this.setState({
                        smShowEdit: true,
                        idData: cell,
                        name: row.name,
                        imgLink: row.image,
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

statusFormat(cell, row){
  if (row.status === 1) {
      return (<Button style={{backgroundColor:'green'}}>Active</Button>)
  } else {
      return (<Button style={{backgroundColor:'red'}}>Not Active</Button>)
      
  }
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
                <h4 className={styles.cardTitleWhite}>Categories</h4>
                <p className={styles.cardCategoryWhite}>
                  List of all category
                </p>
              </CardHeader>
              <CardBody style={{marginLeft:10, marginRight: 10}}>
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

<Button onClick={() => {this.setState({
                        smShow: true,
                    })}}>
                        Add New
                    </Button>

                    <Modal
                        size="lg"
                        show={this.state.smShow}
                        onHide={() => this.setState({
                            smShow: false
                        })}
                        aria-labelledby="example-modal-sizes-title-sm"
                    >
                        <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-sm">
                            Add New Category
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Category Name</Form.Label>
                                    <Form.Control required={true} placeholder="Name" onChange={e => {this.setState({ name: e.target.value })}}/>
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Turkish Name</Form.Label>
                                    <Form.Control required={true}   defaultValue={this.state.tname} onChange={e => this.setState({ tname: e.target.value })}/>
                                </Form.Group>
                                
                                {/* <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Content</Form.Label>
                                    <Form.Control required as="textarea" rows="3" />
                                </Form.Group> */}

                                <Form.Group controlId="exampleForm.ControlInput2">
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control required placeholder="Image Link" onChange={e => this.setState({ imgLink: e.target.value })}  />
                                    <p>OR</p>
                                    <Form.Group>
                                        <Form.File id="exampleFormControlFile1" label="Upload Image" 
                                        //onChange={e => this.setState({ imgLink: e.target.value })}
                                         />
                                    </Form.Group>
                                </Form.Group>

                                <Form.Label>Status</Form.Label>
                                    <br></br>
                                    <Form.Check checked={this.state.status == 1 ? true : false} name="status" inline label="Active" type="radio" id={`inline-radio-1`} onChange={() => {this.setState({status: 1})}}/>
                                    <Form.Check checked={this.state.status == 1 ? false : true} inline name="status" label="Not Active" type="radio" id={`inline-radio-2`} onChange={() => {this.setState({status: 0})}}/>


                                <hr></hr>
                                <Button style={{float:'right'}} onClick={() => this.addslider() }>
                                    ADD
                                </Button>

                        </Modal.Body>
                    </Modal>


                    <Modal
                        size="lg"
                        show={this.state.smShowEdit}
                        onHide={() => this.setState({
                            smShowEdit: false
                        })}
                        aria-labelledby="example-modal-sizes-title-sm"
                    >
                        <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-sm">
                            Edit
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Category Name</Form.Label>
                                    <Form.Control required={true}   defaultValue={this.state.name} onChange={e => this.setState({ name: e.target.value })}/>
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Turkish Name</Form.Label>
                                    <Form.Control required={true}   defaultValue={this.state.tname} onChange={e => this.setState({ tname: e.target.value })}/>
                                </Form.Group>
                                
                                {/* <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Content</Form.Label>
                                    <Form.Control required as="textarea" rows="3" />
                                </Form.Group> */}

                              <Form.Group controlId="exampleForm.ControlInput2">
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control required defaultValue={this.state.imgLink} onChange={e => this.setState({ imgLink: e.target.value })}  />
                                    <p>OR</p>
                                    <Form.Group>
                                        <Form.File id="exampleFormControlFile1" label="Upload Image" 
                                        //onChange={e => this.setState({ imgLink: e.target.value })}
                                         />
                                    </Form.Group>
                                </Form.Group>

                                <Form.Label>Status</Form.Label>
                                    <br></br>
                                    <Form.Check checked={this.state.status == 1 ? true : false} name="status" inline label="Active" type="radio" id={`inline-radio-1`} onChange={() => {this.setState({status: 1})}}/>
                                    <Form.Check checked={this.state.status == 1 ? false : true} inline name="status" label="Not Active" type="radio" id={`inline-radio-2`} onChange={() => {this.setState({status: 0})}}/>

                                <hr></hr>
                                <Button style={{float:'right'}} onClick={() => this.editButton(this.state.idData) }>
                                    EDIT
                                </Button>

                        </Modal.Body>
                    </Modal>


            <BootstrapTable
              {...isMobile? 
                        
                { tableHeaderClass:"table-responsive",
                 tableBodyClass:"table-responsive",
                 tableContainerClass:"table-responsive",
                 tableFooterClass:"table-responsive"}
                 : null }
        
         autoCollapse={true}
                data={ this.state.services.result}
                pagination={ true }
                options={options}
                search={ true }>
                <TableHeaderColumn dataField="any" width='10%' isKey={true} dataFormat={this.indexN}>S.No.</TableHeaderColumn>
              <TableHeaderColumn dataField='image' dataAlign='center' dataFormat={ this.imageFormatter} width='25%'>Image</TableHeaderColumn>
              <TableHeaderColumn dataField='name'  width='30%'>Category Name</TableHeaderColumn>
              {/* <TableHeaderColumn dataField='turkish_name'  width='30%'>Category Name</TableHeaderColumn> */}
              <TableHeaderColumn dataField='status' dataFormat={ this.statusFormat}  >Status</TableHeaderColumn>
              <TableHeaderColumn dataField='_id' dataFormat={this.buttonFormatter.bind(this)} width='15%'>Action</TableHeaderColumn>
                
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
            <h4 className={styles.cardTitleWhite}>Categories</h4>
            <p className={styles.cardCategoryWhite}>
              List of all category
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
