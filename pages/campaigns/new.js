import React, {Component} from 'react';
import {Form, Button, Input, Message} from 'semantic-ui-react';
import Layout from '../../components/Layout';  //used to wrap content in layout tag
import Factory from '../../ethereum/factory';
import Web3 from '../../ethereum/web3';
import {Router} from '../../routes';
//link = allows us to render anchor tags and navigate around app
//route = allows us to automatically redirect people around app


class CampaignNew extends  Component {

    state = {
        minimumContribution : '',
        errorMessage : '',
        loading: false 
    };

    //solidity contract function are always async!

    onSubmit = async event => {
        event.preventDefault(); //will prevent browse from submittng form   
        this.setState({loading : true, errorMessage: ''});
        try {
            const accounts = await Web3.eth.getAccounts();
            await Factory.methods.createCampaign(this.state.minimumContribution).send({
                from: accounts[0]
            });
            Router.pushRoute('/');
        } catch (err) {
            this.setState({errorMessage: err.message});
        }
        this.setState({loading: false});
    };

    render() {
        return (
            <Layout>
               <h3>Create A Campaign</h3>
               {/* pass reference of onSubmit func to onSubmit var to execute at later */}
               <Form onSubmit = {this.onSubmit} error={!!this.state.errorMessage}>
                   <Form.Field>
                       <label>Minimum Contribution</label>
                       <Input 
                            label = "wei" 
                            labelPosition = "right"
                            value = {this.state.minimumContribution} //take value from state and push it into component
                            onChange = {event => this.setState({
                                minimumContribution: event.target.value
                            })} //event for updating state whenver user types 
                        />
                    </Form.Field>
                    <Message error header = "error caught" content = {this.state.errorMessage} />
                    <Button loading = {this.state.loading} primary >Create</Button>
                </Form>
            </Layout>
        );
    }
}

export default CampaignNew;