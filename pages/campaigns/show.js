import React, {Component} from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import ContributForm from '../../components/ContributeForm';
import { Link } from '../../routes';

class CampaignShow extends Component {
    //getInitialProps gets called before the component renders
    //used to access the campaign 

    static async getInitialProps(props) {
        console.log(props.query.address);//address of specific campaign 
        const campaign = Campaign(props.query.address);
        const summary = await campaign.methods.getSummary().call();
        console.log(summary);
        //pass down individual props from summary object
        return{
            address : props.query.address, 
            minimumContribution : summary[0],
            balance: summary[1],
            requestCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
        };
    }

    renderCards() {
        const {balance, manager, minimumContribution, requestCount, approversCount } = this.props;
        const items = [
            {
                header: manager,
                meta: 'Address of manager',
                description: 'Manager created this campaign',
                style : { overflowWrap: 'break-word' }
            },
            {
                header: minimumContribution,
                meta: 'Minimum Contribution (wei)',
                description: 'You must contribute at leas this much way to become an approver'
            },
            {
                header: requestCount,
                meta: 'Number of requests',
                description: 'Try to withdraw money from the contract. Requests must be approved by approvers'
            },
            {
                header: approversCount,
                meta: 'Number of approvers',
                description: 'Numberof people who have already donated to this campaign'
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance',
                description: 'Balance is howmuch money this campaign has left to spend'
            }
        ];
        return <Card.Group items={items}/>;
    }

    render () {
        return (
            <Layout>
              <h3> Campaign Show </h3>

              <Grid>
                
                {/* <Grid.row> */}
                 
                    <Grid.Column width={10}>
                        {this.renderCards()}
                    </Grid.Column> 

                    <Grid.Column width={6} >
                        <ContributForm address={this.props.address}/>
                    </Grid.Column> 

                {/* </Grid.row> */}

                {/* <Grid.row> */}
                    <Grid.Column>
                        <Link route = {`/campaigns/${this.props.address}/requests`}>
                        <a>
                            <Button primary>View Request</Button>
                        </a>
                        </Link>
                    </Grid.Column>
                {/* </Grid.row> */}
              </Grid>
            </Layout>
        )
    }
}
export default CampaignShow;