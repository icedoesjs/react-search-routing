import React, { Component } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardSubTitle,
    MDBCardText,
    MDBCardLink
} from 'mdb-react-ui-kit';

export default class PackageCard extends Component {
    render() {
        console.log(this.props)
        return (
            <MDBCard>
                <MDBCardBody className='package-card'>
                    <MDBCardTitle>{this.props.data.name}</MDBCardTitle>
                    <MDBCardSubTitle>Developed by <strong>{this.props.data.publisher.username}</strong> | {this.props.data.maintainers.length} maintainers</MDBCardSubTitle>
                    <MDBCardText>
                    {this.props.data.description}
                    </MDBCardText>
                    <MDBCardLink href={this.props.data.links.npm}>Package</MDBCardLink>
                    <MDBCardLink href={this.props.data.links.repository}>Code</MDBCardLink>
                </MDBCardBody>
            </MDBCard>
        )
    }
}