import React from 'react';
import FormInput from 'react-file-input';
import {connect} from 'react-redux';
import Store from '../../store/store';
import pdf_Action from '../../actions/pdf-action';


const Form = React.createClass({
	getInitialState(){
		return{title: '', file: null}
	},
	change(what, e){
		if(what === 'file'){
			console.log(e.target.files[0]);
			this.setState({file: e.target.files[0]});
		}else{
			this.setState({[what]: e.target.value});
		}
	},
	sub(e){
		e.preventDefault();
		// Store.dispatch(pdf_Action.postPDF(this.state))
		var formData = new FormData();
		//can use the if statement to check type i.e !file.type.match('image.*')
		if (true) {	
			// Add the file to the request before sending it to dispatch.
			formData.append('title', this.state.title);
			formData.append('file', this.state.file, this.state.file.name);
		}
		Store.dispatch(pdf_Action.postPDF(formData))
	},
	render(){
		console.log(this.props)
		var display = this.props.pdf ?this.props.pdf.map((ele, index)=>
				<div key={index}>
				<a target="_blank" href={"/Forms/" + ele} title="i dont know"> {ele.split('.')[0]} </a> <br/>
				</div>
			) : null
	 return(
		<div>
			{display}
			{/*<a target="_blank" href="/Forms/pdfurl-guide.pdf" title=""> form</a>*/}
			{/*<embed src="/../../assets/Forms/pdfurl-guide.pdf" width="500" height="375"/>*/}
			{/*<input type="file" id="input"/>*/}
			{this.props.user.id == 1?<form onSubmit={this.sub}>
							<input type="text" placeholder="title" onChange={this.change.bind(this, "title")} value={this.state.title} />
							<FormInput name="myImage"
					           accept=".pdf"
					           placeholder="My PDF"
					           onChange={this.change.bind(this, "file")} />
							<input type="submit" />
						</form>: null}
		</div>)
	}
})



const stateToProps = (state)=>{
  return {
  	user : state.user,
  	pdf : state.pdf
  		}
}

export default connect(stateToProps)(Form)
