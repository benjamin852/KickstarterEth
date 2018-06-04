pragma solidity ^0.4.21;


contract CampaignFactory {
    address[] public deployedCampaigns;
    
    //create new instance of campaign which gets deployed to blockchain
    function createCampaign(uint _minimumContibution) public {
        address newCampaign = new Campaign(_minimumContibution, msg.sender);                
        deployedCampaigns.push(newCampaign);    
    }
    
    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}

contract Campaign {
   
   struct Request {
       string description;
       uint value;
       address recipient;
       bool complete; //becomes true when request is finalized
       uint approvalCount; 
       mapping(address => bool) approvals; //people who have approved a request
   }
   
   Request[] public requests;
   
    address public manager;
    uint public minimumContribution;

    mapping (address => bool) public approvers;
    uint public approversCount;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    function Campaign(uint _minimum, address _contractCreator) public {
        manager = _contractCreator;
        minimumContribution = _minimum;
    }
    
    function contribute() public payable {
        require (msg.value > minimumContribution);
        approvers[msg.sender] = true; //add new key give it a value of true. Address is not stored in the mapping only the value of true is
        
        approversCount++;
    }
    
    function createRequest(string _descrition, uint _value, address _recipient) public restricted {
        Request memory newRequest = Request({
            description: _descrition,
            value: _value,
            recipient: _recipient,
            complete: false,
            approvalCount: 0
        });
        requests.push(newRequest);
    } 
    
    function approveRequest(uint _requestIndex) public {
    
        Request storage request = requests[_requestIndex];
    
        require(approvers[msg.sender]); //msg.sender should return true. Meaning this person has already donated 
        require(!request.approvals[msg.sender]); //person has not voted already. False to make double negative. 
        
        request.approvals[msg.sender] = true; //mark the sender as having voted true
        request.approvalCount++;
    }
    
    
    function finalizeRequest(uint _requestIndex) public restricted {
        
        Request storage request = requests[_requestIndex];
        require(request.approvalCount > (approversCount / 2));//bigger than half
        require(!request.complete); //make sure request hasn't been complete yet
        request.recipient.transfer(request.value);
        request.complete = true;
    }
    
    //summary of stats about each campaign
    function getSummary() public view returns  (uint, uint, uint, uint, address) {
        return (
            minimumContribution,
            this.balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }   
}