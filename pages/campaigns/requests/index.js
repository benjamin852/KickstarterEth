//will show a list of requests to the user
import React, {Component} from 'react';
import {Button, Table} from 'semantic-ui-react';
import Layout from '../../../components/Layout';
import {Link} from '../../../routes';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/RequestRow';
import { request } from 'http';

class RequestIndex extends Component {

    static async getInitialProps(props) {
        const { address } = props.query;
        const campaign = Campaign(address);
        const requestCount = await campaign.methods.getRequestsCount().call(); 
        const approversCount = await campaign.methods.approversCount().call();

        const requests = await Promise.all(
            Array(requestCount).fill().map((elemnt, index) => { //retrives an individual request at a certain index     //element&index allow the array to count up to a given index
                return campaign.methods.requests(index).call()
                
                //  Array(parseInt(requestCount))
            })    
        );
        console.log(requests); 

        return { address, requests, requestCount, approversCount }; 
    
    } 
    
    //iterate each request
  //return row for each rewquest
    renderRow() {
        return this.props.requests.map((request, index) => { //"Arrow func called with each reuqest"
            return (
                <RequestRow
                    key = {index}
                    id = {index}
                    request = {request}//the request we wanna render
                    address = {this.props.address}
                    approversCount = {this.props.approversCount}
                />
            );
        });
    }

    render() {
        const {Header, Row, HeaderCell, Body} = Table; 
        return (            
            <Layout>
                <h3>Request Index</h3>
 
                <Link route = {`/campaigns/${this.props.address}/requests/new`}>
                    <a>
                        <Button primary float="right" style = {{margin: 10}}>Add Request</Button>
                    </a>
                 </Link>
                 <Table>
                     <Header>
                         <Row>
                             <HeaderCell>ID</HeaderCell>
                             <HeaderCell>Description</HeaderCell>
                             <HeaderCell>Amount</HeaderCell>
                             <HeaderCell>Recipient</HeaderCell>
                             <HeaderCell>Approval Count</HeaderCell>
                             <HeaderCell>Approve</HeaderCell>
                             <HeaderCell>Finalize</HeaderCell>
                         </Row>
                     </Header>
                     <Body>
                         {this.renderRow()}
                     </Body>
                </Table>
                <div>Found {this.props.requestCount} requests </div>
            </Layout>
        );                                              
    }
}

export default RequestIndex;