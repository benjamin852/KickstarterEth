import React, {Component} from 'react';
import {Table, Button} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';

class RequestRow extends Component {
    onApprove = async() => {
        const campaign = Campaign(this.props.address);
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.approveRequest(this.props.id).send({
            from: accounts[0]
        });
    };

    onFinalize = async() => {
        const campaign = Campaign(this.props.address);
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.finaizeRequest(this.props.id).send({
            from: accounts[0]
        });;
    };

    render() {
        const {Row, Cell} = Table; //grab row and cell from table object
        const {id, request, approversCount} = this.props; //these values will come from this.props.    
        const readyToFinalize = request.approvalCount > approversCount / 2;
        return (
            //true displabled will gray out our row 
            //true positive will highgight our row
            <Row disabled = {request.complete} positive = {readyToFinalize && !request.complete} > 
                {/* <Cell>{this.props.id}</Cell> */}
                <Cell>{id}</Cell>
                <Cell>{request.description}</Cell>
                <Cell>{web3.utils.fromWei(request.value, 'ether')}</Cell>
                <Cell>{request.recipient}</Cell>
                <Cell>{request.approvalCount}</Cell>
                <Cell>{request.approvalCount}/{approversCount}</Cell>
                <Cell>
                    {request.complete ? null : ( //if complete is true return null (hide the button)
                    <Button color="green" basic onClick = {this.onApprove}>
                        Approve
                    </Button>
                    )}   
                </Cell>
                <Cell>
                    {request.complete ? null : (
                    <Button color = "teal" basic onClick={this.onFinalize}>
                        Finalize
                    </Button>
                    )}
                </Cell>
            </Row>
        );
    }
}

export default RequestRow;