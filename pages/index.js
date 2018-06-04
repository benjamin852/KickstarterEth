// //list of all the active campaigns

import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory.js'; //use to get a list of this factory's campaigns
import Layout from '../components/Layout';
import {Link} from '../routes';



class CampaignIndex extends Component {
    //getInitialProps replaces componentDidMount()
    //send the data down to the render() as
    static async getInitialProps() { 
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return { campaigns : campaigns };
    }


    renderCampaigns() {
        const items = this.props.campaigns.map(address => { //what we return from callback is passed into items
            //return one object to represent one card
            return {
                header: address,
                description: (
                    <Link route = {`/campaigns/${address}`}>
                        <a>view campaigns</a>
                    </Link>               
                ),
                fluid: true //set full width of container
            };
        }); 
        return <Card.Group items={items} />;
    }


    render() {
        //we get access by returning campaigns in the getInitialProps. 
        return (
            //all the JSX gets passed to <Layout> as property called {props.children}
            <Layout>
                <div>
                    <h3>Open Campaigns</h3>
                    <Link route = "/campaigns/new">
                        <a>
                            <Button 
                                floated = "right"
                                content = "Create Campagin"
                                icon = "add circle" //plus symbol
                                primary = {true} //blue styling to button
                            />
                        </a>
                    </Link>
                    {this.renderCampaigns()}
                </div>
            </Layout>
        );
    }
}
export default CampaignIndex;








