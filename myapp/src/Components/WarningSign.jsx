
import {Alert} from 'react-bootstrap'


 const WarningSign= (props) => {
    return(
        <Alert key={'dangers'} variant={'danger'} >{props.text}</Alert>
        
    )
}

export default WarningSign