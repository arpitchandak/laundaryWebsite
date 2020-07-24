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


export default class Items extends React.Component {
    constructor(props){
        super(props)

        this.state = {
          serviceTypes: [],
          category_for: [],
          itemlist: [],
          loading: true,
          name: '',
          selected_category: '',
          selected_service: '',
          selected_category_id: '',
          selected_service_id: '',
          imageLink: '',
          description: '',
          status: 0,
          price: '',
          idData: ''

        }
    }


fetchalldata(){

      fetch('https://laundry-freelance.herokuapp.com/admin/category', {
        method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson1) => {
       

        fetch('https://laundry-freelance.herokuapp.com/admin/services', {
        method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson2) => {
        
            fetch('https://laundry-freelance.herokuapp.com/admin/product', {
            method: 'GET'
            })
            .then((response) => response.json())
            .then((responseJson3) => {
            
                this.setState({
                    serviceTypes: responseJson2.result,
                    category_for: responseJson1.result,
                    itemlist: responseJson3,
                    isloading: false,
                    selected_category: responseJson1.result[0].name,
                    selected_service: responseJson2.result[0].name
                })

            })
            .catch((error) => {
                console.error(error);
            });

        })
        .catch((error) => {
            console.error(error);
        });

    })
    .catch((error) => {
        console.error(error);
    });

    }


    componentDidMount(){
        this.fetchalldata()
        this.forceUpdate()
    }


      handleClick = (rowKey) => {
        alert(this.refs.table.getPageByRowKey(rowKey));
      }

      imageFormatter(cell, row){
        console.log("adsd"+cell)
       return (<img style={{width:40}} src={cell}/>)
   }
   



   checkURL(url) {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
  }
  
  addslider(){
  
    // alert("Work In progress")

    console.log(this.state.selected_category+ " "+ this.state.selected_service+" "+this.state.description+" "+this.state.imageLink)
    
      if (this.state.name.length < 1 || 
        this.state.selected_category.length < 1 ||
        this.state.selected_service.length < 1  ||this.state.description.length < 1||this.state.imageLink.length < 1) {
        console.log("no")
        alert("Enter the required Data!!")
    } else {
        let a = this.checkURL(this.state.imageLink)

        let selectCat, selectServ 

        this.state.category_for.map((data,index) => {
          if(data.name === this.state.selected_category){
            selectCat = data._id
          }
        })

        this.state.serviceTypes.map((data,index) => {
          if(data.name === this.state.selected_service){
            selectServ = data._id
          }
        })


        if (a) {
  
            fetch('https://laundry-freelance.herokuapp.com/admin/product', {
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json',
                'Accept':'application/json'
                
              },
            body:JSON.stringify({
              "name": this.state.name,
              "image": this.state.imageLink,
              "description": this.state.description,
              "price": this.state.price,
              "services": selectServ,
              "category": selectCat,
              "status": this.state.status
            })
            })
            .then((response) => response.json())
            .then((responseJson3) => {
            
               
  //              console.log(responseJson3)
                this.fetchalldata()
                // window.location.reload(false);
  
  
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
  
  
  
  
  
  
  editButton(cell){

  
    console.log(cell)
  
   
    if (this.state.name.length < 1 || 
      this.state.selected_category.length < 1 ||
      this.state.selected_service.length < 1  ||this.state.description.length < 1||this.state.imageLink.length < 1) {
      console.log("no")
      alert("Enter the required Data!!")
  } else {
      let a = this.checkURL(this.state.imageLink)

      let selectCat, selectServ 

      this.state.category_for.map((data,index) => {
        if(data.name === this.state.selected_category){
          selectCat = data._id
        }
      })

      this.state.serviceTypes.map((data,index) => {
        if(data.name === this.state.selected_service){
          selectServ = data._id
        }
      })


      if (a) {
  
          fetch('https://laundry-freelance.herokuapp.com/admin/product/'+cell, {
          method: 'POST',
          headers:{
              'Content-Type' : 'application/json',
              'Accept':'application/json'
              
            },
          body:JSON.stringify({
              "name": this.state.name,
              "image": this.state.imageLink,
              "description": this.state.description,
              "price": this.state.price,
              "services": selectServ,
              "category": selectCat,
              "status": this.state.status
          })
          })
          .then((response) => response.json())
          .then((responseJson3) => {
          
             
              console.log(responseJson3)
            this.fetchalldata()
            this.setState({
              smShowEdit: false
          })
  
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
    fetch('https://laundry-freelance.herokuapp.com/admin/delete/product/'+cell, {
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
  


  seteditData(row,cell){

    let selectCat, selectServ 

        this.state.category_for.map((data,index) => {
          if(data._id === row.category){
            selectCat = data.name
          }
        })

        this.state.serviceTypes.map((data,index) => {
          if(data._id === row.services){
            selectServ = data.name
          }
        })


        console.log(selectCat + " "+ selectServ)

        this.setState({
          smShowEdit: true,
          name: row.name,
          selected_category_id: row.category,
          selected_service_id: row.services,
          selected_category: selectCat,
          selected_service: selectServ,
          imageLink: row.image,
          description: row.description,
          status: row.status,
          price: row.price,
          idData: cell
      })

      this.forceUpdate()
  }



       
   indexN(cell, row, enumObject, index) {
       return (<div>{index+1}</div>) 
   }

   buttonFormatter(cell, row){

    console.log("cell"+cell + " "+row.image)
   return (
       <div>
            <Button style={{borderRadius:'100%',margin:2, backgroundColor:'green'}} type="button"  onClick={() => {this.seteditData(row,cell)}}>
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

  categoryFormat(row){

    let selectCat, selectServ 

    // console.log(row)

    this.state.category_for.map((data,index) => {
      // console.log(data._id+" "+row.category)
      if(data._id === row){
        selectCat = data.name
      }
    })

    // console.log(selectCat)
    return <p>{selectCat}</p>

  }

  serviceFormat(row){
    
    let selectCat, selectServ 


    this.state.serviceTypes.map((data,index) => {
      if(data._id === row){
        selectServ = data.name
      }
    })

  return <p>{selectServ}</p>

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
                <h4 className={styles.cardTitleWhite}>Items</h4>
                <p className={styles.cardCategoryWhite}>
                  List of all Items
                </p>
              </CardHeader>
              <CardBody style={{marginLeft:20,marginRight:20}}>
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



<Button style={{marginBottom:10}} onClick={() => {this.setState({
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
                            Add New Item
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label> Name</Form.Label>
                                    <Form.Control required={true}   onChange={e => this.setState({ name: e.target.value })}/>
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Turkish item Name</Form.Label>
                                    <Form.Control required={true} placeholder="Name" onChange={e => {this.setState({ tname: e.target.value })}}/>
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Category</Form.Label>
                                <Form.Control as="select"  onChange={(e) => {this.setState({selected_category: e.target.value})}}>
                                  {this.state.category_for.map((data,index) => {
                                    return(<option key={data._id}>{data.name}</option>)
                                  })}
                                </Form.Control>
                              </Form.Group>

                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control required={true}   onChange={e => this.setState({ price: e.target.value })}/>
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Service</Form.Label>
                                <Form.Control as="select" onChange={(e) => {this.setState({selected_service: e.target.value})}}>
                                  {this.state.serviceTypes.map((data,index) => {
                                    return(<option key={data._id}>{data.name}</option>)
                                  })}
                                </Form.Control>
                              </Form.Group>
                                
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label> Description</Form.Label>
                                    <Form.Control required defaultValue={this.state.description} as="textarea" rows="3" onChange={e => {this.setState({ description: e.target.value })}} />
                                </Form.Group>


                                <Form.Group controlId="exampleForm.ControlInput2">
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control required placeholder= "Image Link"  onChange={e => {this.setState({ imageLink : e.target.value })}} />
                                    <p>OR</p>
                                    <Form.Group>
                                        <Form.File id="exampleFormControlFile1" label="Upload Image" onChange={e => {this.setState({ imageLink: e.target.value })}} />
                                    </Form.Group>
                                </Form.Group>


                                <Form.Label>Status</Form.Label>
                                    <br></br>
                                    <Form.Check checked={this.state.status == 1? true: false} name="status" inline label="Active" type="radio" id={`inline-radio-1`} onChange={() => {this.setState({status: 1})}}/>
                                    <Form.Check checked={this.state.status == 1? false: true} inline name="status" label="Not Active" type="radio" id={`inline-radio-2`} onChange={() => {this.setState({status: 0})}}/>


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

                                

                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Turkish item Name</Form.Label>
                                    <Form.Control required={true} placeholder="Name" onChange={e => {this.setState({ tname: e.target.value })}}/>
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Category</Form.Label>
                                <Form.Control as="select"  defaultValue={this.state.selected_category} onChange={(e) => {this.setState({selected_category: e.target.value})}}>
                                  {this.state.category_for.map((data,index) => {
                                    return(<option key={data._id}>{data.name}</option>)
                                  })}
                                </Form.Control>
                              </Form.Group>

                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control required={true}  defaultValue={this.state.price}   onChange={e => this.setState({ price: e.target.value })}/>
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Service</Form.Label>
                                <Form.Control as="select"  defaultValue={this.state.selected_service}  onChange={(e) => {this.setState({selected_service: e.target.value})}}>
                                  {this.state.serviceTypes.map((data,index) => {
                                    return(<option key={data._id}>{data.name}</option>)
                                  })}
                                </Form.Control>
                              </Form.Group>
                                
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label> Description</Form.Label>
                                    <Form.Control required defaultValue={this.state.description} as="textarea" rows="3" onChange={e => {this.setState({ description: e.target.value })}} />
                                </Form.Group>


                                <Form.Group controlId="exampleForm.ControlInput2">
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control required  defaultValue={this.state.imageLink}   onChange={e => {this.setState({ imageLink : e.target.value })}} />
                                    <p>OR</p>
                                    <Form.Group>
                                        <Form.File id="exampleFormControlFile1" label="Upload Image" onChange={e => {this.setState({ imageLink: e.target.value })}} />
                                    </Form.Group>
                                </Form.Group>


                                <Form.Label>Status</Form.Label>
                                    <br></br>
                                    <Form.Check checked={this.state.status == 1? true: false} name="status" inline label="Active" type="radio" id={`inline-radio-1`} onChange={() => {this.setState({status: 1})}}/>
                                    <Form.Check checked={this.state.status == 1? false: true} inline name="status" label="Not Active" type="radio" id={`inline-radio-2`} onChange={() => {this.setState({status: 0})}}/>

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

                exportCSV={true}

              data={ this.state.itemlist.result }
              pagination={ true }
              options={options}
              search={ true }>
                 <TableHeaderColumn dataField="any" width='5%'  isKey={true} dataFormat={this.indexN}>S.No.</TableHeaderColumn>
              <TableHeaderColumn dataField='image' dataFormat={ this.imageFormatter} >Slider Image</TableHeaderColumn>
              <TableHeaderColumn dataField='name' >Product Name</TableHeaderColumn>
              <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
              <TableHeaderColumn dataField='category' dataFormat={this.categoryFormat.bind(this)}>For</TableHeaderColumn>
              <TableHeaderColumn dataField='services' dataFormat={this.serviceFormat.bind(this)}>Service Type</TableHeaderColumn>
              <TableHeaderColumn dataField='description'  >Description</TableHeaderColumn>
              <TableHeaderColumn dataField='status' dataFormat={this.statusFormat} >Status</TableHeaderColumn>
              <TableHeaderColumn dataField='_id' dataFormat={this.buttonFormatter.bind(this)} >Action</TableHeaderColumn>

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
            <h4 className={styles.cardTitleWhite}>Items</h4>
            <p className={styles.cardCategoryWhite}>
              List of all items
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
