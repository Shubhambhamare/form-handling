import React from "react";

class Form extends React.Component {
    constructor(){
        super();
        this.state={
            name:"",
            contact: null,
            user:[]
        }
    }

    

    manageChange =  (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    manageSubmition = (e) => {
        e.preventDefault()
        const tempObj= {
            name:this.state.name,
            contact:this.state.contact
        }
        let tempArr=this.state.user;
        tempArr.push(tempObj);
        this.setState({user:tempArr})
    }

    render (){
        return(
            <>
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" onChange={(e)=>this.manageChange(e)} id="name" value={this.state.name} />

                    <label htmlFor="contact">Contact</label>
                    <input type="number" name="contact" onChange={(e)=>this.manageChange(e)} id="contact" value={this.state.contact} />

                    <button onClick={(event)=>this.manageSubmition(event)}>Sumit</button>
                </form>

                {this.state.user.map((value, index)=>{
                    return(
                        <div>
                        {value.name} | {value.contact}
                        </div>
                    )
                })}
            </>
        )
    }
}

export default Form