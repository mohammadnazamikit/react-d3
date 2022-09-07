import { Component } from "react";
import arrys from './books (1)/history.json'
import { Card } from "react-bootstrap";

class SingleBook extends Component {
    
    render() {
        return(
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.Img} />
        <Card.Body>
          <Card.Title>{this.props.Title}</Card.Title>
        </Card.Body>
            </Card>
                )
            }   
    }
export default SingleBook