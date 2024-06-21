const FeedbackShow = ({feedbackBank}) =>{
    return (
        <div className="position-feedback">
            {feedbackBank.map (({name, text, id}) => {
                return(
                <div class="card-feedback">
                    <div className="circle-feedback"></div>
                    <div className="circle-feedback"></div>
                    <div  className="card-feedback-inner">
                        <div key={id} className="card-feedback-text">
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