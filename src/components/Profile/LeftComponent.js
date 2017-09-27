import React, {Component} from 'react'; 


class LeftComponent extends Component{
    render(){
        return (
            <div className="list-group">
                <button type="button" className="list-group-item disabled">Profile Setting</button>
                <button type="button" className="list-group-item"><i className="glyphicon glyphicon-info-sign"></i> Bio</button>
                <button type="button" className="list-group-item">Education</button>
                <button type="button" className="list-group-item">Experience</button>
                <button type="button" className="list-group-item">Reference</button>
        </div>

        )
    }
}

export default LeftComponent; 
