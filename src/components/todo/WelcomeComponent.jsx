import React, { Component } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

class WelcomeComponent extends Component {

    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className='container'>
                    Welcome {this.props.params.name}. You can manage your todos <Link to="/todos">here</Link>
                </div>
            </>
        )
    }
}

function WithParams(props) {
    let name = useParams();
    return <WelcomeComponent {...props} params={name} />
}

export default WithParams