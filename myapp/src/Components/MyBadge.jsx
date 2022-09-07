import { Component } from "react";
import { Badge } from "react-bootstrap";

class MyBadge extends Component{
    render(){
        return(
            <>
            <Badge pill variant={this.props.color}>{this.props.content}</Badge>
            </>
        )
    }
}
export default MyBadge