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


export default class Settings extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            isloading: true,
            item_for: '',
            service_select: '',
            itemsarray: [],
            item_price: '',
            smShow: false,
            name: "",
            imgLinkapp: "",
            imgLinksplash: '',
            smShowEdit: false,
            editData: [],
            idData: null,
            invoicelabel: '',
            address: '',
            maxdelivery: '',
            ordermin: ''

        }
    }



    componentDidMount(){
        // fetch('https://scenic-lassen-volcanic-38075.herokuapp.com/fortype', {
        //     method: 'GET',
        // })
        // .then((response) => response.json())
        // .then((responseJson1) => {
           

        //     fetch('https://scenic-lassen-volcanic-38075.herokuapp.com/dashboard/service_type', {
        //     method: 'GET',
        //     })
        //     .then((response) => response.json())
        //     .then((responseJson2) => {
            
                // fetch('https://scenic-lassen-volcanic-38075.herokuapp.com/infoSlider', {
                // method: 'GET',
                // })
                // .then((response) => response.json())
                // .then((responseJson3) => {
                
                    this.setState({
                        
                        // itemsarray: responseJson3,
                        isloading: false
                    })


                // })
                // //If response is not in json then in error
                // .catch((error) => {
                //     //Error 
                //     console.error(error);
                // });

        //     })
        //     //If response is not in json then in error
        //     .catch((error) => {
        //         //Error 
        //         console.error(error);
        //     });

        // })
        // //If response is not in json then in error
        // .catch((error) => {
        //     //Error 
        //     console.error(error);
        // });
    }


      handleClick = (rowKey) => {
        alert(this.refs.table.getPageByRowKey(rowKey));
      }

      imageFormatter(cell, row){
        console.log("adsd"+cell)
       return (<img style={{width:40}} src={cell}/>)
   }
   



   checkURL(url) {
    return(url.match(/\.(svg)$/) != null);
  }
  
  addslider(){
  
    alert("Work In progress")

//     console.log(this.state.name+ " "+ this.state.imgLink)
    
//       if (this.state.name == "" || this.state.name== null || this.state.imgLink == "" || this.state.imgLink== null) {
//         console.log("no")
//         alert("Enter the required Data!!")
//     } else {
//         let a = this.checkURL(this.state.imgLink)
  
//         if (a) {
  
//             fetch('https://laundry-freelance.herokuapp.com/admin/services', {
//             method: 'POST',
//             headers:{
//                 'Content-Type' : 'application/json',
//                 'Accept':'application/json'
                
//               },
//             body:JSON.stringify({
//               "name": this.state.name,
//               "image": this.state.imgLink,
//               "description": "HHHHHH"
//             })
//             })
//             .then((response) => response.json())
//             .then((responseJson3) => {
            
               
//   //              console.log(responseJson3)
                
//                 window.location.reload(false);
  
  
//             })
//             //If response is not in json then in error
//             .catch((error) => {
//                 //Error 
//                 console.error(error);
//             });
           
              
//         } else {
//             alert("Enter a url")   
//         }
//     }
  
  }
  
  
  
  
  
  
  editButton(cell){
    alert("Work In progress")

  
//     console.log(cell)
  
//     if (this.state.name == '' || this.state.name== null || this.state.imgLink == '' || this.state.imgLink== null) {
//       console.log("no")
//       alert("Enter the required Data!!")
//   } else {
//       let a = this.checkURL(this.state.imgLink)
  
//       if (a) {
  
//           fetch('https://laundry-freelance.herokuapp.com/admin/services'+cell, {
//           method: 'PATCH',
//           headers:{
//               'Content-Type' : 'application/json',
//               'Accept':'application/json'
              
//             },
//           body:JSON.stringify({
//             "name": this.state.name,
//             "image": this.state.imgLink,
//             "description": "HHHHHH"
//           })
//           })
//           .then((response) => response.json())
//           .then((responseJson3) => {
          
             
//               console.log(responseJson3)
//               window.location.reload(false);
  
  
//           })
//           //If response is not in json then in error
//           .catch((error) => {
//               //Error 
//               console.error(error);
//           });
         
            
//       } else {
//           alert("Enter a url")   
//       }
//   }
  }
  
  deleteButton(cell){
//    fetch('https://laundry-freelance.herokuapp.com/admin/services/'+cell, {
//       method: 'DELETE',
//       headers:{
//           'Content-Type' : 'application/json',
//           'Accept':'application/json'
          
//         },
//       body:JSON.stringify({
//           "_id": cell
//       })
//       })
//       .then((response) => response.json())
//       .then((responseJson3) => {
      
  
//           console.log(responseJson3)
//           window.location.reload(false);
  
  
//       })
//       .catch((error) => {
//           console.error(error);
//       });


alert("Work In progress")
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
                          imgLink: row.img,
                          content: row.content
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
           <GridItem xs={12} sm={12} md={12} style={{display:'flex', flexDirection:isMobile ? 'column' : 'row'}}>
            <Card style={{ margin:isMobile? 0 : 20, marginTop: 20}}>
              <CardBody >
                <h5>App Name</h5>
                <Form.Control style={{width:'70%'}} required={true}  defaultValue={this.state.name}  onChange={e => this.setState({ name: e.target.value })}/>
              </CardBody>
              <Button style={{backgroundColor:'#33302b', borderColor:'#33302b'}}>Change</Button>
            </Card>

            <Card style={{ margin:isMobile? 0 : 20, marginTop: 20}}>
              <CardBody >
                <h5>Splash Image</h5>
                <Form.File id="exampleFormControlFile1" label="Upload Image" onChange={e => {this.setState({ imgLinksplash: e.target.value })}} />
                <br></br>
                <p>Current Image : </p>

              </CardBody>
              <Button style={{backgroundColor:'#33302b', borderColor:'#33302b'}}>Change</Button>
            </Card>

            <Card style={{ margin:isMobile? 0 : 20, marginTop: 20}}>
              <CardBody >
                <h5>Max. Delivery Range</h5>
                <Form.Control style={{width:'70%'}} required={true}  defaultValue={this.state.maxdelivery}  onChange={e => this.setState({ maxdelivery: e.target.value })}/>
              </CardBody>
              <Button style={{backgroundColor:'#33302b', borderColor:'#33302b'}}>Change</Button>
            </Card>

            <Card style={{ margin:isMobile? 0 : 20, marginTop: 20}}>
              <CardBody >
                <h5>Invoice Label</h5>
                <Form.Control style={{width:'70%'}} required={true}  defaultValue={this.state.invoicelabel}  onChange={e => this.setState({ invoicelabel: e.target.value })}/>
              </CardBody>
              <Button style={{backgroundColor:'#33302b', borderColor:'#33302b'}}>Change</Button>
            </Card>

          </GridItem>

          <GridItem xs={12} sm={12} md={12} style={{display:'flex', flexDirection:isMobile ? 'column' : 'row'}}>
            

            <Card style={{ margin:isMobile? 0 : 20, marginTop: 20}}>
              <CardBody >
                <h5>App Logo</h5>
                <Form.File id="exampleFormControlFile1" label="Upload Image" onChange={e => {this.setState({ imgLinkapp: e.target.value })}} />
                <br></br>
                <p>Current Image : </p>

              </CardBody>
              <Button style={{backgroundColor:'#33302b', borderColor:'#33302b'}}>Change</Button>
            </Card>

            <Card style={{ margin:isMobile? 0 : 20, marginTop: 20}}>
              <CardBody >
                <h5>Order Min. Charge</h5>
                <Form.Control style={{width:'70%'}} required={true}  defaultValue={this.state.ordermin}  onChange={e => this.setState({ ordermin: e.target.value })}/>
              </CardBody>
              <Button style={{backgroundColor:'#33302b', borderColor:'#33302b'}}>Change</Button>
            </Card>

            <Card style={{ margin:isMobile? 0 : 20, marginTop: 20}}>
              <CardBody >
                <h5>Comapny Address</h5>
                <Form.Control style={{width:'70%'}} required={true}  defaultValue={this.state.address}  onChange={e => this.setState({ address: e.target.value })}/>
              </CardBody>
              <Button style={{backgroundColor:'#33302b', borderColor:'#33302b'}}>Change</Button>
            </Card>

          </GridItem>

            
          <GridItem xs={12} sm={12} md={12} style={{marginTop:30}}>
            <Card>
              <CardHeader >
                <h4 className={styles.cardTitleWhite}>Info Sliders</h4>
              </CardHeader>
              <CardBody style={{marginLeft:20,marginRight:20}}>



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
                            Add New 
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label> Name</Form.Label>
                                    <Form.Control required={true}   onChange={e => this.setState({ name: e.target.value })}/>
                                </Form.Group>

                                
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Content</Form.Label>
                                    <Form.Control required as="textarea" rows="3"   onChange={e => this.setState({ content: e.target.value })} />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlInput2">
                                    <Form.Label>Image</Form.Label>
                                    <Form.Group>
                                        <Form.File id="exampleFormControlFile1" label="Upload Image" onChange={e => {this.setState({ imgLink: e.target.value })}} />
                                    </Form.Group>
                                </Form.Group>

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
                                    <Form.Label> Name</Form.Label>
                                    <Form.Control required={true} defaultValue={this.state.name}   onChange={e => this.setState({ name: e.target.value })}/>
                                </Form.Group>

                                
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Content</Form.Label>
                                    <Form.Control required as="textarea" defaultValue={this.state.content}  rows="3"   onChange={e => this.setState({ content: e.target.value })} />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlInput2">
                                    <Form.Label>Image</Form.Label>
                                    <Form.Group>
                                        <Form.File id="exampleFormControlFile1" label="Upload Image" onChange={e => {this.setState({ imgLink: e.target.value })}} />
                                    </Form.Group>
                                </Form.Group>
                                <p>Current Image: { this.state.imgLink }</p>

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


                    data={ this.state.itemsarray }
                    pagination={ true }
                    options={options}
                    search={ true }>
                    <TableHeaderColumn dataField="any"  isKey={true} dataFormat={this.indexN}>S.No.</TableHeaderColumn>
                    <TableHeaderColumn dataField='img' dataFormat={ this.imageFormatter} >Slider Image</TableHeaderColumn>
                    <TableHeaderColumn dataField='name' > Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='content'>Content</TableHeaderColumn>
                    <TableHeaderColumn dataField='_id' dataFormat={this.buttonFormatter.bind(this)} >Action</TableHeaderColumn>

                    </BootstrapTable>
              </CardBody>
            </Card>
          </GridItem>

      
          
        </GridContainer>
      );
} else {
  return (
    null
  );
}
 
 }
}
