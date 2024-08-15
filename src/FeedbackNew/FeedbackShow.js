const FeedbackShow = ({feedbackBankNew}) =>{
    return (
        <div className="position-feedback">
            {feedbackBankNew.map (({name, text, id}) => {
                return(
                <div key={id} class="card-feedback">
                    <div className="circle-feedback"></div>
                    <div className="circle-feedback"></div>
                    <div  className="card-feedback-inner">
                        <div className="card-feedback-text">
                            <p>{text}</p>
                            <p>{name}</p>
                        </div>
                    </div>
                </div> 
            )}      
            )}
        </div>
    )
}
export default FeedbackShow;