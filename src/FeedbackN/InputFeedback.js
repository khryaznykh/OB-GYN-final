const InputFeedback = ({addSubmitFeedback, setNewFeedback, newFeedback}) => {
    const editMyFeedback =(myInput, value)=> {
        setNewFeedback({
            ...newFeedback,
            [myInput]: value
        })
        
        console.log ( myInput + value)
    }

    return(
        <div>
                <form className="input-enter-container">
                    <h4 className="input-title">Name</h4>
                    <input 
                        type="text"    
                        placeholder="Enter your name..."
                        id = "name"
                        value = {newFeedback.name}
                        onChange={(e)=> editMyFeedback("name", e.target.value)}/>
                    <h4 className="input-title">Your feedback</h4>
                    <textarea 
                        placeholder="Enter your feedback/ suggestion/ question here..."
                        id = "text"
                        value={newFeedback.text}
                        onChange={(e)=> editMyFeedback("text", e.target.value)}
                        />
                    <h4 className="input-title">Your email</h4>
                    <input 
                        type="email" 
                        placeholder="Enter your email address..."
                        id = "email"
                        value={newFeedback.email}
                        onChange={(e)=> editMyFeedback("email", e.target.value)}/>
                </form>
                <button className="btn-contact feedback-submit" onClick={ addSubmitFeedback }>Submit</button>
            </div>
    )
}
export default InputFeedback;